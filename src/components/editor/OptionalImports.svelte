<script lang="ts">
	import { store } from '$lib/stores';
	import { Checkbox } from '../common';
	import { getSlug } from '$lib/utils';
</script>

<template>
	{#each $store.optionalImports as { name, description, enabled }}
		<div class="import">
			<Checkbox label={name} bind:checked={enabled} />
			<small class="import-description">{description}</small>
		</div>
	{/each}
</template>

<style lang="scss">
	.import {
		padding: 16px;
		border-bottom: 1px solid var(--border);
	}
</style>
