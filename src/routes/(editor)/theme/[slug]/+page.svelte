<script lang="ts">
	import { store, isMounted } from '$lib/stores';
	import { onMount, onDestroy } from 'svelte';
	import { getSlug } from '$lib/utils';

	import { Preview } from '$components/editor';
	import { MetaData } from '$components/common';

	// types
	import type { ITheme } from '$types/theme';
	import type { PageData } from './$types';

	export let data: PageData;

	// Data
	import { themes } from '$data/themes';
	import { error } from '@sveltejs/kit';

	const clone: ITheme[] = JSON.parse(JSON.stringify(themes));
	const theme = clone.find((theme) => getSlug(theme.name) === data.slug);

	if (!theme) throw error(500, `Something's wrong, I can feel it.`);

	const varGroups = theme.varGroups && theme.varGroups.length > 0 ? theme.varGroups : [];

	// Construct theme object
	$store = {
		name: theme.name,
		meta: theme.meta,
		developer: theme.developer,
		imports: theme.imports,
		fonts: theme.fonts || [],
		variables: theme.variables,
		hiddenVars: theme.hiddenVars,
		addons: theme.addons || [],
		varGroups: [':root', ...varGroups]
	};

	onMount(() => ($isMounted = true));
	onDestroy(() => ($isMounted = false));
</script>

<MetaData
	title={theme.name}
	description="Customize {theme.name} by {theme.developer.name} with a easy to use interface."
	image={theme.thumbnail}
/>

<template>
	<Preview urls={theme.previewUrls} />
</template>
