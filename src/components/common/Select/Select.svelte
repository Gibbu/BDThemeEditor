<script>
	import Icon, {Selector} from 'svelte-hero-icons';
	import clickOutside from '$lib/clickOutside';
	import {createEventDispatcher} from 'svelte';

	const dispatch = createEventDispatcher();

	import {Input} from '$components/common/Input';

	// Types
	interface Option {
		label: string,
		value: string
	}

	export let options: Option[]
	export let value: string = '';
	export let custom: boolean = false;

	// Values
	$: selected = options.find(el => el.value === value) || options[0];
	let customValue: string;

	// Dropdown
	let selectBtn: HTMLButtonElement;
	let visible: boolean = false;

	const toggle = (): void => {
		visible = !visible;
	}
	const hide = (): void => {
		visible = false;
	}

	// Set values
	const setOption = (option: Option): void => {
		if (option.value !== 'custom') {
			update(option.value);
		}
		selected = option;
		hide();
	}

	const update = (value: string): void => {
		dispatch('update', value);
	}
</script>

<div class="select">
	<button bind:this={selectBtn} class="btn" on:click={toggle}>
		<span class="btn-text">{selected.label}</span>
		<div class="btn-icon">
			<Icon src={Selector} />
		</div>
	</button>
	{#if visible}
		<div class="dropdown" use:clickOutside={selectBtn} on:clickedOutside={hide}>
			{#each options as option}
				<button class="option" class:active={selected.value === option.value} on:click={() => setOption(option)}>
					{option.label}
				</button>
			{/each}
			{#if custom}
				<hr class="dropdown-divider">
				<button class="option" class:active={selected.value === 'custom'} on:click={() => setOption({label: 'Custom value', value: 'custom'})}>
					Custom value
				</button>
			{/if}
		</div>
	{/if}
</div>
{#if selected.value === 'custom'}
	<div class="select-custom">
		<Input placeholder="Custom value" bind:value={customValue} on:input={() => update(customValue)} />
	</div>
{/if}

<style lang="scss">
	.select {
		position: relative;
		&-custom {
			margin-top: rem(8);
		}
	}
	.btn {
		display: flex;
		align-items: center;
		justify-content: space-between;
		font-weight: 500;
		border-radius: rem(4);
		transition: .15s ease background, .15s ease box-shadow, .15s ease color;
		user-select: none;
		line-height: normal;
		font-size: rem(14);
		height: rem(38);
		padding: 0 rem(12);
		background: var(--c4);
		color: var(--text-secondary);
		width: 100%;

		&-icon {
			width: rem(18);
		}

		&:hover {
			background: var(--c7);
		}
		&:focus {
			background: var(--c8);
			color: var(--text-primary);
		}
	}
	.dropdown {
		position: absolute;
		top: calc(100% + #{rem(8)});
		background: var(--c0);
		border-radius: rem(4);
		border: rem(1) solid var(--border);
		width: 100%;
		padding: rem(8);
		z-index: 1;
		&-divider {
			margin: rem(8) 0;
			border: none;
			height: rem(1);
			background: var(--c4);
		}
	}
	.option {
		display: block;
		width: 100%;
		padding: rem(8);
		text-align: left;
		border-radius: rem(4);
		font-size: rem(14);
		font-weight: 500;
		&:not(:last-child) {
			margin-bottom: rem(4);
		}
		&:hover {
			background: var(--c2);
		}
		&:focus {
			background: var(--c4);
		}
		&.active {
			background: hsl(var(--accent));
			color: #000;
			text-shadow: 0 2px 5px hsl(0 0% 0% / .4);
		}
	}
</style>