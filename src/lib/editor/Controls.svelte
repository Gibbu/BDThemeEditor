<script lang="ts">
	import { STATE } from '$lib/editor.svelte';
	import { Slider, Colour, Font, Select, Banner, Divider, Image, Number } from '../inputs';
</script>

<div class="flex flex-1 overflow-x-hidden overflow-y-auto p-6 pt-0">
	{#if STATE.THEME}
		{#each STATE.THEME.variables as variables}
			<div class={[STATE.isActiveTab(variables.title) ? 'flex flex-1 flex-col gap-4' : 'hidden']}>
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
						<div class="mt-3 pb-2">
							{#if type === 'slider'}
								<Slider {...input.props} varGroup={input.varGroup} />
							{:else if type === 'select'}
								<Select {...input.props} varGroup={input.varGroup} />
							{:else if type === 'number'}
								<Number {...input.props} varGroup={input.varGroup} />
							{:else if type === 'colour'}
								<Colour {...input.props} varGroup={input.varGroup} />
							{:else if type === 'font'}
								<Font {...input.props} varGroup={input.varGroup} />
							{:else if type === 'image'}
								<Image {...input.props} varGroup={input.varGroup} />
							{:else if type === 'banner'}
								<Banner {...input.props} />
							{:else if type === 'divider'}
								<Divider {...input.props} />
							{/if}
						</div>
					</div>
				{/each}
			</div>
		{/each}
	{/if}
</div>
