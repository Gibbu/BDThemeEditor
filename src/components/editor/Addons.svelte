<script lang="ts">
	import { store } from '$lib/stores';
	import { preview } from '$lib/preview';

	import type { Addon } from '$types/addon';

	import Component from './Component.svelte';
	import { Checkbox } from '../common';

	$: states = {
		hsl: $store.addons.some((addon) => addon.selector === 'hsl' && addon.use),
		columns: $store.addons.some((addon) => addon.selector === 'columns' && addon.use),
		rs: $store.addons.some((addon) => addon.selector === 'rs' && addon.use),
		discolored: $store.addons.some((addon) => addon.selector === 'discolored' && addon.use)
	};

	$: getState = (state: string) => states[state as keyof typeof states];

	// Toggles checkboxes, if other checkboxes use the same `group`, uncheck them.
	const toggle = (e: any): void => {
		const checkboxes: NodeListOf<HTMLInputElement> = document.querySelectorAll(`[name="${e.target.name}"]`);

		checkboxes.forEach((checkbox) => {
			const addon = $store.addons.find((obj) => obj.selector === checkbox.value)!;

			if (e.target.value !== checkbox.value) {
				checkbox.checked = false;
				states[checkbox.value as keyof typeof states] = false;
			}
			if (e.target.value === checkbox.value && checkbox.checked == true && checkbox.checked) {
				applyAddon(addon);
				states[checkbox.value as keyof typeof states] = true;
			} else {
				removeAddon(addon);
				states[checkbox.value as keyof typeof states] = false;
			}
		});
	};

	// Adds addon to previewer and enables the addon in the `THEME` store.
	const applyAddon = (addon: Addon): void => {
		$store.addons.forEach((obj) => {
			if (obj.selector === addon.selector) {
				obj.use = true;
			}
		});

		addon.previewUrl.forEach((url) => {
			preview({
				action: 'addAddon',
				class: addon.selector,
				text: url
			});
		});
	};

	// Removes addon to previewer and disables the addon in the `THEME` store.
	const removeAddon = (addon: Addon): void => {
		preview({
			action: 'removeAddon',
			class: addon.selector
		});

		$store.addons.forEach((obj) => {
			if (obj.selector === addon.selector) {
				obj.use = false;
			}
		});
	};
</script>

<template>
	{#each $store.addons as addon}
		<div class="addon">
			<div class="addon-header">
				<div class="addon-checkbox">
					<Checkbox name={addon.group} value={addon.selector} label={addon.name} on:change={toggle} />
				</div>
				<a href="https://github.com/{addon.developer.github}" target="_blank" rel="noreferrer" class="addon-developer">
					<img src="https://github.com/{addon.developer.github}.png" alt="Developer avatar" class="addon-avatar" />
				</a>
			</div>
			<p class="addon-description">{addon.description}</p>
			{#if addon.variables}
				<div class="addon-body" class:active={getState(addon.selector)}>
					{#each addon.variables as data}
						<div class="option">
							<Component {data} addon />
						</div>
					{/each}
				</div>
			{/if}
		</div>
	{/each}
</template>

<style lang="scss">
	.addon {
		padding: 16px;
		border-bottom: 1px solid var(--border);
		&-header {
			display: flex;
			align-items: center;
		}
		&-checkbox {
			flex: 1;
		}
		&-description {
			font-size: 14px;
			color: var(--text-tertiary);
			margin-top: 4px;
		}
		&-developer {
			display: block;
			min-width: 32px;
			max-width: 32px;
			min-height: 32px;
			max-height: 32px;
			overflow: hidden;
			border-radius: 50%;
			&:hover {
				box-shadow: 0 0 0 2px hsl(var(--accent));
			}
		}
		&-avatar {
			width: 100%;
			height: 100%;
		}

		&-body {
			display: none;
			margin-top: 16px;
			&.active {
				display: block;
			}
		}
	}

	.option:not(:last-child) {
		margin-bottom: 16px;
	}
</style>
