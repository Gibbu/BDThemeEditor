<script lang="ts">
	import { Slider, SliderRange, SliderThumb } from 'lithesome';
	import { STATE } from '../editor.svelte';

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
</script>

<div class="mt-2 rounded-full bg-neutral-700 px-3">
	<Slider
		class="relative flex h-2 cursor-pointer items-center"
		{min}
		{max}
		{step}
		{value}
		onValueChanged={(value) => {
			STATE.updateVariable({ value: Number(value.toFixed(2)), variable, unit }, addon);
		}}
	>
		<SliderRange class="-mx-2 h-full w-(--slider-percentage) rounded-full bg-white" />
		<SliderThumb
			class={[
				'absolute left-(--slider-percentage) size-6 -translate-x-1/2 cursor-pointer rounded-md',
				'border border-black bg-white shadow-md',
				'focus:outline-turquoise-500 focus:outline-2 focus:outline-offset-2'
			]}
		></SliderThumb>
	</Slider>
</div>
