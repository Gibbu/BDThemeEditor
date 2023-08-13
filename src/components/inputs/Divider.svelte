<script lang="ts">
	export let title: string | undefined = undefined;
	export let description: string | undefined = undefined;
</script>

<template>
	<hr />
	{#if title}
		<h4>{title}</h4>
	{/if}
	{#if description}
		<p>{description}</p>
	{/if}
</template>

<style lang="scss">
	hr {
		height: 1px;
		border: none;
		background: var(--background-primary);
		margin: 0;
	}
	h4 {
		font-family: var(--font-display);
	}
	p {
		font-size: 14px;
		color: var(--text-tertiary);
		margin-top: 8px;
	}
</style>
