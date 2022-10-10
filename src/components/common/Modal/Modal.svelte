<script lang="ts">
	import { scale, fade } from 'svelte/transition';
	import { browser } from '$app/environment';

	import { uid, classes } from '$lib/utils';
	import { trap, portal } from '$lib/actions';

	export let visible: boolean = false;
	export let title: string;
	export let description: string | undefined = undefined;
	export let size: 'small' | 'medium' | 'large' = 'medium';
	export let markdown: boolean = false;

	const { id } = uid('modal');

	$: if (browser) {
		visible
			? document.documentElement.classList.add('modal-active')
			: document.documentElement.classList.remove('modal-active');
	}

	const close = () => {
		visible = false;
	};

	const handleKeys = ({ key }: KeyboardEvent) => {
		if (key === 'Escape' || key === 'Esc') close();
	};
</script>

<svelte:window on:keydown={handleKeys} />

<template>
	{#if visible}
		<div class="container" use:portal use:trap>
			<div class="backdrop" transition:fade={{ duration: 200 }} on:click={close} />
			<div
				id={id()}
				class={classes('modal', size)}
				role="dialog"
				aria-modal="true"
				aria-labelledby={id('title')}
				aria-describedby={description ? id('description') : id('body')}
				transition:scale={{ duration: 150, start: 0.9 }}
			>
				<header class="header">
					<h1 id={id('title')} class="title">{title}</h1>
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
</style>
