<script lang="ts">
	import { onMount } from 'svelte';
	import { uid } from '$lib/utils';
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
	const { id } = uid('radio-item');

	onMount(() => {
		if (!disabled)
			$api.addItem({
				id,
				disabled,
				value
			});
	});

	const handleClick = () => {
		if (!disabled)
			$api.setItem({
				id,
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
		id={id()}
		type="button"
		role="radio"
		class="radioitem"
		{disabled}
		aria-labelledby={id('label')}
		aria-describedby={description ? id('description') : undefined}
		aria-checked={$api.activeItem?.id() === id()}
		on:click={handleClick}
		on:keydown={handleKeys}
	>
		<div class="box" />
		<div class="info">
			<p id={id('label')} class="label">{label}</p>
			{#if description}
				<span id={id('description')} class="description">{description}</span>
			{/if}
		</div>
	</button>
</template>
