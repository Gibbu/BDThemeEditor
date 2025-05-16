<script lang="ts">
	import { EDITOR_STATE } from '$lib/editor.svelte';

	import { Slider, Colour, Font, Select, Banner, Divider, Image, Number } from '../inputs';

	const inputMap = {
		colour: Colour,
		font: Font,
		image: Image,
		slider: Slider,
		select: Select,
		number: Number,
		banner: Banner,
		divider: Divider
	};
</script>

<div class="flex flex-1 flex-col gap-4 overflow-x-hidden overflow-y-auto p-6 pt-0">
	{#if EDITOR_STATE.THEME}
		{@const panel = EDITOR_STATE.getActiveTab()}

		<header>
			<h4 class="font-manrope text-xl font-semibold tracking-wide text-zinc-100">{panel.title}</h4>
			<p class="text-sm text-zinc-500">{panel.description}</p>
		</header>

		{#each panel.inputs as input}
			{@const Component = inputMap[input.type]}
			<div class="flex flex-col">
				{#if 'title' in input.props}
					<p class="font-manrope font-semibold tracking-wide">{input.props.title}</p>
				{/if}
				{#if 'hint' in input.props}
					<small class="mt-0.5 block text-zinc-500">{input.props.hint}</small>
				{/if}
				<div class="mt-3">
					<Component {...input.props} />
				</div>
			</div>
		{/each}
	{/if}
</div>
