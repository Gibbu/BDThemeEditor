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
	return between(url, '(', ')').replace(/'|"/g, '');
};

/**
 * Removes any unit suffix.
 * @param value The string to strip any unit suffix.
 */
export const stripVal = (value: string): string => {
	return value.replace(/px|%|deg/g, '').trim();
};

/**
 * Transforms BD Meta string into object.
 * @param meta The meta to be parsed.
 */
export const parseMeta = (meta: string) => {
	let _meta: Record<string, string> = {};

	meta
		.split('/**')[1]
		.split('*/')[0]
		.split('\n')
		.filter(Boolean)
		.map((el) => el.replace(' * @', '').split(/ (.*)/, 2))
		.forEach(([key, value]) => {
			_meta[key] = value;
		});

	return _meta;
};

/**
 * Darkens the lightness of a HSL string
 * @param hsl The HSL string to be transformed.
 */
export const darkenHslLightness = (hsl: string) => {
	const [h, s, l] = hsl.split(' ').map((el) => parseInt(el));

	return `${h} ${s - 10}% ${l - 10}%`;
};
