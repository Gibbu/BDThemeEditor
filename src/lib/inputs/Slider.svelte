<script lang="ts">
	import { Slider } from 'melt/builders';
	import { STATE } from '$lib/editor.svelte';

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

	const slider = new Slider({
		value,
		min,
		max,
		step,
		onValueChange(newVal) {
			STATE.updateVariable<SliderInputProps>(
				{ value: newVal, variable, max, min, step, unit },
				addon
			);
		}
	});
</script>

<div class="rounded-full bg-neutral-700 px-2">
	<div {...slider.root} class="relative flex h-2 cursor-pointer items-center">
		<div class="-mx-2 h-full w-(--percentage) rounded-full bg-white"></div>
		<div
			{...slider.thumb}
			class={[
				'absolute left-(--percentage) size-6 -translate-x-1/2 cursor-pointer rounded-md',
				'border border-black bg-white shadow-md',
				'focus:outline-turquoise-500 focus:outline-2 focus:outline-offset-2'
			]}
		></div>
	</div>
</div>
