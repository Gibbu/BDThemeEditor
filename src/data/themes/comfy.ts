import type { Theme } from '$types/theme';
import Nyria from '../devs/nyria';
import { discolored } from '../addons';

const theme: Theme = {
	name: 'Comfy',
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
	preview: `
		@import "https://comfy-themes.github.io/Discord/betterdiscord/main.css";
		:root {
			--disable-animations: 2s channel-unread infinite;
			--user-buttons-spacing: 8px;
			--user-buttons-color: #096dc0;
			--avatar-radius: 5px;
			--status-radius: 3px;
			--server-radius: 8px;
			--colored-emoji: grayscale(0%);
			--mention-color: #f04747;
			--unread-color: #7289da;
			--mention-color-bar: #c66262;
			--mention-color-background: #c662621f;
			--mention-color-hover: #c6626226;
			--chat-buttons: #7289da;
			--spotify-color: #1edc62;
			--online: #43b581;
			--iddle: #faa61a;
			--dnd: #f04747;
			--offline: #747f8d;
			--streaming: #593695;
			--playing: #7289da;
			--listening: #1db653;
			--role-circle: 5px;
			--discord-logo: none;
		}
		.theme-dark {
			--background-primary: #23283d;
			--background-secondary: #1e2233;
			--background-secondary-alt: #191f2e;
			--background-tertiary: #101320;
			--background-mobile-primary: #23283d;
			--background-mobile-secondary: #1e2233;
			--channeltextarea-background: #191f2e;
			--background-accent: #7289da;
			--background-message-hover: transparent;
			--background-modifier-hover: #00000010;
			--background-modifier-active: #0000001a;
			--background-modifier-selected: #0000001f;
			--deprecated-card-bg: #12141f63;
			--background-floating: #101320;
			--deprecated-quickswitcher-input-background: #101320;
			--elevation-low: none;
			--scrollbar-auto-thumb: #121722;
			--scrollbar-auto-track: #191f2e;
			--scrollbar-thin-thumb: #141925;
			--activity-card-background: #101320;
			--input-background: #1e2233;
		}
		.theme-light {
			--background-primary: #23283d;
			--background-secondary: #1e2233;
			--background-secondary-alt: #191f2e;
			--background-tertiary: #101320;
			--background-accent: #7289da;
			--background-modifier-hover: #262b41;
			--background-modifier-active: #262b41;
			--header-primary: #fff;
			--header-secondary: #b1b5b9;
			--text-normal: #8e9297;
		}
	`,
	features: ['solid', 'addons'],
	imports: ['https://comfy-themes.github.io/Discord/betterdiscord/main.css'],
	optionalImports: [
		{
			name: 'No scrollbars',
			description: 'Removes scrollbars',
			imports: ['https://comfy-themes.github.io/Discord/betterdiscord/no-scrollbar.css'],
			enabled: true
		},
		{
			name: 'Better SpotifyControls seek bar',
			description: 'Transforms the seek bar to cover the whole background. Requires SpotifyControls by DevilBro',
			imports: ['https://comfy-themes.github.io/Discord/betterdiscord/better-spotify.css'],
			enabled: true
		}
	],
	fonts: [],
	varGroups: ['.theme-dark', '.theme-light'],
	variables: [
		{
			title: 'Colours',
			icon: 'Swatch',
			inputs: [
				{
					type: 'colour',
					props: {
						variable: 'mention-color-bar',
						type: 'HEX',
						value: '#C66262',
						title: 'Mention color bar',
						hint: 'Bar on the left of a mention in chat'
					}
				},
				{
					type: 'colour',
					props: {
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
					props: {
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
					props: {
						variable: 'mention-color',
						type: 'HEX',
						value: '#F04747',
						title: 'Mention color',
						hint: 'Mentions in server/channel list'
					}
				},
				{
					type: 'colour',
					props: {
						variable: 'unread-color',
						type: 'HEX',
						value: '#7289DA',
						title: 'Unread messages',
						hint: 'Unread pill in server/channel list'
					}
				},
				{
					type: 'colour',
					props: {
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
			icon: 'AdjustmentsHorizontal',
			inputs: [
				{
					type: 'slider',
					props: {
						variable: 'avatar-radius',
						value: 5,
						unit: 'px',
						max: 25,
						title: 'Avatar roundess'
					}
				},
				{
					type: 'slider',
					props: {
						variable: 'status-radius',
						value: 3,
						unit: 'px',
						max: 10,
						title: 'Status roundess'
					}
				},
				{
					type: 'slider',
					props: {
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
			icon: 'Rss',
			inputs: [
				{
					type: 'image',
					props: {
						variable: 'status-background',
						start: 'https://i.imgur.com/ODa8LKK.jpg',
						value: '',
						title: 'Status Picker Background'
					}
				},
				{
					type: 'colour',
					props: {
						variable: 'online',
						type: 'HEX',
						value: '#43B581',
						title: 'Online'
					}
				},
				{
					type: 'colour',
					props: {
						variable: 'iddle',
						type: 'HEX',
						value: '#FAA61A',
						title: 'Idle'
					}
				},
				{
					type: 'colour',
					props: {
						variable: 'dnd',
						type: 'HEX',
						value: '#F04747',
						title: 'DND / Do not disturb'
					}
				},
				{
					type: 'colour',
					props: {
						variable: 'offline',
						type: 'HEX',
						value: '#747F8D',
						title: 'Offline'
					}
				},
				{
					type: 'colour',
					props: {
						variable: 'streaming',
						type: 'HEX',
						value: '#593695',
						title: 'Streaming'
					}
				},
				{
					type: 'colour',
					props: {
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
					props: {
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
					props: {
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
					props: {
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
					props: {
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
					props: {
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
					props: {
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
					props: {
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
					props: {
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
					props: {
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
					props: {
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
					props: {
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
					props: {
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
					props: {
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
					props: {
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
					props: {
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
					props: {
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
					props: {
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
					props: {
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
			icon: 'Cog6Tooth',
			inputs: [
				{
					type: 'number',
					props: {
						variable: 'user-buttons-spacing',
						value: 8,
						unit: 'px',
						title: 'User button spacing',
						hint: 'Spacing between each button in the bottom left.'
					}
				},
				{
					type: 'colour',
					props: {
						variable: 'user-buttons-color',
						type: 'HEX',
						value: '#096DC0',
						title: 'User button color',
						hint: 'Setting/Deafen/Mute buttons'
					}
				},
				{
					type: 'slider',
					props: {
						variable: 'role-circle',
						value: 10,
						unit: 'px',
						max: 20,
						title: 'Role circle size'
					}
				},
				{
					type: 'select',
					props: {
						variable: 'discord-logo',
						options: [
							{ label: 'True', value: 'block' },
							{ label: 'False', value: 'none' }
						],
						custom: false,
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
	addons: [discolored]
};

export default theme;
