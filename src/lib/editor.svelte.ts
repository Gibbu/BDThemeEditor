import { tick } from 'svelte';
import { page } from '$app/state';
import { themes } from '$data/themes';
import { preview } from './preview';
import { parseValue, slug } from './utils.svelte';

import type { BaseInputProps } from '$types/inputs';
import type { EditorData } from '$types/theme';

class State {
	THEME = $state<EditorData | null>(null);
	tab = $state<string | null>(null);
	previewElement = $state<HTMLIFrameElement | null>(null);
	uploaded = $state<boolean>(false);

	Loaded = $derived(!!this.THEME && !!this.previewElement);

	init(themeName: string | undefined) {
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

	// Hacky way to tell comonents to update their UI when importing a theme.
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
			variable
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

	generateCSS = (includeMeta: boolean) => {
		if (!STATE.THEME) return '';

		let CSS: string = '';

		if (includeMeta) {
			// Meta
			let meta = `/**\n${Object.entries(STATE.THEME.meta)
				.map(([key, value]) => ` * @${key} ${value}\n`)
				.join('')}`;
			meta += ` * @BDEditor ${STATE.THEME.name}\n`;
			meta += '*/\n\n';

			CSS = meta;
		}

		// Fonts
		CSS += STATE.THEME.fonts
			? STATE.THEME.fonts.map((url) => `@import url('${url}');\n`).join('')
			: '';

		// Imports
		CSS += STATE.THEME.imports.map((url) => `@import url('${url}');\n`).join('');
		let addonImports = STATE.THEME.addons.filter((obj) => obj.use);
		addonImports.forEach((obj) =>
			obj.imports.forEach((url) => (CSS += `@import url('${url}');\n`))
		);

		// Optional imports
		if (STATE.THEME.optionalImports.length > 0) {
			CSS += STATE.THEME.optionalImports
				.map(({ enabled, imports }) => {
					if (enabled) {
						return imports.map((el) => `@import url('${el}');\n`);
					}
				})
				.join('');
		}

		// Variables
		let groups: { [k: string]: any[] } = {};
		STATE.THEME.varGroups?.forEach((group) => {
			groups[group] = [];
		});

		Object.keys(groups).forEach((group) => {
			if (!STATE.THEME) return;
			STATE.THEME.variables.forEach((vars) => {
				vars.inputs.forEach((input) => {
					if (
						input.type !== 'banner' &&
						input.type !== 'divider' &&
						(input.varGroup === group || (group === ':root' && !input.varGroup))
					)
						groups[group] = [...groups[group], input.props];
				});
			});
		});

		// Add addon and hidden variables to the :root
		if (STATE.THEME.hiddenVars) {
			STATE.THEME.hiddenVars.forEach((hiddenVar) => {
				const group = hiddenVar.varGroup || ':root';
				groups[group] = [...groups[group], hiddenVar];
			});
		}
		STATE.THEME.addons.forEach((addon) => {
			if (addon.variables) {
				addon.variables.forEach((input) => {
					if (addon.use) groups[':root'] = [...groups[':root'], input.props];
				});
			}
		});

		Object.entries(groups).forEach(([group, vars]) => {
			CSS += `\n${group} {\n`;
			CSS += vars
				.map((input) => parseValue(input))
				.map(
					({ variable, value, comment }) =>
						`  --${variable}: ${value};${comment ? ` /* ${comment} */` : ''}\n`
				)
				.join('');
			CSS += '}\n';
		});

		CSS += '\n/* Any custom CSS below here */\n\n\n';

		return CSS;
	};
}

export const STATE = new State();
