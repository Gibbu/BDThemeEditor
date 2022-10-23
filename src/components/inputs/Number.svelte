<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();

	// Components
	import { Input } from '$components/common';

	// Required input vars
	export let variable: string;
	export let value: string;
	export let title: string;

	// Optional input vars
	export let unit = '';
	export let min = 0;
	export let addon = false;
	export let hint: string = '';
	export let varGroup: string = ':root';
	export let step: number | undefined = undefined;

	let error: string;

	const update = (): void => {
		if (!/^\d*\.?\d*$/.test(value)) {
			error = 'This input field can only contain numbers.';
			return;
		}

		error = '';
		dispatch('update', { variable, value, addon, unit, varGroup });
	};
</script>

<template>
	<Input type="number" {min} {step} bind:value on:input={update} {error} label={title} suffix={value + unit} />
	{#if hint}
		<div class="option-hint">{hint}</div>
	{/if}
</template>

<style lang="scss">
	.option {
		&-hint {
			display: block;
			font-size: 13px;
			color: var(--text-tertiary);
		}
	}
</style>
