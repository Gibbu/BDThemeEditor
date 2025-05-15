<script lang="ts">
	import { Dialog } from 'bits-ui';
	import type { Snippet } from 'svelte';
	import { fade, scale } from 'svelte/transition';

	interface Props {
		children: Snippet;
		visible: boolean;
		title: string;
		description?: string;
		footer?: Snippet;
	}

	let { children, visible = $bindable(), title, description, footer }: Props = $props();
</script>

<Dialog.Root bind:open={visible}>
	<Dialog.Overlay forceMount>
		{#snippet child({ props, open })}
			{#if open}
				<div
					{...props}
					class="fixed inset-0 z-50 bg-zinc-950/50 backdrop-blur-md"
					transition:fade={{ duration: 150 }}
				></div>
			{/if}
		{/snippet}
	</Dialog.Overlay>
	<Dialog.Content forceMount>
		{#snippet child({ props, open })}
			{#if open}
				<div
					transition:scale={{ start: 0.95, duration: 150 }}
					class="fixed top-1/2 left-1/2 z-50 w-[500px] -translate-1/2 rounded-xl bg-zinc-800 shadow-xl"
					{...props}
				>
					<header class="p-6">
						<Dialog.Title class="font-manrope text-2xl font-bold tracking-wide text-white">
							{title}
						</Dialog.Title>
						{#if description}
							<Dialog.Description>{description}</Dialog.Description>
						{/if}
					</header>
					<div class="max-h-[75vh] overflow-x-hidden overflow-y-auto p-6 pt-0">
						{@render children()}
					</div>
					{#if footer}
						<footer class="flex justify-end gap-2 p-6 pt-0">
							{@render footer()}
						</footer>
					{/if}
				</div>
			{/if}
		{/snippet}
	</Dialog.Content>
</Dialog.Root>
