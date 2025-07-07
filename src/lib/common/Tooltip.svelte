<script lang="ts">
	import { Tooltip } from 'melt/builders';
	import { cn } from '$lib';
	import { fly } from 'svelte/transition';

	import type { Snippet } from 'svelte';
	import type { Placement } from '$lib/types';

	interface Props {
		children: Snippet<[Record<string, any>]>;
		content: string;
		placement?: Placement;
		openDelay?: number;
		class?: string;
	}

	let { children, content, placement = 'top', openDelay = 0, class: klass }: Props = $props();

	const tooltip = new Tooltip({
		floatingConfig: {
			computePosition: {
				placement
			}
		},
		openDelay,
		disableHoverableContent: true,
		closeOnPointerDown: false
	});

	const flyConfig = {
		top: { y: -5 },
		right: { x: -5 },
		bottom: { y: 5 },
		left: { x: 5 }
	}[placement.split('-')[0]!];
</script>

{@render children(tooltip.trigger)}

{#if tooltip.isVisible}
	<div
		{...tooltip.content}
		transition:fly={{ ...flyConfig, duration: 150 }}
		class={cn(
			'pointer-events-none rounded-md px-3 py-1 text-sm font-semibold shadow-lg',
			'bg-white text-zinc-700',
			klass
		)}
	>
		<div {...tooltip.arrow} class="size-2 bg-zinc-700"></div>
		{content}
	</div>
{/if}
