<script lang="ts">
	import { EDITOR_STATE } from '$lib/editor.svelte';
	import { Slider, Colour, Font, Select, Banner, Divider, Image, Number } from '../inputs';
</script>

<div class="flex flex-1 flex-col gap-4 overflow-x-hidden overflow-y-auto p-6 pt-0">
	{#if EDITOR_STATE.THEME}
		{@const panel = EDITOR_STATE.getActiveTab()}

		<header class="border-b border-zinc-700 pb-6">
			<h4 class="font-manrope text-xl font-semibold tracking-wide text-zinc-100">{panel.title}</h4>
			<p class="mt-2 text-sm text-zinc-500">{panel.description}</p>
		</header>

		{#each panel.inputs as input}
			{@const type = input.type}
			<div class="flex flex-col">
				{#if 'title' in input.props}
					<p class="font-manrope font-semibold tracking-wide">{input.props.title}</p>
				{/if}
				{#if 'hint' in input.props}
					<small class="mt-0.5 block text-zinc-500">{input.props.hint}</small>
				{/if}
				<div class="mt-3 pb-2">
					{#if type === 'slider'}
						<Slider {...input.props} />
					{:else if type === 'select'}
						<Select {...input.props} />
					{:else if type === 'number'}
						<Number {...input.props} />
					{:else if type === 'colour'}
						<Colour {...input.props} />
					{:else if type === 'font'}
						<Font {...input.props} />
					{:else if type === 'image'}
						<Image {...input.props} />
					{:else if type === 'banner'}
						<Banner {...input.props} />
					{:else if type === 'divider'}
						<Divider {...input.props} />
					{/if}
				</div>
			</div>
		{/each}
	{/if}
</div>
