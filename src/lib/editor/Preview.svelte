<script lang="ts">
	import { EDITOR_STATE } from '$lib/editor.svelte';
	import { preview } from '$lib/preview';
	import { onDestroy } from 'svelte';

	let iframe: HTMLIFrameElement;
	const previewURL = 'https://gibbu.github.io/ThemePreview/';

	const load = () => {
		EDITOR_STATE.preview = iframe;
		if (EDITOR_STATE.THEME) {
			preview({
				action: 'setPreview',
				text: EDITOR_STATE.THEME.preview
			});
		}
	};
	onDestroy(() => (EDITOR_STATE.preview = null));
</script>

<div class="relative h-full p-4">
	{#if !EDITOR_STATE.preview}
		<div class="absolute inset-0 flex flex-col items-center justify-center bg-zinc-800/95">
			<div
				class="size-32 animate-spin rounded-full border-3 border-white border-t-transparent"
			></div>
			<p class="font-manrope mt-12 text-xl font-semibold tracking-wide text-white">
				Previewer is loading...
			</p>
			<small class="mt-6 text-sm text-zinc-500">
				If this takes longer than 1 minute, refresh your page.
			</small>
		</div>
	{/if}
	<iframe
		bind:this={iframe}
		src={previewURL}
		class="h-full w-full rounded-2xl"
		title=""
		frameborder="0"
		onload={load}
	></iframe>
</div>
