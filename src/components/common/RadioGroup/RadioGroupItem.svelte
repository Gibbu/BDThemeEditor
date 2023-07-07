<script lang="ts">
	import { onMount } from 'svelte';
	import { createUID } from '$lib/utils';
	import { context } from './RadioGroup.svelte';

	/** The "title" of the radioitem. */
	export let label: string;

	/** The value of the radioitem. */
	export let value: unknown;

	/** The description of the radioitem if needed to explain further. */
	export let description: string | undefined = undefined;

	/**
	 * Disables the radioitem.\
	 * This also removes it from keyboard navigation.
	 */
	export let disabled: boolean = false;

	const api = context();
	const { uid } = createUID('radio-item');

	onMount(() => {
		$api.addItem({
			id: uid,
			disabled,
			value
		});
	});

	const handleClick = () => {
		if (!disabled)
			$api.setItem({
				id: uid,
				value
			});
	};

	const handleKeys = (e: KeyboardEvent) => {
		const { key } = e;

		if (key.startsWith('Arrow') || key === 'Home' || key === 'End') e.preventDefault();

		if (key === 'ArrowUp' || key === 'ArrowLeft') $api.gotoItem('prev');
		if (key === 'ArrowDown' || key === 'ArrowRight') $api.gotoItem('next');
		if (key === 'Home') $api.gotoItem('first');
		if (key === 'End') $api.gotoItem('last');
	};
</script>

<template>
	<button
		id={uid()}
		type="button"
		role="radio"
		class="radioitem"
		{disabled}
		aria-labelledby={uid('label')}
		aria-describedby={description ? uid('description') : undefined}
		aria-checked={$api.activeItem?.id() === uid()}
		on:click={handleClick}
		on:keydown={handleKeys}
	>
		<div class="box" />
		<div class="info">
			<p id={uid('label')} class="label">{label}</p>
			{#if description}
				<span id={uid('description')} class="description">{description}</span>
			{/if}
		</div>
	</button>
</template>

<style lang="scss">
	.radioitem {
		display: flex;
		align-items: center;
		gap: 16px;
		padding: 8px 16px;
		border: 1px solid var(--border-alt);
		border-radius: var(--radius);
		&:hover {
			background: var(--button-ghost-hover);
		}
		&[aria-checked='true'] {
			background: hsl(var(--accent));
			color: #000;
			border-color: hsl(var(--accent));
			text-shadow: var(--accent-shadow);
			.box {
				border-color: #000;
				&::before {
					content: '';
					width: 14px;
					height: 14px;
					border-radius: 50%;
					background: #000;
				}
			}
		}
	}
	.box {
		min-width: 24px;
		min-height: 24px;
		max-width: 24px;
		max-height: 24px;
		border: 2px solid var(--border-alt);
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.info {
		text-align: left;
	}
	.label {
		font-family: var(--font-display);
		font-weight: 600;
	}
	.description {
		font-size: 14px;
		opacity: 0.5;
		font-weight: 500;
		margin-top: 4px;
		display: block;
	}
</style>
