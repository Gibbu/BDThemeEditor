<script lang="ts">
	import NProgress from 'nprogress';
	import { onDestroy } from 'svelte';
	import { previewLoaded, previewer } from '$lib/stores';
	import { PUBLIC_LOCAL_PREVIEWER } from '$env/static/public';

	export let urls: string[] = [];

	let iframe: HTMLIFrameElement;
	const previewURL =
		PUBLIC_LOCAL_PREVIEWER && PUBLIC_LOCAL_PREVIEWER === 'true'
			? 'http://localhost:5500'
			: 'https://gibbu.github.io/ThemePreview/';

	const load = () => {
		$previewLoaded = true;
		NProgress.done();
		$previewer = iframe;
	};
	onDestroy(() => ($previewLoaded = false));
</script>

<template>
	<div class="container">
		{#if !$previewLoaded}
			<div class="loader">
				<div class="spinner" />
				<p class="info">Previewer is loading...</p>
				<small class="retry">If this takes longer than 1 minute, refresh your page.</small>
			</div>
		{/if}
		<iframe bind:this={iframe} src="{previewURL}/?file={urls.join('|')}" title="" frameborder="0" on:load={load} />
	</div>
</template>

<style lang="scss">
	.container {
		width: 100%;
		height: 100%;
		position: relative;
		iframe {
			width: 100%;
			height: 100%;
		}
	}
	.loader {
		background: var(--background-secondary);
		position: absolute;
		inset: 0;
		text-align: center;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		z-index: 1;
	}
	.info {
		font-size: 24px;
		margin: 64px 0 8px;
		font-family: var(--font-display);
		color: var(--text-primary);
	}
	.retry {
		display: block;
		font-size: 12px;
		color: var(--text-tertiary);
	}
	.spinner {
		width: 64px;
		height: 64px;
		border: 4px solid var(--text-primary);
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
