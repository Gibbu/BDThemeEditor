<script lang="ts">
	import { themes } from '$data/themes';
	import { tooltip } from 'svooltip';
	import { Icon } from '@steeze-ui/svelte-icon';
	import { MagnifyingGlass, XMark } from '@steeze-ui/heroicons';

	import { getSlug } from '$lib/utils';
	import { MetaData, Button } from '$components/common';
	import { Developer } from '$components/editor';

	import type { Feature } from '$types/theme';
	import type { Developer as Dev } from '$types/dev';

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
	let developer: Dev;
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
	$: isSelectedFeature = (value: string) => selectedFeatures.includes(value as Feature);

	const setFeature = (value: string) => {
		const _value = value as Feature;

		if (selectedFeatures.includes(_value)) selectedFeatures = selectedFeatures.filter((el) => el !== _value);
		else selectedFeatures = [...selectedFeatures, _value];
	};
	const setDeveloper = (dev: Dev) => {
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
	<header class="header">
		<div class="wrap">
			<h2 class="title">Select A Theme <span class="count">{filtered.length}</span></h2>
			<div class="features">
				{#each features as { value, label, description }}
					<button
						type="button"
						class="feature"
						role="checkbox"
						aria-checked={isSelectedFeature(value)}
						on:click={() => setFeature(value)}
						use:tooltip={{ content: description, placement: 'top-start' }}
					>
						<div class="box" />
						{label}
					</button>
				{/each}
			</div>
			<div class="search">
				<div class="search-icon">
					<Icon src={MagnifyingGlass} />
				</div>
				<input
					bind:this={searchEl}
					bind:value={search}
					class="search-box"
					placeholder="Search for name, developer, ect..."
					type="text"
				/>
				{#if search.length}
					<div class="search-reset">
						<Button variant="secondary" on:click={() => (search = '')}>
							<Icon src={XMark} />
						</Button>
					</div>
				{/if}
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
	<footer class="footer">
		<div class="wrap">
			<p>Website created by <a href="https://gibbu.me" target="_blank" rel="noreferrer noopener">Gibbu</a></p>
		</div>
	</footer>
</template>

<style lang="scss">
	.header {
		position: relative;
		padding: 100px 0 64px;
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

	.features {
		display: flex;
		gap: 12px;
		margin: 50px 0 16px;
		flex-wrap: wrap;
	}
	.feature {
		display: flex;
		align-items: center;
		gap: 8px;
		border: 1px solid var(--border-alt);
		padding: 8px 12px;
		border-radius: var(--radius);
		font-size: 14px;
		white-space: nowrap;
		overflow: hidden;
		background: var(--background-tertiary);
		.box {
			display: flex;
			align-items: center;
			justify-content: center;
			min-width: 18px;
			max-width: 18px;
			min-height: 18px;
			max-height: 18px;
			border-radius: 50px;
			border: 1px solid var(--border-alt);
			position: relative;
			&::before {
				content: '';
				width: 10px;
				height: 5px;
				border-left: 2px solid #fff;
				border-bottom: 2px solid #fff;
				rotate: -45deg;
				translate: 0 -1px;
				opacity: 0;
			}
		}
		&[aria-checked='true'] {
			border-color: hsl(var(--accent));
			.box {
				background: hsl(var(--accent) / 0.25);
				border-color: transparent;
				&::before {
					border-color: hsl(var(--accent));
					opacity: 1;
				}
			}
		}
		&:focus-visible {
			outline: 2px solid hsl(var(--accent));
			outline-offset: 2px;
		}
	}
	.search {
		position: relative;
		display: flex;
		align-items: center;
		&-icon {
			width: 20px;
			height: 20px;
			left: 16px;
			position: absolute;
			color: var(--text-tertiary);
		}
		&-box {
			font-size: 14px;
			background: var(--background-tertiary);
			border: 1px solid var(--border-alt);
			border-radius: var(--radius);
			padding: 12px 64px 12px 50px;
			width: 100%;
			&:focus {
				border-color: hsl(var(--accent));
				box-shadow: 0 0 0 5px hsl(var(--accent) / 0.25);
			}
		}
		&-reset {
			position: absolute;
			right: 4px;
		}
	}

	.themes {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(356px, 1fr));
		gap: 32px;
		margin-bottom: 128px;
		flex: 1 0 auto;
	}
	.theme {
		&-head {
			height: 224px;
			display: block;
			overflow: hidden;
			border-radius: var(--radius-lg);
			position: relative;
			transition: outline 0.15s ease, outline-offset 0.15s ease;
			background: var(--background-primary);
			outline: 3px solid transparent;
			outline-offset: 0;
			&:hover,
			&:focus {
				outline-color: hsl(var(--accent));
				outline-offset: 4px;
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
		border-radius: var(--radius);
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
		&:focus-visible {
			outline: 2px solid hsl(var(--accent));
			outline-offset: 2;
		}
	}

	.footer {
		padding: 75px 0 50px;
		position: relative;
		font-size: 14px;
		user-select: none;
		&::before {
			content: '';
			position: absolute;
			inset: 0;
			background: url('/images/background.png');
			mask: linear-gradient(transparent, black);
			opacity: 0.75;
		}
		.wrap {
			position: relative;
			z-index: 1;
			opacity: 0.5;
			display: flex;
			justify-content: space-between;
		}
		a {
			color: hsl(var(--accent));
			&:hover {
				text-decoration: underline;
			}
			&:focus-visible {
				outline: 2px solid hsl(var(--accent));
				outline-offset: 2px;
				border-radius: var(--radius);
			}
		}
	}
</style>
