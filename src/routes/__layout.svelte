<script>
	import {THEME, isMounted, loaded, history, preview, flash} from '$lib/stores';
	import {browser} from '$app/env';
	import {navigating} from '$app/stores';
	import {goto} from '$app/navigation';
	import {varOutput, createEl} from '$lib/helpers';
	import tooltip from '$lib/tooltip';
	import DLTheme from '$lib/download';
	import Icon, {
		Check,
		ExclamationCircle,
		Refresh,
		Trash,
		DotsVertical,
		Download,
		DesktopComputer,
		ChevronLeft,
		Photograph,
		Sun,
		ColorSwatch,
		MenuAlt1,
		Puzzle,
		Globe,
		Home,
		User,
		Server,
		Cog,
		Chat
	} from 'svelte-hero-icons';
	import NProgress from 'nprogress';
	import dayjs from 'dayjs';
	import relativeTime from 'dayjs/plugin/relativeTime.js';
	import advancedFormat from 'dayjs/plugin/advancedFormat.js';
	import '$scss/app.scss';

	dayjs.extend(relativeTime);
	dayjs.extend(advancedFormat);

	// Components
	import {Button} from '$components/common/Button';
	import {ModalRoot, ModalBody, ModalHeader, ModalFooter} from '$components/common/Modal';
	import {Component, Actions, Addons} from '$components/editor';
	import {Menu, MenuButton, MenuDropdown, MenuGroup, MenuItem} from '$components/common/Menu';
	import {Flash} from '$components/common/Flash';

	// Icons
	const icons = {Photograph, Sun, ColorSwatch, MenuAlt1, Puzzle, Globe, Home, User, Server, Cog, Chat, DesktopComputer}

	$: if ($navigating) {
		NProgress.start();
	} else {
		NProgress.done();
	}

	// Developer warning
	let devWarning: boolean = browser && !localStorage.dev_warning;

	const closeDevWarning = (): void => {
		devWarning = false;
		localStorage.dev_warning = 'true';
	}

	// Browser warning
	let isChrome: boolean = browser && /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
	let visible: boolean = browser && !localStorage.browser_warning;

	const closeWarning = () => {
		visible = false;
		localStorage.browser_warning = true;
	}

	// Active setting
	let activeSetting: number = 0;

	const setSetting = (index: number, modal?: boolean): void => {
		activeSetting = index;
		historyTab = false;

		const userModal: HTMLElement = $preview.querySelector('#modal');
		const userPopout: HTMLElement = $preview.querySelector('#userpopout')

		userModal.style.display = (modal === true ? 'block' : 'none');
		userPopout.style.display = (modal === true ? 'none' : 'block');
	}

	// History
	$: if (browser && $isMounted && $loaded) {
		$history = $isMounted && browser && JSON.parse(localStorage.getItem(`${$THEME.name.replace(/ /g, '')}_history`) || '[]') || [];
	}
	let historyTab: boolean = false;

	const toggleHistory = (): void => {
		historyTab = !historyTab;
		activeSetting = historyTab ? null : 0;
	}

	// Delete history item
	const deleteHistory = (index: number): void => {
		$history = $history.filter((el, i) => i !== index);

		localStorage.setItem(`${$THEME.name.replace(/ /g, '')}_history`, JSON.stringify($history));
	}

	// Download history item
	const downloadHistory = (index: number): void => {
		DLTheme($history[index]);
	}

	// Load history item
	const loadHistory = (index: number): void => {
		$THEME = $history[index];

		// Add vars to previewer
		$THEME.variables.forEach(group => {
			group.inputs.forEach(({details}) => {
				$preview.style.setProperty(`--${details.variable}`, varOutput(details).output);
			})
		})

		// Add fonts to previewer
		$THEME.fonts.forEach(url => {
			createEl<HTMLStyleElement>('style', {
				id: `font-${index}`,
				className: 'customfont',
				innerText: `@import url('${url}')`
			}, $preview.querySelector('head'))
		});

		// Add addons to previewer
		$THEME.addons.forEach(addon => {
			if (addon.use) {
				// Imports
				if (!$preview.querySelector(`.${addon.selector}`)) {
					addon.imports.forEach(url => {
						createEl<HTMLStyleElement>('style', {
							className: addon.selector,
							textContent: `@import url('${url}');`
						}, $preview.querySelector('head'))
					})
				}
				// Vars
				addon.variables.forEach(({details}) => {
					$preview.style.setProperty(`--${details.variable}`, varOutput(details).output);
				})
			}
		})

		$flash = [...$flash, {
			type: 'success',
			message: 'Loaded save'
		}]
	}

	// Update history item
	const updateHistory = (index: number): void => {
		$history[index] = {
			...$THEME,
			updatedAt: dayjs()
		};

		localStorage.setItem(`${$THEME.name.replace(/ /g, '')}_history`, JSON.stringify($history));

		$flash = [...$flash, {
			type: 'success',
			message: 'Updated save'
		}]
	}

	// Back modal
	let backModal: boolean = false;

	const toggleBack = (): void => {
		backModal = !backModal;
	}
	const goBack = (): void => {
		backModal = false;
		setTimeout(() => {
			goto('/');
			activeSetting = 0;
			historyTab = false;
		}, 300);
	}
