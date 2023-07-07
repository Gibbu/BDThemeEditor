export interface IMessage {
	/** Adds a banner displaying type of information. */
	type: 'banner';
	details: {
		/** ID for the banner. Used to keep it closed if user has dismissed it. */
		id: string;
		/** The message to be displayed. */
		message: string;
		/** Level of banner to be displayed. */
		type: 'info' | 'warning' | 'error';
		closable?: boolean;
	};
}

export interface IColour {
	type: 'colour';
	/**
	 * The "group" for the variable/value to be placed into.\
	 * By default this will be `:root`.
	 *
	 * Example:
	 * ```json
	 * {
	 * 	"varGroup": ".theme-light"
	 * }
	 * ```
	 */
	varGroup?: string;
	details: {
		/**
		 * The variable name.
		 *
		 * `--` is not required.
		 */
		variable: string;
		/** The title of the input, describing to the user what it does/effect. */
		title: string;
		/** The starting value of the variable. */
		value: string;
		/** The end result of the value. */
		type: 'HEX' | 'RGB' | 'HSL';
		/**
		 * Include the alpha value.
		 *
		 * Does not work with `HEX` type.
		 */
		alpha?: boolean;
		/**
		 * Include the CSS rule.
		 *
		 * `RGB` will wrap the `value` inside of rgb()\
		 * `HSL` will wrap the `value` inside of hsl()
		 */
		rule?: boolean;
		/** Ignore this, this is used internally. */
		addon?: boolean;
		/** Include additional information about the input. */
		hint?: string;
		/** The comment to be placed to the right of the inside the downloaded file. */
		comment?: string;
	};
}

export interface IFont {
	type: 'font';
	/**
	 * The "group" for the variable/value to be placed into.\
	 * By default this will be `:root`.
	 *
	 * Example:
	 * ```json
	 * {
	 * 	"varGroup": ".theme-light"
	 * }
	 * ```
	 */
	varGroup?: string;
	details: {
		/**
		 * The variable name.
		 *
		 * `--` is not required.
		 */
		variable: string;
		/** The title of the input, describing to the user what it does/effect. */
		title: string;
		/**
		 * The index of the font.\
		 * **Make sure this is a unique index, preferably starting at 0**
		 */
		index: number;
		/** What value the input should start with. */
		start?: string;
		/** The result of the font input. */
		value?: string;
		/** Ignore this, this is used internally. */
		addon?: boolean;
		/** Include additional information about the input. */
		hint?: string;
		/** The comment to be placed to the right of the inside the downloaded file. */
		comment?: string;
	};
}

export interface IImage {
	type: 'image';
	/**
	 * The "group" for the variable/value to be placed into.\
	 * By default this will be `:root`.
	 *
	 * Example:
	 * ```json
	 * {
	 * 	"varGroup": ".theme-light"
	 * }
	 * ```
	 */
	varGroup?: string;
	details: {
		/**
		 * The variable name.
		 *
		 * `--` is not required.
		 */
		variable: string;
		/** The title of the input, describing to the user what it does/effect. */
		title: string;
		/**
		 * The starting value of the variable.\
		 * This will not display the value initially in the URL input.
		 */
		start: string;
		/**
		 * The resulting value.\
		 * This **WILL** display the value display the value initially in the URL input.
		 */
		value?: string;
		/** Ignore this, this is used internally. */
		addon?: boolean;
		/** Include additional information about the input. */
		hint?: string;
		/** The comment to be placed to the right of the inside the downloaded file. */
		comment?: string;
	};
}

export interface INumber {
	type: 'number';
	/**
	 * The "group" for the variable/value to be placed into.\
	 * By default this will be `:root`.
	 *
	 * Example:
	 * ```json
	 * {
	 * 	"varGroup": ".theme-light"
	 * }
	 * ```
	 */
	varGroup?: string;
	details: {
		/**
		 * The variable name.
		 *
		 * `--` is not required.
		 */
		variable: string;
		/** The value of the input. */
		value: number;
		/** The title of the input, describing to the user what it does/effect. */
		title: string;
		/** The unit to be appended to the value. */
		unit?: string;
		/** Ignore this, this is used internally. */
		addon?: boolean;
		/** Include additional information about the input. */
		hint?: string;
		/** The minimum value of the input. */
		min?: number;
		/** The maximum value of the input. */
		max?: number;
		/** The steps between the minimum and maximum parameters. */
		step?: number;
		/** The comment to be placed to the right of the inside the downloaded file. */
		comment?: string;
	};
}

export interface ISelect {
	type: 'select';
	/**
	 * The "group" for the variable/value to be placed into.\
	 * By default this will be `:root`.
	 *
	 * Example:
	 * ```json
	 * {
	 * 	"varGroup": ".theme-light"
	 * }
	 * ```
	 */
	varGroup?: string;
	details: {
		/**
		 * The variable name.
		 *
		 * `--` is not required.
		 */
		variable: string;
		/** The title of the input, describing to the user what it does/effect. */
		title: string;
		/**
		 * The starting and resulting value of the select.
		 *
		 * The starting value must be a value inside of your `options` object array.
		 */
		value: string;
		/** The list of options the users can select between. */
		options: {
			/** The label the end user will see. */
			label: string;
			/** The value of the variable that will be added to the downloaded file. */
			value: string;
		}[];
		/** Ignore this, this is used internally. */
		addon?: boolean;
		/** Include additional information about the input. */
		hint?: string;
		/** Allow the user to input a custom value that is not defined in the give `options` object array. */
		customValue?: boolean;
		/** The comment to be placed to the right of the inside the downloaded file. */
		comment?: string;
	};
}

export interface ISlider {
	type: 'slider';
	/**
	 * The "group" for the variable/value to be placed into.\
	 * By default this will be `:root`.
	 *
	 * Example:
	 * ```json
	 * {
	 * 	"varGroup": ".theme-light"
	 * }
	 * ```
	 */
	varGroup?: string;
	details: {
		/** The starting and resulting value of the select. */
		value: number | string;

		/** The maximum value of the input. */
		max: number;
		/**
		 * The variable name.
		 *
		 * `--` is not required.
		 */
		variable: string;
		/** The title of the input, describing to the user what it does/effect. */
		title: string;

		step?: number;
		/** Ignore this, this is used internally. */
		addon?: boolean;
		/** Include additional information about the input. */
		hint?: string;
		/** The minimum value of the input. */
		min?: number;
		/** The unit to be appended to the value. */
		unit?: string;
		/** The comment to be placed to the right of the inside the downloaded file. */
		comment?: string;
	};
}

export type Inputs = IMessage | IColour | IFont | IImage | INumber | ISelect | ISlider;
