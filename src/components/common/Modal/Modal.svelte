<script lang="ts">
	import { fly, fade } from 'svelte/transition';
	import { browser } from '$app/environment';

	import { createUID, classes } from '$lib/utils';
	import { trap, portal } from '$lib/actions';

	import type { Options } from 'focus-trap';

	export let visible: boolean = false;
	export let title: string | undefined = undefined;
	export let description: string | undefined = undefined;
	export let size: 'small' | 'medium' | 'large' = 'medium';
	export let markdown: boolean = false;
	export let closeable: boolean = true;
	export let plain: boolean = false;
	export let trapOptions: Options | undefined = undefined;

	const { uid } = createUID('modal');

	$: if (browser && visible) {
		document.documentElement.classList.add('modal-active');
	} else if (browser && !visible) {
		document.documentElement.classList.remove('modal-active');
	}

	const close = () => {
		if (closeable) visible = false;
	};

	const handleKeys = ({ key }: KeyboardEvent) => {
		if (key === 'Escape' || key === 'Esc') close();
	};
</script>

<svelte:window on:keydown={handleKeys} />

<template>
	{#if visible}
		<div class="container" use:portal use:trap={trapOptions}>
			<div class="backdrop" role="none" transition:fade={{ duration: 120 }} on:click={close} on:keypress />
			<div
				id={uid()}
				class={classes('modal', size)}
				class:plain
				role="dialog"
				aria-modal="true"
				aria-labelledby={uid('title')}
				aria-describedby={description ? uid('description') : uid('body')}
				transition:fly={{ duration: 150, y: 10 }}
				{...$$restProps}
			>
				{#if title || !plain}
					<header class="header">
						<h2 id={uid('title')} class="title">{title}</h2>
						{#if description}
							<p id={uid('description')} class="description">{description}</p>
						{/if}
					</header>
				{/if}
				<div id={uid('body')} class="body" class:markdown>
					<slot />
				</div>
				{#if $$slots.footer}
					<footer class="footer">
						<slot name="footer" />
					</footer>
				{/if}
			</div>
		</div>
	{/if}
</template>

<style lang="scss">
	.container {
		position: fixed;
		inset: 0;
		display: flex;
		justify-content: center;
		align-items: flex-start;
		z-index: 99;
		padding: 128px;
	}
	.backdrop {
		background: var(--modal-backdrop);
		position: absolute;
		inset: 0;
	}
	.modal {
		background: var(--background-secondary-alt);
		border-radius: var(--radius-lg);
		position: relative;
		z-index: 1;
		overflow: hidden;
		&.small {
			width: 450px;
		}
		&.medium {
			width: 600px;
		}
		&.large {
			width: 750px;
		}
		&:not(.plain) {
			.body {
				padding: 0 20px 20px;
			}
		}
	}
	.header {
		padding: 20px;
	}
	.title {
		font-family: var(--font-display);
		color: var(--text-primary);
	}
	.description {
		font-size: 14px;
		margin-top: 6px;
		color: var(--text-tertiary);
	}
	.body {
		max-height: 50vh;
		overflow: hidden auto;
	}
	.footer {
		padding: 20px;
		display: flex;
		align-items: center;
		justify-content: flex-end;
		gap: 8px;
		background: var(--background-tertiary);
	}
</style>
