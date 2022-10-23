<script lang="ts">
	import { themes } from '$data/themes';

	import { getSlug } from '$lib/utils';
	import { MetaData, Input, Checkbox } from '$components/common';

	import type { Feature } from '$types/theme';

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

	const setFeature = (e: Event) => {
		const value = (e.target as HTMLInputElement).value as Feature;

		if (selectedFeatures.includes(value)) selectedFeatures = selectedFeatures.filter((el) => el !== value);
		else selectedFeatures = [...selectedFeatures, value];
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

<template>
	<h2 class="title">Available themes <span class="count">{filtered.length}</span></h2>

	<main class="container">
		<aside class="sidebar">
			<div class="group">
				<Input bind:self={searchEl} bind:value={search} placeholder="Quick search" />
			</div>
			<div class="group">
				<h4 class="sidebar-title">Features</h4>

				<ul class="features">
					{#each features as { value, label, description }}
						<li class="feature">
							<Checkbox {value} {label} on:change={setFeature} />
							<small class="feature-description">{description}</small>
						</li>
					{/each}
				</ul>
			</div>
		</aside>
		<section class="themes">
			{#each filtered as theme (theme.name)}
				{@const href = `/theme/${getSlug(theme.name)}`}
				<div class="theme">
					<a {href} class="theme-head">
						<img loading="lazy" src={theme.thumbnail} alt="Theme thumbnail" class="theme-thumbnail" />
					</a>
					<div class="theme-body">
						<div class="theme-info">
							<a {href} class="theme-name">{theme.name}</a>
							<p class="theme-description truncate">{theme.meta.description}</p>
						</div>
						<a
							href="https://github.com/{theme.developer.github}"
							target="_blank"
							rel="noreferrer noopener"
							class="developer"
						>
							<img
								src="https://github.com/{theme.developer.github}.png"
								alt="Theme developer"
								class="developer-avatar"
							/>
							<span class="developer-name">{theme.developer.name}</span>
						</a>
					</div>
				</div>
			{/each}
		</section>
	</main>
</template>

<style lang="scss">
	.container {
		display: grid;
		align-items: flex-start;
		grid-template-columns: 250px 1fr;
		gap: 32px;
	}

	.title {
		font-family: var(--font-display);
		color: var(--text-primary);
		font-weight: 600;
		font-size: 36px;
		padding: 60px 0;
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

	.sidebar {
		position: sticky;
		top: 32px;
		&-title {
			font-family: var(--font-display);
			margin-bottom: 8px;
			color: var(--text-primary);
		}
	}

	.group:not(:last-child) {
		border-bottom: 1px solid var(--border);
		padding-bottom: 16px;
		margin-bottom: 16px;
	}
	.features {
		list-style: none;
		margin: 0;
		padding: 0;
	}
	.feature {
		&-description {
			color: var(--text-tertiary);
		}
		&:not(:last-child) {
			margin-bottom: 16px;
		}
	}

	.theme {
		display: flex;
		gap: 16px;
		&:not(:last-child) {
			border-bottom: 1px solid var(--border);
			padding-bottom: 16px;
			margin-bottom: 16px;
		}
		&-head {
			transition: 0.15s ease box-shadow, 0.15s ease transform;
			&:hover {
				box-shadow: var(--shadow);
				transform: translateY(-5px);
			}
		}
		&-thumbnail {
			display: block;
			width: 100%;
			aspect-ratio: 16 / 9;
			max-width: 256px;
			border-radius: var(--radius-lg);
		}
		&-body {
			padding: 12px;
		}
		&-name {
			font-family: var(--font-display);
			font-weight: 800;
			font-size: 18px;
			&:hover {
				color: var(--text-link);
				text-decoration: underline;
			}
		}
		&-description {
			color: var(--text-tertiary);
			font-size: 14px;
			margin: 8px 0 16px;
		}
	}
	.developer {
		display: flex;
		align-items: center;
		gap: 8px;
		&-avatar {
			display: block;
			border-radius: 50%;
			min-width: 32px;
			min-height: 32px;
			max-width: 32px;
			max-height: 32px;
		}
		&:hover {
			color: var(--text-link);
			text-decoration: underline;
		}
	}
</style>
