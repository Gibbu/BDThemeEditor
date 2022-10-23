<script lang="ts">
	import { browser } from '$app/environment';
	import { error } from '@sveltejs/kit';
	import { goto } from '$app/navigation';
	import { store, editorLoaded, previewLoaded } from '$lib/stores';
	import { onMount, onDestroy } from 'svelte';
	import { getSlug } from '$lib/utils';
	import { Icon } from '@steeze-ui/svelte-icon';
	import * as Icons from '@steeze-ui/heroicons';
	import { tooltip } from 'svooltip';
	import NProgress from 'nprogress';

	import { Preview, Component, Download, Upload, Addons, OptionalImports } from '$components/editor';
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

	onMount(() => ($editorLoaded = true));
	onDestroy(() => ($editorLoaded = false));

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
		{ icon: Icons.PuzzlePiece, label: 'Addons', value: 'addons', enabled: !!theme.addons?.length }
	];
	let activeTab: TabType = 'vars';
	let activeVar: number = 0;
	let fullscreen: boolean = false;
	let devWarning: boolean = browser && localStorage.dev_warning;
	const modals = {
		back: false,
		bug: false,
		download: false,
		upload: false
	};

	const toggleModal = (modal: keyof typeof modals) => {
		modals[modal] = !modals[modal];
	};
	const getIcon = (icon: string) => {
		const _icon = Icons[icon as keyof typeof Icons];
		if (!_icon) throw new Error('`' + icon + '`' + ' is not an available icon from Heroicons.');

		return _icon;
	};

	const back = () => {
		NProgress.start();
		modals.back = false;
		setTimeout(async () => {
			await goto('/themes');
		}, 250);
	};

	const closeDevWarning = () => {
		devWarning = true;
		localStorage.dev_warning = 'true';
	};
</script>

<MetaData
	title={theme.name}
	description="Customize {theme.name} by {theme.developer.name} with a easy to use interface."
	image={theme.thumbnail}
/>

<Modal bind:visible={modals.back} title="Back to theme selection?" size="small">
	<p>Any changes will <u>NOT</u> be saved.</p>

	<svelte:fragment slot="footer">
		<Button variant="secondary" on:click={() => (modals.back = false)}>Close</Button>
		<Button variant="primary" on:click={back}>
			<Icon src={Icons.ArrowUturnLeft} />
			Go back
		</Button>
	</svelte:fragment>
</Modal>

<Modal bind:visible={modals.bug} title="Found a bug with the editor?" size="small">
	<div class="bugs">
		<a href="https://discord.gg/ZHthyCw" target="_blank" rel="noreferrer noopener" class="bug">
			<Icon src={Icons.ChatBubbleBottomCenterText} size="32px" />
			<p class="bug-title">Discord Server</p>
		</a>
		<a href="https://github.com/Gibbu/BDThemeEditor/issues" target="_blank" rel="noreferrer noopener" class="bug">
			<Icon src={Icons.BugAnt} size="32px" />
			<p class="bug-title">GitHub Issue</p>
		</a>
	</div>
</Modal>

<Download bind:visible={modals.download} />

<Upload bind:visible={modals.upload} />

