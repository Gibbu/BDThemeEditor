<script lang="ts">
	import { ArrowLeftIcon, ArrowLeftToLineIcon } from '@lucide/svelte';
	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';
	import { page } from '$app/state';
	import { Button } from '$lib/common';
	import Modal from '$lib/common/Modal.svelte';
	import { Preview } from '$lib/editor';
	import { STATE } from '$lib/editor.svelte';

	let mounted = $state<boolean>(false);

	STATE.init(page.params.slug);

	onMount(() => {
		mounted = true;
	});
</script>

{#if mounted}
	<div
		in:fly={{ x: -10, duration: 200, delay: 300 }}
		out:fly={{ x: -10, duration: 200 }}
		class="flex h-full flex-col"
	>
		<header class="flex h-16 items-center justify-between gap-4 border-b border-zinc-700 px-3">
			<div class="flex items-center gap-2">
				<Modal
					title="Back to theme selection?"
					description="Choose another theme."
					class="max-w-125"
				>
					{#snippet trigger(props)}
						<Button variant="text" {...props}>
							<ArrowLeftIcon class="size-4" /> Back
						</Button>
					{/snippet}

					<p>Any changes made, will <u>NOT</u> be saved.</p>

					{#snippet footer()}
						<Button variant="primary" href="/">
							<ArrowLeftToLineIcon class="size-4" />
							Go Back
						</Button>
					{/snippet}
				</Modal>
			</div>
			<button
				type="button"
				class="flex items-center gap-2 rounded-2xl px-3 py-1.5 hover:bg-zinc-700"
			>
				<img
					src="https://github.com/{STATE.THEME?.developer.github}.png"
					alt="Developer avatar"
					class="size-8 rounded-full"
				/>
				{STATE.THEME?.developer.github}
			</button>
		</header>
		<div class="flex-1">
			<Preview />
		</div>
	</div>
{/if}
