<script lang="ts">
	import { DownloadIcon } from '@lucide/svelte';
	import { createFocusTrap } from 'focus-trap';
	import hljs from 'highlight.js';
	import { fade, fly, scale } from 'svelte/transition';
	import { STATE } from '$lib/editor.svelte';
	import { cn, portal } from '$lib/utils.svelte';
	import { Button, Modal, Textbox } from '../common';

	let visible = $state<boolean>(false);

	let themeName = $state<string>('');

	const canDownload = $derived(themeName.length >= 3);
</script>

<Button variant="primary" class="w-full" size="lg" onclick={() => (visible = !visible)}>
	<DownloadIcon class="size-6" /> Download
</Button>

{#if visible}
	<div {@attach portal()} class="fixed inset-0 z-50 flex flex-col items-center justify-center">
		<div
			role="none"
			transition:fade={{ duration: 150 }}
			class="absolute inset-0 bg-black/70 backdrop-blur-md"
			onclick={() => (visible = false)}
		></div>

		<div
			transition:scale={{ duration: 200, start: 0.95 }}
			class="w-full max-w-3xl items-start space-y-4"
		>
			<div
				class={cn('relative z-10 w-full max-w-7xl rounded-lg bg-zinc-900 shadow-xl')}
				{@attach (node) => {
					const trap = createFocusTrap(node, {
						allowOutsideClick: true
					});
					trap.activate();

					return () => trap.deactivate();
				}}
			>
				<header class="p-6 pb-0">
					<h2 class="font-manrope text-2xl font-semibold tracking-wide text-zinc-100">Download</h2>
				</header>
				<div class="p-6">
					<label for="download-theme" class="mb-2 inline-flex">Give your theme a name</label>
					<Textbox
						bind:value={themeName}
						id="download-theme"
						placeholder="At least 3 characters..."
					/>
					<div class="mt-4 flex justify-end">
						<Button variant="primary" disabled={!canDownload}>
							<DownloadIcon class="size-4" />
							Download
						</Button>
					</div>
				</div>
			</div>

			<div class="relative z-10 w-full max-w-7xl overflow-auto rounded-lg bg-zinc-900 shadow-xl">
				<pre class="p-6"><code
						>{@html hljs
							.highlight(STATE.generateCSS(false), { language: 'css' })
							.value.trim()}</code
					></pre>
			</div>
		</div>
	</div>
{/if}

<!-- <Modal bind:visible={visible} title="Download" description="Get your theme" class="max-w-7xl">
	{#snippet custom()}
		<div class="relative z-10 w-full max-w-[500px] rounded-lg bg-zinc-900 shadow-xl">

		</div>

		<div class="flex gap-8">
			<div class="flex-1">
				<label for="download-theme" class="inline-flex mb-2">Give your theme a name</label>
				<Textbox bind:value={themeName} id="download-theme" placeholder="At least 3 characters..." />
				<div class="flex justify-end mt-4">
					<Button variant="primary" disabled={!canDownload}>
						<DownloadIcon class="size-4" />
						Download
					</Button>
				</div>
			</div>
			<div class="flex-2">
				<pre>
					<code>{@html hljs.highlight(STATE.generateCSS(false), {language: 'css'}).value}</code>
				</pre>
			</div>
		</div>
	{/snippet}
</Modal> -->
