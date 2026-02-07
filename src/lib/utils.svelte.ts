import { clsx } from 'clsx';
import { tick } from 'svelte';
import { twMerge } from 'tailwind-merge';

import type { BaseInputProps } from '$types/inputs';
import type { ClassValue } from 'clsx';
import type { Attachment } from 'svelte/attachments';

export const cn = (...inputs: ClassValue[]) => {
	return twMerge(clsx(inputs));
};

/**
 * Replaces any special characters.
 * @param string The string to parse
 * @param replace The character to be replaced
 */
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

/**
 * Mount elements from a component to another element in the DOM.
 * @param selector The CSS selector to append the element to.
 */
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
					}. Valid types: css selector or HTMLElement.`
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

/**
 * Creates a unique ID used for accessability.
 * @param namespace The namespace for each of the components
 */
export const createUID = (namespace: string) => {
	const id = Math.random().toString(36).substring(2, 10);

	return (component?: string) => {
		return component ? `${namespace}-${id}-${component}` : `${namespace}-${id}`;
	};
};

/**
 * State machine to allow for dynamic two-way binding through function params.
 * @param value The current value of the state
 * @param updater The function to call when needing to update state outside of the context.
 */
export const stateValue = <T>(value: () => T, updater?: (newValue: T) => void) => {
	const val = $derived.by(value);

	return {
		get val() {
			return val;
		},
		set val(v: T) {
			updater?.(v);
		}
	};
};

export const bytesToMegabytes = (bytes: number) => {
	return bytes / (1024 * 1024);
};

type ExlcudeElement = HTMLElement | null | undefined;

/**
 * Checks if the user clicks outside of the given node.
 * @param opts The opts to be passed in.
 */
export const outside = (opts: {
	callback: () => void;
	exclude?: ExlcudeElement[] | ExlcudeElement;
	on?: keyof DocumentEventMap;
}): Attachment<HTMLElement> => {
	const { callback, exclude, on = 'click' } = opts;

	return (node) => {
		const event = (e: Event) => {
			const target = e.target as HTMLElement;
			const contains = Array.isArray(exclude)
				? exclude.some((el) => el?.contains(target))
				: exclude?.contains(target);

			if (node && !node.contains(target) && !e.defaultPrevented && !contains) callback();
		};

		document.addEventListener(on, event);

		return () => {
			document.removeEventListener(on, event);
		};
	};
};
