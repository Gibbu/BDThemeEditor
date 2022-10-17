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
		} else {
			error = '';
			dispatch('update', { variable, value, addon, unit, varGroup });
		}
	};
</script>

<template>
	<header class="option-header">
		<p class="option-title">
			{title}
			<small class="option-value">({value + unit})</small>
		</p>
		{#if hint}
			<div class="option-hint">{hint}</div>
		{/if}
	</header>
	<div class="option-body">
		<Input inputType="number" {min} {step} bind:value on:input={update} {error} />
		{#if error}
			<small class="option-error">{error}</small>
		{/if}
	</div>
</template>

<style lang="scss">
	.option {
		&-header {
			margin-bottom: 8px;
		}
		&-error {
			color: hsl(var(--red));
			font-size: 12px;
			margin-top: 4px;
		}
		&-value {
			color: var(--text-tertiary);
			margin-left: 4px;
		}
		&-hint {
			display: block;
			font-size: 13px;
			color: var(--text-tertiary);
		}
	}
</style>