<template>
	<div class="editor" class:fullscreen>
		<nav class="nav">
			<div class="nav-left">
				<div class="back">
					<button
						type="button"
						class="nav-btn"
						use:tooltip={{ content: 'Back', placement: 'bottom-start' }}
						on:click={() => (modals.back = true)}
					>
						<Icon src={Icons.ArrowLeft} size="18px" />
					</button>
				</div>
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
					<button type="button" class="nav-btn" on:click={() => toggleModal('upload')}>
						<Icon src={Icons.ArrowUpTray} />
						Upload
					</button>
					<button type="button" class="nav-btn" on:click={() => toggleModal('download')}>
						<Icon src={Icons.ArrowDownTray} />
						Download
					</button>
				</div>
			</div>
			<div class="nav-right">
				<button class="nav-btn" type="button" on:click={() => (fullscreen = !fullscreen)}>
					<Icon src={Icons.ArrowsPointingOut} />
					{fullscreen ? 'Show controls' : 'Fullscreen Previewer'}
				</button>
				<button
					class="nav-btn"
					type="button"
					use:tooltip={{ content: 'Report a bug with the editor', offset: 20 }}
					on:click={() => toggleModal('bug')}
				>
					<Icon src={Icons.BugAnt} size="18px" />
				</button>
			</div>
		</nav>
		<main class="container">
			<aside class="sidebar">
				{#if $editorLoaded && !devWarning}
					<div class="devWarning">
						<div class="markdown">
							<p>Before you start editing, just a little heads up:</p>
							<p>
								If you find any bugs with this editor, please do not annoy the theme developers. They have no
								affiliation with the editor.
							</p>
							<p>
								Join my <a href="https://discord.gg/ZHthyCw" target="_blank" rel="noreferrer noopener">Discord Server</a
								>
								and tell me about them there or open a
								<a href="https://github.com/Gibbu/BDThemeEditor/issues" target="_blank" rel="noreferrer noopener"
									>GitHub issue</a
								>.
							</p>
							<p>
								After closing this, you can still report a bug by pressing the button at the top right of your screen.
							</p>
						</div>
						<Button variant="primary" on:click={closeDevWarning}>
							<Icon src={Icons.Check} size="18px" />
							I Understand
						</Button>
					</div>
				{/if}

				<div class="sidebar-inner">
					{#if !$editorLoaded || !$previewLoaded}
						<p class="loading">
							Waiting for {$editorLoaded ? 'previewer' : 'editor'} to load...
						</p>
					{/if}
					<section class="tab" class:active={activeTab === 'vars'}>
						<div class="scroller">
							<div class="vars scroller-inner">
								{#each $store.variables as { icon, title }, i}
									<button
										type="button"
										class="vars-btn"
										class:active={activeVar === i}
										use:tooltip={{ content: title, placement: 'right', offset: 25 }}
										on:click={() => (activeVar = i)}
									>
										<Icon src={getIcon(icon)} size="24px" />
									</button>
								{/each}
							</div>
						</div>
						<div class="scroller" style="flex: 1;">
							{#each $store.variables as group, i}
								<div class="scroller-inner vars-options padding" class:active={activeVar === i}>
									{#each group.inputs as setting}
										<div class="option">
											<Component data={setting} />
										</div>
									{/each}
								</div>
							{/each}
						</div>
					</section>

					{#if tabs[1].enabled}
						<section class="scroller tab" class:active={activeTab === 'imports'}>
							<div class="scroller-inner">
								<OptionalImports />
							</div>
						</section>
					{/if}

					{#if tabs[2].enabled}
						<section class="scroller tab" class:active={activeTab === 'addons'}>
							<div class="scroller-inner">
								<Addons />
							</div>
						</section>
					{/if}
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
			&::before {
				content: '';
				position: absolute;
				left: 0;
				bottom: -10px;
				width: 100%;
				height: 1px;
			}
			&:hover {
				background: var(--button-ghost-hover);
				&::before {
					background: var(--border-alt);
				}
			}
			&.active {
				color: var(--text-primary);
				&::before {
					background: hsl(var(--accent));
				}
			}
		}
		&-left {
			display: flex;
			align-items: center;
			height: 100%;
		}
		&-right {
			padding-right: 8px;
			gap: 8px;
			display: flex;
			align-items: center;
		}
	}
	.back {
		width: var(--editor-vars-width);
		border-right: 1px solid var(--border);
		height: 100%;
		display: flex;
		button {
			margin: auto;
		}
	}
	.tabs {
		display: flex;
		align-items: center;
		height: 100%;
		gap: 8px;
		padding-left: 8px;
	}
	.tab {
		display: none;
		width: 100%;
		position: relative;
		&.active {
			display: flex;
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
		&-inner {
			display: flex;
			height: 100%;
			position: relative;
		}
	}
	.loading {
		position: absolute;
		inset: 0;
		display: flex;
		align-items: center;
		justify-content: center;
		z-index: 1;
		user-select: none;
		&::before {
			content: '';
			position: absolute;
			inset: 0;
			background: var(--background-tertiary);
			opacity: 0.75;
			z-index: -1;
		}
	}
	.devWarning {
		padding: 16px;
		background: var(--background-primary);
		border-bottom: 1px solid var(--border);
		display: flex;
		flex-direction: column;
		align-items: flex-end;
		gap: 16px;
	}

	.preview {
		width: 100%;
		padding: 16px;
	}

	.vars {
		display: flex;
		flex-direction: column;
		align-items: center;
		height: 100%;
		min-width: var(--editor-vars-width);
		max-width: var(--editor-vars-width);
		border-right: 1px solid var(--border);
		padding: 10px 0;
		gap: 8px;
		&-btn {
			--size: calc(var(--editor-vars-width) - 18px);
			width: var(--size);
			height: var(--size);
			border-radius: var(--radius);
			display: flex;
			align-items: center;
			justify-content: center;
			position: relative;
			&::before {
				content: '';
				position: absolute;
				top: 0;
				right: -8px;
				height: 100%;
				width: 1px;
			}
			&:hover {
				background: var(--button-ghost-hover);
				&::before {
					background: var(--border-alt);
				}
			}
			&.active {
				color: var(--text-primary);
				&::before {
					background: hsl(var(--accent));
				}
			}
		}
		&-options {
			display: none;
			&.active {
				display: flex;
				flex-direction: column;
				gap: 24px;
			}
		}
	}

	.bugs {
		display: flex;
		gap: 16px;
	}
	.bug {
		flex: 1;
		padding: 64px 0;
		border: 1px solid var(--border);
		border-radius: var(--radius);
		text-align: center;
		display: flex;
		align-items: center;
		flex-direction: column;
		gap: 16px;
		&:hover {
			background: var(--button-ghost-hover);
		}
	}
</style>
