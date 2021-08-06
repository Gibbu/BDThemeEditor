<script context="module">
	import type {ErrorLoad} from '@sveltejs/kit';

	export const load: ErrorLoad = ({status, error}) => {
		return {
			props: {error, status}
		}
	}
</script>

<script>
	import {dev} from '$app/env';

	export let error: any;
	export let status: string;
</script>

<svelte:head>
	<title>Error - BDThemeEditor</title>
</svelte:head>

<div class="error wrap">
	<div class="info">
		<h1>{status}</h1>
		<p>{error.message}</p>
	</div>
	<div class="stack">
		{#if dev && error.stack}
			<pre>{error.stack}</pre>
		{/if}
	</div>
</div>

<style lang="scss">
	.info {
		padding: em(120) 0;
		text-align: center;
	}
	h1 {
		font-size: em(84);
		font-family: 'Montserrat';
		font-weight: 600;
		color: var(--text-primary);
	}
	.stack {
		margin-bottom: em(120);
		border: rem(1) solid var(--border);
		background: var(--card);
		border-radius: rem(4);
	}
</style>