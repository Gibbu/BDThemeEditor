<script lang="ts">
	import { isMounted, loaded, flash } from '$lib/stores';
	import { browser } from '$app/environment';
	import { navigating } from '$app/stores';
	import { tooltip } from 'svooltip';
	import { Icon } from '@steeze-ui/svelte-icon';
	import { Check } from '@steeze-ui/heroicons';
	import NProgress from 'nprogress';

	import { Button, Modal } from '$components/common';

	$: if ($navigating) {
		NProgress.start();
	} else {
		NProgress.done();
	}

	// Browser warning
	let isChrome: boolean = browser && /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
	let browserWarning: boolean = browser && !localStorage.browser_warning;

	const closeWarning = () => {
		browserWarning = false;
		localStorage.browser_warning = true;
	};
</script>

<template>
	<div id="content" class="wrap">
		<slot />
	</div>
	<footer id="footer" class="footer">
		<div class="wrap">
			<p class="madeby">
				Website created by <a href="https://gibbu.me" target="_blank" rel="noreferrer noopener" class="anchor">Gibbu</a>
			</p>
		</div>
	</footer>
</template>

{#if !isChrome && browserWarning}
	<Modal bind:visible={browserWarning} title="Unsupported Browser" markdown>
		<p>
			This browser is not recommended when using this editor.
			<br />
			We recommend using a Chromium browser such as
			<a href="https://www.google.com/chrome/" target="_blank" class="anchor">Google Chrome</a>,
			<a href="https://brave.com/" target="_blank" class="anchor">Brave</a>
			or the new
			<a
				href="https://support.microsoft.com/en-us/microsoft-edge/download-the-new-microsoft-edge-based-on-chromium-0f4a3dd7-55df-60f5-739f-00010dba52cf"
				target="_blank"
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
{/if}

<style lang="scss">
	.footer {
		padding: 12px 0;
		border-top: 1px solid var(--border);
		margin-top: 150px;
	}
	.madeby {
		font-size: 12px;
		opacity: 0.5;
	}
</style>
