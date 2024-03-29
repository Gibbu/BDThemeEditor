<script lang="ts">
	import { browser } from '$app/environment';
	import { createUID } from '$lib/utils';
	import { Icon } from '@steeze-ui/svelte-icon';
	import { InformationCircle, ExclamationCircle, XCircle, XMark } from '@steeze-ui/heroicons';
	import { createEventDispatcher, onMount } from 'svelte';

	export let id: string | undefined = undefined;
	export let visible: boolean = (browser && !localStorage.getItem(id!)) || false;
	export let type: 'info' | 'warning' | 'error';
	export let message: string | undefined = undefined;
	export let closable: boolean = false;

	const icons = {
		info: InformationCircle,
		warning: ExclamationCircle,
		error: XCircle
	};
	const { uid } = createUID('banner');
	const dispatch = createEventDispatcher();

	const close = () => {
		if (id) localStorage.setItem(id, 'is-set');
		visible = false;
		dispatch('close');
	};
</script>

<template>
	{#if visible}
		<div id={uid()} class="banner {type}">
			<div class="icon">
				<Icon src={icons[type]} size="24px" />
			</div>
			<div class="message"><slot>{@html message}</slot></div>
			{#if closable}
				<button type="button" class="close" on:click={close}>
					<Icon src={XMark} size="18px" />
				</button>
			{/if}
		</div>
	{/if}
</template>

<style lang="scss">
	.banner {
		border: 1px solid hsl(var(--banner-colour));
		background: hsl(var(--banner-colour) / 0.15);
		border-radius: var(--radius);
		padding: 8px 8px 8px 16px;
		display: flex;
		align-items: center;
		gap: 16px;
		&.info {
			--banner-colour: var(--blue);
		}
		&.warning {
			--banner-colour: var(--yellow);
		}
		&.error {
			--banner-colour: var(--red);
		}
	}
	.icon {
		min-width: 24px;
		max-width: 24px;
		min-height: 24px;
		max-height: 24px;
		color: hsl(var(--banner-colour));
	}
	.message {
		font-size: 14px;
		color: var(--text-primary);
		line-height: 1.5;
		flex: 1;
		:global(a) {
			color: hsl(var(--banner-colour));
			text-decoration: underline;
		}
	}
	.close {
		width: 32px;
		height: 32px;
		border-radius: var(--radius);
		display: flex;
		align-items: center;
		justify-content: center;
		&:hover {
			background: var(--button-ghost-hover);
		}
	}
</style>
