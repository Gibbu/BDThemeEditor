<script>
	import {onMount, getContext} from 'svelte';
	import type {Writable} from 'svelte/store';

	let visible: Writable<boolean> = getContext('visible');
	let menuBtn: Writable<HTMLElement|null> = getContext('menuBtn');

	const toggle = () => {
		$visible = !$visible;
	}

	let btnEl: HTMLElement;

	onMount(() => {
		$menuBtn = btnEl;
	})
</script>

<div class="menu-btn" bind:this={btnEl} on:click={toggle}>
	<slot />
</div>

<style lang="scss">
	.menu-btn {
		display: contents;
	}
</style>