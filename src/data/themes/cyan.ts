import type { ITheme } from '$types/theme';
import DaBluLite from '../devs/dablulite';
import { columns, radialstatus, hsl } from '../addons';

const theme: ITheme = {
	name: 'Cyan',
	thumbnail: 'https://i.imgur.com/XORsntg.jpg',
	developer: DaBluLite,
	meta: {
		name: 'Cyan',
		author: 'DaBluLite',
		version: '5.0.0',
		description: 'Sleek and clean, with custom background support',
		source:
			'https://dablulite.github.io/Cyan/Cyan.theme.css',
		invite: 'ZfPH6SDkMW',
		website: 'https://github.com/DaBluLite/Cyan',
		authorId: '582170007505731594'
	},
	preview: `
		@import url(https://dablulite.github.io/Cyan/import.css);
		:root {
      --cyan-background-primary: hsla(0deg 0% var(--cyan-background-lightness) / 40%);
	    --cyan-elevation-shadow: 0 0 0 1px rgba(180,180,180,.4), 0 2px 10px 0 rgb(0 0 0 / 60%);
	    --cyan-font: 'Montserrat', 'Open Sans';
	    --cyan-background-img: url(https://dablulite.github.io/Cyan/cyan-waves.png);
	    /*for a 4K version of the background use: url(https://dablulite.github.io/Cyan/cyan-waves-4k.png)*/
	    --window-margin: 10;
	    --window-border-radius: 8px;
	    --cyan-accent-color: #009f88;
	    --cyan-blur-radius: 10px;
	    --cyan-status-mask-background: var(--profile-body-background-color);
		}
	`,
	features: ['background', 'addons', 'font', 'transparent'],
	imports: ['https://dablulite.github.io/Cyan/import.css'],
	fonts: [],
	variables: [
		{
			title: 'Background Image',
			icon: 'Photo',
			inputs: [
				{
					type: 'image',
					details: {
						variable: 'cyan-background-img',
						start: 'https://dablulite.github.io/Cyan/cyan-waves.png',
						value: '',
						title: 'Background Image'
					}
				},
				{
					type: 'slider',
					details: {
						variable: 'cyan-blur-radius',
						value: 0,
						unit: 'px',
						max: 25,
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
					details: {
						variable: 'cyan-accent-color',
						value: '#009f88',
						type: 'HEX',
						title: 'Accent Color'
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
					details: {
						variable: 'cyan-elevation-shadow',
						title: 'Use Colored Border',
						value: '0 0 0 1px rgba(180,180,180,.4), 0 2px 10px 0 rgb(0 0 0 / 60%)',
						options: [
							{ label: 'True', value: '0 0 0 1px var(--cyan-accent-color), 0 2px 10px 0 rgb(0 0 0 / 60%)' },
							{ label: 'False', value: '0 0 0 1px rgba(180,180,180,.4), 0 2px 10px 0 rgb(0 0 0 / 60%)' }
						],
						customValue: false
					}
				}
			]
		}
	]
};

export default theme;
