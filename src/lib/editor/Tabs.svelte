<script lang="ts">
	import { Tooltip } from '$lib/common';
	import { STATE } from '$lib/editor.svelte';
	import { slug } from '$lib';
	import * as icons from 'lucide-svelte';
	import { mergeAttrs } from 'melt';

	import type { Component } from 'svelte';

	const getIcon = (icon: string): Component => {
		const _icon = icons[icon as keyof typeof icons];
		if (!_icon) throw new TypeError(`\`${icon}\` is not an available icon from Lucide.`);

		return _icon as unknown as Component;
	};
</script>

{#snippet button(title: string, Icon: any)}
	<Tooltip placement="right" content={title}>
		{#snippet children(props)}
			<button
				{...mergeAttrs(props, {
					onclick: () => STATE.setTab(title)
				})}
				type="button"
				class={[
					'relative flex aspect-square cursor-pointer items-center justify-center rounded-lg',
					'transition-colors',
					STATE.tab === slug(title) ? 'bg-zinc-800 text-white' : 'hover:bg-zinc-700/20'
				]}
			>
				<span
					class={[
						'bg-turquoise-500 absolute left-0 h-3 w-1 rounded-lg opacity-0 transition-all',
						STATE.tab === slug(title) && 'h-6 opacity-100'
					]}
				></span>
				<Icon class="size-6" />
			</button>
		{/snippet}
	</Tooltip>
{/snippet}

<div class="bg-zinc-920 flex flex-col gap-4 overflow-y-auto p-3">
	{#if STATE.THEME}
		<div class="flex flex-col gap-2">
			{#each STATE.THEME?.variables as group}
				{@render button(group.title, getIcon(group.icon))}
			{/each}
		</div>
		{#if STATE.THEME.addons.length || STATE.THEME.optionalImports.length}
			<hr class="mx-auto h-1 w-1/2 rounded-xl border-none bg-zinc-700" />
			<div class="flex flex-col gap-2">
				{#if STATE.THEME.addons.length}
					{@render button('Addons', icons.PuzzleIcon)}
				{/if}
				{#if STATE.THEME.optionalImports.length}
					{@render button('Optional Imports', icons.Blocks)}
				{/if}
			</div>
		{/if}
	{/if}
</div>
