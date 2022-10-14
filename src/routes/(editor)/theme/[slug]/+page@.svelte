<script lang="ts">
	import { error } from '@sveltejs/kit';
	import { goto } from '$app/navigation';
	import { store, isMounted } from '$lib/stores';
	import { onMount, onDestroy } from 'svelte';
	import { getSlug } from '$lib/utils';
	import { Icon } from '@steeze-ui/svelte-icon';
	import * as Icons from '@steeze-ui/heroicons';
	import { tooltip } from 'svooltip';

	import { Preview } from '$components/editor';
	import { MetaData, Modal, Button } from '$components/common';

	// types
	import type { ITheme } from '$types/theme';
	import type { PageData } from './$types';
	import type { IconSource } from '@steeze-ui/svelte-icon/types';
	type TabType = 'vars' | 'imports' | 'addons' | 'upload' | 'download';

	export let data: PageData;

	// Data
	import { themes } from '$data/themes';

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

	const tabs: {
		icon: IconSource;
		label: string;
		value: TabType;
		enabled: boolean;
	}[] = [
		{ icon: Icons.CodeBracket, label: 'Variables', value: 'vars', enabled: true },
		{
			icon: Icons.CubeTransparent,
			label: 'Optional Imports',
			value: 'imports',
			enabled: !!theme.optionalImports?.length
		},
		{ icon: Icons.PuzzlePiece, label: 'Addons', value: 'addons', enabled: !!theme.addons?.length },
		{ icon: Icons.ArrowUpTray, label: 'Upload', value: 'upload', enabled: true },
		{ icon: Icons.ArrowDownTray, label: 'Download', value: 'download', enabled: true }
	];
	let activeTab: TabType = 'vars';
	let activeVar: number = 0;
	let fullscreen: boolean = false;
	let backModal: boolean = false;

	const getIcon = (icon: string): IconSource => {
		const _icon = Icons[icon as keyof typeof Icons];
		if (!_icon) throw new Error('`' + icon + '`' + ' is not an available icon from Heroicons.');

		return _icon;
	};

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
			<Icon src={Icons.ArrowUturnLeft} />
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
					<Icon src={Icons.ArrowLeft} size="18px" />
				</button>
				<div class="nav-divider" />
				<div class="tabs">
					{#each tabs as { icon, label, enabled, value }}
						{#if enabled}
							<button
								type="button"
								class="nav-btn"
								class:active={activeTab === value}
								on:click={() => (activeTab = value)}
							>
								<Icon src={icon} />
								{label}
							</button>
						{/if}
					{/each}
				</div>
			</div>
			<button class="nav-btn" type="button" on:click={() => (fullscreen = !fullscreen)}>
				<Icon src={Icons.ArrowsPointingOut} />
				{fullscreen ? 'Show controls' : 'Fullscreen Previewer'}
			</button>
		</nav>
		<main class="container">
			<aside class="sidebar">
				<section class="scroller tab" class:active={activeTab === 'vars'}>
					<div class="vars scroller-inner">
						{#each $store.variables as { icon, title }, i}
							<button
								type="button"
								class="vars-btn"
								use:tooltip={{ content: title, placement: 'right' }}
								on:click={() => (activeVar = i)}
							>
								<Icon src={getIcon(icon)} size="24px" />
							</button>
						{/each}
					</div>
					<div class="scroller-inner" />
				</section>

				{#if tabs[1].enabled}
					<section class="scroller tab" class:active={activeTab === 'imports'}>
						<p>Optional Imports</p>
					</section>
				{/if}

				{#if tabs[2].enabled}
					<section class="scroller tab" class:active={activeTab === 'addons'}>
						<p>Addons</p>
					</section>
				{/if}

				<section class="scroller tab" class:active={activeTab === 'upload'}>
					<p>Upload</p>
				</section>

				<section class="scroller tab" class:active={activeTab === 'download'}>
					<p>Download</p>
				</section>
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

	.vars {
		display: flex;
		flex-direction: column;
		height: 100%;
		width: var(--editor-vars-width);
	}
</style>
