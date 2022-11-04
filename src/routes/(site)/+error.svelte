<script lang="ts">
	import { dev } from '$app/environment';
	import { Icon } from '@steeze-ui/svelte-icon';
	import { Home } from '@steeze-ui/heroicons';
	import { page } from '$app/stores';

	import { Button } from '$components/common';
</script>

<svelte:head>
	<title>Error - BDThemeEditor</title>
</svelte:head>

<template>
	<div class="error wrapper">
		<div class="info">
			<h1>{$page.status}</h1>
			<p>{$page.error?.message}</p>
			<Button type="primary" href="/">
				<Icon src={Home} />
				Return Home
			</Button>
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
		padding: 120px 0;
		text-align: center;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	h1 {
		font-size: 84px;
		font-family: 'Montserrat';
		font-weight: 600;
		color: var(--text-primary);
	}
	p {
		margin: 10px 0 45px;
	}
</style>
