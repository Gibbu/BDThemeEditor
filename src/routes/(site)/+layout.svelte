<script lang="ts">
	import { navigating } from '$app/stores';
	import NProgress from 'nprogress';
	import { fade } from 'svelte/transition';

	$: if ($navigating) {
		NProgress.start();
	} else {
		NProgress.done();
	}

	export let data;
</script>

<template>
	{#key data.url}
		<div id="content" in:fade={{ duration: 250, delay: 250 }} out:fade={{ duration: 250 }}>
			<slot />
		</div>
	{/key}
</template>
