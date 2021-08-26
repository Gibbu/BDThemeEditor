<script>
	import {createEventDispatcher} from 'svelte';
	const dispatch = createEventDispatcher();


	// Components
	import {Input} from '$components/common/Input';

	// Required input vars
	export let variable: string;
	export let value: string;
	export let title: string;

	// Optional input vars
	export let unit = '';
	export let min = 0;
	export let addon = false;
	export let hint: string = '';

	let error: string;

	const update = (): void => {
		if (!/^\d+$/.test(value)) {
			error = 'This input field can only contain numbers.';
		} else {
			error = '';
			dispatch('update', {variable, value, addon, unit});
		}
	}
</script>

<template>
	<header class="option-header">
		<p class="option-title">
			{title}
			<small class="option-value">({value+unit})</small>
		</p>
		{#if hint}
			<div class="option-hint">{hint}</div>
		{/if}
	</header>
	<div class="option-body">
		<Input inputType="number" {min} bind:value on:input={update} {error} />
		{#if error}
			<small class="option-error">{error}</small>
		{/if}
	</div>
</template>

<style lang="scss">
	.option {
		&-header {
			margin-bottom: rem(8);
		}
		&-error {
			color: hsl(var(--red));
			font-size: rem(12);
			margin-top: rem(4);
		}
		&-value {
			color: var(--text-tertiary);
			margin-left: rem(4);
		}
	}
</style>