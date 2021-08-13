import FileSaver from 'file-saver';
import {varOutput} from './helpers';

import type {IStoreTheme} from '$types/theme';

export default (themeObject: IStoreTheme): void => {
	let theme: string;

	// Meta
	theme = `/**\n${Object.entries(themeObject.meta).map(([key, value]) => ` * @${key} ${value}\n`).join('')}*/\n\n`;

	// Fonts
	theme += themeObject.fonts ? themeObject.fonts.map(url => `@import url('${url}');\n`).join('') : '';

	// Imports
	theme += themeObject.imports.map(url => `@import url('${url}');\n`).join('');
	let addonImports = themeObject.addons.filter(obj => obj.use);
	addonImports.forEach(obj => obj.imports.forEach(url => theme += `@import url('${url}');\n`));

	// Variables
	theme += '\n:root {\n';
	theme += vars(themeObject.variables, 'theme');
	if (themeObject.hiddenVars) theme += vars(themeObject.hiddenVars, 'hidden');
	theme += vars(themeObject.addons, 'addon');
	theme += '}';

	let file = new Blob([theme], {type: 'text/plain;charset=uft-8'});
	FileSaver.saveAs(file, `${themeObject.meta.name}.theme.css`);
}

// Helpers
export const vars = (vars: Record<string, any>[], type: 'addon' | 'theme' | 'hidden') => {
	let object: Record<string, any>[] = [];
	if (type === 'addon') vars = vars.filter(obj => obj.use == true);

	if (type === 'theme' || type === 'addon') {
		vars.forEach(group => {
			const inputs = type === 'theme' ? group.inputs : group.variables;
			inputs.forEach(input => {
				object = [...object, varOutput(input.details)]
			})
		})
	} else {
		vars.forEach(input => {
			object = [...object, varOutput(input)];
		})
	}

	return object.map(({variable, output}) => `  --${variable}: ${output};\n`).join('');
}