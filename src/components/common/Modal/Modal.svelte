<script lang="ts">
	import { fly, fade } from 'svelte/transition';
	import { browser } from '$app/environment';

	import { uid, classes } from '$lib/utils';
	import { trap, portal } from '$lib/actions';

	export let visible: boolean = false;
	export let title: string;
	export let description: string | undefined = undefined;
	export let size: 'small' | 'medium' | 'large' = 'medium';
	export let markdown: boolean = false;
	export let closeable: boolean = true;

	const { id } = uid('modal');

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
		<div class="container" use:portal use:trap>
			<div class="backdrop" transition:fade={{ duration: 120 }} on:click={close} on:keypress />
			<div
				id={id()}
				class={classes('modal', size)}
				role="dialog"
				aria-modal="true"
				aria-labelledby={id('title')}
				aria-describedby={description ? id('description') : id('body')}
				transition:fly={{ duration: 150, y: 10 }}
			>
				<header class="header">
					<h2 id={id('title')} class="title">{title}</h2>
					{#if description}
						<p id={id('description')}>{description}</p>
					{/if}
				</header>
				<div id={id('body')} class="body" class:markdown>
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
		padding: 64px;
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
		margin-top: 4px;
	}
	.body {
		padding: 0 20px 20px;
		max-height: 90vh;
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
