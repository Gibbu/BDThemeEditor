import type { ITheme } from '$types/theme';
import ClearVision from '$data/devs/clearvision';

const theme: ITheme = {
	name: 'Clear Vision',
	previewUrls: ['https://cdn.jsdelivr.net/gh/ClearVision/ClearVision-v6/ClearVision_v6.theme.css'],
	thumbnail: 'https://raw.githubusercontent.com/ClearVision/ClearVision-v6/master/screenshots/6-stable.4.7.9.png',
	developer: ClearVision,
	meta: {
		name: 'ClearVision',
		author: 'ClearVision Team',
		version: '6.3.0',
		description: 'Highly customizable and beautiful theme for BetterDiscord.',
		source: 'https://github.com/ClearVision/ClearVision-v6',
		website: 'https://clearvision.github.io',
		invite: '7pNUC9C'
	},
	imports: ['https://clearvision.github.io/ClearVision-v6/main.css'],
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
			icon: 'Image',
			inputs: [
				{
					type: 'image',
					details: {
						variable: 'background-image',
						start: 'https://clearvision.github.io/images/sapphire.jpg',
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
						title: 'Position'
					}
				},
				{
					type: 'select',
					details: {
						variable: 'background-size',
						value: 'cover',
						options: [
							{ label: 'Cover', value: 'cover' },
							{ label: 'Contain', value: 'contain' },
							{ label: 'Auto', value: 'auto' },
							{ label: '100%', value: '100%' },
							{ label: '150%', value: '150%' },
							{ label: '200%', value: '200%' }
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
							{ label: 'True', value: 'repeat' },
							{ label: 'False', value: 'no-repeat' }
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
							{ label: 'True', value: 'fixed' },
							{ label: 'False', value: 'scroll' }
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
				}
			]
		},
		{
			title: 'User popout',
			icon: 'Image',
			inputs: [
				{
					type: 'image',
					details: {
						variable: 'user-popout-image',
						start: 'https://clearvision.github.io/images/sapphire.jpg',
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
						title: 'Position'
					}
				},
				{
					type: 'select',
					details: {
						variable: 'user-popout-size',
						value: 'cover',
						options: [
							{ label: 'Cover', value: 'cover' },
							{ label: 'Contain', value: 'contain' },
							{ label: 'Auto', value: 'auto' },
							{ label: '100%', value: '100%' },
							{ label: '150%', value: '150%' },
							{ label: '200%', value: '200%' }
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
							{ label: 'True', value: 'repeat' },
							{ label: 'False', value: 'no-repeat' }
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
							{ label: 'True', value: 'fixed' },
							{ label: 'False', value: 'scroll' }
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
			icon: 'Person',
			userModal: true,
			inputs: [
				{
					type: 'image',
					details: {
						variable: 'user-modal-image',
						start: 'https://clearvision.github.io/images/sapphire.jpg',
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
						title: 'Position'
					}
				},
				{
					type: 'select',
					details: {
						variable: 'user-modal-size',
						value: 'cover',
						options: [
							{ label: 'Cover', value: 'cover' },
							{ label: 'Contain', value: 'contain' },
							{ label: 'Auto', value: 'auto' },
							{ label: '100%', value: '100%' },
							{ label: '150%', value: '150%' },
							{ label: '200%', value: '200%' }
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
							{ label: 'True', value: 'repeat' },
							{ label: 'False', value: 'no-repeat' }
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
							{ label: 'True', value: 'fixed' },
							{ label: 'False', value: 'scroll' }
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
						start: 'https://clearvision.github.io/icons/discord.svg',
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
							{ label: 'Top left', value: 'top left' },
							{ label: 'Top centre', value: 'top center' },
							{ label: 'Top right', value: 'top right' },
							{ label: 'Centre', value: 'center' },
							{ label: 'Bottom right', value: 'bottom right' },
							{ label: 'Bottom centre', value: 'bottom center' },
							{ label: 'Bottom left', value: 'bottom left' }
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
			icon: 'List',
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
						variable: 'muted-color',
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
			icon: 'Status',
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
			icon: 'Font',
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
			icon: 'Gear',
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
	addons: ['rs', 'columns', 'hsl', 'discolored']
};

export default theme;
