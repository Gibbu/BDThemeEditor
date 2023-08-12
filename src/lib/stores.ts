import { writable } from 'svelte/store';

import type { IStoreTheme } from '$types/theme';

export const previewLoaded = writable<boolean>(false);
export const editorLoaded = writable<boolean>(false);

export const previewer = writable<HTMLIFrameElement>();
export const store = writable<IStoreTheme>();
