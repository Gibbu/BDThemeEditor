<script lang="ts">
	import {createEventDispatcher} from 'svelte';
	import {Dismiss} from '$components/common/Icon';

	const dispatch = createEventDispatcher();

	export let title: string;

	/**
	 * Will display the close button to the far right of the header.  
	 * Default = `true`.
	 */
	export let closeBtn: boolean = true;
</script>

<template>
	<header class="modal-header">
		<h3 class="modal-title">{title}</h3>
		{#if closeBtn}
			<button type="button" class="modal-close" on:click={() => dispatch('close')}>
				<Dismiss />
			</button>
		{/if}
	</header>
</template>

<style lang="scss">
	.modal-header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: rem(24);
	}
	.modal-title {
		color: var(--text-primary);
		font-weight: 500;
	}
</style>