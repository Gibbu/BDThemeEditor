<script lang="ts">
	import { Tooltip } from '$lib/common';
	import { EDITOR_STATE } from '$lib/editor.svelte';
	import { slug } from '$lib/utils';
	import * as icons from 'lucide-svelte';
	import type { Component } from 'svelte';

	const getIcon = (icon: string): Component => {
		const _icon = icons[icon as keyof typeof icons];
		if (!_icon) throw new TypeError(`\`${icon}\` is not an available icon from Lucide.`);

		return _icon as unknown as Component;
	};
</script>

{#snippet button(title: string, Icon: any)}
	<Tooltip side="right" content={title}>
		{#snippet children(props)}
			<button
				{...props}
				type="button"
				class={[
					'relative flex aspect-square cursor-pointer items-center justify-center rounded-lg',
					'transition-colors',
					EDITOR_STATE.tab === slug(title) ? 'bg-zinc-800 text-white' : 'hover:bg-zinc-700/20'
				]}
				onclick={() => EDITOR_STATE.setTab(title)}
			>
				<span
					class={[
						'bg-turquoise-500 absolute left-0 h-3 w-1 rounded-lg opacity-0 transition-all',
						EDITOR_STATE.tab === slug(title) && 'h-6 opacity-100'
					]}
				></span>
				<Icon class="size-6" />
			</button>
		{/snippet}
	</Tooltip>
{/snippet}

<div
	class={[
		'bg-zinc-920 -my-6 overflow-y-auto rounded-tr-md rounded-br-md p-3',
		'flex flex-col gap-4'
	]}
>
	{#if EDITOR_STATE.THEME}
		<div class="flex flex-col gap-2">
			{#each EDITOR_STATE.THEME?.variables as group}
				{@const Icon = getIcon(group.icon)}
				{@render button(group.title, Icon)}
			{/each}
		</div>
		<hr class="mx-auto h-1 w-1/2 rounded-xl border-none bg-zinc-700" />
		<div class="flex flex-col gap-2">
			{#if EDITOR_STATE.THEME.addons.length}
				{@render button('Addons', icons.PuzzleIcon)}
			{/if}
			{#if EDITOR_STATE.THEME.optionalImports.length}
				{@render button('Optional Imports', icons.Blocks)}
			{/if}
		</div>
	{/if}
</div>
