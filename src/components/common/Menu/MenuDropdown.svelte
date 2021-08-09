<script>
	import clickOutside from '$lib/clickOutside';
	import {getContext} from 'svelte';
	import type {Writable} from 'svelte/store';

	let visible: Writable<boolean> = getContext('visible');
	let menuBtn: Writable<HTMLElement|null> = getContext('menuBtn');
</script>

{#if $menuBtn}
	<div
		class="menu-dropdown"
		role="menu"
		aria-expanded={$visible}
		use:clickOutside={$menuBtn}
		on:clickedOutside={() => $visible = false}
	>
		<slot />
	</div>
{/if}

<style lang="scss">
	.menu-dropdown {
		width: rem(200);
		position: absolute;
		top: 100%;
		right: 0;
		background: var(--c0);
		border: rem(1) solid var(--border);
		border-radius: rem(4);
		padding: rem(8) 0;
		opacity: 0;
		visibility: hidden;
		overflow: hidden;
		transform: scale(.95);
		transform-origin: top right;
		transition: opacity .15s ease, transform .15s ease, visibility .15s ease;
		z-index: 3;
		&[aria-expanded="true"] {
			opacity: 1;
			visibility: visible;
			transform: scale(1);
		}
	}
</style>