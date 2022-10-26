<script lang="ts">
	import { store } from '$lib/stores';
	import { Checkbox } from '../common';
	import { preview } from '$lib/preview';
	import { getSlug } from '$lib/utils';

	const update = (name: string, enabled: boolean, imports: string[]) => {
		if (!enabled) {
			preview({
				action: 'removeAddon',
				class: getSlug(name)
			});
		} else {
			imports.forEach((el) => {
				preview({
					action: 'addAddon',
					class: getSlug(name),
					text: el
				});
			});
		}
	};
</script>

<template>
	{#each $store.optionalImports as { name, description, enabled, imports }}
		<div class="import">
			<Checkbox label={name} bind:checked={enabled} on:change={() => update(name, enabled, imports)} />
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
