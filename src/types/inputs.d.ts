export interface IColour {
	type: 'colour',
	details: {
		variable: string,
		title: string,
		value: string,
		type: 'HEX'|'RGB'|'HSL',
		alpha?: boolean,
		rule?: boolean,
		addon?: boolean,
		hint?: string
	}
}

export interface IFont {
	type: 'font',
	details: {
		variable: string,
		title: string,
		index: number,
		value?: string,
		addon?: boolean,
		hint?: string
	}
}

export interface IImage {
	type: 'image',
	details: {
		variable: string,
		title: string,
		start: string,
		value?: string,
		addon?: boolean,
		hint?: string
	}
}

export interface INumber {
	type: 'number',
	details: {
		variable: string,
		value: number,
		title: string,
		unit?: string,
		addon?: boolean,
		hint?: string,
		min?: number,
		max?: number
	}
}

export interface ISelect {
	type: 'select',
	details: {
		value: string,
		variable: string,
		title: string,
		options: {
			label: string,
			value: string
		}[],
		addon?: boolean,
		hint?: string,
		customValue?: boolean
	}
}

export interface ISlider {
	type: 'slider',
	details: {
		value: number,
		max: number,
		variable: string,
		title: string,
		step?: number,
		addon?: boolean,
		hint?: string
		min?: number,
		unit?: string,
	}
}

export interface IText {
	type: 'text',
	details: {
		variable: string,
		title: string,
		value: string,
		addon?: boolean,
		hint?: string
	}
}

export type Inputs = (IColour|IFont|IImage|INumber|ISelect|ISlider|IText);