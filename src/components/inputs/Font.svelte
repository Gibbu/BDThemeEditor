<script lang="ts">
	import { THEME } from '$lib/stores';
	import { createEventDispatcher } from 'svelte';
	import { previewAction } from '$lib/preview';

	const dispatch = createEventDispatcher();

	import { Input } from '$components/common/Input';

	// Required vars
	export let variable: string;
	export let value: string;
	export let index: number;
	export let title: string;

	// Optional vars
	export let varGroup: string = ':root';

	let local: boolean = false;

	$: if (local) {
		previewAction({
			action: 'removeFont',
			index
		});
		$THEME?.fonts?.splice(index, 1);
	}

	const update = (): void => {
		const output = value.split(',').map((font) => font.trim());

		if (!local && !value.includes('Whitney')) {
			const fontUrl: string = `https://fonts.googleapis.com/css2?family=${output[0].replace(
				/ /g,
				'+'
			)}:wght@100;300;400;500;700&display=swap`;
			const fontImport: string = `@import url('${fontUrl}');`;

			if ($THEME?.fonts) {
				previewAction({
					action: 'addFont',
					index,
					text: fontImport
				});
				$THEME.fonts[index] = fontUrl;
			} else {
				previewAction({
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
		<small class="option-hint">Click away or press Enter to update preview.</small>
		<label class="option-local">
			<input type="checkbox" bind:checked={local} class="option-checkbox" />
			Use font installed on my computer
		</label>
		{#if !local}
			<div class="option-google">
				View available fonts on <a href="https://fonts.google.com" target="_blank" rel="noreferrer" class="anchor"
					>Google Fonts</a
				>
			</div>
		{/if}
	</div>
</template>

<style lang="scss">
	.option {
		&-header {
			margin-bottom: rem(8);
		}
		&-hint {
			color: var(--text-tertiary);
			font-size: rem(12);
		}
		&-local {
			display: flex;
			align-items: center;
			gap: rem(8);
			margin-top: rem(12);
			cursor: pointer;
		}
		&-checkbox {
			appearance: none;
			max-width: rem(24);
			min-width: rem(24);
			max-height: rem(24);
			min-height: rem(24);
			border-radius: rem(4);
			background-color: var(--c4);
			cursor: pointer;
			&:hover {
				background-color: var(--c7);
			}
			&:checked {
				background-color: hsl(var(--accent));
				background-image: url('data:image/svg+xml; utf-8,<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="black"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>');
			}
		}
		&-google {
			border: rem(1) solid var(--border);
			border-radius: rem(4);
			margin-top: rem(16);
			padding: rem(16);
			font-size: rem(14);
			background: var(--c0);
		}
	}
</style>
