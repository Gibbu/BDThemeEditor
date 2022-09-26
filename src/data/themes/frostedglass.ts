import type { ITheme } from '$types/theme';
import Gibbu from '$data/devs/gibbu';

const theme: ITheme = {
	name: 'Frosted Glass',
	previewUrls: ['https://discordstyles.github.io/FrostedGlass/FrostedGlass.theme.css'],
	thumbnail: 'https://i.imgur.com/Gr8JJAv.jpg',
	developer: Gibbu,
	meta: {
		name: 'Frosted Glass',
		author: 'Gibbu#1211',
		version: '2.0.0',
		description: 'Display your picture of choice with adjustable blur and brightness.',
		source: 'https://github.com/DiscordStyles/FrostedGlass',
		invite: 'ZHthyCw',
		donate: 'https://paypal.me/IanRGibson',
		website: 'https://gibbu.me',
		authorId: '174868361040232448'
	},
	imports: [
		'https://discordstyles.github.io/FrostedGlass/dist/FrostedGlass.css',
		'https://discordstyles.github.io/Addons/windows-titlebar.css'
	],
	fonts: [],
	variables: [
		{
			title: 'Main background',
			icon: 'Image',
			inputs: [
				{
					type: 'image',
					details: {
						variable: 'background-image',
						start: 'https://i.imgur.com/kYW2H5C.jpg',
						value: '',
						title: 'Background image'
					}
				},
				{
					type: 'slider',
					details: {
						variable: 'background-image-blur',
						value: 5,
						max: 30,
						step: 1,
						unit: 'px',
						title: 'Blur'
					}
				},
				{
					type: 'select',
					details: {
						variable: 'background-image-size',
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
						variable: 'background-image-position',
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
				}
			]
		},
		{
			title: 'Popout/Modal',
			icon: 'Image',
			userModal: true,
			inputs: [
				{
					type: 'image',
					details: {
						variable: 'popout-modal-image',
						start: 'var(--background-image)',
						value: '',
						title: 'Popout modal image'
					}
				},
				{
					type: 'slider',
					details: {
						variable: 'popout-modal-blur',
						value: 5,
						max: 30,
						step: 1,
						unit: 'px',
						title: 'Blur'
					}
				},
				{
					type: 'select',
					details: {
						variable: 'popout-modal-size',
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
						variable: 'popout-modal-position',
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
				}
			]
		},
		{
			title: 'Home button',
			icon: 'Home',
			inputs: [
				{
					type: 'image',
					details: {
						variable: 'home-button-image',
						start: 'https://gibbu.github.io/BetterDiscord-Themes/FrostedGlass/assets/discord.svg',
						value: '',
						title: 'Home button image'
					}
				},
				{
					type: 'select',
					details: {
						variable: 'home-button-size',
						value: 'cover',
						options: [
							{ label: 'Cover', value: 'cover' },
							{ label: 'Contain', value: 'contain' },
							{ label: 'Auto', value: 'auto' },
							{ label: '100%', value: '100%' },
							{ label: '150%', value: '150%' },
							{ label: '200%', value: '200%' }
						],
						title: 'Image size'
					}
				},
				{
					type: 'select',
					details: {
						variable: 'home-button-position',
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
						title: 'Image position'
					}
				}
			]
		},
		{
			title: 'Brightness',
			icon: 'Sun',
			inputs: [
				{
					type: 'slider',
					details: {
						variable: 'serverlist-brightness',
						value: 0.8,
						max: 1,
						step: 0.02,
						title: 'Server list brightness'
					}
				},
				{
					type: 'slider',
					details: {
						variable: 'left-brightness',
						value: 0.8,
						max: 1,
						step: 0.02,
						title: 'Channels and DM list'
					}
				},
				{
					type: 'slider',
					details: {
						variable: 'middle-brightness',
						value: 0.6,
						max: 1,
						step: 0.02,
						title: 'Middle brightness',
						hint: 'Chat and Settings'
					}
				},
				{
					type: 'slider',
					details: {
						variable: 'right-brightness',
						value: 0,
						max: 1,
						step: 0.02,
						title: 'Right brightness',
						hint: 'Members and Now Playing'
					}
				},
				{
					type: 'slider',
					details: {
						variable: 'popout-modal-brightness',
						value: 0.75,
						max: 1,
						step: 0.02,
						title: 'Popout/Modal brightness'
					}
				}
			]
		},
		{
			title: 'Colours',
			icon: 'Colour',
			inputs: [
				{
					type: 'colour',
					details: {
						variable: 'gradient-primary',
						value: '103,58,183',
						type: 'RGB',
						title: 'Gradient primary'
					}
				},
				{
					type: 'colour',
					details: {
						variable: 'gradient-secondary',
						value: '63,81,181',
						type: 'RGB',
						title: 'Gradient secondary'
					}
				},
				{
					type: 'colour',
					details: {
						variable: 'link-colour',
						value: '#00b0f4',
						type: 'HEX',
						title: 'Link colour'
					}
				},
				{
					type: 'colour',
					details: {
						variable: 'scrollbar-colour',
						value: 'rgba(255,255,255,0.05)',
						type: 'RGB',
						alpha: true,
						rule: true,
						title: 'Scrollbar colour'
					}
				},
				{
					type: 'slider',
					details: {
						variable: 'gradient-direction',
						value: 320,
						unit: 'deg',
						max: 360,
						step: 1,
						title: 'Gradient Direction'
					}
				}
			]
		},
		{
			title: 'Backgrount tint',
			icon: 'Gear',
			inputs: [
				{
					type: 'colour',
					details: {
						variable: 'tint-colour',
						value: '255,51,159',
						type: 'RGB',
						title: 'Tint colour'
					}
				},
				{
					type: 'slider',
					details: {
						variable: 'tint-brightness',
						value: 0,
						max: 1,
						step: 0.02,
						title: 'Tint brightness'
					}
				}
			]
		},
		{
			title: 'Custom font',
			icon: 'Font',
			inputs: [
				{
					type: 'font',
					details: {
						variable: 'font',
						index: 0,
						value: 'Whitney',
						title: 'App font'
					}
				}
			]
		},
		{
			title: 'App settings',
			icon: 'App',
			inputs: [
				{
					type: 'slider',
					details: {
						variable: 'window-padding',
						value: 20,
						max: 100,
						unit: 'px',
						step: 1,
						title: 'Window padding',
						hint: 'Spacing around Discord'
					}
				},
				{
					type: 'slider',
					details: {
						variable: 'window-roundness',
						value: 10,
						max: 100,
						unit: 'px',
						step: 1,
						title: 'Window rounded',
						hint: 'Roundness of Discord'
					}
				}
			]
		}
	],
	hiddenVars: [
		{
			variable: 'update-notice-1',
			value: 'none'
		}
	],
	addons: ['rs', 'columns', 'hsl', 'discolored']
};

export default theme;
