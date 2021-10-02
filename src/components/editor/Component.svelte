<script>
	import {THEME, preview} from '$lib/stores';
	import {varOutput} from '$lib/helpers';

	import {Colour, Font, Image, Slider, Select, Number} from '../inputs';

	interface Details {
		variable: string,
		value: string,
		unit?: string,
		addon?: boolean
	}

	const inputs = {
		colour: Colour,
		font: Font,
		image: Image,
		slider: Slider,
		select: Select,
		number: Number
	}

	export let data: {
		type: string,
		details: Record<string, any>
	}

	const update = ({detail}: {detail: Details}): void => {
		let {variable, value, addon} = detail;

		$preview.style.setProperty(`--${variable}`, varOutput(detail).value);

		if (addon) {
			$THEME.addons.forEach(group => {
				if (group.variables) {
					group.variables.forEach(input => {
						if (input.details.variable === variable) {
							input.details.value = value;
						}
					})
				}
			})
		} else {
			$THEME.variables.forEach(group => group.inputs.forEach(input => {
				if (input.details.variable === variable) {
					input.details.value = value;
				}
			}))
		}
	}
</script>

<template>
	<svelte:component this={inputs[data.type]} {...data.details} on:update={update} />
</template>