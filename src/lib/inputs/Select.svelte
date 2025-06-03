<script lang="ts">
	import { Select } from 'melt/builders';
	import { STATE } from '$lib/editor.svelte';
	import { Button } from '$lib/common';

	import type { SelectInputProps } from '$types/inputs';
	import { CheckIcon, ChevronsUpDownIcon } from 'lucide-svelte';

	let {
		value,
		variable,
		addon = false,
		options,
		comment,
		varGroup,
		custom
	}: SelectInputProps = $props();
	let label = $state<string>(options.find((el) => el.value === value)?.label || '');

	const select = new Select({
		value,
		onValueChange(newVal) {
			if (newVal) {
				STATE.updateVariable({ variable, value: newVal, comment, varGroup }, addon);
				label = options.find((el) => el.value === newVal)?.label || '';
			}
		}
	});
</script>

<Button variant="secondary" {...select.trigger} class="w-full justify-between">
	<span>{label ?? 'Select an option'}</span>
	<ChevronsUpDownIcon class="size-4" />
</Button>

<div
	{...select.content}
	class={[
		'pointer-events-none absolute m-0 flex scale-95 flex-col gap-1 rounded-lg bg-zinc-800 p-2 opacity-0 shadow-lg transition duration-200',
		'data-open:pointer-events-auto data-open:scale-100 data-open:opacity-100',
		'focus:outline-none'
	]}
>
	{#each options as option}
		<button
			type="button"
			class={[
				'flex w-full cursor-pointer items-center rounded-md px-4 py-2 text-left',
				select.isSelected(option.value)
					? 'bg-turquoise-500/10 text-turquoise-500 data-highlighted:bg-turquoise-500/20 data-highlighted:text-turquoise-400'
					: 'text-zinc-400 data-highlighted:bg-zinc-700 data-highlighted:text-white'
			]}
			{...select.getOption(option.value)}
		>
			<span class="flex-1">{option.label}</span>
			{#if select.isSelected(option.value)}
				<CheckIcon class="size-5" />
			{/if}
		</button>
	{/each}
</div>
