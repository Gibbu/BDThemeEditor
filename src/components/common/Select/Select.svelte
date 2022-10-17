<script lang="ts">
	import { outside } from '$lib/actions';
	import { createEventDispatcher } from 'svelte';
	import { Icon } from '@steeze-ui/svelte-icon';
	import { ChevronUpDown, Check } from '@steeze-ui/heroicons';
	import { Button } from '../';

	const dispatch = createEventDispatcher();

	import { Input } from '$components/common';

	// Types
	interface Option {
		label: string;
		value: string;
	}

	export let options: Option[];
	export let value: string = '';
	export let custom: boolean = false;

	// Values
	$: selected = options.find((el) => el.value === value) || options[0];
	let customValue: string;

	// Dropdown
	let selectBtn: HTMLButtonElement;
	let visible: boolean = false;

	const toggle = (): void => {
		visible = !visible;
	};
	const hide = (): void => {
		visible = false;
	};

	// Set values
	const setOption = (option: Option): void => {
		if (option.value !== 'custom') {
			update(option.value);
		}
		selected = option;
		hide();
	};

	const update = (value: string): void => {
		dispatch('update', value);
	};
</script>

<template>
	<div class="select">
		<Button variant="secondary" long bind:self={selectBtn} on:click={toggle}>
			<span class="btn-text">{selected.label}</span>
			<div class="btn-icon">
				<Icon src={ChevronUpDown} size="18px" />
			</div>
		</Button>
		{#if visible}
			<div
				class="dropdown"
				use:outside={{
					exclude: selectBtn,
					callback: hide
				}}
			>
				{#each options as option}
					<button class="option" class:active={selected.value === option.value} on:click={() => setOption(option)}>
						<span class="option-label">{option.label}</span>
						{#if selected.value === option.value}
							<div class="option-check">
								<Icon src={Check} />
							</div>
						{/if}
					</button>
				{/each}
				{#if custom}
					<hr class="dropdown-divider" />
					<button
						class="option"
						class:active={selected.value === 'custom'}
						on:click={() => setOption({ label: 'Custom value', value: 'custom' })}
					>
						<span class="option-label">Custom value</span>
						{#if selected.value === 'custom'}
							<div class="option-check">
								<Icon src={Check} />
							</div>
						{/if}
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
</template>

<style lang="scss">
	.select {
		position: relative;
		&-custom {
			margin-top: 8px;
		}
	}
	.dropdown {
		position: absolute;
		top: calc(100% + #{8px});
		background: var(--background-primary);
		border-radius: 4px;
		border: 1px solid var(--border);
		width: 100%;
		padding: 8px;
		z-index: 1;
		&-divider {
			margin: 8px 0;
			border: none;
			height: 1px;
			background: var(--border-alt);
		}
	}
	.option {
		display: flex;
		align-items: center;
		justify-content: space-between;
		width: 100%;
		padding: 10px 8px;
		text-align: left;
		border-radius: 4px;
		font-size: 14px;
		font-weight: 500;

		&-check {
			height: 18px;
			width: 18px;
		}

		&:not(:last-child) {
			margin-bottom: 4px;
		}
		&:hover {
			background: var(--background-secondary);
		}
		&:focus {
			background: var(--background-secondary-alt);
		}
		&.active {
			background: hsl(var(--accent));
			color: #000;
			text-shadow: 0 2px 5px hsl(0 0% 0% / 0.4);
		}
	}
</style>
