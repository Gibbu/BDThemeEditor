<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import { tooltip } from 'svooltip';
	import { Icon } from '@steeze-ui/svelte-icon';
	import { ArrowsRightLeft } from '@steeze-ui/heroicons';

	const dispatch = createEventDispatcher();

	import { Input, Banner } from '$components/common';

	// Required input vars
	export let variable: string;
	export let value: number;
	export let unit: string = '';
	export let max: number;
	export let title: string;

	// Optional input vars
	export let step: number = 1;
	export let min: number = 0;
	export let addon: boolean = false;
	export let hint: string = '';
	export let varGroup: string = ':root';

	let switchType: boolean = false;
	let error: string;

	const update = (): void => {
		error = '';

		if (value == null || !/^-?[0-9]\d*(\.\d+)?$/.test(value.toString())) {
			error = 'This field can only contain numbers and must not be empty.';
			return;
		}

		dispatch('update', { variable, addon, value, unit, varGroup });
	};

	const changeInput = (): void => {
		switchType = !switchType;
	};
</script>

<template>
	<header class="option-header">
		<div class="option-info">
			<p class="option-title">
				{title}
				<small class="option-unit">({value + unit})</small>
			</p>
			<button on:click={changeInput} class="switch-input" use:tooltip={{ content: 'Switch input', delay: [350, 0] }}>
				<Icon src={ArrowsRightLeft} size="18px" />
			</button>
		</div>
		{#if hint}
			<small class="option-hint">{@html hint}</small>
		{/if}
	</header>
	<div class="option-body">
		{#if !switchType}
			<input type="range" class="slider" {min} {max} {step} bind:value on:input={update} />
		{:else}
			<Input type="number" {min} {max} {step} bind:value on:input={update} {error} />
		{/if}
	</div>
</template>

<style lang="scss">
	.option {
		&-info {
			display: flex;
			align-items: center;
			justify-content: space-between;
		}
		&-title {
			display: flex;
			align-items: center;
		}
		&-unit {
			color: var(--text-tertiary);
			margin-left: 4px;
		}
		&-hint {
			display: block;
			color: var(--text-tertiary);
			font-size: 13px;
		}
	}
	.switch-input {
		width: 32px;
		height: 32px;
		padding: 6px;
		border-radius: 4px;
		display: flex;
		align-items: center;
		justify-content: center;
		&:hover {
			background: var(--button-ghost-hover);
		}
	}

	.slider {
		height: 24px;
		appearance: none;
		width: 100%;
		&:focus {
			outline: none;
			&::-webkit-slider-runnable-track,
			&::-ms-fill-lower,
			&::-ms-fill-upper {
				background: #292929;
			}
		}
		&::-webkit-slider-runnable-track {
			width: 100%;
			height: 10px;
			cursor: pointer;
			background: #292929;
			border-radius: 50px;
			border: 0 solid #010101;
		}
		&::-webkit-slider-thumb {
			box-shadow: 0 0 0 #000031;
			border: 0 solid #00001e;
			height: 16px;
			width: 16px;
			border-radius: 50px;
			background: hsl(var(--accent));
			cursor: pointer;
			appearance: none;
			margin-top: -3px;
		}
		&::-moz-range-track {
			width: 100%;
			height: 10px;
			cursor: pointer;
			box-shadow: 0 0 0 #000000;
			background: #292929;
			border-radius: 50px;
			border: 0 solid #010101;
		}
		&::-moz-range-thumb {
			box-shadow: 0 0 0 #000031;
			border: 0 solid #00001e;
			height: 16px;
			width: 16px;
			border-radius: 50px;
			background: hsl(var(--accent));
			cursor: pointer;
		}
		&::-ms-track {
			width: 100%;
			height: 10px;
			cursor: pointer;
			background: transparent;
			border-color: transparent;
			color: transparent;
		}
		&::-ms-fill-lower {
			background: #292929;
			border: 0 solid #010101;
			border-radius: 100px;
			box-shadow: 0 0 0 #000000;
		}
		&::-ms-fill-upper {
			background: #292929;
			border: 0 solid #010101;
			border-radius: 100px;
			box-shadow: 0 0 0 #000000;
		}
		&::-ms-thumb {
			margin-top: 1px;
			box-shadow: 0 0 0 #000031;
			border: 0 solid #00001e;
			height: 16px;
			width: 16px;
			border-radius: 50px;
			background: hsl(var(--accent));
			cursor: pointer;
		}
	}
</style>
