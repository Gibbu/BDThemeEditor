import type {ITheme} from '$types/theme';
import Nyria from '$data/devs/nyria';

const theme: ITheme = {
	name: 'Comfy',
	previewUrl: 'https://nyri4.github.io/Comfy/betterdiscord/comfy.theme.css',
	thumbnail: 'https://camo.githubusercontent.com/ba391418f8c651948047bf11a02abfd78976e6298ae750549f2c1cf55e0e3a21/68747470733a2f2f6e797269342e6769746875622e696f2f436f6d66792f6173736574732f707265766965772e706e67',
	developer: Nyria,
	meta: {
		name: 'Comfy',
		author: 'Nyria#3863',
		version: '2.1',
		description: `Stay comfy while talking to your friends.`,
		invite: 'rtBQX5D3bD',
		source: 'https://github.com/NYRI4/Comfy'
	},
	imports: [
		'https://nyri4.github.io/Comfy/betterdiscord/main.css',
		'https://nyri4.github.io/Comfy/betterdiscord/no-scrollbar.css',
		'https://nyri4.github.io/Comfy/betterdiscord/better-spotify.css'
	],
	fonts: [],
	varGroups: [':root.theme-dark', ':root.theme-light'],
	variables: [
		{
			title: 'Colours',
			icon: 'ColorSwatch',
			inputs: [
				{
					type: 'colour',
					details: {
						variable: 'mention-color',
						type: 'HEX',
						value: '#F04747',
						title: 'Mention color pulse'
					}
				},
				{
					type: 'colour',
					details: {
						variable: 'mention-color-bar',
						type: 'HEX',
						value: '#C66262',
						title: 'Mention color bar',
						hint: 'Bar on the left of the mention'
					}
				},
				{
					type: 'colour',
					details: {
						variable: 'mention-color-background',
						type: 'RGB',
						value: 'rgba(198, 98, 98, 0.12)',
						alpha: true,
						rule: true,
						title: 'Mention color background',
						hint: 'Background of the mention'
					}
				},
				{
					type: 'colour',
					details: {
						variable: 'mention-color-hover',
						type: 'RGB',
						value: 'rgba(198, 98, 98, 0.15)',
						alpha: true,
						rule: true,
						title: 'Mention color background hover',
						hint: 'Background of the mention while hovering'
					}
				},
				{
					type: 'colour',
					details: {
						variable: 'unread-color',
						type: 'HEX',
						value: '#7289DA',
						title: 'Unread channel'
					}
				},
				{
					type: 'colour',
					details: {
						variable: 'chat-buttons',
						type: 'HEX',
						value: '#7289DA',
						title: 'Chat box buttons'
					}
				},
			]
		},
		{
			title: 'Roundness',
			icon: 'Cog',
			inputs: [
				{
					type: 'slider',
					details: {
						variable: 'avatar-radius',
						value: 5,
						unit: 'px',
						max: 25,
						title: 'Avatar roundess'
					}
				},
				{
					type: 'slider',
					details: {
						variable: 'status-radius',
						value: 3,
						unit: 'px',
						max: 10,
						title: 'Status roundess'
					}
				},
				{
					type: 'slider',
					details: {
						variable: 'server-radius',
						value: 8,
						unit: 'px',
						max: 25,
						title: 'Server roundess'
					}
				}
			]
		},
		{
			title: 'Status Colours',
			icon: 'Globe',
			inputs: [
				{
					type: 'image',
					details: {
						variable: 'status-background',
						start: 'https://i.imgur.com/ODa8LKK.jpg',
						value: '',
						title: 'Status Picker Background'
					}
				},
				{
					type: 'colour',
					details: {
						variable: 'online',
						type: 'HEX',
						value: '#43B581',
						title: 'Online'
					}
				},
				{
					type: 'colour',
					details: {
						variable: 'iddle',
						type: 'HEX',
						value: '#FAA61A',
						title: 'Idle'
					}
				},
				{
					type: 'colour',
					details: {
						variable: 'dnd',
						type: 'HEX',
						value: '#F04747',
						title: 'DND / Do not disturb'
					}
				},
				{
					type: 'colour',
					details: {
						variable: 'offline',
						type: 'HEX',
						value: '#747F8D',
						title: 'Offline'
					}
				},
				{
					type: 'colour',
					details: {
						variable: 'streaming',
						type: 'HEX',
						value: '#593695',
						title: 'Streaming'
					}
				},
				{
					type: 'colour',
					details: {
						variable: 'spotify-color',
						type: 'HEX',
						value: '#1EDC62',
						title: 'Spotify'
					}
				}
			]
		},
		{
			title: 'Dark Theme',
			icon: 'Moon',
			inputs: [
				{
					type: 'colour',
					varGroup: ':root.theme-dark',
					details: {
						variable: 'background-primary',
						type: 'HEX',
						value: '#23283D',
						title: 'Background primary'
					}
				},
				{
					type: 'colour',
					varGroup: ':root.theme-dark',
					details: {
						variable: 'background-secondary',
						type: 'HEX',
						value: '#1E2233',
						title: 'Background secondary'
					}
				},
				{
					type: 'colour',
					varGroup: ':root.theme-dark',
					details: {
						variable: 'background-secondary-alt',
						type: 'HEX',
						value: '#191F2E',
						title: 'Background secondary alt'
					}
				},
				{
					type: 'colour',
					varGroup: ':root.theme-dark',
					details: {
						variable: 'background-tertiary',
						type: 'HEX',
						value: '#101320',
						title: 'Background tertiary'
					}
				},
				{
					type: 'colour',
					varGroup: ':root.theme-dark',
					details: {
						variable: 'background-mobile-primary',
						type: 'HEX',
						value: '#23283D',
						title: 'Background mobile primary'
					}
				},
				{
					type: 'colour',
					varGroup: ':root.theme-dark',
					details: {
						variable: 'background-mobile-secondary',
						type: 'HEX',
						value: '#1E2233',
						title: 'Background mobile secondary'
					}
				},
				{
					type: 'colour',
					varGroup: ':root.theme-dark',
					details: {
						variable: 'channeltextarea-background',
						type: 'HEX',
						value: '#191F2E',
						title: 'Chatbox background'
					}
				},
				{
					type: 'colour',
					varGroup: ':root.theme-dark',
					details: {
						variable: 'background-accent',
						type: 'HEX',
						value: '#7289DA',
						title: 'Background accent'
					}
				},
				{
					type: 'colour',
					varGroup: ':root.theme-dark',
					details: {
						variable: 'background-modifier-hover',
						type: 'RGB',
						alpha: true,
						rule: true,
						value: 'rgba(0, 0, 0, 0.06)',
						title: 'Background modifier hover'
					}
				},
				{
					type: 'colour',
					varGroup: ':root.theme-dark',
					details: {
						variable: 'background-modifier-active',
						type: 'RGB',
						alpha: true,
						rule: true,
						value: 'rgba(0, 0, 0, 0.10)',
						title: 'Background modifier active'
					}
				},
				{
					type: 'colour',
					varGroup: ':root.theme-dark',
					details: {
						variable: 'background-modifier-selected',
						type: 'RGB',
						alpha: true,
						rule: true,
						value: 'rgba(0, 0, 0, 0.12)',
						title: 'Background modifier selected'
					}
				},
				{
					type: 'colour',
					varGroup: ':root.theme-dark',
					details: {
						variable: 'deprecated-card-bg',
						type: 'RGB',
						alpha: true,
						rule: true,
						value: 'rgba(18, 20, 31, 0.39)',
						title: 'Card background'
					}
				},
				{
					type: 'colour',
					varGroup: ':root.theme-dark',
					details: {
						variable: 'background-floating',
						type: 'RGB',
						alpha: true,
						rule: true,
						value: '#101320',
						title: 'Card floating'
					}
				},
				{
					type: 'colour',
					varGroup: ':root.theme-dark',
					details: {
						variable: 'deprecated-quickswitcher-input-background',
						type: 'HEX',
						value: '#101320',
						title: 'Quick switch input'
					}
				},
				{
					type: 'colour',
					varGroup: ':root.theme-dark',
					details: {
						variable: 'scrollbar-auto-thumb',
						type: 'HEX',
						value: '#121722',
						title: 'Scrollbar auto thumb'
					}
				},
				{
					type: 'colour',
					varGroup: ':root.theme-dark',
					details: {
						variable: 'scrollbar-auto-track',
						type: 'HEX',
						value: '#191F2E',
						title: 'Scrollbar auto track'
					}
				},
				{
					type: 'colour',
					varGroup: ':root.theme-dark',
					details: {
						variable: 'scrollbar-thin-thumb',
						type: 'HEX',
						value: '#141925',
						title: 'Scrollbar thin thumb'
					}
				},
				{
					type: 'colour',
					varGroup: ':root.theme-dark',
					details: {
						variable: 'activity-card-background',
						type: 'HEX',
						value: '#101320',
						title: 'Activity card background'
					}
				},
			]
		},
		{
			title: 'Others',
			icon: 'Cog',
			inputs: [
				{
					type: 'number',
					details: {
						variable: 'user-buttons-spacing',
						value: 8,
						unit: 'px',
						title: 'User button spacing',
						hint: 'Spacing between each button in the bottom left.'
					}
				},
				{
					type: 'colour',
					details: {
						variable: 'user-buttons-color',
						type: 'HEX',
						value: '#096DC0',
						title: 'User button color'
					}
				},
				{
					type: 'slider',
					details: {
						variable: 'role-circle',
						value: 10,
						unit: 'px',
						max: 20,
						title: 'Role circle size'
					}
				},
				{
					type: 'select',
					details: {
						variable: 'discord-logo',
						options: [
							{label: 'True', value: 'block'},
							{label: 'False', value: 'none'}
						],
						value: 'none',
						title: 'Display Discord logo'
					}
				}
			]
		}
	],
	hiddenVars: [
		{
			variable: 'colored-emoji',
			value: 'grayscale(0%)',
		},
		{
			variable: 'disable-animations',
			value: '2s channel-unread infinite'
		},
		{
			variable: 'background-primary',
			value: '#23283D',
			varGroup: ':root.theme-light'
		},
		{
			variable: 'background-secondary',
			value: '#1E2233',
			varGroup: ':root.theme-light'
		},
		{
			variable: 'background-secondary-alt',
			value: '#191F2E',
			varGroup: ':root.theme-light'
		},
		{
			variable: 'background-tertiary',
			value: '#101320',
			varGroup: ':root.theme-light'
		},
		{
			variable: 'background-accent',
			value: '#7289DA',
			varGroup: ':root.theme-light'
		},
		{
			variable: 'background-modifier-hover',
			value: '#262B41',
			varGroup: ':root.theme-light'
		},
		{
			variable: 'background-modifier-active',
			value: '#262B41',
			varGroup: ':root.theme-light'
		},
		{
			variable: 'header-primary',
			value: '#fff',
			varGroup: ':root.theme-light'
		},
		{
			variable: 'header-secondary',
			value: '#B1B5B9',
			varGroup: ':root.theme-light'
		},
		{
			variable: 'text-normal',
			value: '#8E9297',
			varGroup: ':root.theme-light'
		},
		{
			variable: 'background-message-hover',
			value: 'transparent',
			varGroup: ':root.theme-dark'
		},
		{
			variable: 'elevation-low',
			value: 'none',
			varGroup: ':root.theme-dark'
		}
	],
	addons: ['discolored']
}

export default theme;