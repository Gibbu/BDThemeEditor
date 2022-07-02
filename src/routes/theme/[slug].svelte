<script lang="ts" context="module">
	import { fallbacks } from '$data/themes';

	import type { Load } from '@sveltejs/kit';

	export const load: Load = ({ params }) => {
		if (!fallbacks.includes(params.slug)) {
			return {
				status: 404,
				error: 'That theme does not exist.'
			};
		}
		return {
			status: 200,
			props: {
				slug: params.slug
			}
		};
	};
</script>

<script lang="ts">
	import { THEME, isMounted } from '$lib/stores';
	import { onMount, onDestroy } from 'svelte';

	import { Preview } from '$components/editor';

	// types
	import type { IAddon } from '$types/addon';
	import type { ITheme } from '$types/theme';

	export let slug: string;

	// Data
	import addonsData from '$data/addons';
	import themesData from '$data/themes';

	const [themes, addons]: [ITheme[], IAddon[]] = JSON.parse(JSON.stringify([themesData, addonsData]));

	const setTheme = themes.find((theme) => theme.name.toLowerCase().replace(/ /g, '') == slug)!;
	const setAddons = setTheme.addons ? addons.filter((addon) => setTheme.addons!.includes(addon.selector as any)) : [];
	const setVarGroups = (setTheme.varGroups!?.length > 0 ? setTheme.varGroups : [])!;

	// Construct theme object
	$THEME = {
		name: setTheme.name,
		meta: setTheme.meta,
		developer: setTheme.developer,
		imports: setTheme.imports,
		fonts: setTheme.fonts || [],
		variables: setTheme.variables,
		hiddenVars: setTheme.hiddenVars,
		addons: setAddons,
		varGroups: [':root', ...setVarGroups]
	};

	onMount(() => ($isMounted = true));
	onDestroy(() => ($isMounted = false));
</script>

<svelte:head>
	<title>{setTheme.name} - Theme Editor</title>
	<meta property="og:title" content="{setTheme.name} - Theme Editor" />
	<meta name="description" content="Customize {setTheme.name} with a easy to use interface" />
	<meta property="og:image" content={setTheme.thumbnail} />
	<meta property="og:description" content="Customize {setTheme.name} with a easy to use interface" />
</svelte:head>

<template>
	<Preview url={setTheme.previewUrl} />
</template>
