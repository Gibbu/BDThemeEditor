import type { Theme } from '$types/theme';
import Disease from '../devs/disease';

const theme: Theme = {
	name: 'Outlook',
	thumbnail: 'https://i.imgur.com/az6uC32.png',
	developer: Disease,
	meta: {
		name: 'Outlook',
		author: 'maenDisease',
		version: '1.0.0',
		description: 'Based on Outlook Web.',
		source: 'https://github.com/maenDisease/Outlook',
		invite: 'BShu37e4jg',
		website: 'https://maendisease.github.io/',
		authorId: '678469587444170762'
	},
	preview: `
    @import url('https://maendisease.github.io/Outlook/Outlook.css');
	`,
	features: ['font', 'solid', 'light'],
	imports: ['https://maendisease.github.io/Outlook/Outlook.css'],
	optionalImports: [
		{
			name: 'BD Addon Mini',
			description: 'Simplifies the appearance of BetterDiscord addon cards.',
			imports: ['https://maendisease.github.io/BetterDiscordStuff/css/bdAddonMini.css'],
			enabled: true
		}
	],
	fonts: [],
	variables: [
		{
			title: 'Options',
			icon: 'Swatch',
			inputs: [
				{
					type: 'image',
					props: {
						variable: 'home-image',
						start: 'https://maendisease.github.io/Outlook/illustrations/homeimage-default.avif',
						value: '',
						title: 'Home image',
						hint: 'Image appears from the home page.'
					}
				},
				{
					type: 'slider',
					props: {
						variable: 'accent-hue',
						value: 208,
						max: 359,
						title: 'Accent color'
					}
				},
				{
					type: 'slider',
					props: {
						variable: 'accent-saturation',
						value: 85,
						max: 100,
						unit: '%',
						title: 'Accent saturation'
					}
				},
				{
					type: 'slider',
					props: {
						variable: 'accent-brightness',
						value: 40,
						max: 100,
						unit: '%',
						title: 'Accent brightness'
					}
				},
				{
					type: 'select',
					props: {
						variable: 'gradient-toggle',
						value: '1',
						options: [
							{ label: 'True', value: '1' },
							{ label: 'False', value: '0' }
						],
						title: 'Gradient theme background',
						hint: 'Emulate Discord gradient themes.'
					}
				},
				{
					type: 'slider',
					props: {
						variable: 'gradient-hue-shift',
						value: 0.2,
						min: 0,
						max: 3.6,
						step: 0.01,
						title: 'Gradient hue shift strength'
					}
				},
				{
					type: 'slider',
					props: {
						variable: 'gradient-saturation',
						value: 50,
						max: 100,
						unit: '%',
						title: 'Gradient saturation'
					}
				},
				{
					type: 'slider',
					props: {
						variable: 'gradient-deg',
						value: 179.52,
						max: 360,
						unit: 'deg',
						title: 'Gradient tilt degree'
					}
				}
			]
		},
		{
			title: 'Custom font',
			icon: 'ChatBubbleBottomCenterText',
			inputs: [
				{
					type: 'font',
					props: {
						variable: 'customFont',
						index: 0,
						value: 'Segoe UI',
						title: 'App font'
					}
				}
			]
		}
	]
};

export default theme;
