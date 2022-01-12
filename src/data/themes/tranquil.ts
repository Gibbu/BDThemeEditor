import type {ITheme} from '$types/theme';
import Monster from '$data/devs/monster';

const theme: ITheme = {
	name: 'Tranquil',
	previewUrl: 'https://monstrousdev.github.io/themes/theme-files/Tranquil.theme.css',
	thumbnail: 'https://camo.githubusercontent.com/99be7dd5541e0d05b5161054bc5a526bee786055029c693a13f7e71fa3200109/68747470733a2f2f692e696d6775722e636f6d2f344576764463382e706e67',
	developer: Monster,
	meta: {
		name: 'Tranquil',
		author: 'MonsterDev',
		version: '1.5',
		description: `Phoenix Theme Bundle: Primarily dark theme that's easy on the eyes.`,
		invite: 'TeRQEPb',
		authorId: '402272736665272320',
		source: 'https://github.com/monstrousdev/themes/blob/master/theme-files/Tranquil.theme.css'
	},
	imports: [
		'https://monstrousdev.github.io/themes/phoenix-bundle/tranquil.css'
	],
	fonts: [],
	variables: [
		{
			title: 'Colours',
			icon: 'Colour',
			inputs: [
				{
					type: 'colour',
					details: {
						variable: 'main-color',
						value: '#8d2036',
						type: 'HEX',
						title: 'Main colour'
					}
				},
				{
					type: 'colour',
					details: {
						variable: 'hover-color',
						value: '#6f182a',
						type: 'HEX',
						title: 'Hover colour',
						hint: 'Usually darker than Main colour'
					}
				},
				{
					type: 'colour',
					details: {
						variable: 'home-color',
						value: '#eee',
						type: 'HEX',
						title: 'Home button colour'
					}
				}
			]
		},
		{
			title: 'Others',
			icon: 'Gear',
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
	],
	addons: ['discolored']
}

export default theme;