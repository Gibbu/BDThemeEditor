<script lang="ts">
	import { page } from '$app/state';
	import { EDITOR_STATE } from '$lib/editor.svelte';
	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';
	import { ArrowBigLeftIcon, ArrowLeftIcon } from 'lucide-svelte';
	import { Button, Modal } from '$lib/common';
	import { goto } from '$app/navigation';
	import { Preview } from '$lib/editor';

	EDITOR_STATE.init(page.params.slug);

	let mounted = $state<boolean>(false);
	let back = $state<boolean>(false);

	onMount(() => {
		mounted = true;
	});

	const goBack = () => {
		back = false;
		setTimeout(async () => {
			await goto('/');
		}, 250);
	};
</script>

<Modal bind:visible={back} title="Go back?">
	<p>Any changes will <b class="font-bold underline">NOT</b> be saved.</p>

	{#snippet footer()}
		<Button variant="text" onclick={() => (back = false)}>Close</Button>
		<Button variant="primary" onclick={goBack}>
			<ArrowBigLeftIcon class="size-4" />
			Go back
		</Button>
	{/snippet}
</Modal>

{#if mounted}
	<div
		in:fly={{ x: -10, duration: 200, delay: 300 }}
		out:fly={{ x: -10, duration: 200 }}
		class="flex h-full flex-col"
	>
		<header class="flex h-16 items-center justify-between gap-4 border-b border-zinc-700 px-3">
			<div class="flex items-center gap-2">
				<Button variant="text" onclick={() => (back = !back)}>
					<ArrowLeftIcon class="size-4" /> Back
				</Button>
			</div>
			<button
				type="button"
				class="flex items-center gap-2 rounded-2xl px-3 py-1.5 hover:bg-zinc-700"
			>
				<img
					src="https://github.com/{EDITOR_STATE.THEME?.developer.github}.png"
					alt="Developer avatar"
					class="size-8 rounded-full"
				/>
				{EDITOR_STATE.THEME?.developer.github}
			</button>
		</header>
		<div class="flex-1">
			<Preview />
		</div>
	</div>
{/if}
