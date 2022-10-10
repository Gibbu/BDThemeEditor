<script lang="ts" context="module">
	import { setContext, getContext } from 'svelte';
	import { writable } from 'svelte/store';

	import type { Writable } from 'svelte/store';
	import type { UID } from '$lib/utils';

	const contextName = 'radio-group-context';

	interface RadioGroupItem {
		id: UID;
		value: unknown;
		disabled?: boolean;
	}

	interface Context {
		id: UID;
		value: unknown;
		items: RadioGroupItem[];
		index: number;
		activeItem: RadioGroupItem | null;

		addItem(item: RadioGroupItem): void;
		setItem(item: RadioGroupItem): void;
		gotoItem(action: 'prev' | 'next' | 'first' | 'last'): void;
	}

	export const context = (): Writable<Context> => {
		return getContext(contextName);
	};
</script>

<script lang="ts">
	import { onMount } from 'svelte';
	import { uid, calculateIndex } from '$lib/utils';
	import { createEventDispatcher } from 'svelte';

	/** The selected value */
	export let value: Context['value'];

	/** The title of the radiogroup */
	export let title: string | undefined = undefined;

	const dispatch = createEventDispatcher();
	const { id } = uid('radiogroup');
	let items: Context['items'] = [];
	let index: Context['index'] = -1;
	let activeItem: Context['activeItem'] = null;

	// Context mutators
	const setItem: Context['setItem'] = (item) => {
		activeItem = item;
		value = item.value;
	};
	const addItem: Context['addItem'] = (item) => {
		if (!item.disabled) items = [...items, item];
	};
	const gotoItem: Context['gotoItem'] = (action) => {
		index = calculateIndex({ action, items, index });
		setItem(items[index]);
	};

	let api = writable<Context>({
		id,
		value,
		items,
		index,
		activeItem,
		addItem,
		setItem,
		gotoItem
	});

	setContext(contextName, api);

	onMount(() => {
		const first = items.find((item) => item.value === value) || items[0];
		$api.setItem({
			id: first.id,
			disabled: first.disabled,
			value: first.value
		});
		index = items.findIndex((item) => item.value === value);
	});

	$: api.update((obj) => ({
		...obj,
		items,
		index,
		activeItem
	}));

	$: if ($api.activeItem) {
		dispatch('change', value);
	}
</script>

<template>
	<div id={id()} role="radiogroup" aria-labelledby={title ? id('title') : undefined} class="radiogroup">
		{#if title}
			<p id={id('title')} class="title">{title}</p>
		{/if}
		<div id={id('items')} role="none" class="radioitems">
			<slot />
		</div>
	</div>
</template>
