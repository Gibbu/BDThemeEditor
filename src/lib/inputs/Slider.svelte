<script lang="ts">
	import { cn } from '$lib/utils';
	// import { Slider } from 'bits-ui';
	import { onUpdate } from './helpers';
	import { Slider, SliderThumb, SliderRange } from 'lithesome';

	import type { SliderInputProps } from '$types/inputs';

	let {
		value,
		variable,
		addon = false,
		max = 100,
		min = 0,
		step = 1,
		unit
	}: SliderInputProps = $props();

	$effect(() => {
		onUpdate<SliderInputProps>({ value, variable, max, min, step, unit }, addon);
	});
</script>

<Slider
	bind:value
	{step}
	{min}
	{max}
	class="relative flex h-2 cursor-pointer items-center rounded-full bg-neutral-700"
>
	<SliderRange class="h-full rounded-full bg-white" />
	<SliderThumb class="size-6 cursor-pointer rounded-full border border-black bg-white shadow-md" />
</Slider>
