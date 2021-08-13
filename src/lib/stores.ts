import {writable} from 'svelte/store';

import type {IStoreTheme, IHistoryTheme} from '$types/theme';
import type {IFlash} from '$types/flash';

export const loaded = writable<boolean>(false);
export const isMounted = writable<boolean>(false);

export const preview = writable<HTMLElement>(null);
export const THEME = writable<IStoreTheme>(null);
export const history = writable<IHistoryTheme[]>([]);

export const flash = writable<IFlash[]>([]);