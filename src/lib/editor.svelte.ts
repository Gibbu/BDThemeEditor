import { preview } from './preview';
import { themes } from '$data/themes';
import { parseValue, slug } from './utils';
import { page } from '$app/state';

import type { EditorData } from '$types/theme';
import type { BaseInputProps } from '$types/inputs';
import { tick } from 'svelte';

class State {
	THEME = $state<EditorData | null>(null);
	tab = $state<string | null>(null);
	previewElement = $state<HTMLIFrameElement | null>(null);
	uploaded = $state<boolean>(false);

	Loaded = $derived(!!this.THEME && !!this.previewElement);

	init(themeName: string) {
		const theme = structuredClone(themes).find((theme) => slug(theme.name) === themeName);
		if (!theme) throw new Error('Could not initalize theme.');

		const varGroups = theme.varGroups && theme.varGroups.length > 0 ? theme.varGroups : [];

		this.THEME = {
			name: theme.name,
			meta: theme.meta,
			developer: theme.developer,
			preview: theme.preview,
			imports: theme.imports,
			variables: theme.variables,
			optionalImports: theme.optionalImports || [],
			fonts: theme.fonts || [],
			hiddenVars: theme.hiddenVars || [],
			addons: theme.addons || [],
			varGroups: [':root', ...varGroups]
		};

		const activeTab = page.url.searchParams.get('tab');
		if (activeTab) this.tab = activeTab;
		else this.tab = slug(this.THEME.variables[0].title);
	}

	// Hacky way to tell comonents to update their UI
	// when importing a theme.
	async fireUploadedEvent() {
		this.uploaded = true;
		await tick();
		this.uploaded = false;
	}

	updateVariable<T extends BaseInputProps>(payload: T, addon = false) {
		if (!this.THEME) throw new Error('Theme data did not initalize.');

		const { variable, value } = payload;

		preview({
			action: 'setProp',
			value: parseValue(payload).value,
			variable: variable
		});

		if (addon) {
			this.THEME.addons.forEach((addon) => {
				if (addon.variables && addon.use) {
					addon.variables.forEach((input) => {
						if ('variable' in input.props && input.props.variable === variable) {
							input.props.value = value;
						}
					});
				}
			});
		} else {
			this.THEME.variables.forEach((group) => {
				group.inputs.forEach((input) => {
					if ('variable' in input.props && input.props.variable === variable) {
						input.props.value = value;
					}
				});
			});
		}
	}

	reset() {
		this.THEME = null;
		this.tab = null;
		this.previewElement = null;
	}

	setTab(id: string) {
		this.tab = slug(id);

		page.url.searchParams.set('tab', this.tab);
		window.history.replaceState(null, '', page.url.href);
	}
	isActiveTab(id: string) {
		return this.tab === slug(id);
	}
}

export const STATE = new State();
