export interface IDev {
	/** Your name to be displayed throughout the editor */
	name: string;
	/**
	 * Your github name.\
	 * This will also be used for your avatar displayed on the editor.
	 */
	github: string;
	/** The full URL to your donation link. */
	donate?: string;
	/** The full URL to your discord server. */
	server?: string;
	/** The full URL for your banner. */
	banner?: string;
	/**
	 * The HSL colour of your banner.
	 *
	 * This will be used in two placed:
	 * - If `banner` is defined it will show this colour instead
	 * - The "accent" of your theme page will be changed
	 *
	 * **NOTE**: IT MUST follow example format.
	 *
	 * @example
	 * 176 59% 63%
	 */
	colour?: string;
}
