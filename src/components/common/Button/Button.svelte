<script lang="ts">
	import {createEventDispatcher} from 'svelte';
	import {classes} from '$lib/helpers';

	const dispatch = createEventDispatcher();

	/** Style of the button. */
	export let type: 'primary' | 'secondary' | 'text' | 'danger';

	/**
	 * Size of the button.  
	 * Default = 'medium'
	 */
	export let size: 'medium'|'large'|'extralarge' = 'medium';

	/**
	 * Makes the button fill the available horizontal space.  
	 * Default = `false`
	 */
	export let long: boolean = false;

	/**
	 * Disable the button. Turning it opaque and disabling the click event.  
	 * Click event will not fire even if styling is removed.
	 */
	export let disabled: any = null;

	/**
	 * Location to navigate to.  
	 * An anchor tag will be used instead of a button.
	 */
	export let href: string = null;

	/** Open the location in a new tab. */
  export let newTab: boolean = false;

	const eventHandler = (e: MouseEvent) => {
		if (!disabled) dispatch(e.type);
	}
</script>

<template>
	{#if href}
		<a
			{href} 
			target={newTab ? '_blank' : null}
			class={classes('btn', type, size)}
			class:long
		>
			{#if $$slots.iconL}
				<div class="iconL">
					<slot name="iconL" />
				</div>
			{/if}
			{#if $$slots.default}
				<span><slot /></span>
			{/if}
		</a>
	{:else}
		<button
			type="button"
			class={classes('btn', type, size)}
			class:long
			{disabled}
			on:click={eventHandler}
		>
			{#if $$slots.iconL}
				<div class="iconL">
					<slot name="iconL" />
				</div>
			{/if}
			{#if $$slots.default}
				<span><slot /></span>
			{/if}
		</button>
	{/if}
</template>

<style lang="scss">
	.btn {
		font-weight: 500;
		border-radius: rem(4);
		display: flex;
		align-items: center;
		justify-content: center;
		transition: .15s ease background, .15s ease box-shadow, .15s ease color;
		user-select: none;
		line-height: normal;

		.iconL + span {
			margin-left: rem(8);
		}

		span {
			width: min-content;
			white-space: nowrap;
		}

		&.long {
			width: 100%;
		}
		
		&.medium {
			font-size: rem(14);
			height: rem(38);
			padding: 0 rem(12);
		}
		&.large {
			font-size: rem(16);
			height: rem(42);
			padding: 0 rem(18);
		}
		&.extralarge {
			font-size: rem(18);
			height: rem(52);
			padding: 0 rem(32);
		}

		&.primary {
			background: hsl(var(--accent));
			color: #000;
			text-shadow: 0 rem(2) rem(5) hsl(0 0% 0% / .4);
			&:hover {
				background: hsl(var(--accent-dark));
			}
			&:active {
				background: hsl(var(--accent));
			}
			&:focus {
				outline: rem(2) solid hsl(var(--accent) / .6);
				outline-offset: rem(3);
			}
		}

		&.secondary {
			background: var(--c4);
			color: var(--text-secondary);
			&:hover {
				background: var(--c5);
			}
			&:focus {
				background: var(--c7);
				color: var(--text-primary);
			}
		}

		&.text {
			color: var(--text-secondary);
			&:hover {
				color: var(--text-primary);
			}
			&:focus {
				background: var(--c5);
			}
		}

		&[disabled] {
			pointer-events: none;
			opacity: .7;
			filter: grayscale(.4);
		}
	}

	.iconL {
		display: inline-flex;
		width: rem(20);
		height: rem(20);
	}

</style>