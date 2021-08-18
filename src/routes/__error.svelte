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
	import Icon, {Home} from 'svelte-hero-icons';

	import {Button} from '$components/common/Button';

	export let error: any;
	export let status: string;
</script>

<svelte:head>
	<title>Error - BDThemeEditor</title>
</svelte:head>

<template>
	<div class="error wrapper">
		<div class="info">
			<h1>{status}</h1>
			<p>{error.message}</p>
			<Button type="primary" href="/">
				<svelte:fragment slot="iconL">
					<Icon src={Home} />
				</svelte:fragment>
				Return Home
			</Button>
		</div>
		<div class="stack">
			{#if dev && error.stack}
				<pre>{error.stack}</pre>
			{/if}
		</div>
	</div>
</template>

<style lang="scss">
	.error {
		height: 100vh;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	.info {
		padding: rem(120) 0;
		text-align: center;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	h1 {
		font-size: rem(84);
		font-family: 'Montserrat';
		font-weight: 600;
		color: var(--text-primary);
	}
	p {
		margin: rem(10) 0 rem(45);
	}
	.stack {
		margin-bottom: rem(120);
		border: rem(1) solid var(--border);
		background: var(--card);
		border-radius: rem(4);
	}
</style>