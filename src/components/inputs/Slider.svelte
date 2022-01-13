<script lang="ts">
	import {Swap} from '$components/common/Icon';
	import {createEventDispatcher} from 'svelte';
	import tooltip from '$lib/tooltip';

	const dispatch = createEventDispatcher();

	import {Input} from '$components/common/Input';
	
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

	const update = (): void => {
		dispatch('update', {variable, addon, value, unit, varGroup});
	}

	const changeInput = (): void => {
		switchType = !switchType;
	}
</script>

<template>
	<header class="option-header">
		<div class="option-info">
			<p class="option-title">
				{title}
				<small class="option-unit">({value+unit})</small>
			</p>
			<button on:click={changeInput} class="switch-input" use:tooltip={{content: 'Switch input', delay: [350, 0]}}>
				<Swap />
			</button>
		</div>
		{#if hint}
			<small class="option-hint">{hint}</small>
		{/if}
	</header>
	<div class="option-body">
		{#if !switchType}
			<input type="range" class="slider" {min} {max} {step} bind:value on:input={update}>
		{:else}
			<Input inputType="number" {min} {max} {step} bind:value on:input={update} />
		{/if}
	</div>
</template>

<style lang="scss">
	.option {
		&-header {
			margin-bottom: rem(8);
		}
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
			margin-left: rem(4);
		}
		&-hint {
			display: block;
			color: var(--text-tertiary);
			font-size: rem(13);
		}
	}
	.switch-input {
		width: rem(28);
		height: rem(28);
		padding: rem(6);
		border-radius: rem(4);
		&:hover {
			background: var(--c4);
		}
	}

	.slider {
		height: rem(24);
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
			height: rem(10);
			cursor: pointer;
			background: #292929;
			border-radius: rem(50);
			border: 0 solid #010101;
		}
		&::-webkit-slider-thumb {
			box-shadow: 0 0 0 #000031;
			border: 0 solid #00001E;
			height: rem(16);
			width: rem(16);
			border-radius: rem(50);
			background: #36E7A9;
			cursor: pointer;
			appearance: none;
			margin-top: rem(-3);
		}
		&::-moz-range-track {
			width: 100%;
			height: rem(10);
			cursor: pointer;
			box-shadow: 0 0 0 #000000;
			background: #292929;
			border-radius: rem(50);
			border: 0 solid #010101;
		}
		&::-moz-range-thumb {
			box-shadow: 0 0 0 #000031;
			border: 0 solid #00001E;
			height: rem(16);
			width: rem(16);
			border-radius: rem(50);
			background: #36E7A9;
			cursor: pointer;
		}
		&::-ms-track {
			width: 100%;
			height: rem(10);
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
			margin-top: rem(1);
			box-shadow: 0 0 0 #000031;
			border: 0 solid #00001E;
			height: rem(16);
			width: rem(16);
			border-radius: rem(50);
			background: #36E7A9;
			cursor: pointer;
		}
	}
</style>