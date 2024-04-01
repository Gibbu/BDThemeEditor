import type { Theme } from '$types/theme';
import FeoreV from '../devs/FeoreV';
import { stdefault, stdefaultlite, stcustombackground, stcustombackgroundlite, stmica, materialyou, modulardesign } from '../addons';

const theme: Theme = {
	name: 'FVUI',
	thumbnail: 'https://betterdiscord.app/resources/thumbnails/1377.png',
	developer: FeoreV,
	meta: {
		name: 'FeoreV',
		author: 'FeoreV',
		version: '2.0.0',
		description: 'Blur is the new black',
		source: 'https://github.com/FeoreV/Themes/tree/main/Discord/FVUI',
		invite: 'baEMQkgswT',
		website: 'https://feorev.github.io/',
		authorId: '489785940546551831'
	},
	preview: `@import url('https://feorev.github.io/Themes/Discord/FVUI/Cores/preload.css');@import url('https://feorev.github.io/Themes/Discord/FVUI/assets/SubThemes/Default.css');`,
	features: ['background', 'font', 'transparent', 'home', 'light'],
	imports: ['https://feorev.github.io/Themes/Discord/FVUI/Cores/preload.css'],
	optionalImports: [
        {
			name: 'Events',
			description: 'Any events and decorations for the holidays. For example, snow and New Years attributes for the new year.',
			imports: ['https://feorev.github.io/Themes/Discord/FVUI/Addons/Events/Events.css'],
			enabled: true
		},
		{
			name: 'ServerRings',
			description: '',
			imports: ['https://feorev.github.io/Themes/Discord/FVUI/Addons/ServerRings.css'],
			enabled: true
		},
		{
			name: 'RadialStatus',
			description: '',
			imports: ['https://feorev.github.io/Themes/Discord/FVUI/Addons/RadialStatus.css'],
			enabled: true
		},
        {
			name: 'TopUserPanel',
			description: 'Moves the userpanel to the top corner',
			imports: ['https://feorev.github.io/Themes/Discord/FVUI/Addons/TopUserPanel.css'],
			enabled: false
		},
		{
			name: 'TitleIsland',
			description: '	',
			imports: ['https://feorev.github.io/Themes/Discord/FVUI/Addons/TitleIsland.css'],
			enabled: false
		},
        {
			name: 'HSL top',
			description: 'Moves serverlist to the top corner',
			imports: ['https://feorev.github.io/Themes/Discord/FVUI/Addons/HSL/HSL_top.css'],
			enabled: false
		},
        {
			name: 'HSL bottom',
			description: 'Moves serverlist to the bottom corner',
			imports: ['https://feorev.github.io/Themes/Discord/FVUI/Addons/HSL/HSL_bottom.css'],
			enabled: false
		}
	],
	fonts: ['https://fonts.googleapis.com/css2?family=Comfortaa&display=swap%27'],
	variables: [
		{
			title: 'Colors',
			icon: 'PaintBrush',
			
			inputs: [
				{
					type: 'divider',
					props: {
						title: 'IMPORTANT: Enable one of the subthemes in the Addon tab. IF YOU SKIP THIS STEP THE THEME WILL NOT WORK.',
					}
				},
				{
					type: 'colour',
					props: {
						variable: 'color1',
						type: 'RGB',
						value: '30, 40, 50',
						title: 'Additional color',
					}
				},
                {
					type: 'colour',
					props: {
						variable: 'color2',
						type: 'RGB',
						value: '9, 18, 24',
						title: 'Background color',
					}
				},
                {
					type: 'colour',
					props: {
						variable: 'color3',
						type: 'RGB',
						value: '35, 120, 200',
						title: 'Accent color',
					}
				},
				{
					type: 'divider',
					props: {
						title: 'Opacity',
					}
				},
				{
					type: 'number',
					props: {
						variable: 'ColorOpacity',
						value: 1,
						min: 0.3,
						max: 2.0,
						step: 0.1,
						title: 'Opacity multiplier',
					}
				},
				{
					type: 'select',
					props: {
						variable: 'DisableOpacity',
						title: 'Disable opacity',
						value: '0',
						options: [
							{ label: 'Disable', value: '1' },
							{ label: 'None', value: '0' }
						],
						custom: false
					}
				},
			]
		},
		{
			title: 'General',
			icon: 'Bars3',
			inputs: [
				{
				type: 'image',
					props: {
						variable: 'cursor',
						value: 'https://feorev.github.io/Themes/Discord/FVUI/assets/Cursor.cur',
						title: 'Cursor (direct link to .cur file)',
					}
				},
				{
					type: 'font',
					props: {
						variable: 'font',
						index: 0,
						value: 'Comfortaa',
						title: 'Font',
					}
				},
				{
					type: 'image',
					props: {
						variable: 'homeicon',
						value: 'https://feorev.github.io/Themes/Discord/FVUI/assets/HomeIcon/Icon.png',
						title: 'HomeIcon (direct link)',
					}
				},
			]
		},
		{
			title: 'Publication',
			icon: 'Beaker',
			description: 'If you would like to share your theme presets with people, you can post them in the #presets channel on the discord server. This helps the theme a lot.',

			inputs: [
				{
					type: 'divider',
					props: {
						title: 'A little more information',
						description: 'In order for your theme to be correctly identified, you must name its THEME FILE in the format "FVUI-...". Below you can specify which topic name will be DISPLAYED.',
					}
				},
				{
					type: 'select',
					props: {
						variable: 'FVUI',
						title: 'Theme name',
						value: '0',
						options: [
							{ label: 'Default', value: 'var(--subtheme)' },
						],
						hint: "NAME MUST BE IN QUOTES",
						custom: true
					}
				},
				{
					type: 'select',
					props: {
						variable: 'customdesc',
						title: 'Custom description',
						value: '0',
						options: [
							{ label: 'No', value: '' },
						],
						hint: "DESCRITPION MUST BE IN QUOTES. Here you can indicate authorship, or whatever you see fit",
						custom: true
					}
				},
			]
		},
	],
	addons: [ stdefault, stdefaultlite, stcustombackground, stcustombackgroundlite, stmica, materialyou, modulardesign]
};

export default theme;
