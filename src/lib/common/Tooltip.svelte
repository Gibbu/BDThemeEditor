<script lang="ts">
	import { Tooltip } from 'bits-ui';
	import type { Snippet } from 'svelte';
	import { cn } from '$lib/utils';

	let {
		children,
		content,
		align = 'center',
		side = 'top',
		class: klass
	}: {
		children: Snippet<[Record<string, any>]>;
		content: string;
		align?: Tooltip.ContentProps['align'];
		side?: Tooltip.ContentProps['side'];
		class?: string;
	} = $props();
</script>

<Tooltip.Root delayDuration={0}>
	<Tooltip.Trigger class={klass}>
		{#snippet child({ props })}
			{@render children(props)}
		{/snippet}
	</Tooltip.Trigger>
	<Tooltip.Content {align} {side} sideOffset={8}>
		<div
			class={cn(
				'pointer-events-none rounded-md px-3 py-1 text-sm shadow-lg',
				'bg-zinc-700 text-zinc-200'
			)}
		>
			{content}
		</div>
	</Tooltip.Content>
</Tooltip.Root>
