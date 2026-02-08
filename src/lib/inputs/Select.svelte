<script lang="ts">
	import { CheckIcon, ChevronsUpDownIcon } from '@lucide/svelte';
	import { Select, SelectContent, SelectOption, SelectTrigger, SelectValue } from 'lithesome';
	import { fly } from 'svelte/transition';
	import { Button } from '$lib/common';
	import { STATE } from '$lib/editor.svelte';

	import type { SelectInputProps } from '$types/inputs';

	let {
		value = $bindable(),
		variable,
		addon = false,
		options,
		custom
	}: SelectInputProps = $props();
</script>

<Select
	bind:value
	onValueChanged={(value) => {
		if (value) STATE.updateVariable({ variable, value }, addon);
	}}
>
	<SelectTrigger>
		{#snippet custom({ props })}
			<Button variant="secondary" {...props} class="w-full justify-between">
				<SelectValue />
				<ChevronsUpDownIcon class="size-4" />
			</Button>
		{/snippet}
	</SelectTrigger>
	<SelectContent>
		{#snippet custom({ props, state })}
			{#if state.visible}
				<div
					transition:fly={{ y: 5, duration: 150 }}
					class={[
						'absolute z-10 m-0 flex scale-95 flex-col gap-1 rounded-lg bg-zinc-800 p-2 opacity-0 shadow-lg',
						'focus:outline-none'
					]}
					{...props}
				>
					{#each options as option}
						<SelectOption
							value={option.value}
							class={({ hovered, selected }) => [
								'flex w-full cursor-pointer items-center rounded-md px-4 py-2 text-left',
								selected && !hovered ? 'bg-turquoise-500/10 text-turquoise-500' : '',
								selected && hovered ? 'bg-turquoise-500/20 text-turquoise-400' : '',
								hovered && 'bg-zinc-700 text-white'
							]}
						>
							{#snippet children({ selected })}
								<span class="flex-1">{option.label}</span>
								{#if selected}
									<CheckIcon class="size-5" />
								{/if}
							{/snippet}
						</SelectOption>
					{/each}
				</div>
			{/if}
		{/snippet}
	</SelectContent>
</Select>
