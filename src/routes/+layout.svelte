<script lang="ts">
	import '../app.css';
	import { EDITOR_STATE } from '$lib/editor.svelte';
	import { ThemeControls, Sidebar, Upload, Download } from '$lib/editor';
	import { fly } from 'svelte/transition';
	import { CodeXmlIcon } from 'lucide-svelte';
	import { ProgressBar } from '@prgm/sveltekit-progress-bar';
	import { Tooltip } from 'bits-ui';

	let { children } = $props();
</script>

<ProgressBar class="text-turquoise-500" />

<Tooltip.Provider disableHoverableContent disableCloseOnTriggerClick>
	<div
		class={[
			'grid h-screen w-screen flex-1 gap-2 p-2 transition-all',
			EDITOR_STATE.THEME ? 'grid-cols-[564px_1fr]' : 'grid-cols-[450px_1fr] delay-100'
		]}
	>
		<div class="relative flex flex-col gap-4">
			{#if EDITOR_STATE.THEME}
				<div
					in:fly={{ x: -10, duration: 200, delay: 200 }}
					out:fly={{ x: -10, duration: 200 }}
					class="absolute top-6 right-0 bottom-6 left-6 -ml-8 grid flex-1 grid-cols-[86px_1fr] gap-2"
				>
					<Sidebar />
					<div class="flex flex-col gap-6">
						<header class="flex items-center gap-4 px-6">
							<Upload />
							<Download />
						</header>
						<ThemeControls />
					</div>
				</div>
			{:else}
				<div
					in:fly={{ x: 10, duration: 200, delay: 200 }}
					out:fly={{ x: 10, duration: 200 }}
					class="absolute inset-6 flex flex-1 flex-col justify-between"
				>
					<header class="flex items-center gap-4">
						<a href="/">
							<img
								src="/images/favicon.png"
								alt="Website icon"
								class="size-10 transition-transform hover:scale-110"
							/>
						</a>
						<h2 class="font-manrope text-xl font-semibold tracking-wide text-white">
							BD Theme Editor
						</h2>
					</header>
					<div class="flex items-center justify-between">
						<p class="text-sm opacity-50">Website made by Gibbu</p>
						<div class="flex items-center gap-4">
							<a
								href="https://gibbu.dev"
								target="_blank"
								rel="noopener noreferrer"
								class="opacity-50 hover:opacity-100"
							>
								<CodeXmlIcon class="size-6" />
							</a>
						</div>
					</div>
				</div>
			{/if}
		</div>
		<main class="overflow-y-auto rounded-lg rounded-tl-4xl rounded-bl-4xl bg-zinc-800">
			{@render children()}
		</main>
	</div>
</Tooltip.Provider>
