interface BaseInput<T, V, P = any> {
	type: T;
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
	props: {
		/**
		 * The variable name.
		 *
		 * `--` is not required.
		 */
		variable: string;
		/** The title of the input, describing to the user what it does/effect. */
		title: string;
		/** The value of the variable. */
		value: V;
		/** Include additional information about the input. */
		hint?: string;
		/** The comment to be placed to the right of the inside the downloaded file. */
		comment?: string;
	} & P;
}

export interface Divider {
	type: 'divider';
	props: {
		/** The title to be placed under the divider. */
		title?: string;
		/** A small descriptor of the section under the divider. */
		description?: string;
	};
}

export interface Banner {
	/** Adds a banner displaying type of information. */
	type: 'banner';
	props: {
		/** ID for the banner. Used to keep it closed if user has dismissed it. */
		id: string;
		/** The message to be displayed. */
		message: string;
		/** Level of banner to be displayed. */
		type: 'info' | 'warning' | 'error';
		closable?: boolean;
	};
}

export interface ColourInput
	extends BaseInput<
		'colour',
		string,
		{
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
		}
	> {}

export interface FontInput
	extends BaseInput<
		'font',
		string,
		{
			/**
			 * The index of the font.\
			 * ## **Make sure this is a unique index, preferably starting at 0**
			 */
			index: number;
			start?: string;
		}
	> {}

export interface ImageInput
	extends BaseInput<
		'image',
		string,
		{
			/**
			 * The starting value of the variable.\
			 * This will not display the value initially in the URL input.
			 */
			start: string;
		}
	> {}

export interface NumberInput
	extends BaseInput<
		'number',
		number,
		{
			/** The unit to be appended to the value. */
			unit?: string;
			/** The minimum value of the input. */
			min?: number;
			/** The maximum value of the input. */
			max?: number;
			/** The steps between the minimum and maximum parameters. */
			step?: number;
		}
	> {}

export interface SelectInput
	extends BaseInput<
		'select',
		string,
		{
			/** The list of options the users can select between. */
			options: {
				/** The label the end user will see. */
				label: string;
				/** The value of the variable that will be added to the downloaded file. */
				value: string;
			}[];
			custom?: boolean;
		}
	> {}

export interface SliderInput
	extends BaseInput<
		'slider',
		number,
		{
			/** The maximum value of the input. */
			max: number;
			/** The minimum value of the input. */
			min?: number;
			/** The unit to be appended to the value. */
			unit?: string;
			/** The steps between the minimum and maximum parameters. */
			step?: number;
		}
	> {}

export type Inputs = ColourInput | FontInput | ImageInput | NumberInput | SelectInput | SliderInput | Banner | Divider;
