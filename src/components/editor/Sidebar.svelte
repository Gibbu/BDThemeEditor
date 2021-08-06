<script>
	import {page} from '$app/stores';
	import {THEME, preview} from '$lib/stores';
	import {goto} from '$app/navigation';
	import tooltip from '$lib/tooltip';
	import Icon, {Check, Adjustments, ChevronRight, ChevronLeft, Photograph, Sun, ColorSwatch, MenuAlt1, Puzzle, Globe, Home, User, Server, Cog, Chat} from 'svelte-hero-icons';

	// Components
	import Component from './Component.svelte';
	import Actions from './Actions.svelte';
	import {Button} from '$components/common/Button';
	import {ModalRoot, ModalBody, ModalHeader, ModalFooter} from '$components/common/Modal';

	// Icons
	const icons = {Photograph, Sun, ColorSwatch, MenuAlt1, Puzzle, Globe, Home, User, Server, Cog, Chat}

	// Active setting
	let activeSetting: number = 0;

	const setSetting = (index: number): void => {
		activeSetting = index;
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
</script>

<nav class="nav">
	<button class="nav-btn nav-back" use:tooltip={{content: 'Back to theme selection', placement: 'right', offset: [0, 15]}} on:click={toggleBack}>
		<Icon src={ChevronLeft} />
	</button>
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
</nav>
<aside class="sidebar">
	<header class="sidebar-header">
		<Actions />
	</header>
	<div class="sidebar-body scroller">
		<div class="scroller-inner">
			{#each $THEME.variables as group, i}
				<div class="setting" class:active={activeSetting === i}>
					{#each group.inputs as setting}
						<div class="option">
							<Component data={setting} />
						</div>
					{/each}
				</div>
			{/each}
		</div>
	</div>
</aside>

<ModalRoot bind:visible={backModal}>
	<ModalHeader title="Back to theme selection?" on:close={toggleBack} />
	<ModalBody>
		<p>Any changes will <u>NOT</u> be saved.</p>
	</ModalBody>
	<ModalFooter>
		<Button type="secondary" on:click={toggleBack}>Close</Button>
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
		&-header {
			border-bottom: rem(1) solid var(--border);
			padding: rem(16) 0;
			margin: 0 rem(16);
		}
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
</style>