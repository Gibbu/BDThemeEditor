<script lang="ts">
	import {createEventDispatcher} from 'svelte';

	const dispatch = createEventDispatcher();

	export let group: string = '';
	export let value: string = '';
	export let checked: boolean = false;

	export let disabled: undefined | boolean = undefined;

	const handleEvent = (e: any) => {
		if (!disabled) dispatch(e.type);
	}
</script>

<template>
	<label class="radio-item" class:selected={checked} aria-selected={checked} {disabled}>
		<input
			type="radio"
			bind:group
			on:change={handleEvent}
			on:focus={handleEvent}
			on:blur={handleEvent}
			{value}
			{checked}
			hidden
		>
		<div class="radio-box"></div>
		<div class="radio-content">
			<slot />
		</div>
	</label>
</template>

<style lang="scss">
	.radio {
		&-item {
			position: relative;
			padding: rem(16);
			display: flex;
			align-items: center;
			gap: rem(16);
			cursor: pointer;
			border: rem(1) solid var(--border);
			z-index: 0;
			&:first-child {
				border-radius: rem(4) rem(4) 0 0;
			}
			&:last-child {
				border-radius: 0 0 rem(4) rem(4);
			}
			&:not(:first-child) {
				margin-top: rem(-1);
			}
			&:hover {
				background: var(--c3);
				color: var(--text-primary);
				border-color: var(--border-hover);
			}
			&.selected {
				background: hsl(var(--accent) / .1);
				color: hsl(var(--accent));
				border-color: hsl(var(--accent));
				z-index: 1;
				.radio-box {
					background: hsl(var(--accent));
					border-color:hsl(var(--accent));
					&:before {
						background: #fff;
					}
				}
			}
		}

		&-box {
			width: rem(20);
			height: rem(20);
			border: rem(2) solid var(--text-primary);
			border-radius: 50%;
			position: relative;
			&:before {
				content: "";
				position: absolute;
				top: 50%;
				left: 50%;
				transform: translate(-50%, -50%);
				width: 60%;
				height: 60%;
				border-radius: 50%;
			}
		}

		&-content {
			flex: 1;
			user-select: none;
			display: flex;
			align-items: center;
		}
	}
</style>