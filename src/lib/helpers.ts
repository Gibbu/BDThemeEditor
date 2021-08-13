/**
 * Transforms a character to be capitialized.
 * @param string The string to transform.
 * @param pos The position of the character to be capitialized.  
 * If array is given, it will return the start and end positions captialized.  
 * Default = 0.
 * @returns The transformed string.
 */
 export const capitalize = (string: string, pos: number | [number, number] = 0): string => {
	return string.split('').map((el, i) => {
		if (typeof pos === 'number' && i === pos || typeof pos === 'object' && i >= pos[0] && i <= pos[1]) return el.toUpperCase();
		return el;
	}).join('');
}

/**
 * Returns only truthy classes given.
 * @param classes Classes to be applied to the element.
 * @returns A string of classes.
 */
 export const classes = (...classes: any[]): string => {
	return classes.filter(el => el).join(' ').trim();
}

/**
 * Adds appropriate pre/suffixes to the variable outputs.
 * @param input The object to filter through.
 */
export const varOutput = (input: Record<string, any>) => {
	let output = ((input.value || input.start) || 0)+(input?.unit || '');
	if (typeof output === 'string' && (output.includes('http') || output.includes('base64'))) {
		output = `url('${output}')`;
	}
	return {
		variable: input.variable,
		output
	}
}