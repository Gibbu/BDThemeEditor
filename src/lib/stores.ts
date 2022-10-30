import { writable } from 'svelte/store';

import type { IStoreTheme } from '$types/theme';
import type { IFlash } from '$types/flash';

export const previewLoaded = writable<boolean>(false);
export const editorLoaded = writable<boolean>(false);

export const previewer = writable<HTMLIFrameElement>();
export const store = writable<IStoreTheme>();

export const flash = writable<IFlash[]>([]);

export const fontIndex = writable<number>(0);
