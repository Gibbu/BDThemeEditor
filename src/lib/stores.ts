import { writable } from 'svelte/store';

import type { IStoreTheme } from '$types/theme';
import type { IFlash } from '$types/flash';

export const loaded = writable<boolean>(false);
export const isMounted = writable<boolean>(false);

export const preview = writable<HTMLIFrameElement>();
export const store = writable<IStoreTheme>();

export const flash = writable<IFlash[]>([]);

export const fontIndex = writable<number>(0);
