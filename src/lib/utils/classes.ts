/**
 * Returns only truthy classes given.
 * @param classes Classes to be applied to the element.
 */
export default (...classes: string[]): string => {
	return classes.filter(Boolean).join(' ').trim();
};
