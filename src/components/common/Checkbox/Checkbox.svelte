<script lang="ts">
	import { createUID } from '$lib/utils';

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
	 * The `name` attribute of the input.
	 */
	export let name: string | undefined = undefined;

	/**
	 * The label placed to the right of the checkbox,\
	 * which will still trigger the chechbox.
	 */
	export let label: string | undefined = undefined;

	const { uid } = createUID('checkbox');
</script>

<template>
	<div id={uid()} class="checkbox">
		<input id={uid('input')} type="checkbox" class="input" {name} {value} {group} bind:checked on:change />
		{#if label}
			<label for={uid('input')} class="label">{label}</label>
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
		min-width: 24px;
		max-width: 24px;
		min-height: 24px;
		max-height: 24px;
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
