/**
 * Transforms the string into a slug.\
 * Defaulting to removing all spaces.
 * @param str The string to transform.
 * @param replace The character to replace the space with.
 */
export default (str: string, replace: string = ''): string => {
	return str.toLowerCase().replace(/ /g, replace);
};
