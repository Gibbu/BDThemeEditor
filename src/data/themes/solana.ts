import type { ITheme } from '$types/theme';
import Disease from '$data/devs/disease';

const theme: ITheme = {
	name: 'Solana',
	previewUrls: ['https://maendisease.github.io/BetterDiscordStuff/Themes/Solana/Solana.theme.css'],
	thumbnail: 'https://i.imgur.com/tnJ6KE7.jpg',
	developer: Disease,
	meta: {
		name: 'Solana',
		author: 'Disease#3749',
		version: '1.0.0',
		description: 'macOS with barely any customization.',
		source: 'https://github.com/maenDisease/BetterDiscordStuff/tree/main/Themes/Solana',
		invite: 'BShu37e4jg',
		website: 'https://maendisease.github.io/',
		authorId: '678469587444170762'
	},
	imports: [
		'https://maendisease.github.io/BetterDiscordStuff/css/bdAddonMini.css',
		'https://maendisease.github.io/BetterDiscordStuff/css/bearableInbox.css',
		'https://maendisease.github.io/BetterDiscordStuff/css/bettterInvites.css',
		'https://maendisease.github.io/BetterDiscordStuff/css/ChannelDms.css',
		'https://maendisease.github.io/BetterDiscordStuff/css/wellThisIsAwkwardSoTryThis.css',
		'https://maendisease.github.io/BetterDiscordStuff/Themes/Solana/Solana.css',
		'https://maendisease.github.io/BetterDiscordStuff/Themes/Solana/addon/mac-titlebar.css',
		'https://mwittrien.github.io/BetterDiscordAddons/Themes/EmojiReplace/base/Apple.css'
	],
	fonts: [
		'https://fonts.cdnfonts.com/css/sf-pro-display',
		'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500&display=swap'
	],
	variables: [
		{
			title: 'Colors',
			icon: 'Colour',
			inputs: [
				{
					type: 'slider',
					details: {
						variable: 'accent-hue',
						value: 213,
						max: 359,
						title: 'Accent color'
					}
				},
				{
					type: 'slider',
					details: {
						variable: 'accent-saturation',
						value: 100,
						max: 100,
						unit: '%',
						title: 'Accent saturation'
					}
				},
				{
					type: 'slider',
					details: {
						variable: 'accent-brightness',
						value: 50,
						max: 100,
						unit: '%',
						title: 'Accent brightness'
					}
				},
				{
					type: 'slider',
					details: {
						variable: 'background-accent-hue',
						value: 213,
						max: 359,
						title: 'Background accent hue'
					}
				},
				{
					type: 'slider',
					details: {
						variable: 'background-accent-saturation',
						value: 100,
						max: 100,
						unit: '%',
						title: 'Background accent saturation'
					}
				},
				{
					type: 'slider',
					details: {
						variable: 'background-accent-brightness',
						value: 50,
						max: 100,
						unit: '%',
						title: 'Background accent brightness'
					}
				}
			]
		},
		{
			title: 'Background image',
			icon: 'Image',
			inputs: [
				{
					type: 'image',
					details: {
						variable: 'background-image',
						start: 'initial',
						value: '',
						title: 'Background image',
						comment: 'url(https://site.com/foobar.png) | URL MUST BE A DIRECT LINK (ending in .jpg, .jpeg, .png, .gif)'
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
					type: 'slider',
					details: {
						variable: 'background-image-blur',
						value: 0,
						max: 50,
						unit: 'px',
						title: 'Background image blur'
					}
				},
				{
					type: 'slider',
					details: {
						variable: 'background-overlay-opacity',
						value: 80,
						max: 100,
						unit: '%',
						title: 'Overlay opacity'
					}
				},
				{
					type: 'slider',
					details: {
						variable: 'background-overlay-color-lightness',
						value: 0,
						min: -1,
						max: 1,
						step: 0.01,
						title: 'Overlay lightness'
					}
				},
				{
					type: 'slider',
					details: {
						variable: 'background-hue-shift-strength',
						value: 100,
						max: 100,
						unit: '%',
						title: 'Background hue-shift strength',
						hint: 'Disabled if background image is set.'
					}
				}
			]
		},
		{
			title: 'Window',
			icon: 'Sizing',
			inputs: [
				{
					type: 'image',
					details: {
						variable: 'window-background-image',
						start: 'initial',
						value: '',
						title: 'Window background image'
					}
				},
				{
					type: 'select',
					details: {
						variable: 'window-background-image-position',
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
						variable: 'window-background-image-size',
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
						variable: 'window-background-image-attachment',
						value: 'fixed',
						options: [
							{ label: 'Fixed', value: 'fixed' },
							{ label: 'Local', value: 'local' }
						],
						title: 'Attachment'
					}
				},
				{
					type: 'slider',
					details: {
						variable: 'window-opacity',
						value: 100,
						max: 100,
						unit: '%',
						title: 'Window opacity',
						hint: 'Reduce opacity to show background image.'
					}
				},
				{
					type: 'slider',
					details: {
						variable: 'window-blur',
						value: 0,
						max: 50,
						step: 1,
						title: 'Window blur',
						hint: 'Blur behind the window.'
					}
				},
				{
					type: 'slider',
					details: {
						variable: 'window-friends-blur',
						value: 0,
						max: 50,
						step: 1,
						title: 'Friends page blur'
					}
				},
				{
					type: 'slider',
					details: {
						variable: 'window-margin',
						value: 24,
						max: 100,
						step: 1,
						title: 'App padding',
						hint: 'Spacing around the window.'
					}
				},
				{
					type: 'slider',
					details: {
						variable: 'window-margin-left',
						value: 0,
						max: 100,
						step: 1,
						title: 'App padding left'
					}
				},
				{
					type: 'slider',
					details: {
						variable: 'window-border-radius',
						value: 10,
						max: 100,
						unit: 'px',
						step: 1,
						title: 'Window rounded',
						hint: 'Roundness of the window.'
					}
				},
				{
					type: 'slider',
					details: {
						variable: 'window-background-lightness',
						value: 0,
						min: -1,
						max: 1,
						step: 0.01,
						title: 'Window background lightness'
					}
				},
				{
					type: 'slider',
					details: {
						variable: 'window-accent-tint-strength',
						value: 5,
						max: 100,
						unit: '%',
						title: 'Window tint strength'
					}
				}
			]
		},
		{
			title: 'Chat',
			icon: 'Chat',
			inputs: [
				{
					type: 'select',
					details: {
						variable: 'chat-bubble',
						value: '0',
						options: [
							{ label: 'False', value: '0' },
							{ label: 'True', value: '1' }
						],
						title: 'Chat bubbles'
					}
				},
				{
					type: 'slider',
					details: {
						variable: 'text-link-hue',
						value: 212,
						max: 359,
						title: 'Text link hue'
					}
				},
				{
					type: 'slider',
					details: {
						variable: 'chat-text-brightness',
						value: 0,
						min: -1,
						max: 1,
						step: 0.01,
						title: 'Chat text brightness'
					}
				}
			]
		},
		{
			title: 'Dock',
			icon: 'Home',
			inputs: [
				{
					type: 'image',
					details: {
						variable: 'home-icon',
						start: 'initial',
						value: '',
						title: 'Home button image'
					}
				},
				{
					type: 'image',
					details: {
						variable: 'favorites-icon',
						start: 'initial',
						value: '',
						title: 'Favorites button image'
					}
				},
				{
					type: 'slider',
					details: {
						variable: 'dock-blur',
						value: 0,
						max: 50,
						title: 'Dock blur',
						comment: 'Blur intensity of the dock.'
					}
				},
				{
					type: 'slider',
					details: {
						variable: 'dock-border-radius',
						value: 0,
						min: -1,
						max: 1,
						step: 0.01,
						title: 'Dock radius'
					}
				},
				{
					type: 'slider',
					details: {
						variable: 'guildlist-show',
						value: 1,
						max: 1,
						step: 0.01,
						title: 'Auto-collapse icons',
						hint: 'The icons will reappear on hover.'
					}
				},
				{
					type: 'slider',
					details: {
						variable: 'guildlist-peek-unread',
						value: 1,
						max: 1,
						step: 0.01,
						title: 'Peek unread',
						hint: 'Partially show when collapsed.'
					}
				},
				{
					type: 'slider',
					details: {
						variable: 'guildlist-peek-ping',
						value: 1,
						max: 1,
						step: 0.01,
						title: 'Peek unread',
						hint: 'Partially show when collapsed.'
					}
				},
				{
					type: 'slider',
					details: {
						variable: 'guildlist-peek-selected',
						value: 1,
						max: 1,
						step: 0.01,
						title: 'Peek unread',
						hint: 'Partially show when collapsed.'
					}
				},
				{
					type: 'slider',
					details: {
						variable: 'guildlist-peek-group-unread',
						value: 1,
						max: 1,
						step: 0.01,
						title: 'Peek unread folder',
						hint: 'Partially show when collapsed.'
					}
				}
			]
		},
		{
			title: 'Sidebar',
			icon: 'List',
			inputs: [
				{
					type: 'slider',
					details: {
						variable: 'sidebar-width',
						value: 240,
						min: 48,
						max: 480,
						unit: 'px',
						step: 1,
						title: 'Sidebar width'
					}
				},
				{
					type: 'slider',
					details: {
						variable: 'members-width',
						value: 240,
						min: 64,
						max: 480,
						unit: 'px',
						step: 1,
						title: 'Members width'
					}
				},
				{
					type: 'slider',
					details: {
						variable: 'sidebar-text-brightness',
						value: 0,
						min: -1,
						max: 1,
						step: 0.01,
						title: 'Sidebar text brightness'
					}
				}
			]
		},
		{
			title: 'Floating background',
			icon: 'Border',
			inputs: [
				{
					type: 'slider',
					details: {
						variable: 'background-floating-blur',
						value: 20,
						max: 50,
						unit: 'px',
						step: 1,
						title: 'Floating background blur',
						hint: 'Blur behind the floating background.'
					}
				},
				{
					type: 'slider',
					details: {
						variable: 'floating-background-lightness',
						value: 0,
						min: -1,
						max: 1,
						step: 0.01,
						title: 'Floating background lightness'
					}
				},
				{
					type: 'slider',
					details: {
						variable: 'background-floating-opacity',
						value: 1,
						min: 0,
						max: 1,
						step: 0.01,
						title: 'Floating background opacity'
					}
				},
				{
					type: 'select',
					details: {
						variable: 'enable-floating-transparency',
						value: '1',
						options: [
							{ label: 'True', value: '1' },
							{ label: 'False', value: '0' }
						],
						title: 'Enable floating transparency'
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
						variable: 'custom-font-display',
						start: '""',
						index: 0,
						value: '',
						title: 'Display font'
					}
				},
				{
					type: 'font',
					details: {
						variable: 'custom-font-regular',
						start: '""',
						index: 0,
						value: '',
						title: 'Regular font',
						hint: 'Like the primary font, but used in specific areas.'
					}
				},
				{
					type: 'font',
					details: {
						variable: 'custom-font-primary',
						start: '""',
						index: 0,
						value: '',
						title: 'Primary font'
					}
				},
				{
					type: 'font',
					details: {
						variable: 'custom-font-code',
						start: '""',
						index: 0,
						value: '',
						title: 'Code font'
					}
				}
			]
		},
		{
			title: 'Compatibility',
			icon: 'Gear',
			inputs: [
				{
					type: 'select',
					details: {
						variable: 'enable-blur',
						value: '1',
						options: [
							{ label: 'True', value: '1' },
							{ label: 'False', value: '0' }
						],
						title: 'Enable blur',
						hint: 'Forces blur variables to 0.'
					}
				}
			]
		}
	]
};

export default theme;
