<script lang="ts">
	import clickOutside from '$lib/clickOutside';
	import { getContext } from 'svelte';
	import type { Writable } from 'svelte/store';

	let visible: Writable<boolean> = getContext('visible');
	let menuBtn: Writable<HTMLElement> = getContext('menuBtn');
</script>

<template>
	{#if $menuBtn}
		<div
			class="menu-dropdown"
			role="menu"
			aria-expanded={$visible}
			use:clickOutside={$menuBtn}
			on:clickedOutside={() => ($visible = false)}
		>
			<slot />
		</div>
	{/if}
</template>

<style lang="scss">
	.menu-dropdown {
		width: rem(200);
		position: absolute;
		top: 100%;
		right: 0;
		background: var(--c0);
		border: rem(1) solid var(--border);
		border-radius: rem(4);
		padding: rem(8);
		opacity: 0;
		visibility: hidden;
		overflow: hidden;
		transform: scale(0.95);
		transform-origin: top right;
		transition: opacity 0.15s ease, transform 0.15s ease, visibility 0.15s ease;
		z-index: 3;
		box-shadow: 0 3px 7px hsl(0 0% 0% / 0.1), 0 5px 28px hsl(0 0% 0% / 0.25);
		&[aria-expanded='true'] {
			opacity: 1;
			visibility: visible;
			transform: scale(1);
		}
	}
</style>
