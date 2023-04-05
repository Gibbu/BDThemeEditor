<script lang="ts">
	import { classes } from '$lib/utils';

	export let variant: 'primary' | 'secondary' | 'danger';
	export let href: string | undefined = undefined;
	export let external: boolean = false;
	export let size: 'small' | 'medium' | 'large' = 'medium';
	export let disabled: boolean = false;
	export let self: HTMLElement | undefined = undefined;
	export let long: boolean = false;
	export let split: boolean = false;
</script>

<template>
	<svelte:element
		this={href ? 'a' : 'button'}
		bind:this={self}
		href={href || undefined}
		type={!href ? 'button' : undefined}
		rel={external ? 'noreferrer noopener' : undefined}
		target={external ? '_blank' : undefined}
		class={classes('btn', variant, size)}
		class:long
		class:split
		{disabled}
		on:click
		on:keypress
	>
		<div class="content">
			<slot />
		</div>
	</svelte:element>
</template>

<style lang="scss">
	.btn {
		--size: 18px;
		display: inline-flex;
		align-items: center;
		border-radius: var(--radius);
		border: 1px solid transparent;
		font-weight: 500;

		.content {
			display: flex;
			align-items: center;
			justify-content: center;
			flex: 1;
			gap: var(--gap);
			user-select: none;
		}

		&.small {
			padding: 6px 10px;
			font-size: 12px;
			--gap: 4px;
		}
		&.medium {
			padding: 8px 14px;
			font-size: 14px;
			--gap: 8px;
		}
		&.large {
			padding: 12px 22px;
			font-size: 16px;
			--gap: 12px;
			--size: 20px;
		}
		&.long {
			width: 100%;
		}
		&.split .content {
			justify-content: space-between;
		}

		&.primary {
			background: hsl(var(--accent));
			color: hsl(var(--accent-text));
			.content {
				filter: drop-shadow(0 1px 5px hsl(0 0% 0% / 0.5));
			}
			&:hover {
				background: hsl(var(--accent-hover));
			}
		}
		&.secondary {
			background: var(--button-secondary);
			border-color: var(--button-secondary);
			color: var(--text-secondary);
			&:hover {
				background: var(--button-secondary-hover);
			}
		}

		&:focus {
			outline: 3px solid hsl(var(--accent) / 0.4);
			outline-offset: 2px;
		}

		&:disabled {
			opacity: 0.5;
			pointer-events: none;
			user-select: none;
		}

		:global(svg) {
			width: var(--size);
			height: var(--size);
		}
	}
</style>
