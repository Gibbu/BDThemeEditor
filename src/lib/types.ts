import type { Snippet } from 'svelte';

export interface Props<T extends HTMLElement> {
	children?: Snippet;
	self?: T;
	[key: string]: any;
}
