<script lang="ts">
	import { cn, portal } from '$lib';
	import { createFocusTrap } from 'focus-trap';

	import type { Snippet } from 'svelte';
	import { fade, scale } from 'svelte/transition';

	interface Props {
		title: string | Snippet;
		children: Snippet;
		description: string | Snippet;
		visible?: boolean;
		class?: string;
		footer?: Snippet;
	}

	let {
		visible = $bindable(false),
		children,
		title,
		description,
		footer,
		class: klass
	}: Props = $props();

	const close = () => {
		visible = false;
	};
</script>

{#if visible}
	<div {@attach portal()} class="fixed inset-0 z-50 flex flex-col items-center justify-center">
		<div
			role="none"
			transition:fade={{ duration: 150 }}
			class="absolute inset-0 bg-black/70 backdrop-blur-md"
			onclick={close}
		></div>

		<div
			transition:scale={{ duration: 200, start: 0.95 }}
			class={cn('relative z-10 w-[500px] rounded-lg bg-zinc-900 shadow-xl', klass)}
			{@attach (node) => {
				const trap = createFocusTrap(node, {
					allowOutsideClick: true
				});
				trap.activate();

				return () => trap.deactivate();
			}}
		>
			<header class="p-6 pb-0">
				<h2 class="font-manrope text-2xl font-semibold tracking-wide text-zinc-100">
					{title}
				</h2>
				<p class="text-sm text-zinc-500">{description}</p>
			</header>
			<div class="max-h-[75vh] overflow-x-hidden overflow-y-auto p-6">
				{@render children()}
			</div>
			{#if footer}
				<footer class="flex justify-end gap-3 p-6 pt-0">
					{@render footer()}
				</footer>
			{/if}
		</div>
	</div>
{/if}
