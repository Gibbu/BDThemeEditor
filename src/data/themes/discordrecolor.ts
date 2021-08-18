import type {ITheme} from '$types/theme';
import DevilBro from '$data/devs/devilbro';

const theme: ITheme = {
	name: 'DiscordRecolor',
	previewUrl: 'https://mwittrien.github.io/BetterDiscordAddons/Themes/DiscordRecolor/DiscordRecolor.theme.css',
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
		source: 'https://github.com/mwittrien/BetterDiscordAddons/tree/master/Themes/DiscordRecolor/',
	},
	imports: [
		'https://mwittrien.github.io/BetterDiscordAddons/Themes/DiscordRecolor/DiscordRecolor.css'
	],
	fonts: [],
	variables: [
		{
			title: 'Colors',
			icon: 'ColorSwatch',
			inputs: [
				{
					type: 'colour',
					details: {
						variable: 'accentcolor',
						type: 'RGB',
						value: '114,137,218',
						title: 'Accent colour',
						hint: 'Discord blurple'
					}
				},
				{
					type: 'colour',
					details: {
						variable: 'accentcolor2',
						type: 'RGB',
						value: '255,115,250',
						title: 'Accent colour 2',
						hint: 'Nitro pink'
					}
				},
				{
					type: 'colour',
					details: {
						variable: 'linkcolor',
						type: 'RGB',
						value: '0,176,244',
						title: 'Link colour'
					}
				},
				{
					type: 'colour',
					details: {
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
			icon: 'MenuAlt1',
			inputs: [
				{
					type: 'colour',
					details: {
						variable: 'textbrightest',
						type: 'RGB',
						value: '255,255,255',
						title: 'Text brightest'
					}
				},
				{
					type: 'colour',
					details: {
						variable: 'textbrighter',
						type: 'RGB',
						value: '222,222,222',
						title: 'Text brighter'
					}
				},
				{
					type: 'colour',
					details: {
						variable: 'textbright',
						type: 'RGB',
						value: '185,185,185',
						title: 'Text bright'
					}
				},
				{
					type: 'colour',
					details: {
						variable: 'textdark',
						type: 'RGB',
						value: '140,140,140',
						title: 'Text dark'
					}
				},
				{
					type: 'colour',
					details: {
						variable: 'textdarker',
						type: 'RGB',
						value: '115,115,115',
						title: 'Text darker'
					}
				},
				{
					type: 'colour',
					details: {
						variable: 'textdarkest',
						type: 'RGB',
						value: '80,80,80',
						title: 'Text darkest'
					}
				},
				{
					type: 'font',
					details: {
						variable: 'font',
						index: 0,
						title: 'App font'
					}
				}
			]
		},
		{
			title: 'Background colours',
			icon: 'ColorSwatch',
			inputs: [
				{
					type: 'colour',
					details: {
						variable: 'backgroundaccent',
						type: 'RGB',
						value: '50,50,50',
						title: 'Background accent'
					}
				},
				{
					type: 'colour',
					details: {
						variable: 'backgroundprimary',
						type: 'RGB',
						value: '30,30,30',
						title: 'Background primary'
					}
				},
				{
					type: 'colour',
					details: {
						variable: 'backgroundsecondary',
						type: 'RGB',
						value: '20,20,20',
						title: 'Background secondary'
					}
				},
				{
					type: 'colour',
					details: {
						variable: 'backgroundsecondaryalt',
						type: 'RGB',
						value: '15,15,15',
						title: 'Background secondary alt'
					}
				},
				{
					type: 'colour',
					details: {
						variable: 'backgroundtertiary',
						type: 'RGB',
						value: '10,10,10',
						title: 'Background tertiary'
					}
				},
				{
					type: 'colour',
					details: {
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
			icon: 'Cog',
			inputs: [
				{
					type: 'select',
					details: {
						variable: 'settingsicons',
						value: '1',
						options: [
							{label: 'True', value: '1'},
							{label: 'False', value: '0'}
						],
						title: 'Show settings icons',
						customValue: false
					}
				}
			]
		}
	]
}

export default theme;