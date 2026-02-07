<script lang="ts">
	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';
	import { beforeNavigate } from '$app/navigation';
	import { themes } from '$data/themes';
	import { slug } from '$lib';
	import { Meta } from '$lib/common';
	import { STATE } from '$lib/editor.svelte';

	STATE.reset();

	let mounted = $state<boolean>(false);
	beforeNavigate(() => {
		mounted = false;
	});
	onMount(() => {
		mounted = true;
	});
</script>

<Meta title="Home" />

{#if mounted}
	<div
		class="@container p-8"
		in:fly={{ y: 10, duration: 200, delay: 250 }}
		out:fly={{ y: -10, duration: 200 }}
	>
		<h1 class="font-manrope mb-8 text-3xl font-bold tracking-wider text-white">
			Select a theme...
		</h1>
		<div class="@8xl:grid-cols-4 grid grid-cols-1 gap-12 @lg:grid-cols-2 @4xl:grid-cols-3">
			{#each themes as theme}
				<a
					href="/theme/{slug(theme.name)}"
					class="group relative block rounded-xl focus:outline-none"
				>
					<div
						class={[
							'pointer-events-none absolute inset-0 rounded-3xl bg-zinc-700 opacity-0 transition-all',
							'group-hover:-inset-4 group-hover:opacity-100',
							'group-focus:-inset-4 group-focus:opacity-100'
						]}
					></div>
					<div class="relative">
						<div class="block aspect-video overflow-hidden rounded-xl">
							<img
								src={theme.thumbnail}
								alt="Preview image for {theme.name}"
								class="h-full object-cover"
							/>
						</div>
						<h4 class="font-manrope mt-2 text-lg font-semibold tracking-wide text-zinc-200">
							{theme.name}
						</h4>
					</div>
				</a>
			{/each}
		</div>
	</div>
{/if}
