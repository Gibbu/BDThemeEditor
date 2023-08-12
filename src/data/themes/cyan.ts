import type { Theme } from '$types/theme';
import DaBluLite from '../devs/dablulite';

const theme: Theme = {
	name: 'Cyan',
	thumbnail: 'https://raw.githubusercontent.com/DaBluLite/Cyan/master/screenshots/cyan-screenshot-1.png',
	developer: DaBluLite,
	meta: {
		name: 'Cyan',
		author: 'DaBluLite',
		version: '5.0.0',
		description: 'Clean and Customizable, with custom background support',
		source: 'https://dablulite.github.io/Cyan/Cyan.theme.css',
		invite: 'ZfPH6SDkMW',
		website: 'https://github.com/DaBluLite/Cyan',
		authorId: '582170007505731594'
	},
	preview: `
	@import url(https://dablulite.github.io/Cyan/import.css);
	:root {
		--cyan-background-primary: hsla(var(--cyan-background-hue) var(--cyan-tint-visibility) var(--cyan-background-lightness) / 40%);
		--cyan-background-hue: 225deg;
		--cyan-tint-visibility: 8%;
		--cyan-elevation-shadow: 0 0 0 1.5px var(--cyan-accent-color), 0 2px 10px 0 rgb(0 0 0 / 60%);
		--cyan-font: 'Montserrat', 'Open Sans';
		--cyan-background-img: url(https://dablulite.github.io/Cyan/cyan-waves.png);
		--cyan-accent-color: #009f88;
		--cyan-blur-radius: 10px;
		--cyan-status-mask-background: var(--profile-body-background-color);
		--cyan-text-shadow: 1;
		--window-margin: 8;
		--window-border-radius: 8px;
		/*--cyan-elevation-shadow: 0 0 0 1px rgba(180,180,180,.4), 0 2px 10px 0 rgb(0 0 0 / 60%);
		--window-margin: 10;*/
	}
	`,
	features: ['background', 'font', 'transparent'],
	imports: ['https://dablulite.github.io/Cyan/import.css'],
	fonts: [
		'https://fonts.googleapis.com/css2?family=Montserrat&display=swap',
		'https://fonts.googleapis.com/css2?family=Open+Sans:wght@400&display=swap'
	],
	variables: [
		{
			title: 'Background Image',
			icon: 'Photo',
			inputs: [
				{
					type: 'image',
					props: {
						variable: 'cyan-background-img',
						start: 'https://dablulite.github.io/Cyan/cyan-waves.png',
						value: '',
						title: 'Background Image'
					}
				},
				{
					type: 'slider',
					props: {
						variable: 'cyan-blur-radius',
						value: 10,
						unit: 'px',
						max: 255,
						step: 1,
						title: 'Background image blur'
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
					props: {
						variable: 'cyan-accent-color',
						value: '#009f88',
						type: 'HEX',
						title: 'Accent Color'
					}
				},
				{
					type: 'slider',
					props: {
						variable: 'cyan-background-hue',
						max: 360,
						min: 0,
						value: 225,
						title: 'Glass Tint Hue',
						hint: 'The hue of the glass background.'
					}
				}
			]
		},
		{
			title: 'Visibility',
			icon: 'Sun',
			inputs: [
				{
					type: 'select',
					props: {
						variable: 'cyan-elevation-shadow',
						title: 'Use Colored Border',
						value: '0 0 0 1.5px var(--cyan-accent-color), 0 2px 10px 0 rgb(0 0 0 / 60%)',
						options: [
							{ label: 'True', value: '0 0 0 1.5px var(--cyan-accent-color), 0 2px 10px 0 rgb(0 0 0 / 60%)' },
							{ label: 'False', value: '0 0 10px 0 rgb(0 0 0 / 60%)' }
						],
						custom: false
					}
				},
				{
					type: 'select',
					props: {
						variable: 'cyan-tint-visibility',
						title: 'Glass Tint',
						value: '8%',
						options: [
							{ label: 'True', value: '100%' },
							{ label: 'False', value: '8%' }
						],
						custom: false
					}
				},
				{
					type: 'select',
					props: {
						variable: 'cyan-text-shadow',
						title: 'Text/Icon Drop Shadow',
						value: '1',
						options: [
							{ label: 'True', value: '1' },
							{ label: 'False', value: '0' }
						],
						custom: false
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
						variable: 'cyan-font',
						index: 0,
						value: 'Montserrat',
						title: 'App font',
						comment: "Custom font | Default: 'Montserrat'"
					}
				}
			]
		},
		{
			title: 'Layout',
			icon: 'Cog6Tooth',
			inputs: [
				{
					type: 'slider',
					props: {
						variable: 'window-margin',
						max: 1000,
						min: 0,
						value: 8,
						title: 'Window Margin'
					}
				}
			]
		}
	],
	hiddenVars: [
		{
			variable: 'window-border-radius',
			value: '8px',
			varGroup: ':root'
		},
		{
			variable: 'cyan-background-primary',
			value: 'hsla(var(--cyan-background-hue) var(--cyan-tint-visibility) var(--cyan-background-lightness) / 40%)',
			varGroup: ':root'
		}
	]
};

export default theme;
