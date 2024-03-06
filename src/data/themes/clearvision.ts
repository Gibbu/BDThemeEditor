import type { Theme } from '$types/theme';
import ClearVision from '../devs/clearvision';
import { hsl, columns, radialstatus, discolored } from '../addons';

const theme: Theme = {
	name: 'Clear Vision',
	thumbnail: 'https://i.imgur.com/U7UXrEN.png',
	developer: ClearVision,
	meta: {
		name: 'ClearVision',
		author: 'ClearVision Team',
		version: '6.9.0',
		description: 'Highly customizable and beautiful theme for BetterDiscord.',
		source: 'https://github.com/ClearVision/ClearVision-v6',
		website: 'https://clearvision.github.io',
		invite: 'dHaSxn3'
	},
	preview: `
		@import url(https://clearvision.github.io/ClearVision-v6/main.css);
		:root {
			--main-color: #2780e6;
			--hover-color: #1e63b3;
			--success-color: #43b581;
			--danger-color: #982929;
			--url-color: var(--main-color);
			--online-color: #43b581;
			--idle-color: #faa61a;
			--dnd-color: #982929;
			--streaming-color: #593695;
			--offline-color: #808080;
			--main-font: gg sans, Helvetica Neue, Helvetica, Arial, sans-serif;
			--code-font: Consolas, Liberation Mono, Menlo, Courier, monospace;
			--text-normal: rgb(220, 221, 222);
			--text-muted: rgb(114, 118, 125);
			--channels-width: 220px;
			--members-width: 240px;
			--background-shading: 100%;
			--background-overlay: rgba(0, 0, 0, 0.6);
			--background-image: url(https://clearvision.github.io/images/sapphire.jpg);
			--background-position: center;
			--background-size: cover;
			--background-repeat: no-repeat;
			--background-attachment: fixed;
			--background-brightness: 100%;
			--background-contrast: 100%;
			--background-saturation: 100%;
			--background-invert: 0%;
			--background-grayscale: 0%;
			--background-sepia: 0%;
			--background-blur: 0px;
			--home-icon: url(https://clearvision.github.io/icons/discord.svg);
			--home-position: center;
			--home-size: 40px;
			--channel-unread: var(--main-color);
			--channel-color: rgba(255, 255, 255, 0.3);
			--channel-text-selected: #fff;
			--muted-color: rgba(255, 255, 255, 0.1);
			--backdrop-overlay: rgba(0, 0, 0, 0.8);
			--backdrop-image: var(--background-image);
			--backdrop-position: var(--background-position);
			--backdrop-size: var(--background-size);
			--backdrop-repeat: var(--background-repeat);
			--backdrop-attachment: var(--background-attachment);
			--backdrop-brightness: var(--background-brightness);
			--backdrop-contrast: var(--background-contrast);
			--backdrop-saturation: var(--background-saturation);
			--backdrop-invert: var(--background-invert);
			--backdrop-grayscale: var(--background-grayscale);
			--backdrop-sepia: var(--background-sepia);
			--backdrop-blur: var(--background-blur);
			--user-popout-image: var(--background-image);
			--user-popout-position: var(--background-position);
			--user-popout-size: var(--background-size);
			--user-popout-repeat: var(--background-repeat);
			--user-popout-attachment: var(--background-attachment);
			--user-popout-brightness: var(--background-brightness);
			--user-popout-contrast: var(--background-contrast);
			--user-popout-saturation: var(--background-saturation);
			--user-popout-invert: var(--background-invert);
			--user-popout-grayscale: var(--background-grayscale);
			--user-popout-sepia: var(--background-sepia);
			--user-popout-blur: calc(var(--background-blur) + 3px);
			--user-popout-overlay: rgba(0, 0, 0, 0.6);
			--user-modal-image: var(--background-image);
			--user-modal-position: var(--background-position);
			--user-modal-size: var(--background-size);
			--user-modal-repeat: var(--background-repeat);
			--user-modal-attachment: var(--background-attachment);
			--user-modal-brightness: var(--background-brightness);
			--user-modal-contrast: var(--background-contrast);
			--user-modal-saturation: var(--background-saturation);
			--user-modal-invert: var(--background-invert);
			--user-modal-grayscale: var(--background-grayscale);
			--user-modal-sepia: var(--background-sepia);
			--user-modal-blur: calc(var(--background-blur) + 3px);
			--bd-blue: var(--main-color);
			--bd-blue-hover: var(--hover-color);
			--bd-blue-active: var(--hover-color);
		}
	`,
	features: ['background', 'transparent', 'addons', 'font', 'home'],
	imports: ['https://clearvision.github.io/ClearVision-v6/main.css'],
	fonts: [],
	variables: [
		{
			title: 'Colours',
			icon: 'Swatch',
			inputs: [
				{
					type: 'colour',
					props: {
						variable: 'main-color',
						value: '#2780e6',
						type: 'HEX',
						title: 'Main accent colour'
					}
				},
				{
					type: 'colour',
					props: {
						variable: 'hover-color',
						value: '#1e63b3',
						type: 'HEX',
						title: 'Hover accent color',
						hint: 'Usually darker than Main accent colour'
					}
				},
				{
					type: 'colour',
					props: {
						variable: 'success-color',
						value: '#43b581',
						type: 'HEX',
						title: 'Success accent colour'
					}
				},
				{
					type: 'colour',
					props: {
						variable: 'danger-color',
						value: '#982929',
						type: 'HEX',
						title: 'Danger accent colour'
					}
				},
				{
					type: 'colour',
					props: {
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
			icon: 'Photo',
			inputs: [
				{
					type: 'banner',
					props: {
						id: 'cv-transparency-window',
						type: 'warning',
						message:
							'ClearVision requires aditional steps to achieve a see through window. Join their <a href="https://discord.gg/673e2sqBzd" rel="noopener noreferrer">Discord Server</a> for help.',
						closable: true
					}
				},
				{
					type: 'image',
					props: {
						variable: 'background-image',
						start: 'https://clearvision.github.io/images/sapphire.jpg',
						value: '',
						title: 'Image'
					}
				},
				{
					type: 'slider',
					props: {
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
					props: {
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
						custom: true,
						title: 'Position'
					}
				},
				{
					type: 'select',
					props: {
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
						custom: true,
						title: 'Size'
					}
				},
				{
					type: 'select',
					props: {
						variable: 'background-repeat',
						custom: false,
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
					props: {
						variable: 'background-attachment',
						custom: false,
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
					props: {
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
					props: {
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
					props: {
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
					props: {
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
					props: {
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
					props: {
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
					props: {
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
			icon: 'Photo',
			inputs: [
				{
					type: 'image',
					props: {
						variable: 'user-popout-image',
						start: 'https://clearvision.github.io/images/sapphire.jpg',
						value: '',
						title: 'Image'
					}
				},
				{
					type: 'select',
					props: {
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
						custom: true,
						title: 'Position'
					}
				},
				{
					type: 'select',
					props: {
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
						custom: true,
						title: 'Size'
					}
				},
				{
					type: 'select',
					props: {
						variable: 'user-popout-repeat',
						custom: false,
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
					props: {
						variable: 'user-popout-attachment',
						custom: false,
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
					props: {
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
					props: {
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
					props: {
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
					props: {
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
					props: {
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
					props: {
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
			userModal: true,
			inputs: [
				{
					type: 'image',
					props: {
						variable: 'user-modal-image',
						start: 'https://clearvision.github.io/images/sapphire.jpg',
						value: '',
						title: 'Image'
					}
				},
				{
					type: 'select',
					props: {
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
						custom: true,
						title: 'Position'
					}
				},
				{
					type: 'select',
					props: {
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
						custom: true,
						title: 'Size'
					}
				},
				{
					type: 'select',
					props: {
						variable: 'user-modal-repeat',
						custom: false,
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
					props: {
						variable: 'user-modal-attachment',
						custom: false,
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
					props: {
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
					props: {
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
					props: {
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
					props: {
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
					props: {
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
					props: {
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
					props: {
						variable: 'home-icon',
						start: 'https://clearvision.github.io/icons/discord.svg',
						value: '',
						title: 'Home button image'
					}
				},
				{
					type: 'select',
					props: {
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
						custom: true,
						title: 'Position'
					}
				},
				{
					type: 'number',
					props: {
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
			icon: 'ListBullet',
			inputs: [
				{
					type: 'colour',
					props: {
						variable: 'channel-unread',
						value: 'var(--main-color)',
						type: 'HEX',
						title: 'Unread channel colour'
					}
				},
				{
					type: 'colour',
					props: {
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
					props: {
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
			icon: 'Cog6Tooth',
			inputs: [
				{
					type: 'colour',
					props: {
						variable: 'online-color',
						value: '#43b581',
						type: 'HEX',
						title: 'Online status color'
					}
				},
				{
					type: 'colour',
					props: {
						variable: 'idle-color',
						value: '#faa61a',
						type: 'HEX',
						title: 'Idle status color'
					}
				},
				{
					type: 'colour',
					props: {
						variable: 'dnd-color',
						value: '#982929',
						type: 'HEX',
						title: 'Do not Disturb status color'
					}
				},
				{
					type: 'colour',
					props: {
						variable: 'streaming-color',
						value: '#593695',
						type: 'HEX',
						title: 'Streaming status color'
					}
				},
				{
					type: 'colour',
					props: {
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
			icon: 'ChatBubbleBottomCenterText',
			inputs: [
				{
					type: 'font',
					props: {
						variable: 'main-font',
						value: 'gg sans',
						index: 0,
						title: 'Main font'
					}
				},
				{
					type: 'font',
					props: {
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
			icon: 'Cog6Tooth',
			inputs: [
				{
					type: 'number',
					props: {
						variable: 'channels-width',
						value: 220,
						unit: 'px',
						title: 'Channels width'
					}
				},
				{
					type: 'number',
					props: {
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
	addons: [radialstatus, hsl, columns, discolored]
};

export default theme;
