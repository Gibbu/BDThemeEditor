<script lang="ts">
	import { STATE } from '$lib/editor.svelte';
	import { fly } from 'svelte/transition';
	import { ProgressBar } from '@prgm/sveltekit-progress-bar';
	import { CodeXmlIcon } from 'lucide-svelte';
	import { Controls, Download, Tabs, Upload } from '$lib/editor';
	import { Toaster } from '$lib/common';
	import '../app.css';
	import '@simonwep/pickr/dist/themes/classic.min.css';

	let { children } = $props();
</script>

<ProgressBar class="text-turquoise-500" />

<Toaster />

<div
	class={[
		'grid h-screen w-screen grid-cols-[var(--sidebar-width)_1fr] overflow-hidden transition-all',
		!STATE.THEME && 'delay-75'
	]}
	style:--sidebar-width={STATE.THEME ? '586px' : '450px'}
>
	<div class="relative">
		{#if STATE.THEME}
			<div
				in:fly={{ x: -10, duration: 200, delay: 200 }}
				out:fly={{ x: -10, duration: 200 }}
				class={[
					'absolute inset-0 grid flex-1 grid-cols-[86px_1fr] gap-2',
					!STATE.Loaded && 'pointer-events-none'
				]}
			>
				<Tabs />
				<div class="flex flex-col gap-6 pt-6">
					<header class="flex items-center gap-4 px-6">
						<Upload />
						<Download />
					</header>
					<Controls />
				</div>
			</div>
		{:else}
			<div
				in:fly={{ x: 10, duration: 200, delay: 200 }}
				out:fly={{ x: 10, duration: 200 }}
				class="absolute inset-0 flex flex-1 flex-col justify-between p-6"
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
					<p class="text-sm opacity-50">Editor made by Gibbu</p>
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
	<div class="p-2">
		<div class="h-full rounded-2xl bg-zinc-800">
			{@render children()}
		</div>
	</div>
</div>
