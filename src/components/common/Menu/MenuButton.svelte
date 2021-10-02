<script lang="ts">
	import {onMount, getContext} from 'svelte';
	import type {Writable} from 'svelte/store';

	let visible: Writable<boolean> = getContext('visible');
	let menuBtn: Writable<HTMLElement> = getContext('menuBtn');

	const toggle = () => {
		$visible = !$visible;
	}

	let btnEl: HTMLElement;

	onMount(() => {
		$menuBtn = btnEl;
	})
</script>

<template>
	<div class="menu-btn" bind:this={btnEl} on:click={toggle}>
		<slot />
	</div>
</template>

<style lang="scss">
	.menu-btn {
		display: contents;
	}
</style>