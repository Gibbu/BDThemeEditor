import type { BaseInputProps } from '$types/inputs';
import { type ClassValue, clsx } from 'clsx';
import { tick } from 'svelte';
import type { Attachment } from 'svelte/attachments';
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

export const portal = (selector: HTMLElement | string = 'body'): Attachment<HTMLElement> => {
	return (element) => {
		let target: HTMLElement | null = null;

		const mount = async () => {
			if (typeof selector === 'string') {
				target = document.querySelector(selector);
				if (!target) {
					await tick();
					target = document.querySelector(selector);
				}
				if (!target) throw new Error(`No element found matching css selector: "${selector}"`);
			} else if (target instanceof HTMLElement) {
				target = selector;
			} else {
				throw new TypeError(
					`Invalid portal target type: ${
						!target ? 'null' : typeof target
					}. Valid types: CSS selector or HTMLElement.`
				);
			}

			target.appendChild(element);
		};

		mount();

		return () => {
			element?.remove();
		};
	};
};
