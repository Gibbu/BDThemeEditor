<script lang="ts">
	import { browser } from '$app/environment';
	import { Modal, Button } from '$components/common';
	import { Icon } from '@steeze-ui/svelte-icon';
	import { Check } from '@steeze-ui/heroicons';
	import { Toasts } from 'svoast';
	import '$scss/app.scss';
	import 'svooltip/styles.css';

	// Browser warning
	let isChrome: boolean = browser && /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
	let browserWarning: boolean = browser && !localStorage.browser_warning;

	$: visible = !isChrome && browserWarning;

	const closeWarning = () => {
		browserWarning = false;
		localStorage.browser_warning = true;
	};
</script>

<template>
	<Toasts position="top-center" />
	<div class="pattern" />
	<slot />
</template>

<Modal bind:visible title="Unsupported Browser" closeable={false} markdown>
	<p>This browser is not recommended when using this editor.</p>
	<p>
		We recommend using a Chromium browser such as
		<a href="https://www.google.com/chrome/" target="_blank" rel="noreferrer" class="anchor">Google Chrome</a>,
		<a href="https://brave.com/" target="_blank" rel="noreferrer" class="anchor">Brave</a>
		or the new
		<a
			href="https://support.microsoft.com/en-us/microsoft-edge/download-the-new-microsoft-edge-based-on-chromium-0f4a3dd7-55df-60f5-739f-00010dba52cf"
			target="_blank"
			rel="noreferrer"
			class="anchor">Edge</a
		>.
	</p>
	<p>If you wish to continue, remember elements inside the preview may not be displayed correctly.</p>

	<svelte:fragment slot="footer">
		<Button variant="primary" on:click={closeWarning}>
			<Icon src={Check} />
			I Understand
		</Button>
	</svelte:fragment>
</Modal>

<style>
	.pattern {
		position: absolute;
		height: 100%;
		width: 100%;
		top: 0;
		left: 0;
		background: url('/images/grid-pattern.png');
		opacity: 0.035;
		mask: linear-gradient(transparent, black);
		rotate: 180deg;
		z-index: -1;
	}
</style>
