import type { Theme } from '$types/theme';
import Disease from '../devs/disease';

const theme: Theme = {
	name: 'Steam',
	thumbnail: 'https://i.imgur.com/BizjNu3.png',
	developer: Disease,
	meta: {
		name: 'Steam',
		author: 'maenDisease',
		version: '1.0.0',
		description: 'Steam UI on Discord.',
		source: 'https://github.com/maenDisease/Steam',
		invite: 'BShu37e4jg',
		website: 'https://maendisease.github.io/',
		authorId: '678469587444170762'
	},
	preview: `
    @import url('https://maendisease.github.io/Steam/Steam.css');

	.bg-1QIAus {
		background: url(https://i.imgur.com/KnV4uWz.png) center top no-repeat hsl(213 35% 16%);
	}
	`,
	features: ['font', 'solid'],
	imports: ['https://maendisease.github.io/Steam/Steam.css'],
	optionalImports: [
		{
			name: 'Horizontal Server List',
			description: 'Moves the server list to the bottom of the app.',
			imports: ['https://maendisease.github.io/Steam/addons/horizontalserverlist.css'],
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
					type: 'slider',
					props: {
						variable: 'hue-shift',
						value: 0,
						max: 360,
						title: 'App Color'
					}
				},
				{
					type: 'select',
					props: {
						variable: 'content-width',
						value: '940px',
						options: [
							{ label: '940px', value: '940px' },
							{ label: '100%', value: '100%' },
						],
						custom: true,
						title: 'App Width',
						hint: 'Select 100% for full width.'
					}
				},
				{
					type: 'select',
					props: {
						variable: 'message-width',
						value: '640px',
						options: [
							{ label: '640px', value: '640px' },
							{ label: '100%', value: '100%' },
						],
						custom: true,
						title: 'Message Width',
						hint: 'Select 100% for full width.'
					}
				},
				{
					type: 'number',
					props: {
						variable: 'server-size',
						value: 28,
						unit: 'px',
						title: 'Server Size'
					}
				}
			]
		},
		{
			title: 'Custom Font',
			icon: 'ChatBubbleBottomCenterText',
			inputs: [
				{
					type: 'font',
					props: {
						variable: 'custom-font',
						index: 0,
						value: 'gg sans',
						title: 'App Font'
					}
				},
				{
					type: 'font',
					props: {
						variable: 'custom-font-code',
						index: 0,
						value: 'monospace',
						title: 'Code Font'
					}
				}
			]
		}
	]
};

export default theme;
