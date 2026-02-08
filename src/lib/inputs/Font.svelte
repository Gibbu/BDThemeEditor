<script lang="ts" module>
	let index = $state<number>(-1);
</script>

<script lang="ts">
	import { HardDriveIcon } from '@lucide/svelte';
	import { onMount } from 'svelte';
	import { Textbox } from '$lib/common';
	import { STATE } from '$lib/editor.svelte';
	import { FONTS } from '$lib/fonts.svelte';
	import { preview } from '$lib/preview';
	import { cn, outside, slug } from '$lib/utils.svelte';

	import type { FontInputProps } from '$types/inputs';

	let { value, variable, addon }: FontInputProps = $props();

	let type = $state<'google' | 'local'>('google');

	let visible = $state<boolean>(false);
	let hoveredIndex = $state<number>(-1);
	let inputElement = $state<HTMLInputElement>();
	let optionsElement = $state<HTMLElement>();

	const filtered = $derived(
		FONTS.fonts.filter(
			(font) => font.family.toLowerCase().trim().indexOf(value.toLowerCase().trim()) !== -1
		)
	);

	$effect(() => {
		if (value) hoveredIndex = -1;
	});
	$effect(() => {
		if (filtered[hoveredIndex])
			optionsElement
				?.querySelector(`#${slug(filtered[hoveredIndex].family)}`)
				?.scrollIntoView({ block: 'nearest', inline: 'nearest' });
	});
	onMount(() => {
		index++;
		return () => {
			if (index > 0) index = -1;
		};
	});

	const handleKeydown = (e: KeyboardEvent) => {
		const { key } = e;

		if (value.trim().length > 2) visible = true;

		if (key.startsWith('Arrow') || key === 'Enter') {
			e.preventDefault();
		}
		if (key === 'ArrowDown' && hoveredIndex < filtered.length - 1) {
			hoveredIndex++;
		}
		if (key === 'ArrowUp' && hoveredIndex > 0) {
			hoveredIndex--;
		}
		if (key === 'Enter') {
			if (filtered[hoveredIndex])
				(
					optionsElement?.querySelector(
						`#${slug(filtered[hoveredIndex].family)}`
					) as HTMLButtonElement
				)?.click();
		}
	};

	const handleChange = (e: KeyboardEvent & { currentTarget: HTMLInputElement }) => {
		value = e.currentTarget.value;

		const fontUrl: string = `https://fonts.googleapis.com/css2?family=${value.replace(
			/ /g,
			'+'
		)}:wght@100;300;400;500;700&display=swap`;
		const fontImport: string = `@import url('${fontUrl}');`;

		if (STATE.THEME?.fonts) {
			preview({
				action: 'addFont',
				index,
				text: fontImport
			});
			STATE.THEME.fonts[index] = fontUrl;
		} else {
			preview({
				action: 'removeFont',
				index
			});
			if (STATE.THEME?.fonts) STATE.THEME.fonts[index] = '';
		}

		STATE.updateVariable({ variable, value }, addon);
	};

	const setValue = () => {
		value = filtered[hoveredIndex].family;
		visible = false;
	};
</script>

<div class="flex flex-col rounded-lg bg-zinc-800">
	<div class="flex gap-3 p-3 pb-0">
		<button
			type="button"
			class={[
				'flex flex-1 cursor-pointer flex-col items-center justify-center rounded-md py-4',
				'focusOutline focus:outline-none',
				'focus:outline-none',
				type === 'google' ? 'bg-zinc-700/50' : 'hover:bg-zinc-700/20'
			]}
			onclick={() => (type = 'google')}
		>
			<svg
				class={['size-6', type === 'google' && 'text-white']}
				role="img"
				viewBox="0 0 24 24"
				xmlns="http://www.w3.org/2000/svg"
				fill="currentColor"
				><path
					d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"
				/></svg
			>
			<span
				class={[
					'mt-2 text-xs font-medium tracking-wide',
					type === 'google' ? 'text-white' : 'text-zinc-400'
				]}>Google Fonts</span
			>
		</button>
		<button
			type="button"
			class={[
				'flex flex-1 cursor-pointer flex-col items-center justify-center rounded-md py-4',
				'focusOutline focus:outline-none',
				'focus:outline-none',
				type === 'local' ? 'bg-zinc-700/50' : 'hover:bg-zinc-700/20'
			]}
			onclick={() => (type = 'local')}
		>
			<HardDriveIcon class={cn('size-6', type === 'local' && 'text-white')} />
			<span
				class={[
					'mt-2 text-xs font-medium tracking-wide',
					type === 'local' ? 'text-white' : 'text-zinc-400'
				]}>Local Font</span
			>
		</button>
	</div>
	<div class="relative p-3">
		<Textbox
			bind:value
			bind:ref={inputElement}
			placeholder="{type === 'google' ? 'Google' : 'Local'} font name..."
			onkeydown={handleKeydown}
			onfocus={() => (visible = true)}
			onchange={handleChange}
			variant="low"
		/>
		<small class="text-xs opacity-50 select-none">Click away to update preview</small>

		{#if value.trim().length > 2 && visible && type === 'google'}
			<div
				bind:this={optionsElement}
				class={[
					'absolute left-0 z-10 max-h-96 w-full -translate-y-5 overflow-x-hidden overflow-y-auto',
					'flex flex-col gap-2 rounded-md bg-zinc-800 p-3'
				]}
				{@attach outside({
					callback: () => (visible = false),
					exclude: inputElement
				})}
			>
				{#each filtered as font, i}
					<button
						id={slug(font.family)}
						type="button"
						class={[
							'cursor-pointer rounded px-3 py-2 text-left text-sm',
							hoveredIndex === i ? 'bg-zinc-700 text-white' : ''
						]}
						onmouseenter={() => (hoveredIndex = i)}
						onclick={setValue}
					>
						{font.family}
					</button>
				{:else}
					<p class="text-xs text-center py-3 opacity-50">No fonts found...</p>
				{/each}
			</div>
		{/if}
	</div>
</div>
