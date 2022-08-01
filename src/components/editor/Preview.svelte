<script lang="ts">
	import { onDestroy } from 'svelte';
	import { loaded, preview } from '$lib/stores';

	export let urls: string[] = [];

	let iframe: HTMLIFrameElement;

	$: if (iframe) {
		$loaded = true;
		$preview = iframe;
	}

	onDestroy(() => ($loaded = false));
</script>

<template>
	<div class="preview">
		{#if !$loaded}
			<div class="loader">
				<div class="spinner" />
			</div>
		{/if}
		<iframe
			bind:this={iframe}
			src="https://gibbu.github.io/ThemePreview?file={urls.join('|')}"
			title=""
			frameborder="0"
		/>
	</div>
</template>

<style lang="scss">
	.preview {
		width: 100%;
		height: 100%;
		padding: rem(16);
		position: relative;
		iframe {
			width: 100%;
			height: 100%;
		}
	}
	.loader {
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		background: var(--c1);
		display: flex;
		align-items: center;
		justify-content: center;
		z-index: 1;
	}
	.spinner {
		width: rem(64);
		height: rem(64);
		border: rem(2) solid var(--text-primary);
		border-top-color: transparent;
		border-radius: 50%;
		animation: spinner 1s linear infinite;
	}

	@keyframes spinner {
		to {
			transform: rotate(360deg);
		}
	}
</style>
