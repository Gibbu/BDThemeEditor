/**
 * Transforms a character to be capitialized.
 * @param string The string to transform.
 * @param pos The position of the character to be capitialized.
 * If array is given, it will return the start and end positions captialized.
 * Default = 0.
 * @returns The transformed string.
 */
export const capitalize = (string: string, pos: number | [number, number] = 0): string => {
	return string
		.split('')
		.map((el, i) => {
			if ((typeof pos === 'number' && i === pos) || (typeof pos === 'object' && i >= pos[0] && i <= pos[1]))
				return el.toUpperCase();
			return el;
		})
		.join('');
};

/**
 * Wrapper for creating HTML elements and appending them.
 * @param tag The HTML tag to be rendered.
 * @param attributes The attributes to be applied.
 * @param target The element for `tag` to be added to.
 * @returns A HTML tag with the give `attributes`.
 */
export const createEl = <T>(tag: string, attributes: Partial<T>, target: string | HTMLElement): void => {
	const el = Object.assign(document.createElement(tag), attributes);
	const targetEl: HTMLElement = (typeof target === 'string' ? document.querySelector(target) : target)!;
	targetEl.appendChild(el);
};

/**
 * Returns only truthy classes given.
 * @param classes Classes to be applied to the element.
 * @returns A string of classes.
 */
export const classes = (...classes: any[]): string => {
	return classes
		.filter((el) => el)
		.join(' ')
		.trim();
};

/**
 * Adds appropriate pre/suffixes to the variable outputs.
 * @param input The object to filter through.
 */
export const varOutput = (
	input: Record<string, any>
): {
	variable: string;
	value: string;
	comment: string;
} => {
	let output = (input.value || input.start || 0) + (input?.unit || '');
	if (typeof output === 'string' && (output.includes('http') || output.includes('base64'))) {
		output = `url('${output}')`;
	}
	return {
		variable: input.variable,
		value: output,
		comment: input.comment
	};
};

/**
 * Filters through a string with the given `first` and `second` characters.
 * @param string The string to be filtered.
 * @param first The first character to be selected.
 * @param second The second characeter to be selected.
 */
export const between = (string: string, first: string, second: string): string => {
	return string.substring(string.lastIndexOf(first) + 1, string.lastIndexOf(second));
};

/**
 * Gets the url from a string and removes ''.
 * @returns A URL form a string.
 */
export const getUrl = (url: string): string => {
	return between(url, '(', ')').replace(/'/g, '');
};
