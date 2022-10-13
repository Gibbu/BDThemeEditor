<script lang="ts">
	import { goto } from '$app/navigation';
	import { store, isMounted } from '$lib/stores';
	import { onMount, onDestroy } from 'svelte';
	import { getSlug } from '$lib/utils';
	import { Icon } from '@steeze-ui/svelte-icon';
	import {
		ArrowDownTray,
		ArrowUpTray,
		CodeBracket,
		CubeTransparent,
		PuzzlePiece,
		ArrowsPointingOut,
		ArrowUturnLeft,
		ArrowLeft
	} from '@steeze-ui/heroicons';
	import { tooltip } from 'svooltip';

	import { Preview } from '$components/editor';
	import { MetaData, Modal, Button } from '$components/common';

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
	let fullscreen: boolean = false;
	let backModal: boolean = false;

	const back = () => {
		backModal = false;
		setTimeout(async () => {
			await goto('/themes');
		}, 250);
	};
</script>

<MetaData
	title={theme.name}
	description="Customize {theme.name} by {theme.developer.name} with a easy to use interface."
	image={theme.thumbnail}
/>

<Modal bind:visible={backModal} title="Back to theme selection?" size="small">
	<p>Any changes will <u>NOT</u> be saved.</p>

	<svelte:fragment slot="footer">
		<Button variant="secondary" on:click={() => (backModal = false)}>Close</Button>
		<Button variant="primary" on:click={back}>
			<Icon src={ArrowUturnLeft} />
			Go back
		</Button>
	</svelte:fragment>
</Modal>

<template>
	<div class="editor" class:fullscreen>
		<nav class="nav">
			<div class="nav-left">
				<button
					type="button"
					class="nav-btn"
					use:tooltip={{ content: 'Back', placement: 'bottom-start' }}
					on:click={() => (backModal = true)}
				>
					<Icon src={ArrowLeft} size="18px" />
				</button>
				<div class="nav-divider" />
				<div class="tabs">
					{#each tabs as { icon, label, enabled }, i}
						{#if enabled}
							<button type="button" class="nav-btn" class:active={activeTab === i} on:click={() => (activeTab = i)}>
								<Icon src={icon} />
								{label}
							</button>
						{/if}
					{/each}
				</div>
			</div>
			<button class="nav-btn" type="button" on:click={() => (fullscreen = !fullscreen)}>
				<Icon src={ArrowsPointingOut} />
				{fullscreen ? 'Show controls' : 'Fullscreen Previewer'}
			</button>
		</nav>
		<main class="container">
			<aside class="sidebar">
				<div class="scroller">
					{#each tabs as { enabled, label }, i}
						{#if enabled}
							<div class="tab" class:active={activeTab === i}>
								{label}
							</div>
						{/if}
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
		&.fullscreen {
			.sidebar {
				display: none;
			}
			.preview {
				padding: 0;
			}
		}
	}

	.nav {
		height: var(--editor-nav-height);
		background: var(--background-tertiary);
		border-bottom: 1px solid var(--border);
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 8px;
		&-btn {
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
		&-left {
			display: flex;
			align-items: center;
		}
		&-divider {
			height: calc(var(--editor-nav-height) / 2);
			margin: 0 8px;
			width: 1px;
			background: var(--border);
		}
	}
	.tabs {
		display: flex;
		align-items: center;
		height: 100%;
		gap: 8px;
	}
	.tab {
		display: none;
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
		padding: 16px;
	}
</style>
