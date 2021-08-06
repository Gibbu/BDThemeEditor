<script>
	import {THEME, isMounted, loaded} from '$lib/stores';
	import {browser} from '$app/env';
	import {navigating} from '$app/stores';
	import {goto} from '$app/navigation';
	import tooltip from '$lib/tooltip';
	import Icon, {Check, Adjustments, ChevronRight, ChevronLeft, Photograph, Sun, ColorSwatch, MenuAlt1, Puzzle, Globe, Home, User, Server, Cog, Chat} from 'svelte-hero-icons';
	import NProgress from 'nprogress';

	// Components
	import {Button} from '$components/common/Button';
	import {ModalRoot, ModalBody, ModalHeader, ModalFooter} from '$components/common/Modal';
	import {Component, Actions} from '$components/editor'

	// Icons
	const icons = {Photograph, Sun, ColorSwatch, MenuAlt1, Puzzle, Globe, Home, User, Server, Cog, Chat}

	// Active setting
	let activeSetting: number = 0;

	const setSetting = (index: number): void => {
		activeSetting = index;
	}

	// Browser warning
	let isChrome: boolean = browser && /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
	let visible: boolean = browser && !localStorage.browser_warning;

	$: if ($navigating) {
		NProgress.start();
	} else {
		NProgress.done();
	}

	const closeWarning = () => {
		visible = false;
		localStorage.browser_warning = true;
	}

	// Back modal
	let backModal: boolean = false;

	const toggleBack = (): void => {
		backModal = !backModal;
	}
	const goBack = (): void => {
		backModal = false;
		setTimeout(() => goto('/'), 300);
	}

	// Mouting fix
	import '$scss/app.scss';
</script>

<nav class="nav" class:disabled={!$isMounted}>
	<button class="nav-btn nav-back" use:tooltip={{content: 'Back to theme selection', placement: 'right', offset: [0, 15]}} on:click={toggleBack}>
		<Icon src={ChevronLeft} />
	</button>
	{#if $isMounted}
		{#each $THEME.variables as group, i}
			<button
				class="nav-btn"
				class:active={activeSetting === i}
				use:tooltip={{content: group.title, placement: 'right', offset: [0, 15]}}
				on:click={() => setSetting(i)}
			>
				<Icon src={icons[group.icon]} />
			</button>
		{/each}
	{/if}
</nav>
<aside class="sidebar" class:disabled={!$isMounted}>
	<Actions />
	<div class="sidebar-body scroller">
		<div class="scroller-inner">
			{#if $isMounted}
				{#each $THEME.variables as group, i}
					<div class="setting" class:active={activeSetting === i}>
						{#each group.inputs as setting}
							<div class="option">
								<Component data={setting} />
							</div>
						{/each}
					</div>
				{/each}
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



<style lang="scss">
	.nav {
		width: rem(64);
		border-right: rem(1) solid var(--border);
		display: flex;
		flex-direction: column;
		align-items: center;
		&-back {
			border-bottom: rem(1) solid var(--border);
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
	}

	.sidebar {
		max-width: 400px;
		min-width: 400px;
		border-right: rem(1) solid var(--border);
		display: flex;
		flex-direction: column;
	}

	.disabled {
		user-select: none;
		pointer-events: none;
	}

	.no-theme {
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: rem(14);
		height: 100%;
		color: var(--text-tertiary);
		opacity: .5;
	}
	
	.scroller-inner {
		padding: rem(16);
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

	#page {
		width: 100%;
	}
</style>