<script>
	export let value: string|number = '';

	/**
	 * Input type.  
	 * Default = `text`
	 */
	export let inputType: 'text'|'number' = 'text';

	export let placeholder: string = null;
</script>

{#if inputType === 'text'}
	<input type="text" class="input" {placeholder} bind:value on:change on:input>
{:else}
	<input type="number" class="input" {placeholder} bind:value on:change on:input>
{/if}

<style lang="scss">
	.input {
		height: rem(38);
		border-radius: rem(4);
		font-size: rem(14);
		border: rem(1) solid var(--border);
		padding: 0 rem(16);
		background: transparent;
		width: 100%;
		transition: .15s ease border-color,
								.15s ease color,
								.15s ease box-shadow;
		&:hover {
			border-color: var(--border-hover);
		}
		&:focus {
			border-color: hsl(var(--accent));
			box-shadow: 0 0 0 5px hsl(var(--accent) / .2);
			color: var(--text-primary);
		}
	}
</style>