<script lang="ts">
	import { slug } from '$lib';
	import { STATE } from '$lib/editor.svelte';
	import { Banner, Colour, Divider, Font, Image, Number, Select, Slider } from '../inputs';
</script>

<div class="flex flex-1 p-6 pt-0">
	{#if STATE.THEME}
		{#each STATE.THEME.variables as variables}
			<div class={[STATE.tab === slug(variables.title) ? 'flex flex-1 flex-col gap-4' : 'hidden']}>
				<header class="border-b border-zinc-700 pb-6">
					<h4 class="font-manrope text-xl font-semibold tracking-wide text-zinc-100">
						{variables.title}
					</h4>
					{#if variables.description}
						<p class="mt-2 text-sm text-zinc-500">{variables.description}</p>
					{/if}
				</header>

				{#each variables.inputs as input, i (i)}
					{@const type = input.type}
					<div class="flex flex-col">
						{#if type !== 'banner' && type !== 'divider'}
							<p class="font-manrope font-semibold tracking-wide">
								{input.props.title}
								{#if type == 'slider' || type === 'number'}
									<small class="text-xs opacity-50">({input.props.value}{input.props.unit})</small>
								{/if}
							</p>
						{/if}
						{#if 'hint' in input.props}
							<small class="mt-0.5 block text-zinc-500">{input.props.hint}</small>
						{/if}
						<div class="mt-1 pb-2">
							{#if input.type === 'slider'}
								<Slider {...input.props} varGroup={input.varGroup} />
							{:else if input.type === 'select'}
								<Select {...input.props} varGroup={input.varGroup} />
							{:else if input.type === 'number'}
								<Number {...input.props} varGroup={input.varGroup} />
							{:else if input.type === 'colour'}
								<Colour {...input.props} varGroup={input.varGroup} />
							{:else if input.type === 'font'}
								<Font {...input.props} varGroup={input.varGroup} />
							{:else if input.type === 'image'}
								<Image {...input.props} varGroup={input.varGroup} />
							{:else if input.type === 'banner'}
								<Banner {...input.props} />
							{:else if input.type === 'divider'}
								<Divider {...input.props} />
							{/if}
						</div>
					</div>
				{/each}
			</div>
		{/each}

		{#if STATE.THEME.addons.length}
			<div class={[STATE.tab === slug('addons') ? 'flex flex-1 flex-col gap-4' : 'hidden']}>
				Addons
			</div>
		{/if}

		{#if STATE.THEME.optionalImports.length}
			<div
				class={[STATE.tab === slug('optionalimports') ? 'flex flex-1 flex-col gap-4' : 'hidden']}
			>
				Optional Imports
			</div>
		{/if}
	{/if}
</div>
