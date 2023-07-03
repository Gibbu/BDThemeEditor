import type { ITheme } from '$types/theme';
import Tropical from '../devs/tropical';
import { radialstatus, discolored } from '../addons';

const theme: ITheme = {
	name: 'Dark Matter',
	thumbnail:
		'https://camo.githubusercontent.com/700f74ca6db36bd4f26d186d34ac5c7ff3d34d5fbb97737c1cd3a21b7f3995d9/68747470733a2f2f692e696d6775722e636f6d2f785347393671612e706e67',
	developer: Tropical,
	meta: {
		name: 'Dark Matter',
		author: 'Tropical#8908, Hammock#3110',
		version: '3.0.0',
		description: 'A cold, dark & frosty theme.',
		source: 'https://github.com/DiscordStyles/DarkMatter/',
	},
	preview: `
		@import url('https://DiscordStyles.github.io/DarkMatter/src/base.css');
		:root {
				--avatar-size: 32px;
				--background-image: url('https://i.imgur.com/7SbtKvw.png');
				--home-image: url('https://i.imgur.com/233d55Y.gif');
				--background-solid: #161921;
				--background-solid-dark: #101218;
				--background-solid-darker: #0c0e12;
				--accent: 37, 172, 232;
				--accent-alt: 29, 101, 134;
		}
	`,
	features: ['background', 'addons', 'transparent', 'home', 'addons'],
	imports: ['https://DiscordStyles.github.io/DarkMatter/src/base.css'],
	fonts: [],
	variables: [
		{
			title: 'Images',
			icon: 'Photo',
			inputs: [
				{
					type: 'image',
					details: {
						variable: 'background-image',
						start: 'https://i.imgur.com/7SbtKvw.png',
						value: '',
						title: 'Background image'
					}
				},
				{
					type: 'image',
					details: {
						variable: 'home-image',
						start: 'https://i.imgur.com/233d55Y.gif',
						value: '',
						title: 'Home button image'
					}
				}
			]
		},
		{
			title: 'Colours',
			icon: 'Swatch',
			inputs: [
				{
					type: 'colour',
					details: {
						variable: 'accent',
						value: '37, 172, 232',
						type: 'RGB',
						title: 'Accent'
					}
				},
				{
					type: 'colour',
					details: {
						variable: 'accent-alt',
						value: '29, 101, 134',
						type: 'RGB',
						title: 'Accent alt',
						hint: 'Usually indicated a hover effect or darker elements'
					}
				},
				{
					type: 'colour',
					details: {
						variable: 'background-solid',
						value: '#161921',
						type: 'HEX',
						title: 'Background solid',
						hint: 'Main background elements'
					}
				},
				{
					type: 'colour',
					details: {
						variable: 'background-solid-dark',
						value: '#101218',
						type: 'HEX',
						title: 'Background solid dark',
						hint: 'Most notability, Left sidebar of settings'
					}
				},
				{
					type: 'colour',
					details: {
						variable: 'background-solid-darker',
						value: '#0c0e12',
						type: 'HEX',
						title: 'Background solid darker',
						hint: 'Right sidebar of setings, attachment borders, ect...'
					}
				},
			]
		}
	],
	addons: [radialstatus, discolored],
};

export default theme;
