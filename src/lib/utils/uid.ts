let id: number = 1;
const ID = (): number => id++;

export type UID = (suffix?: string) => string;

/**
 * Generate a unique ID for accessibility.
 * @param prefix The main scope of the ID.
 */
export default (
	prefix: string
): {
	/**
	 * The current index of the uid.\
	 * This is a pretty much a "helper" so no need to split the string and parseInt.
	 */
	id_index: number;
	/**
	 * Append a suffix to the UID.
	 * @example
	 * ```js
	 * const { uid } = createUID('menu'); // menu-1
	 * const buttonID = uid('button'); // menu-1-button
	 * const dropdownID = uid('dropdown'); // menu-1-dropdown
	 * ```
	 */
	id: UID;
} => {
	const UID = ID();

	return {
		id_index: id,
		id: (suffix?: string) => {
			const uid = `${prefix}-${UID}`;
			return suffix ? `${uid}-${suffix}` : uid;
		}
	};
};
