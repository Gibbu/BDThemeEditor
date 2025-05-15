import { themes } from '$data/themes';
import { slug } from './utils';
import { page } from '$app/state';

import type { EditorData } from '$types/theme';

class EditorState {
	THEME = $state<EditorData | null>(null);
	tab = $state<string | null>(null);
	preview = $state<HTMLIFrameElement | null>(null);

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

	updateVariable(variableName: string, value: string | number) {
		if (!this.THEME) throw new Error('Theme data did not initalize.');

		this.THEME.variables.forEach((variable) => {
			variable.inputs.forEach((input) => {
				if ('variable' in input.props && input.props.variable === variableName) {
					input.props.value = value;
				}
			});
		});
	}

	reset() {
		this.THEME = null;
		this.tab = null;
		this.preview = null;
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

export const EDITOR_STATE = new EditorState();
