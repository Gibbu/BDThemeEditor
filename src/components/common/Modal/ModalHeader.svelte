<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import { Dismiss } from '$components/common/Icon';

	const dispatch = createEventDispatcher();

	export let title: string;

	/**
	 * Will display the close button to the far right of the header.
	 * Default = `true`.
	 */
	export let closeBtn: boolean = true;
</script>

<template>
	<header class="header">
		<h3 class="title">{title}</h3>
		{#if closeBtn}
			<button type="button" class="close" on:click={() => dispatch('close')}>
				<Dismiss />
			</button>
		{/if}
	</header>
</template>

<style lang="scss">
	.header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: rem(24);
	}
	.title {
		color: var(--text-primary);
		font-weight: 500;
	}
	.close {
		width: rem(32);
		height: rem(32);
		border-radius: rem(4);
		padding: rem(6);
		&:hover {
			background: var(--c4);
		}
	}
</style>
