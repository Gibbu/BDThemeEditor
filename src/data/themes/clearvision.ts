import type {ITheme} from '$types/theme';
import ClearVision from '$data/devs/clearvision';

const theme: ITheme = {
	name: 'Clear Vision',
	previewUrl: 'https://clearvision.github.io/ClearVision-v6/ClearVision_v6.theme.css',
	thumbnail: 'https://raw.githubusercontent.com/ClearVision/ClearVision-v6/master/screenshots/6-stable.4.7.9.png',
	developers: [ClearVision],
	tags: ['Background Image', 'Colours', 'Home Button', 'Custom Font', 'Addons'],
	meta: {
		name: 'ClearVision',
		author: 'ClearVision Team',
		version: '6.1.1',
		description: 'Highly customizable and beautiful theme for BetterDiscord.',
		source: 'https://github.com/ClearVision/ClearVision-v6',
		website: 'https://clearvision.gitlab.io',
		invite: 'dHaSxn3'
	},
	imports: ['https://clearvision.gitlab.io/v6/main.css'],
	fonts: [],
	variables: [
		{
			title: 'Colours',
			icon: 'ColorSwatch',
			inputs: [
				{
					type: 'colour',
					details: {
						variable: 'main-color',
						value: '#2780e6',
						type: 'HEX',
						title: 'Main accent colour'
					}
				},
				{
					type: 'colour',
					details: {
						variable: 'hover-color',
						value: '#1e63b3',
						type: 'HEX',
						title: 'Hover accent color',
						hint: 'Usually darker than Main accent colour'
					}
				},
				{
					type: 'colour',
					details: {
						variable: 'success-color',
						value: '#43b581',
						type: 'HEX',
						title: 'Success accent colour'
					}
				},
				{
					type: 'colour',
					details: {
						variable: 'danger-color',
						value: '#982929',
						type: 'HEX',
						title: 'Danger accent colour'
					}
				},
				{
					type: 'colour',
					details: {
						variable: 'url-color',
						value: 'var(--main-color)',
						type: 'HEX',
						title: 'Url link colour'
					}
				}
			]
		},
		{
			title: 'App background',
			icon: 'Photograph',
			inputs: [
				{
					type: 'image',
					details: {
						variable: 'background-image',
						start: 'https://clearvision.gitlab.io/images/sapphire.jpg',
						value: '',
						title: 'App background image'
					}
				},
				{
					type: 'slider',
					details: {
						variable: 'background-shading',
						value: 100,
						unit: '%',
						max: 100,
						step: 1,
						title: 'Shading'
					}
				},
				{
					type: 'select',
					details: {
						variable: 'background-position',
						value: 'center',
						options: [
							{title: 'Top left', value: 'top left'},
							{title: 'Top centre', value: 'top center'},
							{title: 'Top right', value: 'top right'},
							{title: 'Centre left', value: 'center left'},
							{title: 'Centre', value: 'center'},
							{title: 'Centre right', value: 'center right'},
							{title: 'Bottom left', value: 'Bottom left'},
							{title: 'Bottom centre', value: 'Bottom center'},
							{title: 'Bottom right', value: 'bottom right'}
						],
						title: 'Position'
					}
				},
				{
					type: 'select',
					details: {
						variable: 'background-size',
						value: 'cover',
						options: [
							{title: 'Cover', value: 'cover'},
							{title: 'Contain', value: 'contain'},
							{title: 'Auto', value: 'auto'},
							{title: '100%', value: '100%'},
							{title: '150%', value: '150%'},
							{title: '200%', value: '200%'}
						],
						title: 'Size'
					}
				},
				{
					type: 'select',
					details: {
						variable: 'background-repeat',
						customValue: false,
						value: 'no-repeat',
						options: [
							{title: 'True', value: 'repeat'},
							{title: 'False', value: 'no-repeat'}
						],
						title: 'Repeat'
					}
				},
				{
					type: 'select',
					details: {
						variable: 'background-attachment',
						customValue: false,
						value: 'fixed',
						options: [
							{title: 'True', value: 'fixed'},
							{title: 'False', value: 'scroll'}
						],
						title: 'Fixed attachment'
					}
				},
				{
					type: 'slider',
					details: {
						variable: 'background-brightness',
						value: 100,
						unit: '%',
						min: 0,
						max: 300,
						step: 1,
						title: 'Brightness'
					}
				},
				{
					type: 'slider',
					details: {
						variable: 'background-contrast',
						value: 100,
						unit: '%',
						min: 100,
						max: 300,
						step: 1,
						title: 'Constrast'
					}
				},
				{
					type: 'slider',
					details: {
						variable: 'background-saturation',
						value: 100,
						unit: '%',
						min: 100,
						max: 300,
						step: 1,
						title: 'Saturation'
					}
				},
				{
					type: 'slider',
					details: {
						variable: 'background-grayscale',
						value: 0,
						unit: '%',
						max: 100,
						step: 1,
						title: 'Grayscale'
					}
				},
				{
					type: 'slider',
					details: {
						variable: 'background-invert',
						value: 0,
						unit: '%',
						max: 100,
						step: 1,
						title: 'Invert'
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
						title: 'Blur'
					}
				},
				{
					type: 'colour',
					details: {
						variable: 'background-overlay',
						value: 'rgba(0,0,0,0.6)',
						type: 'RGB',
						alpha: true,
						rule: true,
						title: 'Overlay colour'
					}
				},
			]
		},
		{
			title: 'User popout',
			icon: 'Photograph',
			inputs: [
				{
					type: 'image',
					details: {
						variable: 'user-popout-image',
						start: 'https://clearvision.gitlab.io/images/sapphire.jpg',
						value: '',
						title: 'User popout image'
					}
				},
				{
					type: 'select',
					details: {
						variable: 'user-popout-position',
						value: 'center',
						options: [
							{title: 'Top left', value: 'top left'},
							{title: 'Top centre', value: 'top center'},
							{title: 'Top right', value: 'top right'},
							{title: 'Centre left', value: 'center left'},
							{title: 'Centre', value: 'center'},
							{title: 'Centre right', value: 'center right'},
							{title: 'Bottom left', value: 'Bottom left'},
							{title: 'Bottom centre', value: 'Bottom center'},
							{title: 'Bottom right', value: 'bottom right'}
						],
						title: 'Position'
					}
				},
				{
					type: 'select',
					details: {
						variable: 'user-popout-size',
						value: 'cover',
						options: [
							{title: 'Cover', value: 'cover'},
							{title: 'Contain', value: 'contain'},
							{title: 'Auto', value: 'auto'},
							{title: '100%', value: '100%'},
							{title: '150%', value: '150%'},
							{title: '200%', value: '200%'}
						],
						title: 'Size'
					}
				},
				{
					type: 'select',
					details: {
						variable: 'user-popout-repeat',
						customValue: false,
						value: 'no-repeat',
						options: [
							{title: 'True', value: 'repeat'},
							{title: 'False', value: 'no-repeat'}
						],
						title: 'Repeat'
					}
				},
				{
					type: 'select',
					details: {
						variable: 'user-popout-attachment',
						customValue: false,
						value: 'fixed',
						options: [
							{title: 'True', value: 'fixed'},
							{title: 'False', value: 'scroll'}
						],
						title: 'Fixed attachment'
					}
				},
				{
					type: 'slider',
					details: {
						variable: 'user-popout-brightness',
						value: 100,
						unit: '%',
						min: 0,
						max: 300,
						step: 1,
						title: 'Brightness'
					}
				},
				{
					type: 'slider',
					details: {
						variable: 'user-popout-contrast',
						value: 100,
						unit: '%',
						min: 100,
						max: 300,
						step: 1,
						title: 'Constrast'
					}
				},
				{
					type: 'slider',
					details: {
						variable: 'user-popout-saturation',
						value: 100,
						unit: '%',
						min: 100,
						max: 300,
						step: 1,
						title: 'Saturation'
					}
				},
				{
					type: 'slider',
					details: {
						variable: 'user-popout-grayscale',
						value: 0,
						unit: '%',
						max: 100,
						step: 1,
						title: 'Grayscale'
					}
				},
				{
					type: 'slider',
					details: {
						variable: 'user-popout-invert',
						value: 0,
						unit: '%',
						max: 100,
						step: 1,
						title: 'Invert'
					}
				},
				{
					type: 'slider',
					details: {
						variable: 'user-popout-blur',
						value: 3,
						unit: 'px',
						max: 25,
						step: 1,
						title: 'Blur'
					}
				}
			]
		},
		{
			title: 'User profile',
			icon: 'User',
			modal: true,
			inputs: [
				{
					type: 'image',
					details: {
						variable: 'user-modal-image',
						start: 'https://clearvision.gitlab.io/images/sapphire.jpg',
						value: '',
						title: 'User profile image'
					}
				},
				{
					type: 'select',
					details: {
						variable: 'user-modal-position',
						value: 'center',
						options: [
							{title: 'Top left', value: 'top left'},
							{title: 'Top centre', value: 'top center'},
							{title: 'Top right', value: 'top right'},
							{title: 'Centre left', value: 'center left'},
							{title: 'Centre', value: 'center'},
							{title: 'Centre right', value: 'center right'},
							{title: 'Bottom left', value: 'Bottom left'},
							{title: 'Bottom centre', value: 'Bottom center'},
							{title: 'Bottom right', value: 'bottom right'}
						],
						title: 'Position'
					}
				},
				{
					type: 'select',
					details: {
						variable: 'user-modal-size',
						value: 'cover',
						options: [
							{title: 'Cover', value: 'cover'},
							{title: 'Contain', value: 'contain'},
							{title: 'Auto', value: 'auto'},
							{title: '100%', value: '100%'},
							{title: '150%', value: '150%'},
							{title: '200%', value: '200%'}
						],
						title: 'Size'
					}
				},
				{
					type: 'select',
					details: {
						variable: 'user-modal-repeat',
						customValue: false,
						value: 'no-repeat',
						options: [
							{title: 'True', value: 'repeat'},
							{title: 'False', value: 'no-repeat'}
						],
						title: 'Repeat'
					}
				},
				{
					type: 'select',
					details: {
						variable: 'user-modal-attachment',
						customValue: false,
						value: 'fixed',
						options: [
							{title: 'True', value: 'fixed'},
							{title: 'False', value: 'scroll'}
						],
						title: 'Fixed attachment'
					}
				},
				{
					type: 'slider',
					details: {
						variable: 'user-modal-brightness',
						value: 100,
						unit: '%',
						min: 0,
						max: 300,
						step: 1,
						title: 'Brightness'
					}
				},
				{
					type: 'slider',
					details: {
						variable: 'user-modal-contrast',
						value: 100,
						unit: '%',
						min: 100,
						max: 300,
						step: 1,
						title: 'Constrast'
					}
				},
				{
					type: 'slider',
					details: {
						variable: 'user-modal-saturation',
						value: 100,
						unit: '%',
						min: 100,
						max: 300,
						step: 1,
						title: 'Saturation'
					}
				},
				{
					type: 'slider',
					details: {
						variable: 'user-modal-grayscale',
						value: 0,
						unit: '%',
						max: 100,
						step: 1,
						title: 'Grayscale'
					}
				},
				{
					type: 'slider',
					details: {
						variable: 'user-modal-invert',
						value: 0,
						unit: '%',
						max: 100,
						step: 1,
						title: 'Invert'
					}
				},
				{
					type: 'slider',
					details: {
						variable: 'user-modal-blur',
						value: 3,
						unit: 'px',
						max: 25,
						step: 1,
						title: 'Blur'
					}
				}
			]
		},
		{
			title: 'Home button icon',
			icon: 'Home',
			inputs: [
				{
					type: 'image',
					details: {
						variable: 'home-icon',
						start: 'https://clearvision.gitlab.io/icons/discord.svg',
						value: '',
						title: 'Home button image'
					}
				},
				{
					type: 'select',
					details: {
						variable: 'home-position',
						value: 'center',
						options: [
							{title: 'Top left', value: 'top left'},
							{title: 'Top centre', value: 'top center'},
							{title: 'Top right', value: 'top right'},
							{title: 'Centre', value: 'center'},
							{title: 'Bottom right', value: 'bottom right'},
							{title: 'Bottom centre', value: 'bottom center'},
							{title: 'Bottom left', value: 'bottom left'}
						],
						title: 'Position'
					}
				},
				{
					type: 'number',
					details: {
						variable: 'home-size',
						value: 40,
						unit: 'px',
						title: 'Size'
					}
				}
			]
		},
		{
			title: 'Channel colours',
			icon: 'Server',
			inputs: [
				{
					type: 'colour',
					details: {
						variable: 'channel-unread',
						value: 'var(--main-color)',
						type: 'HEX',
						title: 'Unread channel colour'
					}
				},
				{
					type: 'colour',
					details: {
						variable: 'channel-color',
						value: 'rgba(255,255,255,0.3)',
						type: 'RGB',
						rule: true,
						alpha: true,
						title: 'Channel colour'
					}
				},
				{
					type: 'colour',
					details: {
						variable: 'channel-color',
						value: 'rgba(255,255,255,0.1)',
						type: 'RGB',
						rule: true,
						alpha: true,
						title: 'Muted colour'
					}
				}
			]
		},
		{
			title: 'Status colours',
			icon: 'Globe',
			inputs: [
				{
					type: 'colour',
					details: {
						variable: 'online-color',
						value: '#43b581',
						type: 'HEX',
						title: 'Online status color'
					}
				},
				{
					type: 'colour',
					details: {
						variable: 'idle-color',
						value: '#faa61a',
						type: 'HEX',
						title: 'Idle status color'
					}
				},
				{
					type: 'colour',
					details: {
						variable: 'dnd-color',
						value: '#982929',
						type: 'HEX',
						title: 'Do not Disturb status color'
					}
				},
				{
					type: 'colour',
					details: {
						variable: 'streaming-color',
						value: '#593695',
						type: 'HEX',
						title: 'Streaming status color'
					}
				},
				{
					type: 'colour',
					details: {
						variable: 'offline-color',
						value: '#808080',
						type: 'HEX',
						title: 'Offline status color'
					}
				}
			]
		},
		{
			title: 'Custom fonts',
			icon: 'MenuAlt1',
			inputs: [
				{
					type: 'font',
					details: {
						variable: 'main-font',
						value: 'Whitney',
						index: 0,
						title: 'Main font'
					}
				},
				{
					type: 'font',
					details: {
						variable: 'code-font',
						value: 'Consolas',
						index: 1,
						title: 'Code font'
					}
				}
			]
		},
		{
			title: 'Others',
			icon: 'Cog',
			inputs: [
				{
					type: 'number',
					details: {
						variable: 'channels-width',
						value: 220,
						unit: 'px',
						title: 'Channels width'
					}
				},
				{
					type: 'number',
					details: {
						variable: 'members-width',
						value: 240,
						unit: 'px',
						title: 'Members list width'
					}
				}
			]
		}
	],
	hiddenVars: [
		{
			variable: 'backdrop-overlay',
			value: 'rgba(0,0,0,0.8)'
		},
		{
			variable: 'backdrop-image',
			value: 'var(--background-image)'
		},
		{
			variable: 'backdrop-position',
			value: 'var(--background-position)'
		},
		{
			variable: 'backdrop-size',
			value: 'var(--background-size)'
		},
		{
			variable: 'backdrop-repeat',
			value: 'var(--background-repeat)'
		},
		{
			variable: 'backdrop-attachment',
			value: 'var(--background-attachment)'
		},
		{
			variable: 'backdrop-brightness',
			value: 'var(--background-brightness)'
		},
		{
			variable: 'backdrop-contrast',
			value: 'var(--background-contrast)'
		},
		{
			variable: 'backdrop-saturation',
			value: 'var(--background-saturation)'
		},
		{
			variable: 'backdrop-invert',
			value: 'var(--background-invert)'
		},
		{
			variable: 'backdrop-grayscale',
			value: 'var(--background-grayscale)'
		},
		{
			variable: 'backdrop-sepia',
			value: 'var(--background-sepia)'
		},
		{
			variable: 'backdrop-blur',
			value: 'var(--background-blur)'
		},
		{
			variable: 'bd-blue',
			value: 'var(--main-color)'
		},
		{
			variable: 'bd-blue-hover',
			value: 'var(--hover-color)'
		},
		{
			variable: 'bd-blue-active',
			value: 'var(--hover-color)'
		}
	],
	addons: ['rs', 'columns', 'hsl']
}

export default theme;