import type { ITheme } from '$types/theme';
import DevilBro from '../devs/devilbro';
import { hsl, columns, radialstatus } from '../addons';

const theme: ITheme = {
	name: 'DiscordRecolor',
	thumbnail: 'https://i.imgur.com/dF6Ic4U.png',
	developer: DevilBro,
	meta: {
		name: 'DiscordRecolor',
		description: `Allows you to customize Discord's native Color Scheme.`,
		author: 'DevilBro',
		version: '1.0.0',
		authorId: '278543574059057154',
		invite: 'Jx3TjNS',
		donate: 'https://www.paypal.me/MircoWittrien',
		patreon: 'https://www.patreon.com/MircoWittrien',
		website: 'https://mwittrien.github.io/',
		source: 'https://github.com/mwittrien/BetterDiscordAddons/tree/master/Themes/DiscordRecolor/'
	},
	preview: `
		@import url(https://mwittrien.github.io/BetterDiscordAddons/Themes/DiscordRecolor/DiscordRecolor.css);
		:root {
			--font: Whitney, Helvetica Neue, Helvetica, Arial, sans-serif;
			--settingsicons: 1;
			--accentcolor: 88,101,242;
			--accentcolor2: 255,115,250;
			--linkcolor: 0,176,244;
			--mentioncolor: 250,166,26;
			--successcolor: 59,165,92;
			--warningcolor: 250,166,26;
			--dangercolor: 237,66,69;
			--textbrightest: 255,255,255;
			--textbrighter: 222,222,222;
			--textbright: 185,185,185;
			--textdark: 140,140,140;
			--textdarker: 115,115,115;
			--textdarkest: 80,80,80;
			--backgroundaccent: 50,50,50;
			--backgroundprimary: 30,30,30;
			--backgroundsecondary: 20,20,20;
			--backgroundsecondaryalt: 15,15,15;
			--backgroundtertiary: 10,10,10;
			--backgroundfloating: 0,0,0;	
		}
	`,
	features: ['solid', 'addons'],
	imports: ['https://mwittrien.github.io/BetterDiscordAddons/Themes/DiscordRecolor/DiscordRecolor.css'],
	fonts: [],
	variables: [
		{
			title: 'Colors',
			icon: 'Swatch',
			inputs: [
				{
					type: 'colour',
					props: {
						variable: 'accentcolor',
						type: 'RGB',
						value: '114,137,218',
						title: 'Accent colour',
						hint: 'Discord blurple'
					}
				},
				{
					type: 'colour',
					props: {
						variable: 'accentcolor2',
						type: 'RGB',
						value: '255,115,250',
						title: 'Accent colour 2',
						hint: 'Nitro pink'
					}
				},
				{
					type: 'colour',
					props: {
						variable: 'linkcolor',
						type: 'RGB',
						value: '0,176,244',
						title: 'Link colour'
					}
				},
				{
					type: 'colour',
					props: {
						variable: 'mentioncolor',
						type: 'RGB',
						value: '250,166,26',
						title: 'Mention colour'
					}
				}
			]
		},
		{
			title: 'Text',
			icon: 'ChatBubbleBottomCenterText',
			inputs: [
				{
					type: 'colour',
					props: {
						variable: 'textbrightest',
						type: 'RGB',
						value: '255,255,255',
						title: 'Text brightest'
					}
				},
				{
					type: 'colour',
					props: {
						variable: 'textbrighter',
						type: 'RGB',
						value: '222,222,222',
						title: 'Text brighter'
					}
				},
				{
					type: 'colour',
					props: {
						variable: 'textbright',
						type: 'RGB',
						value: '185,185,185',
						title: 'Text bright'
					}
				},
				{
					type: 'colour',
					props: {
						variable: 'textdark',
						type: 'RGB',
						value: '140,140,140',
						title: 'Text dark'
					}
				},
				{
					type: 'colour',
					props: {
						variable: 'textdarker',
						type: 'RGB',
						value: '115,115,115',
						title: 'Text darker'
					}
				},
				{
					type: 'colour',
					props: {
						variable: 'textdarkest',
						type: 'RGB',
						value: '80,80,80',
						title: 'Text darkest'
					}
				},
				{
					type: 'font',
					props: {
						variable: 'font',
						index: 0,
						title: 'App font',
						value: 'gg sans'
					}
				}
			]
		},
		{
			title: 'Background colours',
			icon: 'PaintBrush',
			inputs: [
				{
					type: 'colour',
					props: {
						variable: 'backgroundaccent',
						type: 'RGB',
						value: '50,50,50',
						title: 'Background accent'
					}
				},
				{
					type: 'colour',
					props: {
						variable: 'backgroundprimary',
						type: 'RGB',
						value: '30,30,30',
						title: 'Background primary'
					}
				},
				{
					type: 'colour',
					props: {
						variable: 'backgroundsecondary',
						type: 'RGB',
						value: '20,20,20',
						title: 'Background secondary'
					}
				},
				{
					type: 'colour',
					props: {
						variable: 'backgroundsecondaryalt',
						type: 'RGB',
						value: '15,15,15',
						title: 'Background secondary alt'
					}
				},
				{
					type: 'colour',
					props: {
						variable: 'backgroundtertiary',
						type: 'RGB',
						value: '10,10,10',
						title: 'Background tertiary'
					}
				},
				{
					type: 'colour',
					props: {
						variable: 'backgroundfloating',
						type: 'RGB',
						value: '0,0,0',
						title: 'Background floating'
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
						value: '1',
						options: [
							{ label: 'True', value: '1' },
							{ label: 'False', value: '0' }
						],
						title: 'Show settings icons',
						custom: false
					}
				}
			]
		}
	],
	addons: [hsl, radialstatus, columns]
};

export default theme;
