<script lang="ts">
	import { themes } from '$data/themes';

	import { getSlug } from '$lib/utils';
	import { MetaData, Input, Checkbox, Button } from '$components/common';
	import { Developer } from '$components/editor';

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

<template>
	<div class="container">
		<aside class="sidebar">
			<section class="group">
				<Input bind:self={searchEl} bind:value={search} placeholder="Quick search" />
			</section>
			<section class="group">
				<h4 class="sidebar-title">Features</h4>

				<ul class="features">
					{#each features as { value, label, description }}
						<li class="feature">
							<Checkbox {value} {label} on:change={setFeature} />
							<small class="feature-description">{description}</small>
						</li>
					{/each}
				</ul>
			</section>
		</aside>
		<main class="content">
			<header class="header">
				<div class="pattern" />
				<h2 class="title">Available themes <span class="count">{filtered.length}</span></h2>
			</header>
			<div class="themes">
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
							<img
								src="https://github.com/{theme.developer.github}.png"
								alt="Theme developer"
								class="developer-avatar"
							/>
							<span class="developer-name">{theme.developer.name}</span>
						</button>
					</div>
				{/each}
			</div>
		</main>
	</div>
</template>

<style lang="scss">
	.container {
		display: flex;
		align-items: flex-start;
	}
	.sidebar {
		position: fixed;
		top: 0;
		height: 100%;
		background: var(--background-tertiary);
		padding: 16px;
		min-width: 350px;
		max-width: 350px;
		border-right: 1px solid var(--border);
		&-title {
			font-family: var(--font-display);
			margin-bottom: 12px;
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
			margin-bottom: 24px;
		}
	}

	.content {
		margin-left: 350px;
		width: calc(100% - 350px);
	}

	.header {
		position: relative;
		padding: 64px 0;
	}
	.pattern {
		position: absolute;
		height: 500%;
		width: 100%;
		top: 0;
		left: 0;
		background: url('/images/grid-pattern.png');
		opacity: 0.035;
		mask: linear-gradient(transparent, black);
		rotate: 180deg;
		z-index: -1;
	}
	.title {
		font-family: var(--font-display);
		color: var(--text-primary);
		font-size: 36px;
		display: flex;
		gap: 8px;
		max-width: 1550px;
		margin: 0 auto;
		padding: 0 64px;
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
		grid-template-columns: repeat(auto-fit, minmax(356px, 1fr));
		gap: 32px;
		padding: 0 64px 64px;
		max-width: 1550px;
		margin: 0 auto;
	}
	.theme {
		&-head {
			height: 256px;
			display: block;
			overflow: hidden;
			border-radius: var(--radius-lg);
			position: relative;
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
</style>
