<script>
	import {tick} from 'svelte';
	import {createEventDispatcher, onMount, onDestroy} from 'svelte';
	import '@simonwep/pickr/dist/themes/monolith.min.css';

	import type Pickr from '@simonwep/pickr';

	const dispatch = createEventDispatcher();

	// // Required vars
	export let variable: string;
	export let value: string;
	export let type: 'HEX' | 'RGB' | 'HSL';
	export let title: string;

	// // Optional vars
	export let addon: boolean = false;
	export let rule: boolean = false;
	export let alpha: boolean = false;
	export let hint: string = null;

	// Other vars
	let pickrEl: HTMLElement;
	let isMounted: boolean = false;

	onMount(async(): Promise<void> => {
		isMounted = true;

		render(value);
	})

	const render = async(value: string): Promise<void> => {
		
		await tick();
		
		let starter: string = value;
		if (value.includes('%')) starter = `hsl(${value})`;
		else if (!value.includes('#') && !value.includes('rgb') && value !== 'transparent') starter = `rgb(${value})`;
		
		if (isMounted) {
			// Create Pickr
			(await import('@simonwep/pickr')).default.create({
				el: pickrEl,
				container: '#pickrs',
				theme: 'monolith',
				default: starter,
				position: 'right-start',
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
					preview: true,
					hue: true,
					interaction: {
						save: true,
						input: true
					}
				}
			}).on('change', (colour: Pickr.HSVaColor): void => {
				let output: string;
				if (type == 'HEX') {
					output = colour.toHEXA().toString();
				} else if (type == 'RGB') {
					const c = colour.toRGBA();
					output = `${(rule ? `rgb(`: '')}${rd(c[0])},${rd(c[1])},${rd(c[2])}${alpha ? `,${c[3]}` : ''}${(rule ? ')': '')}`;
				} else if (type === 'HSL') {
					const c = colour.toHSLA();
					output = `${(rule ? `hsl(`: '')}${rd(c[0])},${rd(c[1])}%,${rd(c[2])}%${alpha ? `,${c[3]}` : ''}${(rule ? ')': '')}`;
				}

				dispatch('update', {variable, addon, value: output});
			})

		}
	}

	const rd = (value: number): number => Math.round(value);
</script>

<div class="colour">
	<div bind:this={pickrEl}></div>
	<div class="colour-info">
		<p class="colour-title">{title}</p>
		{#if hint}
			<small class="colour-hint">{hint}</small>
		{/if}
	</div>
</div>

<style lang="scss">
	.colour {
		display: flex;
		align-items: center;
		&-info {
			margin-left: rem(8);
		}
		&-hint {
			display: block;
			font-size: rem(14);
			color: var(--text-tertiary);
		}
	}
</style>