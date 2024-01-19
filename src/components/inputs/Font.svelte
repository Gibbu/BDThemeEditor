<script lang="ts">
	import { store } from '$lib/stores';
	import { createEventDispatcher } from 'svelte';
	import { preview } from '$lib/preview';

	const dispatch = createEventDispatcher();

	import { Input, Checkbox, Banner } from '$components/common';

	// Required vars
	export let variable: string;
	export let value: string;
	export let index: number;
	export let title: string;

	// Optional vars
	export let hint: string | null = null;
	export let varGroup: string = ':root';

	let local: boolean = false;

	$: if (local) {
		preview({
			action: 'removeFont',
			index
		});
		$store?.fonts?.splice(index, 1);
	}

	const update = (): void => {
		const output = value.split(',').map((font) => font.trim());

		if (!local && (!value.includes('Whitney') || !value.includes('gg sans'))) {
			const fontUrl: string = `https://fonts.googleapis.com/css2?family=${output[0].replace(
				/ /g,
				'+'
			)}:wght@100;300;400;500;700&display=swap`;
			const fontImport: string = `@import url('${fontUrl}');`;

			if ($store?.fonts) {
				preview({
					action: 'addFont',
					index,
					text: fontImport
				});
				$store.fonts[index] = fontUrl;
			} else {
				preview({
					action: 'removeFont',
					index
				});
			}
		}

		dispatch('update', { variable, value: output.join(','), varGroup });
	};
</script>

<template>
	<header class="option-header">
		<p class="option-title">{title}</p>
	</header>
	<div class="option-body">
		<Input placeholder="Font name" bind:value on:change={update} />
		{#if hint}
			<small class="font-hint">{@html hint}</small>
		{/if}
		<small class="option-hint">Click away or press Enter to update preview.</small>
		<div class="local">
			<Checkbox bind:checked={local} label="Use font installed on my computer" />
		</div>
		{#if !local}
			<Banner type="info">
				View all available fonts on <a href="https://fonts.google.com" target="_blank" rel="noreferrer">Google Fonts</a>
			</Banner>
		{/if}
	</div>
</template>

<style lang="scss">
	.option {
		&-header {
			margin-bottom: 8px;
		}
		&-hint {
			color: var(--text-tertiary);
			font-size: 12px;
		}
	}
	.font-hint {
		display: block;
		font-size: 13px;
		color: var(--text-tertiary);
	}
	.local {
		display: flex;
		align-items: center;
		gap: 8px;
		margin: 12px 0;
		cursor: pointer;
	}
</style>
