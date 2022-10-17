<script lang="ts">
	import { store } from '$lib/stores';
	import { preview } from '$lib/preview';

	import type { IAddon } from '$types/addon';

	import Component from './Component.svelte';

	$: states = {
		hsl: $store.addons.some((addon) => addon.selector === 'hsl' && addon.use),
		columns: $store.addons.some((addon) => addon.selector === 'columns' && addon.use),
		rs: $store.addons.some((addon) => addon.selector === 'rs' && addon.use),
		discolored: $store.addons.some((addon) => addon.selector === 'discolored' && addon.use)
	};

	/**
	 * Toggles checkboxes, if other checkboxes use the same `group`, uncheck them.
	 */
	const toggle = (e: any): void => {
		const checkboxes: NodeListOf<HTMLInputElement> = document.querySelectorAll(`[name="${e.target.name}"]`);

		checkboxes.forEach((checkbox) => {
			const addon = $store.addons.find((obj) => obj.selector === checkbox.value)!;

			if (e.target.value !== checkbox.value) {
				checkbox.checked = false;
				// @ts-ignore
				states[checkbox.value] = false;
			}
			if (e.target.value === checkbox.value && checkbox.checked == true && checkbox.checked) {
				applyAddon(addon);
				// @ts-ignore
				states[checkbox.value] = true;
			} else {
				removeAddon(addon);
				// @ts-ignore
				states[checkbox.value] = false;
			}
		});
	};

	/**
	 * Adds addon to previewer and enables the addon in the `THEME` store.
	 */
	const applyAddon = (addon: IAddon): void => {
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

	/**
	 * Removes addon to previewer and disables the addon in the `THEME` store.
	 */
	const removeAddon = (addon: IAddon): void => {
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
				<input
					type="checkbox"
					class="addon-checkbox"
					name={addon.group}
					value={addon.selector}
					checked={states[addon.selector]}
					on:change={toggle}
				/>
				<div class="addon-info">
					<div class="addon-meta">
						<h4 class="addon-name">{addon.name}</h4>
						<p class="addon-description">{addon.description}</p>
					</div>
					<a
						href="https://github.com/{addon.developer.github}"
						target="_blank"
						rel="noreferrer"
						class="addon-developer"
					>
						<img src="https://github.com/{addon.developer.github}.png" alt="Developer avatar" class="addon-avatar" />
					</a>
				</div>
			</div>
			{#if addon.variables}
				<div class="addon-body" class:active={states[addon.selector]}>
					{#each addon.variables as data}
						<div class="option">
							<Component {data} />
						</div>
					{/each}
				</div>
			{/if}
		</div>
	{/each}
</template>

<style lang="scss">
	.addon {
		margin: -16px;
		padding: 16px;
		border-bottom: 1px solid var(--border);
		&-header {
			display: flex;
		}
		&-checkbox {
			appearance: none;
			max-width: 24px;
			min-width: 24px;
			max-height: 24px;
			min-height: 24px;
			border-radius: 4px;
			background-color: var(--background-primary-alt);
			cursor: pointer;
			&:hover {
				background-color: var(--background-primary);
			}
			&:checked {
				background-color: hsl(var(--accent));
				background-image: url('data:image/svg+xml; utf-8,<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="black"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>');
			}
		}
		&-info {
			margin-left: 16px;
			display: flex;
			user-select: none;
			justify-content: space-between;
			width: 100%;
		}
		&-meta {
			margin-right: 16px;
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

		&:not(:last-child) {
			padding-bottom: 16px;
			margin-bottom: 16px;
		}
	}

	.option:not(:last-child) {
		margin-bottom: 16px;
	}
</style>
