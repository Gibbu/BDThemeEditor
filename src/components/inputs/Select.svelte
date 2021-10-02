<script lang="ts">
	import {createEventDispatcher} from 'svelte';
	const dispatch = createEventDispatcher();

	// Components
	import {Select} from '$components/common/Select';

	// Required input vars
	export let variable: string;
	export let options: {label: string, value: string}[];
	export let value: string;
	export let title: string;

	// Optional input vars
	export let hint: string = '';
	export let customValue: boolean = true;
	export let addon: boolean = false;
	export let varGroup: string = ':root';

	const update = ({detail: value}) => {
		dispatch('update', {variable, value, addon, varGroup});
	}
</script>

<template>
	<header class="option-header">
		<p class="option-title">{title}</p>
		{#if hint}
			<small class="option-hint">{hint}</small>
		{/if}
	</header>
	<div class="option-body">
		<Select {options} {value} custom={customValue} on:update={update} />
	</div>
</template>

<style lang="scss">
	.option {
		&-header {
			margin-bottom: rem(8);
		}
		&-hint {
			display: block;
			font-size: rem(13);
			color: var(--text-tertiary);
		}
	}
</style>