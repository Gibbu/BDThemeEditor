import type { Theme } from '$types/theme';
import Gibbu from '../devs/gibbu';
import { radialstatus, hsl, columns, discolored } from '../addons';

const theme: Theme = {
	name: 'MinimalCord',
	thumbnail:
		'https://camo.githubusercontent.com/9c2e40432dd43788b59160d43f58a7ea7afd944a640585ba6f486d8b5e185bbe/68747470733a2f2f692e696d6775722e636f6d2f30564474777a662e706e67',
	developer: Gibbu,
	meta: {
		name: 'MinimalCord',
		author: 'Gibbu',
		version: '2.3.0',
		description:
			'Changes Discord enough to give it a fresh feel while also making it darker. Supports both Light and Dark themes.',
		source: 'https://github.com/DiscordStyles/MinimalCord',
		invite: 'ZHthyCw',
		authorId: '174868361040232448'
	},
	preview: `
		@import url('https://discordstyles.github.io/MinimalCord/dist/MinimalCord.css');
		@import url("https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&display=swap");
		:root {
			--accent: 50, 131, 207;
			--message-padding: 10px; /* Spacing in the messages. MUST END IN px | DEFAULT: 10px */
			--message-spacing: 10px; /* Spacing around the messages. MUST END IN px | DEFAULT: 10px */
			--dark-bg-hue: 218; /* The HUE of the background. | DEFAULT: 218 */
			--dark-bg-saturation: 15%; /* The SATURATION of the background. | DEFAULT: 15% */
			--dark-bg-lightness: 11%; /* The LIGHTNESS of the background | DEFAULT: 11% */
			--light-bg-hue: 200; /* The HUE of the background. | DEFAULT: 200 */
			--light-bg-saturation: 12%; /* The SATURATION of the background. | DEFAULT: 12% */
			--light-bg-lightness: 100%; /* The LIGHTNESS of the background | DEFAULT: 100% */
			--font: "Inter";
		}
	`,
	features: ['light', 'addons', 'solid', 'font'],
	imports: ['https://discordstyles.github.io/MinimalCord/dist/MinimalCord.css'],
	fonts: ['https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&display=swap'],
	variables: [
		{
			title: 'Colours',
			icon: 'Swatch',
			inputs: [
				{
					type: 'colour',
					props: {
						variable: 'accent',
						type: 'RGB',
						value: 'rgb(50, 131, 207)',
						title: 'Accent'
					}
				},
				{
					type: 'divider',
					props: {
						title: 'Dark Theme'
					}
				},
				{
					type: 'slider',
					props: {
						variable: 'dark-bg-hue',
						max: 360,
						value: 218,
						title: 'Hue degree'
					}
				},
				{
					type: 'slider',
					props: {
						variable: 'dark-bg-saturation',
						max: 100,
						value: 15,
						title: 'Saturation',
						unit: '%'
					}
				},
				{
					type: 'slider',
					props: {
						variable: 'dark-bg-lightness',
						max: 100,
						value: 11,
						title: 'Lightness',
						unit: '%'
					}
				},
				{
					type: 'divider',
					props: {
						title: 'Light theme'
					}
				},
				{
					type: 'slider',
					props: {
						variable: 'light-bg-hue',
						max: 360,
						value: 200,
						title: 'Hue degree'
					}
				},
				{
					type: 'slider',
					props: {
						variable: 'light-bg-saturation',
						max: 100,
						value: 12,
						title: 'Saturation',
						unit: '%'
					}
				},
				{
					type: 'slider',
					props: {
						variable: 'light-bg-lightness',
						max: 100,
						value: 100,
						title: 'Lightness',
						unit: '%'
					}
				}
			]
		},
		{
			title: 'Chat',
			icon: 'ChatBubbleBottomCenterText',
			inputs: [
				{
					type: 'font',
					props: {
						variable: 'font',
						index: 0,
						value: '',
						title: 'Font'
					}
				},
				{
					type: 'number',
					props: {
						variable: 'message-padding',
						value: 10,
						unit: 'px',
						title: 'Message padding'
					}
				},
				{
					type: 'number',
					props: {
						variable: 'message-spacing',
						value: 10,
						unit: 'px',
						title: 'Message spacing'
					}
				}
			]
		}
	],
	addons: [radialstatus, hsl, columns, discolored]
};

export default theme;
