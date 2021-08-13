<script>
	import {THEME, preview} from '$lib/stores';
	import {createEventDispatcher, onMount} from 'svelte';

	const dispatch = createEventDispatcher();

	import {Input} from '$components/common/Input';

	// Required vars
	export let variable: string;
	export let value: string;
	export let index: number;
	export let title: string;

	let local: boolean = false;

	$: if (local) {
		if ($preview.querySelector(`#font-${index}`)) {
			$preview.querySelector(`#font-${index}`).remove()
		}
		$THEME.fonts.splice(index, 1);
	}

	const update = (): void => {

		const output = value.split(',').map(font => font.trim());
		
		if (!local && !value.includes('Whitney')) {
			const fontUrl: string = `https://fonts.googleapis.com/css2?family=${output[0].replace(/ /g, '+')}:wght@100;300;400;500;700&display=swap`;
			const fontImport: string = `@import url('${fontUrl}');`;

			$THEME.fonts[index] = fontUrl;

			if (!$preview.querySelector(`#font-${index}`)) {
				const style: HTMLStyleElement = document.createElement('style');
				style.setAttribute('id', `font-${index}`);
				style.setAttribute('class', 'customfont');
				style.innerText = fontImport;
				$preview.querySelector('head').appendChild(style);
			} else {
				$preview.querySelector(`#font-${index}`).innerHTML = fontImport;
			}
		}

		dispatch('update', {variable, value: output.join(',')});
	}
</script>

<template>
	<header class="option-header">
		<p class="option-title">{title}</p>
	</header>
	<div class="option-body">
		<Input placeholder="Font name" bind:value on:change={update} />
		<small class="option-hint">Click away or press Enter to update preview.</small>
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
	}
</style>