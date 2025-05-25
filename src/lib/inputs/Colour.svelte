<script lang="ts">
	import { STATE } from '$lib/editor.svelte';
	import { onDestroy, onMount } from 'svelte';

	import type { ColourInputProps } from '$types/inputs';
	import type Pickr from '@simonwep/pickr';

	let { variable, type, value, addon, alpha, rule }: ColourInputProps = $props();

	let element = $state<HTMLElement | null>(null);
	let pickr = $state<Pickr | null>(null);

	const rd = (val: number): number => Math.round(val);

	// When uploading a theme, we need to tell pickr
	// to update the colour on the input.
	$effect(() => {
		if (STATE.uploaded && pickr) {
			pickr.setColor(value);
		}
	});

	onMount(async () => {
		if (!element) return;

		const start = value.includes('%')
			? `hsl(${value})`
			: !value.includes('#') && !value.includes('rgb') && value !== 'transparent'
				? `rgb(${value})`
				: value;

		pickr = (await import('@simonwep/pickr')).default
			.create({
				el: element,
				container: '#pickrs',
				theme: 'classic',
				position: 'bottom-start',
				default: start,
				swatches: [
					'rgb(244, 67, 54)',
					'rgb(233, 30, 99)',
					'rgb(156, 39, 176)',
					'rgb(103, 58, 183)',
					'rgb(63, 81, 181)',
					'rgb(33, 150, 243)',
					'rgb(3, 169, 244)',
					'rgb(0, 188, 212)',
					'rgb(0, 150, 136)',
					'rgb(76, 175, 80)',
					'rgb(139, 195, 74)',
					'rgb(205, 220, 57)',
					'rgb(255, 235, 59)',
					'rgb(255, 193, 7)'
				],
				components: {
					opacity: alpha,
					hue: true,
					interaction: {
						save: true,
						input: true,
						hex: true,
						hsla: true,
						rgba: true
					}
				}
			})
			.on('change', (colour: Pickr.HSVaColor) => {
				let output: string = '';
				if (type == 'HEX') {
					output = colour.toHEXA().toString();
				} else if (type == 'RGB') {
					const c = colour.toRGBA();
					output = `${rule ? `rgb(` : ''}${rd(c[0])},${rd(c[1])},${rd(c[2])}${alpha ? `,${c[3]}` : ''}${
						rule ? ')' : ''
					}`;
				} else if (type === 'HSL') {
					const c = colour.toHSLA();
					output = `${rule ? `hsl(` : ''}${rd(c[0])},${rd(c[1])}%,${rd(c[2])}%${alpha ? `,${c[3]}` : ''}${
						rule ? ')' : ''
					}`;
				}

				STATE.updateVariable({ variable, value: output, addon });
			});
	});

	onDestroy(() => {
		if (pickr) pickr.destroyAndRemove();
	});
</script>

<div class="flex items-center gap-4 rounded-md bg-zinc-800 p-3">
	<div bind:this={element}></div>
	<span class="tracking-wide">{value}</span>
</div>
