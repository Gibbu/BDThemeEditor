<script lang="ts">
	import { Tooltip, TooltipArrow, TooltipContent, TooltipTrigger } from 'lithesome';
	import { fly } from 'svelte/transition';

	import type { Placement } from '$lib/types';
	import type { Snippet } from 'svelte';

	interface Props {
		children: Snippet<[Record<string, any>]>;
		content: string;
		placement?: Placement;
		delay?: number | [number, number];
		class?: string;
	}

	let { children, content, placement = 'top', delay = 0 }: Props = $props();

	const flyConfig = $derived(
		{
			top: { y: -5 },
			right: { x: -5 },
			bottom: { y: 5 },
			left: { x: 5 }
		}[placement.split('-')[0]!]
	);
</script>

<Tooltip floatingConfig={{ placement, offset: 10 }} {delay}>
	<TooltipTrigger>
		{#snippet custom({ props })}
			{@render children(props)}
		{/snippet}
	</TooltipTrigger>
	<TooltipContent>
		{#snippet custom({ props, state })}
			{#if state.visible}
				<div
					{...props}
					transition:fly={{ ...flyConfig, duration: 150 }}
					class={[
						'pointer-events-none rounded-md px-3 py-1 text-sm font-semibold shadow-lg',
						'bg-white text-zinc-700'
					]}
				>
					<TooltipArrow class="size-2 rotate-45 bg-white" />
					{content}
				</div>
			{/if}
		{/snippet}
	</TooltipContent>
</Tooltip>
