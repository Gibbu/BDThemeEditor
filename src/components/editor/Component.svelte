<script lang="ts">
	import { store } from '$lib/stores';
	import { varOutput } from '$lib/helpers';
	import { preview } from '$lib/preview';

	import { Colour, Font, Image, Slider, Select, Number, Banner } from '../inputs';

	interface Props {
		variable: string;
		value: string;
	}

	const inputs = {
		colour: Colour,
		font: Font,
		image: Image,
		slider: Slider,
		select: Select,
		number: Number,
		banner: Banner
	};

	export let data: any;
	export let addon: boolean = false;

	const getType = (type: string) => {
		return inputs[type as keyof typeof inputs];
	};

	const update = ({ detail }: { detail: Props }): void => {
		let { variable, value } = detail;

		preview({
			action: 'setProp',
			value: varOutput(detail).value,
			variable
		});

		if (addon) {
			$store.addons.forEach((group) => {
				if (group.variables)
					group.variables.forEach((input) => {
						if (input.type !== 'banner' && input.props.variable === variable) input.props.value = value;
					});
			});
		} else {
			$store.variables.forEach((group) =>
				group.inputs.forEach((input) => {
					if (input.type !== 'banner' && input.props.variable === variable) input.props.value = value;
				})
			);
		}
	};
</script>

<template>
	<svelte:component this={getType(data.type)} {...data.props} on:update={update} />
</template>
