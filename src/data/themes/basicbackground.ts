import type { Theme } from '$types/theme';
import DevilBro from '../devs/devilbro';
import { columns, radialstatus, hsl } from '../addons';

const theme: Theme = {
	name: 'BasicBackground',
	thumbnail: 'https://i.imgur.com/XORsntg.jpg',
	developer: DevilBro,
	meta: {
		name: 'BasicBackground',
		author: 'DevilBro',
		version: '1.0.5',
		description: 'Allows you to use a background image without greatly altering the basic look of Discord.',
		source:
			'https://raw.githubusercontent.com/mwittrien/BetterDiscordAddons/master/Themes/BasicBackground/BasicBackground.theme.css',
		invite: 'Jx3TjNS',
		donate: 'https://www.paypal.me/MircoWittrien',
		patreon: 'https://www.patreon.com/MircoWittrien',
		website: 'https://github.com/mwittrien/BetterDiscordAddons/tree/master/Themes/BasicBackground',
		authorId: '278543574059057154'
	},
	preview: `
		@import url(https://mwittrien.github.io/BetterDiscordAddons/Themes/BasicBackground/BasicBackground.css);
		:root {
			--transparencycolor: 0,0,0;
			--transparencyalpha: 0.15;
			--messagetransparency: 0.5;
			--guildchanneltransparency: 0.15;
			--chatinputtransparency: 0.0;
			--memberlisttransparency: 0.0;
			--accentcolor: 190,78,180;
			--font: Whitney, Helvetica Neue, Helvetica, Arial, sans-serif;
			--textshadow: transparent;
			--settingsicons: 1;
			--background:	url(https://mwittrien.github.io/BetterDiscordAddons/Themes/BasicBackground/_res/background.jpg);
			--backgroundposition:	center;
			--backgroundsize:	cover;
			--backgroundblur:	unset;
			--popout:	var(--background);
			--popoutposition:	var(--backgroundposition);
			--popoutsize: var(--backgroundsize);
			--popoutblur:var(--backgroundblur);
			--backdrop:rgba(0,0,0,0.85);
			--backdropposition:center;
			--backdropsize:cover;
			--backdropblur:unset;
			--textbrightest:255,255,255;
			--textbrighter:222,222,222;
			--textbright:200,200,200;
			--textdark:160,160,160;
			--textdarker:125,125,125;
			--textdarkest:90,90,90;
			--version1_0_5:none;
		}
	`,
	features: ['background', 'addons', 'font', 'transparent'],
	imports: ['https://mwittrien.github.io/BetterDiscordAddons/Themes/BasicBackground/BasicBackground.css'],
	fonts: [],
	variables: [
		{
			title: 'Background Image',
			icon: 'Photo',
			inputs: [
				{
					type: 'image',
					props: {
						variable: 'background',
						start: 'https://mwittrien.github.io/BetterDiscordAddons/Themes/BasicBackground/_res/background.jpg',
						value: '',
						title: 'Background Image'
					}
				},
				{
					type: 'select',
					props: {
						variable: 'backgroundsize',
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
						variable: 'backgroundposition',
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
					type: 'slider',
					props: {
						variable: 'backgroundblur',
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
			title: 'Popout image',
			icon: 'Photo',
			inputs: [
				{
					type: 'image',
					props: {
						variable: 'popout',
						start: 'var(--background)',
						value: '',
						title: 'Popout background Image'
					}
				},
				{
					type: 'select',
					props: {
						variable: 'popoutsize',
						value: 'var(--backgroundsize)',
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
						variable: 'backgroundposition',
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
					type: 'slider',
					props: {
						variable: 'popoutblur',
						value: 0,
						unit: 'px',
						max: 25,
						step: 1,
						title: 'Popout image blur'
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
						variable: 'transparencycolor',
						value: '0,0,0',
						type: 'RGB',
						title: 'Transparency colour'
					}
				},
				{
					type: 'colour',
					props: {
						variable: 'accentcolor',
						value: '190,78,180',
						type: 'RGB',
						title: 'Accent colour'
					}
				},
				{
					type: 'colour',
					props: {
						variable: 'backdrop',
						value: 'rgba(0,0,0,0.85)',
						alpha: true,
						rule: true,
						type: 'RGB',
						title: 'Backdrop colour',
						hint: 'Backdrop = viewing profile/notification settings'
					}
				},
				{
					type: 'colour',
					props: {
						variable: 'textshadow',
						value: 'transparent',
						alpha: true,
						rule: true,
						type: 'RGB',
						title: 'Text shadow colour',
						hint: 'Text shadow for accent colour areas'
					}
				}
			]
		},
		{
			title: 'Brightness',
			icon: 'Sun',
			inputs: [
				{
					type: 'slider',
					props: {
						variable: 'transparencyalpha',
						value: 0.15,
						max: 1,
						step: 0.02,
						title: 'Transparency brightness',
						hint: 'General darkness of the app'
					}
				},
				{
					type: 'slider',
					props: {
						variable: 'messagetransparency',
						value: 0.5,
						max: 1,
						step: 0.02,
						title: 'Message brightness'
					}
				},
				{
					type: 'slider',
					props: {
						variable: 'guildchanneltransparency',
						value: 0.15,
						max: 1,
						step: 0.02,
						title: 'Guild/Channel list brightness'
					}
				},
				{
					type: 'slider',
					props: {
						variable: 'chatinputtransparency',
						value: 0,
						max: 1,
						title: 'Chat box brightness'
					}
				},
				{
					type: 'slider',
					props: {
						variable: 'memberlisttransparency',
						value: 0,
						max: 1,
						step: 0.02,
						title: 'Members list brightness'
					}
				}
			]
		},
		{
			title: 'Font',
			icon: 'ChatBubbleBottomCenterText',
			inputs: [
				{
					type: 'font',
					props: {
						variable: 'font',
						index: 0,
						value: 'Whitney',
						title: 'App font'
					}
				},
				{
					type: 'colour',
					props: {
						variable: 'textbrightest',
						value: '255,255,255',
						type: 'RGB',
						title: 'Text brightest'
					}
				},
				{
					type: 'colour',
					props: {
						variable: 'textbrighter',
						value: '222,222,222',
						type: 'RGB',
						title: 'Text brighter'
					}
				},
				{
					type: 'colour',
					props: {
						variable: 'textbright',
						value: '200,200,200',
						type: 'RGB',
						title: 'Text bright'
					}
				},
				{
					type: 'colour',
					props: {
						variable: 'textdark',
						value: '160,160,160',
						type: 'RGB',
						title: 'Text dark'
					}
				},
				{
					type: 'colour',
					props: {
						variable: 'textdarker',
						value: '125,125,125',
						type: 'RGB',
						title: 'Text darker'
					}
				},
				{
					type: 'colour',
					props: {
						variable: 'textdarkest',
						value: '90,90,90',
						type: 'RGB',
						title: 'Text darkest'
					}
				}
			]
		},
		{
			title: 'Others',
			icon: 'Cog6Tooth',
			inputs: [
				{
					type: 'select',
					props: {
						variable: 'settingsicons',
						title: 'Show setting icons',
						value: '1',
						options: [
							{ label: 'True', value: '1' },
							{ label: 'False', value: '0' }
						],
						custom: false
					}
				}
			]
		}
	],
	hiddenVars: [
		{
			variable: 'backdropsize',
			value: 'var(--background-size)'
		},
		{
			variable: 'backdropblur',
			value: '0px'
		},
		{
			variable: 'version1_0_5',
			value: 'none'
		}
	],
	addons: [hsl, columns, radialstatus]
};

export default theme;
