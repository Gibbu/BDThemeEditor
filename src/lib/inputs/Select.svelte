<script lang="ts">
	import { Select } from 'melt/builders';
	import { EDITOR_STATE } from '$lib/editor.svelte';
	import { portal } from '$lib/utils';

	import type { SelectInputProps } from '$types/inputs';

	let { value, variable, addon = false, options, custom }: SelectInputProps = $props();

	const select = new Select({
		value,
		onValueChange(newVal) {
			if (newVal) EDITOR_STATE.updateVariable({ variable, value: newVal }, addon);
		}
	});
</script>

<button type="button" {...select.trigger} class="flex w-full">
	{select.value ?? 'Select an anime'}
</button>

<div
	{...select.content}
	class={[
		'pointer-events-none absolute m-0 flex scale-95 flex-col gap-2 rounded-xl bg-zinc-800 p-2 opacity-0 shadow-lg transition',
		'data-open:pointer-events-auto data-open:scale-100 data-open:opacity-100',
		'translate-0'
	]}
>
	{#each options as option}
		<button
			type="button"
			class={[
				'flex w-full cursor-pointer rounded-lg px-4 py-2 text-zinc-400',
				'data-highlighted:bg-zinc-700 data-highlighted:text-white'
			]}
			{...select.getOption(option.value)}
		>
			{option.label}
		</button>
	{/each}
</div>
