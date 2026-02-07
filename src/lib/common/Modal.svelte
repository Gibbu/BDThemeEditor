<script lang="ts">
	import { XIcon } from '@lucide/svelte';
	import {
		Modal,
		ModalBackdrop,
		ModalContent,
		ModalDescription,
		ModalTitle,
		ModalTrigger
	} from 'lithesome';
	import { fade, scale } from 'svelte/transition';
	import { cn } from '$lib';
	import Button from './Button.svelte';

	import type { Snippet } from 'svelte';

	interface Props {
		title: string | Snippet;
		description: string | Snippet;
		children: Snippet;
		trigger: Snippet<[Record<string, any>]>;
		footer?: Snippet;
		visible?: boolean;
		class?: string;
	}

	let {
		title,
		description,
		children,
		trigger,
		footer,
		visible = $bindable(false),
		class: klass
	}: Props = $props();

	const close = () => {
		visible = false;
	};
</script>

<Modal bind:visible>
	<ModalTrigger>
		{#snippet custom({ props })}
			{@render trigger(props)}
		{/snippet}
	</ModalTrigger>

	<ModalBackdrop>
		{#snippet custom({ props, state })}
			{#if state.visible}
				<div
					class="absolute inset-0 bg-black/70 backdrop-blur-md"
					transition:fade={{ duration: 150 }}
					{...props}
				></div>
			{/if}
		{/snippet}
	</ModalBackdrop>
	<ModalContent>
		{#snippet custom({ props, state })}
			{#if state.visible}
				<div
					transition:scale={{ duration: 200, start: 0.95 }}
					{...props}
					class={cn(
						'absolute top-1/2 left-1/2 z-10 w-full -translate-1/2 rounded-lg bg-zinc-900 shadow-xl',
						klass
					)}
				>
					<header class="p-6 pb-0">
						<ModalTitle class="font-manrope text-2xl font-semibold tracking-wide text-zinc-100">
							{title}
						</ModalTitle>
						<ModalDescription class="text-sm text-zinc-500">{description}</ModalDescription>
					</header>
					<div class="max-h-[75vh] overflow-x-hidden overflow-y-auto p-6">
						{@render children?.()}
					</div>
					{#if footer}
						<footer class="flex justify-end gap-3 p-6 pt-0">
							{@render footer()}
						</footer>
					{/if}
					<Button variant="text" onclick={close} class="absolute top-2 right-2">
						<XIcon class="size-4" />
					</Button>
				</div>
			{/if}
		{/snippet}
	</ModalContent>
</Modal>
