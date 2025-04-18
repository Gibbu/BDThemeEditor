import type { Theme } from '$types/theme';
import Spectra from '../devs/spectra';
import { discolored, columns, hsl, radialstatus } from '../addons';

const theme: Theme = {
	name: 'Neutron',
	thumbnail:
		'https://camo.githubusercontent.com/3bbdc6a5fcca0d412deb75680efccdbd806dd803c6d6eaaf065819bdeff04caa/68747470733a2f2f692e696d6775722e636f6d2f3559686f5274662e6a7067',
	developer: Spectra,
	meta: {
		name: 'Neutron',
		version: '8.0',
		description: 'A simple but highly customizable theme, now sugar free!',
		author: 'Spectra',
		invite: 'PZdnCVD',
		source: 'https://github.com/xcruxiex/themes',
		website: 'https://betterdiscord.app/theme/Neutron'
	},
	preview: `
		@import url("https://xcruxiex.github.io/themes/themes-cores/neutron8.css");
		:root {
		--themeColor1: #36D1DC;
		--themeColor2: #5B86E5;
		--customFont: 'Open sans', sans-serif;
		--homeImage: url('https://imgur.com/eItxuAq.png');
		--homeImageSize: cover;
		--backgroundColor: #0d0d0d;
		--backgroundImage: url('https://imgur.com/qhBghXt.png');
		--backgroundPosition: center;
		--backgroundSize: cover;
		--backgroundRepeat: no-repeat;
		--backgroundBlur: 100px;
		--backgroundOpacity: .65;
		--backgroundCode: rgba(0,0,0,.5);
		--backgroundName: rgba(0,0,0,.5);
		}
	`,
	features: ['background', 'font', 'transparent', 'home', 'addons'],
	imports: ['https://xcruxiex.github.io/themes/themes-cores/neutron8.css'],
	fonts: ['https://fonts.googleapis.com/css2?family=Open+Sans&display=swap'],
	variables: [
		{
			title: 'Background image',
			icon: 'Photo',
			description: 'The main background behind the app.',
			inputs: [
				{
					type: 'image',
					props: {
						variable: 'backgroundImage',
						start: 'https://imgur.com/qhBghXt.png',
						value: '',
						title: 'Image'
					}
				},
				{
					type: 'colour',
					props: {
						variable: 'backgroundColor',
						value: '#0d0d0d',
						type: 'HEX',
						title: 'Colour'
					}
				},
				{
					type: 'select',
					props: {
						variable: 'backgroundSize',
						value: 'cover',
						options: [
							{ label: 'Cover', value: 'cover' },
							{ label: 'Contain', value: 'contain' },
							{ label: 'Auto', value: 'auto' },
							{ label: '100%', value: '100%' },
							{ label: '150%', value: '150%' },
							{ label: '200%', value: '200%' }
						],
						custom: true,
						title: 'Size'
					}
				},
				{
					type: 'select',
					props: {
						variable: 'backgroundPosition',
						value: 'center',
						options: [
							{ label: 'Top left', value: 'top left' },
							{ label: 'Top centre', value: 'top center' },
							{ label: 'Top right', value: 'top right' },
							{ label: 'Centre left', value: 'center left' },
							{ label: 'Centre', value: 'center' },
							{ label: 'Centre right', value: 'center right' },
							{ label: 'Bottom left', value: 'Bottom left' },
							{ label: 'Bottom centre', value: 'Bottom center' },
							{ label: 'Bottom right', value: 'bottom right' }
						],
						custom: true,
						title: 'Position'
					}
				},
				{
					type: 'select',
					props: {
						variable: 'backgroundRepeat',
						custom: false,
						value: 'no-repeat',
						options: [
							{ label: 'True', value: 'repeat' },
							{ label: 'False', value: 'no-repeat' }
						],
						title: 'Repeat'
					}
				},
				{
					type: 'slider',
					props: {
						variable: 'backgroundBlur',
						value: 100,
						max: 100,
						min: 0,
						unit: 'px',
						title: 'Blur'
					}
				},
				{
					type: 'slider',
					props: {
						variable: 'backgroundOpacity',
						value: 0.65,
						min: 0,
						max: 1,
						step: 0.05,
						title: 'Opacity'
					}
				}
			]
		},
		{
			title: 'Home Button',
			icon: 'Home',
			inputs: [
				{
					type: 'image',
					props: {
						variable: 'homeImage',
						start: 'https://imgur.com/eItxuAq.png',
						value: '',
						title: 'Image'
					}
				},
				{
					type: 'select',
					props: {
						variable: 'homeImageSize',
						value: 'cover',
						options: [
							{ label: 'Cover', value: 'cover' },
							{ label: 'Contain', value: 'contain' },
							{ label: 'Auto', value: 'auto' },
							{ label: '100%', value: '100%' },
							{ label: '150%', value: '150%' },
							{ label: '200%', value: '200%' }
						],
						custom: true,
						title: 'Size'
					}
				}
			]
		},
		{
			title: 'Colours',
			icon: 'Swatch',
			description: 'The colours used throughout the theme.',
			inputs: [
				{
					type: 'colour',
					props: {
						variable: 'themeColor1',
						value: '#36D1DC',
						type: 'HEX',
						title: 'Primary Colour'
					}
				},
				{
					type: 'colour',
					props: {
						variable: 'themeColor2',
						value: '#5B86E5',
						type: 'HEX',
						title: 'Secondary Colour'
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
						value: 'Open Sans',
						index: 0,
						title: 'Font name'
					}
				}
			]
		},
		{
			title: 'Codeblocks',
			icon: 'CodeBracket',
			inputs: [
				{
					type: 'colour',
					props: {
						variable: 'backgroundCode',
						type: 'RGB',
						alpha: true,
						rule: true,
						value: 'rgba(0 0 0 /.5)',
						title: 'Background'
					}
				},
				{
					type: 'colour',
					props: {
						variable: 'backgroundName',
						type: 'RGB',
						alpha: true,
						rule: true,
						value: 'rgba(0 0 0 /.5)',
						title: 'Title bar',
						hint: 'The bar above the actual codeblock'
					}
				}
			]
		}
	],
	addons: [discolored, columns, hsl, radialstatus]
};

export default theme;