</script>

<template>
	<nav class="nav">
		<button
			class="nav-btn nav-back"
			disabled={!$isMounted}
			use:tooltip={{content: 'Back to theme selection', placement: 'right', offset: [0, 15]}} on:click={toggleBack}
		>
			<Icon src={ChevronLeft} />
		</button>
		<hr class="nav-divider">
		<div class="scroller">
			<div class="scroller-inner">
				{#if $isMounted && $loaded}
					{#each $THEME.variables as group, i}
						<button
							class="nav-btn"
							class:active={activeSetting === i}
							use:tooltip={{content: group.title, placement: 'right', offset: [0, 15]}}
							on:click={() => setSetting(i, group.userModal)}
						>
							<Icon src={icons[group.icon]} />
						</button>
					{/each}
					{#if $THEME.addons && $THEME.addons.length > 0}
						<button
							class="nav-btn"
							class:active={activeSetting === 100}
							use:tooltip={{content: 'Addons', placement: 'right', offset: [0, 15]}}
							on:click={() => setSetting(100, false)}
						>
							<Icon src={Puzzle} />
						</button>
					{/if}
				{/if}
			</div>
		</div>
		<hr class="nav-divider">
		<a href="https://discord.gg/ZHthyCw" target="_blank" rel="noreferrer" class="nav-btn" use:tooltip={{content: 'Found a bug?', placement: 'right', offset: [0, 15]}}>
			<Icon src={ExclamationCircle} />
		</a>
	</nav>

	<aside class="sidebar">
		<Actions on:showHistory={toggleHistory} />
		<hr class="sidebar-divider">
		{#if $isMounted && devWarning}
			<div class="devWarning">
				<div class="markdown">
					<p>Before you start editing, just a little heads up:</p>
					<p>If you find any bugs with this editor, please do not annoy the theme developers.</p>
					<p>Join my <a href="https://discord.gg/ZHthyCw" target="_blank" rel="noreferrer">Discord Server</a> and tell me about them there.</p>
					<p>After closing this, you can still join my server and report a bug by pressing the button in the very bottom left of your screen.</p>
				</div>
				<Button type="secondary" on:click={closeDevWarning}>
					<svelte:fragment slot="iconL">
						<Icon src={Check} />
					</svelte:fragment>
					I Understand
				</Button>
			</div>
		{/if}
		<div class="sidebar-body scroller">
			<div class="scroller-inner" class:active={historyTab}>
				{#if $isMounted && $loaded}
					{#if $history.length}
						{#each $history as item, i}
							<div class="history">
								<div class="history-info">
									<h4 class="history-name">{item.meta.name}</h4>
									<div class="history-time">
										<span>Created at:</span>
										<time class="history-date" datetime={dayjs(item.createdAt).format('YYYY-MM-DDTHH:mm:ssZ[Z]')}>{dayjs(item.createdAt).format('Do MMM, YYYY')} - {dayjs(item.createdAt).fromNow()}</time>
									</div>
									{#if item.updatedAt !== item.createdAt}
										<div class="history-time">
											<span>Updated at:</span>
											<time class="history-date" datetime={dayjs(item.updatedAt).format('YYYY-MM-DDTHH:mm:ssZ[Z]')}>{dayjs(item.updatedAt).format('Do MMM, YYYY')} - {dayjs(item.updatedAt).fromNow()}</time>
										</div>
									{/if}
								</div>
								<div class="history-actions">
									<span use:tooltip={{content: 'Download', placement: 'top'}}>
										<Button type="secondary" on:click={() => downloadHistory(i)}>
											<svelte:fragment slot="iconL">
												<Icon src={Download} />
											</svelte:fragment>
										</Button>
									</span>
									<Menu>
										<MenuButton>
											<div class="history-more">
												<Icon src={DotsVertical} />
											</div>
										</MenuButton>
										<MenuDropdown>
											<MenuGroup>
												<MenuItem on:click={() => loadHistory(i)}>
													Load
													<Icon src={Check} />
												</MenuItem>
												<MenuItem on:click={() => updateHistory(i)}>
													Update
													<Icon src={Refresh} />
												</MenuItem>
											</MenuGroup>
											<MenuGroup>
												<MenuItem danger on:click={() => deleteHistory(i)}>
													Delete
													<Icon src={Trash} />
												</MenuItem>
											</MenuGroup>
										</MenuDropdown>
									</Menu>
								</div>
							</div>
						{/each}
					{:else}
						<p>No history found</p>
					{/if}
				{/if}
			</div>
			<div class="scroller-inner" class:active={!historyTab}>
				{#if $isMounted && $loaded}
					{#each $THEME.variables as group, i}
						<div class="setting" class:active={activeSetting === i}>
							{#each group.inputs as setting}
								<div class="option">
									<Component data={setting} />
								</div>
							{/each}
						</div>
					{/each}
					{#if $THEME.addons && $THEME.addons.length > 0}
						<div class="setting" class:active={activeSetting === 100}>
							<Addons />
						</div>
					{/if}
				{:else}
					<p class="no-theme">Select a theme to start editing</p>
				{/if}
			</div>
		</div>
	</aside>
	
	<div id="page">
		{#if $navigating}
			loading...
		{:else}
			<slot />
		{/if}
	</div>
	
	<div class="flash-container">
		{#each $flash as flash}
			<Flash {...flash} />
		{/each}
	</div>
	
	{#if !isChrome && visible}
		<ModalRoot bind:visible clickOutside={false} maxWidth={550}>
			<ModalHeader title="Unsupported Browser" closeBtn={false} />
			<ModalBody>
				<p>
					This browser is not recommended when using this editor.
					<br>
					We recommend using a Chromium browser such as <a href="https://www.google.com/chrome/" target="_blank" class="anchor">Google Chrome</a>, <a href="https://brave.com/" target="_blank" class="anchor">Brave</a> or the new	<a href="https://support.microsoft.com/en-us/microsoft-edge/download-the-new-microsoft-edge-based-on-chromium-0f4a3dd7-55df-60f5-739f-00010dba52cf" target="_blank" class="anchor">Edge</a>.
				</p>
				<p>If you wish to continue, remember elements inside the preview may not be displayed correctly.</p>
			</ModalBody>
			<ModalFooter>
				<Button type="primary" on:click={closeWarning}>
					<svelte:fragment slot="iconL">
						<Icon src={Check} />
					</svelte:fragment>
					I Understand
				</Button>
			</ModalFooter>
		</ModalRoot>
	{/if}
	
	<ModalRoot bind:visible={backModal}>
		<ModalHeader title="Back to theme selection?" on:close={toggleBack} />
		<ModalBody>
			<p>Any changes will <u>NOT</u> be saved.</p>
		</ModalBody>
		<ModalFooter>
			<Button type="text" on:click={toggleBack}>Close</Button>
			<Button type="primary" on:click={goBack}>
				<svelte:fragment slot="iconL">
					<Icon src={Check} />
				</svelte:fragment>
				Go back
			</Button>
		</ModalFooter>
	</ModalRoot>
</template>

<style lang="scss">
	.nav {
		width: rem(64);
		border-right: rem(1) solid var(--border);
		display: flex;
		flex-direction: column;
		align-items: center;
		&-divider {
			height: rem(1);
			border: none;
			width: 100%;
			background: var(--border);
			margin: 0;
		}
		&-btn {
			width: rem(64);
			height: rem(64);
			padding: rem(20);
			position: relative;
			display: flex;
			align-items: center;
			&::before {
				content: "";
				position: absolute;
				left: 0;
				height: 100%;
				border-radius: 0 rem(8) rem(8) 0;
				background: var(--text-primary);
				width: rem(3);
				transform: scale(0);
				transform-origin: center center;
				transition: .15s ease transform;
			}
			&:hover::before {
				transform: scale(1, .25);
			}
			&.active {
				color: var(--text-primary);
				&::before {
					width: rem(4);
					background: hsl(var(--accent));
					transform: scale(1, .5);
				}
			}
		}
		&-back {
			height: rem(64);
			&[disabled] {
				opacity: .5;
				pointer-events: none;
				user-select: none;
			}
		}
	}

	.sidebar {
		max-width: 400px;
		min-width: 400px;
		border-right: rem(1) solid var(--border);
		display: flex;
		flex-direction: column;
		&-divider {
			width: 100%;
			margin: 0;
			border: none;
			height: rem(1);
			background: var(--border);
		}

		.scroller-inner {
			padding: rem(16);
			display: none;
			&.active {
				display: block;
			}
		}
	}

	.no-theme {
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: rem(14);
		height: 100%;
		color: var(--text-tertiary);
		opacity: .5;
		pointer-events: none;
		user-select: none;
	}

	.setting {
		display: none;
		&.active {
			display: block;
		}
	}

	.option:not(:last-child) {
		margin-bottom: rem(16);
	}

	.devWarning {
		background: var(--c0);
		padding: rem(16);
		border-bottom: rem(1) solid var(--border);
		display: flex;
		flex-direction: column;
		align-items: flex-end;
		.markdown {
			margin-bottom: rem(16);
		}
	}

	.history {
		display: flex;
		align-items: center;
		justify-content: space-between;

		&-name {
			color: var(--text-primary);
		}
		&-time {
			font-size: rem(12);
			font-weight: 500;
			color: var(--text-tertiary);
			margin-top: rem(4);
		}

		&-actions {
			display: flex;
			align-items: center;
			gap: rem(8);
		}
		&-more {
			width: rem(16);
			height: rem(32);
			cursor: pointer;
		}

		&:not(:last-child) {
			margin-bottom: rem(16);
			padding-bottom: rem(16);
			border-bottom: rem(1) solid var(--border);
		}
	}

	.flash-container {
		position: fixed;
		bottom: rem(16);
		z-index: 1000;
		pointer-events: none;
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	#page {
		width: 100%;
	}
</style>