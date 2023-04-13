import type { ITheme } from '$types/theme';
import Gibbu from '../devs/gibbu';
import { radialstatus, hsl, columns, discolored } from '../addons';

const theme: ITheme = {
	name: 'Frosted Glass',
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
	preview: `
		@import url('https://discordstyles.github.io/FrostedGlass/dist/FrostedGlass.css');
		:root {
			--background-image: url("https://i.imgur.com/kYW2H5C.jpg"); /* Main background image | URL MUST BE A DIRECT LINK (ending in .jpg, .jpeg, .png, .gif) */
			--background-image-blur: 5px; /* Blur intensity of --background-image | Must end in px | DEFAULT: 5px */
			--background-image-size: cover; /* Size of the background image | DEFAUT: cover | OPTIONS: cover, contain */
			--background-image-position: center; /* Position of background image | DEAFULT: center | OPTIONS: top, right, bottom, left, center */
			--popout-image: var(--background-image); /* Background image for popouts and modals | URL MUST BE A DIRECT LINK (ending in .jpg, .jpeg, .png, .gif) */
			--popout-image-blur: 5px; /* Blur intensity of --popout-image | Must end in px | DEFAULT: 5px */
			--popout-image-size: cover; /* Size of the popout/modal image | DEFAUT: cover | OPTIONS: cover, contain */
			--popout-image-position: center; /* Position of popout/modal image | DEAFULT: center | OPTIONS: top, right, bottom, left, center */
			--overlay-image: var(--background-image); /* Background image for popouts and modals | URL MUST BE A DIRECT LINK (ending in .jpg, .jpeg, .png, .gif) */
			--overlay-image-blur: var(--background-image-blur); /* Blur intensity of --overlay-image | Must end in px | DEFAULT: 5px */
			--overlay-image-size: var(--background-image-size); /* Size of the popout/modal image | DEFAUT: cover | OPTIONS: cover, contain */
			--overlay-image-position: var(--background-image-position); /* Position of popout/modal image | DEAFULT: center | OPTIONS: top, right, bottom, left, center */
			--home-button-image: url("https://discordstyles.github.io/FrostedGlass/discord.svg"); /* Home button image | URL MUST BE A DIRECT LINK (ending in .jpg, .jpeg, .png, .gif) */
			--home-button-size: 60%; /* Size of the home button image | DEFAUT: cover */
			--home-button-position: center; /* Position of home button image | DEAFULT: center */
			--serverlist-brightness: 0.8; /* Brightness for serverlist | 0 - 1 (decimals allowed) | DEFAULT: 0.8 */
			--left-brightness: 0.8; /* Channels and DM list brightness | 0 - 1 (decimals allowed) | DEFAULT: 0.8 */
			--middle-brightness: 0.6; /* Chat brightness | 0 - 1 (decimals allowed) | DEFAULT: 0.6 */
			--right-brightness: 0; /* Members and Now Playing brightness | 0 - 1 (decimals allowed) | DEFAULT: 0 */
			--overlay-brightness: 0.75; /* Brightness for popouts and modals | 0 - 1 (decimals allowed) | DEFAULT: 0.75 */
			--gradient-primary: 103, 58, 183; /* DEFAULT: 103,58,183 */
			--gradient-secondary: 63, 81, 181; /* DEFAULT: 63,81,181 */
			--gradient-direction: 320deg; /* DEFAULT: 320deg */
			--tint-colour: 255, 51, 159; /* Colour of tint | DEAFULT: 255,51,159 */
			--tint-brightness: 0; /* Brightness of --tint-colour | 0 - 1 (decimals allowed) | DEFAULT: 0 */
			--window-padding: 20px; /* Spacing around the Discord window | DEFAULT: 20px */
			--window-roundness: 10px; /* Roundness of Discord | DEFAULT: 10px */
			--scrollbar-colour: rgba(255, 255, 255, 0.05); /* DEFAULT: rgba(255,255,255,0.05) */
			--link-colour: #00b0f4; /* DEFAULT: #00b0f4 */
			--font: "gg sans";
			--update-notice-1: none;
		}
	`,
	features: ['background', 'font', 'transparent', 'home', 'addons'],
	imports: ['https://discordstyles.github.io/FrostedGlass/dist/FrostedGlass.css'],
	optionalImports: [
		{
			name: 'Window Titlebar',
			description: 'Moves the Windows buttons to the header',
			imports: ['https://discordstyles.github.io/Addons/windows-titlebar.css'],
			enabled: true
		}
	],
	fonts: [],
	variables: [
		{
			title: 'Main background',
			icon: 'Photo',
			description: 'The main background covering most of the app.',
			inputs: [
				{
					type: 'image',
					details: {
						variable: 'background-image',
						start: 'https://i.imgur.com/kYW2H5C.jpg',
						value: '',
						title: 'Image'
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
						title: 'Blur',
						hint: 'The intensity of the blur inside of the app window.'
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
						customValue: true,
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
						customValue: true,
						title: 'Position'
					}
				}
			]
		},
		{
			title: 'User popout',
			icon: 'Square2Stack',
			description: 'The popout that appears when clicking on a user whether it being the members list or in chat.',
			inputs: [
				{
					type: 'image',
					details: {
						variable: 'popout-image',
						start: 'var(--background-image)',
						value: '',
						title: 'Popout modal image'
					}
				},
				{
					type: 'slider',
					details: {
						variable: 'popout-image-blur',
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
						variable: 'popout-image-size',
						value: 'cover',
						options: [
							{ label: 'Cover', value: 'cover' },
							{ label: 'Contain', value: 'contain' },
							{ label: 'Auto', value: 'auto' },
							{ label: '100%', value: '100%' },
							{ label: '150%', value: '150%' },
							{ label: '200%', value: '200%' }
						],
						customValue: true,
						title: 'Size'
					}
				},
				{
					type: 'select',
					details: {
						variable: 'popout-image-position',
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
						customValue: true,
						title: 'Position'
					}
				}
			]
		},
		{
			title: 'Overlaying modals/popouts',
			icon: 'Window',
			userModal: true,
			description: `Any modal or popout that isn't the user popout.`,
			inputs: [
				{
					type: 'image',
					details: {
						variable: 'overlay-image',
						start: 'var(--background-image)',
						value: '',
						title: 'Popout modal image'
					}
				},
				{
					type: 'slider',
					details: {
						variable: 'overlay-image-blur',
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
						variable: 'overlay-image-size',
						value: 'cover',
						options: [
							{ label: 'Cover', value: 'cover' },
							{ label: 'Contain', value: 'contain' },
							{ label: 'Auto', value: 'auto' },
							{ label: '100%', value: '100%' },
							{ label: '150%', value: '150%' },
							{ label: '200%', value: '200%' }
						],
						customValue: true,
						title: 'Size'
					}
				},
				{
					type: 'select',
					details: {
						variable: 'overlay-image-position',
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
						customValue: true,
						title: 'Position'
					}
				}
			]
		},
		{
			title: 'Home button',
			icon: 'Home',
			description: 'The image of the Discord home button.',
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
						customValue: true,
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
						customValue: true,
						title: 'Image position'
					}
				}
			]
		},
		{
			title: 'Brightness',
			icon: 'Sun',
			description: 'How dark parts of the app are. 0 meaning fully transparent, 1 meaning full black.',
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
						variable: 'overlay-brightness',
						value: 0.75,
						max: 1,
						step: 0.02,
						title: 'Overlay brightness',
						hint: 'Brightness of modals and context menus'
					}
				}
			]
		},
		{
			title: 'Colours',
			icon: 'Swatch',
			description: 'The colours used in the theme to give it a unique feel.',
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
			icon: 'Cog6Tooth',
			description: 'Add colour on top of your image.',
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
			icon: 'ChatBubbleBottomCenterText',
			inputs: [
				{
					type: 'font',
					details: {
						variable: 'font',
						index: 0,
						value: 'gg sans',
						title: 'App font'
					}
				}
			]
		},
		{
			title: 'App settings',
			icon: 'CpuChip',
			description: `Don't like the spacing around the app? Set both of these to 0.`,
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
	addons: [hsl, columns, radialstatus, discolored]
};

export default theme;
