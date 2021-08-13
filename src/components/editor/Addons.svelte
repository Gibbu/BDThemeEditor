<script>
	import {THEME, preview} from '$lib/stores';

	import type {IAddon} from '$types/addon';

	import Component from './Component.svelte';

	$: states = {
		hsl: $THEME.addons.some(addon => addon.selector === 'hsl' && addon.use),
		columns: $THEME.addons.some(addon => addon.selector === 'columns' && addon.use),
		rs: $THEME.addons.some(addon => addon.selector === 'rs' && addon.use)
	}

	/**
	 * Toggles checkboxes, if other checkboxes use the same `group`, uncheck them.
	 */
	const toggle = (e: any): void => {
		const checkboxes: NodeListOf<HTMLInputElement> = document.querySelectorAll(`[name="${e.target.name}"]`);

		checkboxes.forEach(checkbox => {
			const addon = $THEME.addons.find(obj => obj.selector === checkbox.value);

			if (e.target.value !== checkbox.value) {
				checkbox.checked = false;
				states[checkbox.value] = false;
			}
			if (e.target.value === checkbox.value && checkbox.checked == true && checkbox.checked) {
				applyAddon(addon);
				states[checkbox.value] = true;
			} else {
				removeAddon(addon);
				states[checkbox.value] = false;
			}
		})
	}

	/**
	 * Adds addon to previewer and enables the addon in the `THEME` store.
	 */
	const applyAddon = (addon: IAddon): void => {
		$THEME.addons.forEach(obj => {
			if (obj.selector === addon.selector) {
				obj.use = true;
			}
		})

		addon.previewUrl.forEach(url => {
			if (!$preview.querySelector(`.${addon.selector}`)) {
				let style: HTMLStyleElement = document.createElement('style');
				style.setAttribute('class', addon.selector);
				style.textContent = `@import url('${url}');`;

				$preview.querySelector('head').appendChild(style);
			}
		})
	}

	/**
	 * Removes addon to previewer and disables the addon in the `THEME` store.
	 */
	const removeAddon = (addon: IAddon): void => {
		if ($preview.querySelector(`.${addon.selector}`)) {
			$preview.querySelectorAll(`.${addon.selector}`).forEach(el => el.remove());
		}

		$THEME.addons.forEach(obj => {
			if (obj.selector === addon.selector) {
				obj.use = false;
			}
		})
	}
</script>

<template>
	{#each $THEME.addons as addon}
		<div class="addon">
			<div class="addon-header">
				<input type="checkbox" class="addon-checkbox" name={addon.group} value={addon.selector} checked={states[addon.selector]} on:change={toggle}>
				<div class="addon-info">
					<div class="addon-meta">
						<h4 class="addon-name">{addon.name}</h4>
						<p class="addon-description">{addon.description}</p>
					</div>
					<a href="https://github.com/{addon.developer.github}" target="_blank" rel="noreferrer" class="addon-developer">
						<img src="https://github.com/{addon.developer.github}.png" alt="Developer avatar" class="addon-avatar">
					</a>
				</div>
			</div>
			<div class="addon-body" class:active={states[addon.selector]}>
				{#each addon.variables as data}
					<div class="option">
						<Component {data} />
					</div>
				{/each}
			</div>
		</div>
	{/each}
</template>

<style lang="scss">
	.addon {
		margin: rem(-16);
		padding: rem(16);
		border-bottom: rem(1) solid var(--border);
		&-header {
			display: flex;
			justify-content: space-between;
		}
		&-checkbox {
			appearance: none;
			max-width: rem(24);
			min-width: rem(24);
			max-height: rem(24);
			min-height: rem(24);
			border-radius: rem(4);
			background-color: var(--c4);
			cursor: pointer;
			&:hover {
				background-color: var(--c7);
			}
			&:checked {
				background-color: hsl(var(--accent));
				background-image: url('data:image/svg+xml; utf-8,<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="black"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>');
			}
		}
		&-info {
			margin-left: rem(16);
			display: flex;
			user-select: none;
		}
		&-meta {
			margin-right: rem(16);
		}
		&-description {
			font-size: rem(14);
			color: var(--text-tertiary);
			margin-top: rem(4);
		}
		&-developer {
			display: block;
			min-width: rem(32);
			max-width: rem(32);
			min-height: rem(32);
			max-height: rem(32);
			overflow: hidden;
			border-radius: 50%;
			&:hover {
				box-shadow: 0 0 0 rem(2) hsl(var(--accent));
			}
		}
		&-avatar {
			width: 100%;
			height: 100%;
		}

		&-body {
			display: none;
			margin-top: rem(16);
			&.active {
				display: block;
			}
		}

		&:not(:last-child) {
			padding-bottom: rem(16);
			margin-bottom: rem(16);
		}
	}

	.option:not(:last-child) {
		margin-bottom: rem(16);
	}
</style>