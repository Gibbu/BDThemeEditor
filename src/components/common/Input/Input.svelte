<script lang="ts">
	export let value: string | number = '';

	/**
	 * Input type.\
	 * Default = `text`
	 */
	export let inputType: 'text' | 'number' = 'text';

	/** Placeholder of the input */
	export let placeholder: string | null = null;

	/** The error message to be displayed under the input if available. */
	export let error: string | undefined = undefined;

	/** Minimum number when the `inputType` is set to `number` */
	export let min: number = 0;

	/** Maximum number when `inputType` is set to `number` */
	export let max: number | undefined = undefined;

	/** The step between numbers when `inputType` is set to `number` */
	export let step: number | undefined = undefined;

	export let self: HTMLInputElement | undefined = undefined;
</script>

<template>
	{#if inputType === 'text'}
		<input
			bind:this={self}
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
		<small class="error">{error}</small>
	{/if}
</template>

<style lang="scss">
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
		&:not(:disabled) {
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
			--outline-colour: red;
		}
	}
</style>
