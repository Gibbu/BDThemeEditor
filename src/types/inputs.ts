export interface IColour {
	type: 'colour',
	varGroup?: string,
	details: {
		variable: string,
		title: string,
		value: string,
		type: 'HEX'|'RGB'|'HSL',
		alpha?: boolean,
		rule?: boolean,
		addon?: boolean,
		hint?: string,
		comment?: string
	}
}

export interface IFont {
	type: 'font',
	varGroup?: string,
	details: {
		variable: string,
		title: string,
		index: number,
		value?: string,
		addon?: boolean,
		hint?: string,
		comment?: string
	}
}

export interface IImage {
	type: 'image',
	varGroup?: string,
	details: {
		variable: string,
		title: string,
		start: string,
		value?: string,
		addon?: boolean,
		hint?: string,
		comment?: string
	}
}

export interface INumber {
	type: 'number',
	varGroup?: string,
	details: {
		variable: string,
		value: number,
		title: string,
		unit?: string,
		addon?: boolean,
		hint?: string,
		min?: number,
		max?: number,
		step?: number,
		comment?: string
	}
}

export interface ISelect {
	type: 'select',
	varGroup?: string,
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
		customValue?: boolean,
		comment?: string
	}
}

export interface ISlider {
	type: 'slider',
	varGroup?: string,
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
		comment?: string
	}
}

export interface IText {
	type: 'text',
	varGroup?: string,
	details: {
		variable: string,
		title: string,
		value: string,
		addon?: boolean,
		hint?: string,
		comment?: string
	}
}

export type Inputs = (IColour|IFont|IImage|INumber|ISelect|ISlider|IText);