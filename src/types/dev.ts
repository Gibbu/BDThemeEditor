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
	/** The colour of your banner if `banner` is not defined. */
	colour?: string;
}
