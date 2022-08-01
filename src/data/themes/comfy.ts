import type { ITheme } from '$types/theme';
import Nyria from '$data/devs/nyria';

const theme: ITheme = {
	name: 'Comfy',
	previewUrls: ['https://nyri4.github.io/Comfy/betterdiscord/comfy.theme.css'],
	thumbnail:
		'https://camo.githubusercontent.com/953142901f1ab7b67dab1ebaafac787a68948f018bf4f9d46b98d2bc861fc0a6/68747470733a2f2f636f6d66792d7468656d65732e6769746875622e696f2f446973636f72642f6173736574732f707265766965772e706e67',
	developer: Nyria,
	meta: {
		name: 'Comfy',
		author: 'Nyria#3863',
		version: '2.2',
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
	varGroups: ['.theme-dark', '.theme-light'],
	variables: [
		{
			title: 'Colours',
			icon: 'Colour',
			inputs: [
				{
					type: 'colour',
					details: {
						variable: 'mention-color-bar',
						type: 'HEX',
						value: '#C66262',
						title: 'Mention color bar',
						hint: 'Bar on the left of a mention in chat'
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
						hint: 'Background of the mention in chat'
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
						hint: 'Background of the mention in chat while hovering'
					}
				},
				{
					type: 'colour',
					details: {
						variable: 'mention-color',
						type: 'HEX',
						value: '#F04747',
						title: 'Mention color',
						hint: 'Mentions in server/channel list'
					}
				},
				{
					type: 'colour',
					details: {
						variable: 'unread-color',
						type: 'HEX',
						value: '#7289DA',
						title: 'Unread messages',
						hint: 'Unread pill in server/channel list'
					}
				},
				{
					type: 'colour',
					details: {
						variable: 'chat-buttons',
						type: 'HEX',
						value: '#7289DA',
						title: 'Chat box buttons',
						hint: 'Gift/GIF/Emoji buttons'
					}
				}
			]
		},
		{
			title: 'Roundness',
			icon: 'Gear',
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
			icon: 'Status',
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
					varGroup: '.theme-dark',
					details: {
						variable: 'background-primary',
						type: 'HEX',
						value: '#23283D',
						title: 'Background primary',
						hint: 'Chat & settings'
					}
				},
				{
					type: 'colour',
					varGroup: '.theme-dark',
					details: {
						variable: 'background-secondary',
						type: 'HEX',
						value: '#1E2233',
						title: 'Background secondary',
						hint: 'Sidebars, channel top bar, user modal, containers, ...'
					}
				},
				{
					type: 'colour',
					varGroup: '.theme-dark',
					details: {
						variable: 'background-secondary-alt',
						type: 'HEX',
						value: '#191F2E',
						title: 'Background secondary alt',
						hint: 'Channel call, Spotify plugin, search popout ...'
					}
				},
				{
					type: 'colour',
					varGroup: '.theme-dark',
					details: {
						variable: 'background-tertiary',
						type: 'HEX',
						value: '#101320',
						title: 'Background tertiary',
						hint: 'Server list, menu, status picker, user popout, search bar ...'
					}
				},
				{
					type: 'colour',
					varGroup: '.theme-dark',
					details: {
						variable: 'background-mobile-primary',
						type: 'HEX',
						value: '#23283D',
						title: 'Background mobile primary',
						hint: 'Connection page modal'
					}
				},
				{
					type: 'colour',
					varGroup: '.theme-dark',
					details: {
						variable: 'background-mobile-secondary',
						type: 'HEX',
						value: '#1E2233',
						title: 'Background mobile secondary',
						hint: 'Connection page modal'
					}
				},
				{
					type: 'colour',
					varGroup: '.theme-dark',
					details: {
						variable: 'channeltextarea-background',
						type: 'HEX',
						value: '#191F2E',
						title: 'Chatbox background',
						hint: 'Where you send messages'
					}
				},
				{
					type: 'colour',
					varGroup: '.theme-dark',
					details: {
						variable: 'background-accent',
						type: 'HEX',
						value: '#7289DA',
						title: 'Background accent',
						hint: 'Accent color, default is the old blue-ish Discord color'
					}
				},
				{
					type: 'colour',
					varGroup: '.theme-dark',
					details: {
						variable: 'background-modifier-hover',
						type: 'RGB',
						alpha: true,
						rule: true,
						value: 'rgba(0, 0, 0, 0.06)',
						title: 'Background modifier hover',
						hint: 'When a channel, member ... is hovered'
					}
				},
				{
					type: 'colour',
					varGroup: '.theme-dark',
					details: {
						variable: 'background-modifier-active',
						type: 'RGB',
						alpha: true,
						rule: true,
						value: 'rgba(0, 0, 0, 0.10)',
						title: 'Background modifier active',
						hint: 'When a channel, member ... is clicked'
					}
				},
				{
					type: 'colour',
					varGroup: '.theme-dark',
					details: {
						variable: 'background-modifier-selected',
						type: 'RGB',
						alpha: true,
						rule: true,
						value: 'rgba(0, 0, 0, 0.12)',
						title: 'Background modifier selected',
						hint: 'When a channel, member ... is selected'
					}
				},
				{
					type: 'colour',
					varGroup: '.theme-dark',
					details: {
						variable: 'deprecated-card-bg',
						type: 'RGB',
						alpha: true,
						rule: true,
						value: 'rgba(18, 20, 31, 0.39)',
						title: 'Card background',
						hint: 'When a channel, member ... is clicked'
					}
				},
				{
					type: 'colour',
					varGroup: '.theme-dark',
					details: {
						variable: 'background-floating',
						type: 'RGB',
						alpha: true,
						rule: true,
						value: '#101320',
						title: 'Card floating',
						hint: 'Tooltips background (small box when you hover a server)'
					}
				},
				{
					type: 'colour',
					varGroup: '.theme-dark',
					details: {
						variable: 'deprecated-quickswitcher-input-background',
						type: 'HEX',
						value: '#101320',
						title: 'Quick switch input',
						hint: 'Input in the conversation search modal in DMs (https://i.imgur.com/ll3mmzl.png)'
					}
				},
				{
					type: 'colour',
					varGroup: '.theme-dark',
					details: {
						variable: 'scrollbar-auto-thumb',
						type: 'HEX',
						value: '#121722',
						title: 'Scrollbar auto thumb',
						hint: 'Small thing you grab to scroll (https://i.imgur.com/xmclnCt.png)'
					}
				},
				{
					type: 'colour',
					varGroup: '.theme-dark',
					details: {
						variable: 'scrollbar-auto-track',
						type: 'HEX',
						value: '#191F2E',
						title: 'Scrollbar auto track',
						hint: 'Rest of the scrollbar (https://i.imgur.com/zSECJXA.png)'
					}
				},
				{
					type: 'colour',
					varGroup: '.theme-dark',
					details: {
						variable: 'scrollbar-thin-thumb',
						type: 'HEX',
						value: '#141925',
						title: 'Scrollbar thin thumb',
						hint: 'Small scrollbar in memberlist & settings (https://i.imgur.com/00mfpQ2.png)'
					}
				},
				{
					type: 'colour',
					varGroup: '.theme-dark',
					details: {
						variable: 'activity-card-background',
						type: 'HEX',
						value: '#101320',
						title: 'Activity card background',
						hint: 'Server settings > Discovery (https://i.imgur.com/TEN3OJ2.png)'
					}
				}
			]
		},
		{
			title: 'Others',
			icon: 'Gear',
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
						title: 'User button color',
						hint: 'Setting/Deafen/Mute buttons'
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
							{ label: 'True', value: 'block' },
							{ label: 'False', value: 'none' }
						],
						customValue: false,
						value: 'none',
						title: 'Display Discord logo',
						hint: 'Display or not Discord watermark on the top left'
					}
				}
			]
		}
	],
	hiddenVars: [
		{
			variable: 'colored-emoji',
			value: 'grayscale(0%)'
		},
		{
			variable: 'disable-animations',
			value: '2s channel-unread infinite'
		},
		{
			variable: 'background-primary',
			value: '#23283D',
			varGroup: '.theme-light'
		},
		{
			variable: 'background-secondary',
			value: '#1E2233',
			varGroup: '.theme-light'
		},
		{
			variable: 'background-secondary-alt',
			value: '#191F2E',
			varGroup: '.theme-light'
		},
		{
			variable: 'background-tertiary',
			value: '#101320',
			varGroup: '.theme-light'
		},
		{
			variable: 'background-accent',
			value: '#7289DA',
			varGroup: '.theme-light'
		},
		{
			variable: 'background-modifier-hover',
			value: '#262B41',
			varGroup: '.theme-light'
		},
		{
			variable: 'background-modifier-active',
			value: '#262B41',
			varGroup: '.theme-light'
		},
		{
			variable: 'header-primary',
			value: '#fff',
			varGroup: '.theme-light'
		},
		{
			variable: 'header-secondary',
			value: '#B1B5B9',
			varGroup: '.theme-light'
		},
		{
			variable: 'text-normal',
			value: '#8E9297',
			varGroup: '.theme-light'
		},
		{
			variable: 'background-message-hover',
			value: 'transparent',
			varGroup: '.theme-dark'
		},
		{
			variable: 'elevation-low',
			value: 'none',
			varGroup: '.theme-dark'
		}
	],
	addons: ['discolored']
};

export default theme;
