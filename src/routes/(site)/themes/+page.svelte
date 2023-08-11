<script lang="ts">
	import { themes } from '$data/themes';

	import { getSlug } from '$lib/utils';
	import { MetaData, Input, Checkbox, Modal, Button } from '$components/common';
	import { Developer } from '$components/editor';
	import { Icon } from '@steeze-ui/svelte-icon';
	import { Funnel } from '@steeze-ui/heroicons';

	import type { Feature } from '$types/theme';
	import type { IDev } from '$types/dev';

	let search: string = '';
	let selectedFeatures: Feature[] = [];
	const features = [
		{ value: 'background', label: 'Background Image', description: 'Supports a changeable background image.' },
		{ value: 'font', label: 'Custom font(s)', description: 'Support for changing the fonts of Discord.' },
		{
			value: 'transparent',
			label: 'Transparent background',
			description: 'Can see through Discord to view contents behind.'
		},
		{ value: 'solid', label: 'Solid', description: 'Does NOT support a background image.' },
		{ value: 'light', label: 'Light', description: 'Support for Discord Light Theme.' },
		{ value: 'addons', label: 'Addons', description: 'Supports theme addons provided by the editor.' },
		{ value: 'home', label: 'Home button', description: 'Support for a custom home button image.' }
	];
	let searchEl: HTMLInputElement;
	let developer: IDev;
	let developerModal: boolean = false;
	let filterModal: boolean = false;

	$: filtered = themes.filter((el) => {
		const val = search.toLowerCase();

		if (
			!selectedFeatures.some((feature) => !el.features?.includes(feature)) &&
			(el.name.toLowerCase().indexOf(val) !== -1 ||
				el.meta.description.toLowerCase().indexOf(val) !== -1 ||
				el.developer.name.toLowerCase().indexOf(val) !== -1)
		) {
			return el;
		}
	});
	$: isSelectedFeature = (value: string) => selectedFeatures.includes(value as Feature);

	const setFeature = (value: string) => {
		const _value = value as Feature;

		if (selectedFeatures.includes(_value)) selectedFeatures = selectedFeatures.filter((el) => el !== _value);
		else selectedFeatures = [...selectedFeatures, _value];
	};
	const setDeveloper = (dev: IDev) => {
		developer = dev;
		developerModal = true;
	};

	const handleKeys = (e: KeyboardEvent) => {
		if (e.key === '/') {
			e.preventDefault();
			searchEl.focus();
		}
		if (e.key === 'Escape') {
			searchEl.blur();
		}
	};
</script>

<MetaData title="Themes" />
<svelte:window on:keydown={handleKeys} />

<Developer bind:visible={developerModal} {developer} />

<Modal
	bind:visible={filterModal}
	title="Theme Selection filtering"
	description="Select what features you wish your desired theme to have."
>
	<div class="filters">
		{#each features as { value, label, description }}
			<button
				type="button"
				role="checkbox"
				aria-checked={isSelectedFeature(value)}
				class="filter"
				on:click={() => setFeature(value)}
			>
				<p class="filter-label">{label}</p>
				<span class="filter-description">{description}</span>
			</button>
		{/each}
	</div>
</Modal>

<template>
	<header class="header">
		<div class="wrap">
			<h2 class="title">Available themes <span class="count">{filtered.length}</span></h2>
			<div class="header-filters">
				<Input bind:self={searchEl} bind:value={search} placeholder="Quick search" />
				<Button variant="secondary" on:click={() => (filterModal = !filterModal)}>
					<Icon src={Funnel} />
					Filters
				</Button>
			</div>
		</div>
	</header>
	<div class="themes wrap">
		{#each filtered as theme (theme.name)}
			{@const href = `/theme/${getSlug(theme.name)}`}
			<div class="theme">
				<a {href} class="theme-head">
					<img loading="lazy" src={theme.thumbnail} alt="Theme thumbnail" class="theme-thumbnail" />
					<div class="theme-info">
						<p class="theme-name">{theme.name}</p>
						<span class="theme-description truncate">{theme.meta.description}</span>
					</div>
				</a>
				<button type="button" class="developer" on:click={() => setDeveloper(theme.developer)} on:keydown>
					<img src="https://github.com/{theme.developer.github}.png" alt="Theme developer" class="developer-avatar" />
					<span class="developer-name">{theme.developer.name}</span>
				</button>
			</div>
		{/each}
	</div>
</template>

<style lang="scss">
	.header {
		position: relative;
		height: 300px;
		display: flex;
		align-items: center;
		.wrap {
			display: flex;
			justify-content: space-between;
			align-items: center;
		}
		&-filters {
			display: flex;
			gap: 16px;
			align-items: center;
		}
	}
	.title {
		font-family: var(--font-display);
		color: var(--text-primary);
		font-size: 36px;
		display: flex;
		gap: 8px;
	}
	.count {
		font-size: 16px;
		color: var(--text-tertiary);
		&::before {
			content: '(';
		}
		&::after {
			content: ')';
		}
	}

	.themes {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(356px, 1fr));
		gap: 32px;
		margin-bottom: 128px;
	}
	.theme {
		&-head {
			height: 224px;
			display: block;
			overflow: hidden;
			border-radius: var(--radius-lg);
			position: relative;
			transition: translate 0.15s ease, box-shadow 0.15s ease;
			&:hover {
				translate: 0 -5px;
				box-shadow: 0 10px 13px hsl(0 0% 0% / 0.25);
			}
		}
		&-thumbnail {
			aspect-ratio: 16 / 9;
			display: block;
			width: 100%;
		}
		&-info {
			position: absolute;
			bottom: 0;
			left: 0;
			width: 100%;
			padding: 16px;
			background: linear-gradient(transparent, black);
			text-shadow: 0 2px 10px black;
		}
		&-name {
			font-family: var(--font-display);
			font-weight: 800;
			font-size: 18px;
			color: var(--text-primary);
		}
		&-description {
			font-size: 14px;
			display: block;
		}
	}
	.developer {
		display: inline-flex;
		align-items: center;
		gap: 8px;
		margin-top: 4px;
		&-avatar {
			display: block;
			border-radius: 50%;
			min-width: 32px;
			min-height: 32px;
			max-width: 32px;
			max-height: 32px;
		}
		&:hover {
			color: hsl(var(--accent));
			text-decoration: underline;
		}
	}

	.filters {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 16px;
	}
	.filter {
		border: 1px solid var(--border);
		border-radius: var(--radius);
		text-align: left;
		padding: 16px;
		&-label {
			color: var(--text-primary);
			font-family: var(--font-display);
			font-weight: 800;
		}
		&-description {
			display: block;
			margin-top: 4px;
			font-size: 14px;
		}
		&:hover {
			border-color: var(--border-alt);
		}
		&:focus {
			outline: 2px solid hsl(var(--accent));
			outline-offset: 2px;
		}
		&[aria-checked='true'] {
			background: hsl(var(--accent) / 0.075);
			border-color: hsl(var(--accent));
			color: var(--text-primary);
		}
	}
</style>
