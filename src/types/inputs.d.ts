export interface IColour extends Defaults {
	type: 'colour',
	details: {
		variable: string,
		title: string,
		value: string,
		type: 'HEX'|'RGB',
		alpha?: boolean,
		rule?: boolean,
		addon?: boolean,
		hint?: string
	}
}

export interface IFont extends Defaults {
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

export interface IImage extends Defaults {
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

export interface INumber extends Defaults {
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

export interface ISelect extends Defaults {
	type: 'select',
	details: {
		value: string,
		variable: string,
		title: string,
		options: {
			title: string,
			value: string
		}[],
		addon?: boolean,
		hint?: string,
		customValue?: boolean
	}
}

export interface ISlider extends Defaults {
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

export interface IText extends Defaults {
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