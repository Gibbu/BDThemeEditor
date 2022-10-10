<script lang="ts">
	import { uid } from '$lib/utils';
	import { createEventDispatcher } from 'svelte';

	/**
	 * The value of the checkbox.\
	 * Used in conjunction with `group`.
	 */
	export let value: string | undefined = undefined;

	/**
	 * The group to place `value` into.
	 */
	export let group: any = undefined;

	/**
	 * Whether the checkbox is checked or not.
	 */
	export let checked: boolean = false;

	/**
	 * The label placed to the right of the checkbox,\
	 * which will still trigger the chechbox.
	 */
	export let label: string | undefined = undefined;

	const { id } = uid('checkbox');
	const dispatch = createEventDispatcher();
</script>

<template>
	<div id={id()} class="checkbox">
		<input
			id={id('input')}
			type="checkbox"
			class="input"
			{value}
			{group}
			bind:checked
			on:change={() => {
				dispatch('change', value);
			}}
		/>
		{#if label}
			<label for={id('input')} class="label">{label}</label>
		{/if}
	</div>
</template>

<style lang="scss">
	.checkbox {
		display: flex;
		align-items: center;
		gap: 8px;
	}
	.input {
		appearance: none;
		border: 1px solid var(--border);
		width: 24px;
		height: 24px;
		border-radius: var(--radius);
		cursor: pointer;
		position: relative;
		display: flex;
		align-items: center;
		justify-content: center;
		transition: 0.15s ease background;
		&::before {
			content: '';
			width: 16px;
			height: 8px;
			border-bottom: 3px solid #000;
			border-left: 3px solid #000;
			transform: rotate(-45deg) translate(1px, -1px);
			opacity: 0;
			transition: 0.15s ease opacity;
		}
		&:hover,
		&:focus {
			border-color: var(--border-alt);
		}
		&:checked {
			background: hsl(var(--accent));
			border-color: hsl(var(--accent));
			&::before {
				opacity: 1;
			}
		}
	}
	.label {
		cursor: pointer;
		user-select: none;
	}
</style>
