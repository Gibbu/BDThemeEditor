<script lang="ts">
	import { createUID } from '$lib/utils';

	export let value: string | number = '';

	/**
	 * Input type.\
	 * Default = `text`
	 */
	export let type: 'text' | 'number' = 'text';

	/** Placeholder of the input */
	export let placeholder: string | null = null;

	/** The error message to be displayed under the input if available. */
	export let error: string | undefined = undefined;

	/** Minimum number when the `type` is set to `number` */
	export let min: number = 0;

	/** Maximum number when `type` is set to `number` */
	export let max: number | undefined = undefined;

	/** The step between numbers when `type` is set to `number` */
	export let step: number | undefined = undefined;

	export let self: HTMLInputElement | undefined = undefined;

	export let label: string | undefined = undefined;
	export let suffix: string | undefined = undefined;

	const { uid } = createUID('textbox');
</script>

<template>
	<div id={uid()} class="container">
		{#if label}
			<label for={uid('input')} class="label">
				{label}
				{#if suffix}
					<small class="suffix">({suffix})</small>
				{/if}
			</label>
		{/if}
		{#if type === 'text'}
			<input
				bind:this={self}
				id={uid('input')}
				type="text"
				class="input"
				class:error
				{placeholder}
				bind:value
				on:change
				on:input
				on:keyup
			/>
		{:else}
			<input
				bind:this={self}
				id={uid('input')}
				type="number"
				class="input"
				class:error
				{placeholder}
				{min}
				{max}
				{step}
				bind:value
				on:change
				on:input
				on:keyup
			/>
		{/if}
		{#if error}
			<small class="message">{error}</small>
		{/if}
	</div>
</template>

<style lang="scss">
	.container {
		position: relative;
	}
	.label {
		display: inline-flex;
		align-items: center;
		margin-bottom: 8px;
	}
	.suffix {
		color: var(--text-tertiary);
		margin-left: 4px;
		font-size: 12px;
	}

	.input {
		border-radius: var(--text-input-roundness);
		border: 1px solid var(--border);
		background-color: var(--background-secondary-alt);
		color: var(--text-secondary);
		font-weight: 500;
		transition: 0.1s ease;
		width: 100%;
		display: flex;
		align-items: center;
		overflow: hidden;
		color: var(--text-primary);
		outline-offset: 2px;
		border-radius: 6px;
		font-size: 14px;
		outline: 0px solid transparent;
		height: 36px;
		padding: 0 12px;

		// Interaction states
		&:not(:disabled, .error) {
			&:hover {
				border-color: var(--border-alt);
			}
			&:focus {
				border-color: hsl(var(--accent));
				outline: 3px solid hsl(var(--accent) / 0.25);
			}
		}

		// Placeholders
		&::placeholder {
			color: var(--text-tertiary);
			opacity: 0.75;
			user-select: none;
		}

		// Disbaled state
		&:disabled {
			opacity: 0.5;
			cursor: not-allowed;
		}

		&::placeholder {
			color: var(--text-tertiary);
			overflow: 0.75;
		}

		&.error {
			border-color: hsl(var(--red));
			&:focus {
				border-color: hsl(var(--red));
				outline: 3px solid hsl(var(--red) / 0.25);
			}
		}
	}
	.message {
		color: hsl(var(--red));
		display: block;
		margin-top: 4px;
	}
</style>
