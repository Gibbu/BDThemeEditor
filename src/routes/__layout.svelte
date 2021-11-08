<script lang="ts">
	import {THEME, isMounted, loaded, history, preview, flash} from '$lib/stores';
	import {browser} from '$app/env';
	import {navigating} from '$app/stores';
	import {goto} from '$app/navigation';
	import {varOutput, createEl} from '$lib/helpers';
	import tooltip from '$lib/tooltip';
	import DLTheme from '$lib/download';
	import {
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
		Moon,
		ColorSwatch,
		MenuAlt1,
		Puzzle,
		Globe,
		Home,
		User,
		Server,
		Cog,
		Chat,
		SwitchVertical
	} from 'svelte-hero-icons';
	import Icon from 'svelte-hero-icons/Icon.svelte';
	import NProgress from 'nprogress';
	import '$scss/app.scss';

	// Components
	import {Button} from '$components/common/Button';
	import {ModalRoot, ModalBody, ModalHeader, ModalFooter} from '$components/common/Modal';
	import {Component, Actions, Addons} from '$components/editor';
	import {Flash} from '$components/common/Flash';

	// Icons
	const icons = {Photograph, Sun, ColorSwatch, MenuAlt1, Puzzle, Globe, Home, User, Server, Cog, Chat, DesktopComputer, Moon, SwitchVertical}

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

		const userModal: HTMLElement = $preview.querySelector('#modal');
		const userPopout: HTMLElement = $preview.querySelector('#userpopout')

		userModal.style.display = (modal === true ? 'block' : 'none');
		userPopout.style.display = (modal === true ? 'none' : 'block');
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
		<Actions />
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
			<div class="scroller-inner">
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
				color: hsl(var(--accent));
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