<script lang="ts">
	import { store } from '$lib/stores';
	import { varOutput } from '$lib/helpers';
	import { previewAction } from '$lib/preview';

	import { Colour, Font, Image, Slider, Select, Number } from '../inputs';

	interface Details {
		variable: string;
		value: string;
		unit?: string;
		addon?: boolean;
	}

	const inputs = {
		colour: Colour,
		font: Font,
		image: Image,
		slider: Slider,
		select: Select,
		number: Number
	} as const;

	export let data: {
		type: string;
		details: Record<string, any>;
	};

	const update = ({ detail }: { detail: Details }): void => {
		let { variable, value, addon } = detail;

		previewAction({
			action: 'setProperty',
			value: varOutput(detail).value,
			variable
		});

		if (addon) {
			$store.addons.forEach((group) => {
				if (group.variables)
					group.variables.forEach((input) => {
						if (input.details.variable === variable) input.details.value = value;
					});
			});
		} else {
			$store.variables.forEach((group) =>
				group.inputs.forEach((input) => {
					if (input.details.variable === variable) input.details.value = value;
				})
			);
		}
	};
</script>

<template>
	<svelte:component this={inputs[data.type]} {...data.details} on:update={update} />
</template>
