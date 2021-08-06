import {writable} from 'svelte/store';
import type {IStoreTheme} from '$types/theme';

export const loaded = writable<boolean>(false);

export const isMounted = writable<boolean>(false);

export const preview = writable<HTMLElement>(null);
export const THEME = writable<IStoreTheme>(null);