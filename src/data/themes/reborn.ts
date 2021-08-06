import type {ITheme} from '$types/theme';
import Monster from '$data/devs/monster';

const theme: ITheme = {
	name: 'Reborn',
	previewUrl: 'https://monstrousdev.github.io/themes/theme-files/Reborn.theme.css',
	thumbnail: 'https://camo.githubusercontent.com/737a92652884703c623bf8093f8bdf5121741375/68747470733a2f2f692e696d6775722e636f6d2f303943635242462e6a7067',
	developers: [Monster],
	tags: ['Background Image', 'Colours'],
	meta: {
		name: 'Reborn',
		author: 'MonsterDev',
		version: '1.5',
		description: 'Phoenix Theme Bundle: Transparent, fully customizable theme with multiple addons.',
		invite: 'TeRQEPb',
		authorId: '402272736665272320',
		source: 'https://github.com/monstrousdev/themes/theme-files/Reborn.theme.css'
	},
	imports: [
		'https://monstrousdev.github.io/themes/phoenix-bundle/reborn.css'
	],
	fonts: [],
	variables: [
		{
			title: 'Background image',
			icon: 'Photograph',
			inputs: [
				{
					type: 'image',
					details: {
						variable: 'background-image',
						start: 'https://s-media-cache-ak0.pinimg.com/originals/60/c4/bb/60c4bb55215c989b15b0fe144c73cf82.jpg',
						value: '',
						title: 'Background image'
					}
				},
				{
					type: 'image',
					details: {
						variable: 'popup-background',
						start: 'https://s-media-cache-ak0.pinimg.com/originals/60/c4/bb/60c4bb55215c989b15b0fe144c73cf82.jpg',
						value: '',
						title: 'Popout image'
					}
				},
				{
					type: 'slider',
					details: {
						variable: 'background-blur',
						value: 0,
						unit: 'px',
						max: 25,
						step: 1,
						title: 'Background image blur'
					}
				},
				{
					type: 'slider',
					details: {
						variable: 'background-darkness',
						value: 0.75,
						max: 1,
						step: .01,
						title: 'Background image darkness'
					}
				},
			]
		},
		{
			title: 'Colours',
			icon: 'ColorSwatch',
			inputs: [
				{
					type: 'colour',
					details: {
						variable: 'main-color',
						value: '#007dbd',
						type: 'HEX',
						title: 'Main colour'
					}
				},
				{
					type: 'colour',
					details: {
						variable: 'hover-color',
						value: '#03679b',
						type: 'HEX',
						title: 'Hover colour',
						hint: 'Usually darker than Main colour'
					}
				},
			]
		},
		{
			title: 'Others',
			icon: 'Cog',
			inputs: [
				{
					type: 'slider',
					details: {
						variable: 'roundness',
						value: 50,
						unit: 'px',
						max: 50,
						step: 1,
						title: 'Roundness'
					}
				},
				{
					type: 'colour',
					details: {
						variable: 'shadow',
						value: 'rgba(0,0,0,.4)',
						alpha: true,
						rule: true,
						type: 'RGB',
						title: 'Shadow colour'
					}
				}
			]
		}
	]
}

export default theme;