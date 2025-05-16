import type { BaseInputProps } from '$types/inputs';
import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export const cn = (...inputs: ClassValue[]) => {
	return twMerge(clsx(inputs));
};

export const slug = (string: string, replace: string = '') => {
	return string
		.replace(/[^a-zA-Z_-]/g, replace)
		.toLowerCase()
		.trim();
};

/**
 * Adds appropriate pre/suffixes to the variable outputs.
 * @param input The object to filter through.
 */
export const parseValue = (
	props: BaseInputProps
): {
	variable: string;
	value: string;
	comment: string;
} => {
	let output = (props.value || props.start || 0) + (props?.unit || '');
	if (typeof output === 'string' && (output.includes('http') || output.includes('base64'))) {
		output = `url('${output}')`;
	}
	return {
		variable: props.variable,
		value: output,
		comment: props.comment
	};
};
