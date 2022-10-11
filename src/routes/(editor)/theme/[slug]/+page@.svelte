<script lang="ts">
	import { store, isMounted } from '$lib/stores';
	import { onMount, onDestroy } from 'svelte';
	import { getSlug } from '$lib/utils';
	import { Icon } from '@steeze-ui/svelte-icon';
	import { ArrowDownTray, ArrowUpTray, CodeBracket, CubeTransparent, PuzzlePiece } from '@steeze-ui/heroicons';

	import { Preview } from '$components/editor';
	import { MetaData } from '$components/common';

	// types
	import type { ITheme } from '$types/theme';
	import type { PageData } from './$types';

	export let data: PageData;

	// Data
	import { themes } from '$data/themes';
	import { error } from '@sveltejs/kit';

	const clone: ITheme[] = JSON.parse(JSON.stringify(themes));
	const theme = clone.find((theme) => getSlug(theme.name) === data.slug);

	if (!theme) throw error(500, `Something's wrong, I can feel it.`);

	const varGroups = theme.varGroups && theme.varGroups.length > 0 ? theme.varGroups : [];

	// Construct theme object
	$store = {
		name: theme.name,
		meta: theme.meta,
		developer: theme.developer,
		imports: theme.imports,
		optionalImports: theme.optionalImports || [],
		fonts: theme.fonts || [],
		variables: theme.variables,
		hiddenVars: theme.hiddenVars,
		addons: theme.addons || [],
		varGroups: [':root', ...varGroups]
	};

	onMount(() => ($isMounted = true));
	onDestroy(() => ($isMounted = false));

	const tabs = [
		{ icon: CodeBracket, label: 'Variables', enabled: true },
		{ icon: CubeTransparent, label: 'Optional Imports', enabled: !!theme.optionalImports?.length },
		{ icon: PuzzlePiece, label: 'Addons', enabled: !!theme.addons?.length },
		{ icon: ArrowUpTray, label: 'Import', enabled: true },
		{ icon: ArrowDownTray, label: 'Download', enabled: true }
	];
	let activeTab: number = 0;
</script>

<MetaData
	title={theme.name}
	description="Customize {theme.name} by {theme.developer.name} with a easy to use interface."
	image={theme.thumbnail}
/>

<template>
	<div class="editor">
		<nav class="nav">
			<div class="tabs">
				{#each tabs as { icon, label }, i}
					<button type="button" class="tab-btn" class:active={activeTab === i} on:click={() => (activeTab = i)}>
						<Icon src={icon} />
						{label}
					</button>
				{/each}
			</div>
		</nav>
		<main class="container">
			<aside class="sidebar">
				<div class="scroller">
					{#each tabs as { enabled, label }, i}
						<div class="tab scroller-inner" class:active={activeTab === i}>
							{#if !enabled}
								<p class="tab-disabled">This theme doesn't appear to support <span>{label}</span> at this time.</p>
							{:else}
								{label}
							{/if}
						</div>
					{/each}
				</div>
			</aside>
			<div class="preview">
				<Preview urls={theme.previewUrls} />
			</div>
		</main>
	</div>
</template>

<style lang="scss">
	.editor {
		height: 100vh;
		overflow: hidden;
	}

	.nav {
		height: var(--editor-nav-height);
		background: var(--background-tertiary);
		border-bottom: 1px solid var(--border);
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 8px;
	}
	.tabs {
		display: flex;
		align-items: center;
		height: 100%;
		gap: 8px;
	}
	.tab-btn {
		display: flex;
		align-items: center;
		gap: 8px;
		padding: 8px 12px;
		border-radius: var(--radius);
		position: relative;
		:global(svg) {
			width: 20px;
		}
		&:hover {
			background: var(--button-ghost-hover);
		}
		&.active {
			color: var(--text-primary);
			&::before {
				content: '';
				position: absolute;
				left: 0;
				bottom: -10px;
				width: 100%;
				height: 1px;
				background: hsl(var(--accent));
			}
		}
	}
	.tab {
		display: none;
		&-disabled {
			text-align: center;
			max-width: 75%;
			margin: 0 auto;
			padding: 32px 0;
			opacity: 0.5;
			user-select: none;
			pointer-events: none;
			line-height: 1.5;
			span {
				color: var(--text-primary);
				text-decoration: underline;
			}
		}
		&.active {
			display: block;
		}
	}

	.container {
		display: flex;
		height: calc(100% - var(--editor-nav-height));
	}
	.sidebar {
		min-width: var(--editor-sidebar-width);
		max-width: var(--editor-sidebar-width);
		background: var(--background-tertiary);
		border-right: 1px solid var(--border);
		display: flex;
	}
	.preview {
		width: 100%;
	}
</style>
