<script lang="ts">
	import NProgress from 'nprogress';
	import { onDestroy } from 'svelte';
	import { loaded } from '$lib/stores';

	export let urls: string[] = [];

	const load = () => {
		$loaded = true;
		NProgress.done();
	};
	onDestroy(() => ($loaded = false));
</script>

<template>
	<div class="container">
		{#if !$loaded}
			<div class="loader">
				<div class="spinner" />
				<p class="info">Previewer is loading...</p>
				<small class="retry">If this takes longer than 1 minute, refresh your page.</small>
			</div>
		{/if}
		<iframe
			src="https://gibbu.github.io/ThemePreview?file={urls.join('|')}"
			title=""
			frameborder="0"
			class:hidden={!$loaded}
			on:load={load}
		/>
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
			&.hidden {
				opacity: 0;
				pointer-events: none;
			}
		}
	}
	.loader {
		background: var(--background-secondary);
		position: absolute;
		inset: 16px;
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
