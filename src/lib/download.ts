import FileSaver from 'file-saver';
import {varOutput} from './helpers';

import type {IStoreTheme} from '$types/theme';

export default (themeObject: IStoreTheme): void => {
	let save: string;

	// Meta
	save = `/**\n${Object.entries(themeObject.meta).map(([key, value]) => ` * @${key} ${value}\n`).join('')}*/\n\n`;

	// Fonts
	save += themeObject.fonts ? themeObject.fonts.map(url => `@import url('${url}');\n`).join('') : '';

	// Imports
	save += themeObject.imports.map(url => `@import url('${url}');\n`).join('');
	let addonImports = themeObject.addons.filter(obj => obj.use);
	addonImports.forEach(obj => obj.imports.forEach(url => save += `@import url('${url}');\n`));

	// Variables
	let groups: {[k: string]: any[]} = {}
	themeObject.varGroups.forEach(group => {
		groups[group] = []
	});

	Object.keys(groups).forEach(group => {
		themeObject.variables.forEach(vars => {
			vars.inputs.forEach(input => {
				if (input.varGroup === group || (group === ':root' && !input.varGroup)) groups[group] = [...groups[group], input.details];
			})
		});
	});

	// Add addon and hidden variables to the :root
	themeObject.hiddenVars.forEach(hiddenVar => {
		const group = hiddenVar.varGroup || ':root';
		groups[group] = [...groups[group], hiddenVar];
	})
	themeObject.addons.forEach(addon => {
		if (addon.variables) {
			addon.variables.forEach(input => {
				if (addon.use) groups[':root'] = [...groups[':root'], input.details];
			})
		}
	})

	Object.entries(groups).forEach(([group, vars]) => {
		save += `\n${group} {\n`;
		save += vars.map(input => varOutput(input)).map(({variable, value}) => `  --${variable}: ${value};\n`).join('');
		save += '}\n';
	});

	save += '\n/* Any custom CSS below here */\n\n\n';

	const file = new Blob([save], {type: 'text/plain;charset=utf-8'});
	FileSaver.saveAs(file, `${themeObject.meta.name}.theme.css`);
}

// Helpers
export const generateVars = (vars: Record<string, any>[]) => {
	let object: Record<string, any>[] = [];

	vars.forEach(input => {
		object = [...object, varOutput(input)];
	})

	return object.map(({variable, value}) => `  --${variable}: ${value};\n`).join('');
}