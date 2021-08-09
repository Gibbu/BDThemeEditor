<script>
	import {THEME, preview} from '$lib/stores';

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
	};

	const update = ({detail}: {detail: Details}): void => {
		let {variable, value, unit, addon} = detail;

		if (typeof value === 'string' && (value.includes('http') || value.includes('base64'))) {
			value = `url(${value})`;
		}
		$preview.style.setProperty(`--${variable}`, value+(unit || ''));

		if (addon) {
			$THEME.addons.forEach(group => group.variables.forEach(input => {
				if (input.details.variable === variable) {
					input.details.value = value;
				}
			}))
		} else {
			$THEME.variables.forEach(group => group.inputs.forEach(input => {
				if (input.details.variable === variable) {
					input.details.value = value;
				}
			}))
		}
	}
</script>

<svelte:component this={inputs[data.type]} {...data.details} on:update={update} />