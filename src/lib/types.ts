import type { Snippet } from 'svelte';

export interface Props<T extends HTMLElement> {
	children?: Snippet;
	self?: T;
	[key: string]: any;
}

export type Placement =
	| 'top'
	| 'top-start'
	| 'top-end'
	| 'right'
	| 'right-start'
	| 'right-end'
	| 'bottom'
	| 'bottom-start'
	| 'bottom-end'
	| 'left'
	| 'left-start'
	| 'left-end';
