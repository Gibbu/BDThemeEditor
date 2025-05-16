import { EDITOR_STATE } from '$lib/editor.svelte';

export const onUpdate = <
	T extends { variable: string; value: string | number; [key: string]: any }
>(
	payload: T,
	addon: boolean = false
) => {
	EDITOR_STATE.updateVariable(payload, addon);
};
