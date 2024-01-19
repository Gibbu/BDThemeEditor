import type { Theme } from '$types/theme';
import LeafyLuigi from '../devs/leafyluigi';
import { discolored } from '../addons';

const theme: Theme = {
	name: 'Pyrite',
	thumbnail: '',
	developer: LeafyLuigi,
	meta: {
		name: 'Pyrite',
		author: 'LeafyLuigi',
		version: '0.2.4',
		description: 'Pyrite',
		source: 'https://github.com/LeafyLuigi/discord-themes/tree/master/pyrite',
		website: 'https://github.com/LeafyLuigi/discord-themes/tree/master/pyrite',
		invite: '7P99YTBRUu'
	},
	preview: `
	@import url(https://leafyluigi.github.io/discord-themes/pyrite/build/base.css);
	:root {
		--background-image: url('https://leafyluigi.github.io/images/pexels-josh-sorenson-116359.png');
		--user-modal-image: var(--background-image);
		--user-popout-image: var(--background-image);
		--home-icon: url('https://leafyluigi.github.io/images/pexels-chris-munnik-2604991.png');
		--background-attachment: fixed;
		--user-modal-attachment: var(--background-attachment);
		--user-popout-attachment: var(--background-attachment);
		--primary-color: #387eff;
		--secondary-color: #3298e0;
		--hover-color: #139dff;
		--tooltip-color: #1967ab;
		--green-color: #43b581;
		--yellow-color: #f9a719;
		--red-color: #ec4144;
		--link-color: #00aef3;
		--live-color:  #583594;
		--offline-color: #737e8c;
		--category-color: var(--header-primary);
		--selected-channel-color: var(--header-primary);
		--unread-channel-color: var(--primary-color);
		--unread-channel-glow: drop-shadow(0 0 4px);
		--read-channel-color: var(--interactive-normal);
		--muted-channel-color: var(--interactive-muted);
		--show-channel-unread-dot: block;
		--locked-voice-channel-color: var(--red-color);
		--mention-background: var(--primary-color);
		--mention-opacity: 0.3;
		--code-font: Hack, Monaco, Consolas, Courier, monospace;
		--body-font: Whitney, "gg sans", "Noto Sans", "Helvetica Neue", Helvetica, sans-serif;
		--expression-picker-height: 500px;
		--background-filter: none;
		--user-modal-filter: none;
		--user-popout-filter: none;
		--user-modal-width: 900px;
		--user-modal-height: 600px;
		--hide-speed: 0.5s;
		--hide-member-list: 1;
		--hide-active-now: 1;
		--hide-profile-panel: 1;
		--hide-channel-list: 0;
		--win-min-max-close-button-width: 28px;
		--HSL-server-icon-size: 40px;
		--HSL-server-spacing: 10px;
		--HSL-server-direction: column;
		--update-notice-dec23: none;
	}
	.theme-dark,
	.theme-dark :not(div[class*=previewContainer_]) .theme-light:not(div[class*=layer_]):not(div[class*=userProfileOuterThemed_]) {
		--card-background: rgba(0,0,0,0.5);
		--side-shading: rgba(0,0,0,0.5);
		--middle-shading: rgba(0,0,0,0.3);
		--header-shading: rgba(0,0,0,0.7);
		--hover-filter: rgba(0,0,0,0.2);
		--active-filter: rgba(0,0,0,0.4);
	}
	.theme-light,
	.theme-light :not(div[class*=previewContainer_]) .theme-dark:not(div[class*=layer_]):not(div[class*=userProfileOuterThemed_]):not(div[class*=sidebar_]):not(nav[class*=guilds_]):not(div[class*=sidebarRegion_]) {
		--card-background: rgba(255,255,255,0.05);
		--side-shading: rgba(255,255,255,0.4);
		--middle-shading: rgba(255,255,255,0.3);
		--header-shading: rgba(255,255,255,0.5);
		--hover-filter: rgba(255,255,255,0.2);
		--active-filter: rgba(255,255,255,0.4);
	}
	`,
	features: ['background', 'transparent', 'addons', 'font', 'home', 'light'],
	imports: ['https://leafyluigi.github.io/discord-themes/pyrite/build/base.css'],
	fonts: [],
	variables: [
		{
			title: 'Main Colours',
			icon: 'Swatch',
			inputs: [
				{
					type: 'colour',
					props: {
						variable: 'primary-color',
						value: '#387eff',
						type: 'HEX',
						title: 'Primary accent colour'
					}
				},
				{
					type: 'colour',
					props: {
						variable: 'secondary-color',
						value: '#3298e0',
						type: 'HEX',
						title: 'Secondary accent color',
						hint: 'Slightly different to Primary accent colour'
					}
				},
				{
					type: 'colour',
					props: {
						variable: 'hover-color',
						value: '#139dff',
						type: 'HEX',
						title: 'Hover accent color',
						hint: 'Slightly different again to Primary and Secondary accent colours'
					}
				},
				{
					type: 'colour',
					props: {
						variable: 'tooltip-color',
						value: '#1967ab',
						type: 'HEX',
						title: 'Tooltip background color',
						hint: 'Used for the backgrounds of (most) tooltips'
					}
				}
			]
		},
		{
			title: 'App Background',
			icon: 'Photo',
			inputs: [
				{
					type: 'image',
					props: {
						variable: 'background-image',
						start: 'https://leafyluigi.github.io/images/pexels-josh-sorenson-116359.png',
						value: '',
						title: 'Image'
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
				}
			]
		},
		{
			title: 'User Profile',
			icon: 'User',
			userModal: true,
			inputs: [
				{
					type: 'image',
					props: {
						variable: 'user-modal-image',
						start: 'https://leafyluigi.github.io/images/pexels-josh-sorenson-116359.png',
						value: '',
						title: 'Image'
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
					type: 'banner',
					props: {
						id: 'pyrite-UML-width-height-warning',
						message: 'The do not take any effect if the optional import "User Modal Layout" is deselected.<br>Changing the values below HAS NOT BEEN TESTED.<br>The maximum value is <em>calc(100v</em>x<em> - 20px)</em>.',
						closable: false,
						type: 'warning'
					}
				},
				{
					type: 'slider',
					props: {
						variable: 'user-modal-width',
						value: 900,
						unit: 'px',
						min: 0,
						max: 10000,
						step: 1,
						title: 'Width'
					}
				},
				{
					type: 'slider',
					props: {
						variable: 'user-modal-height',
						value: 600,
						unit: 'px',
						min: 0,
						max: 10000,
						step: 1,
						title: 'Height'
					}
				}
			]
		},
		{
			title: 'User Popout',
			icon: 'Photo',
			inputs: [
				{
					type: 'image',
					props: {
						variable: 'user-popout-image',
						start: 'https://leafyluigi.github.io/images/pexels-josh-sorenson-116359.png',
						value: '',
						title: 'Image'
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
				}
			]
		},
		{
			title: 'Home Button Icon',
			icon: 'Home',
			inputs: [
				{
					type: 'image',
					props: {
						variable: 'home-icon',
						start: 'https://leafyluigi.github.io/images/pexels-chris-munnik-2604991.png',
						value: '',
						title: 'Home button image'
					}
				}
			]
		},
		{
			title: 'Channel Colours',
			icon: 'ListBullet',
			inputs: [
				{
					type: 'colour',
					props: {
						variable: 'category-color',
						value: 'var(--header-primary)',
						type: 'HEX',
						title: 'Category colour',
						hint: 'Applies to uncollapsed category, member list group titles and active voice channel colour'
					}
				},
				{
					type: 'colour',
					props: {
						variable: 'selected-channel-color',
						value: 'var(--header-primary)',
						type: 'HEX',
						title: 'Selected Channel colour',
						hint: 'Applies to selected channel as well as non-locked and non-muted channels on hover'
					}
				},
				{
					type: 'colour',
					props: {
						variable: 'unread-channel-color',
						value: 'var(--primary-color)',
						type: 'HEX',
						title: 'Unread Channel colour',
						hint: 'Applies to all unread channels. An optional glow can be done using the variable below'
					}
				},
				{
					type: 'select',
					props: {
						variable: 'unread-channel-glow',
						value: 'drop-shadow(0 0 4px)',
						options: [
							{ label: 'None', value: 'unset' },
							{ label: 'Default, softer glow', value: 'drop-shadow(0 0 4px)' },
							{ label: 'Soft glow, offset below', value: 'drop-shadow(0 2px 2px)' },
							{ label: 'Soft glow, offset to bottom right', value: 'drop-shadow(2px 2px 2px)' }
						],
						custom: true,
						title: 'Unread Channel Glow',
						hint: '<em>[Advanced]</em> Uses the <a style="color:hsl(var(--accent,LinkText))" href="https://developer.mozilla.org/en-US/docs/Web/CSS/filter" rel="noopener noreferrer">CSS Filter property</a> to apply a drop shadow'
					}
				},
				{
					type: 'colour',
					props: {
						variable: 'read-channel-color',
						value: 'var(--interactive-normal)',
						type: 'HEX',
						title: 'Read Channel colour',
						hint: 'Applies to read channels as well as unmuted but collapsed categories'
					}
				},
				{
					type: 'colour',
					props: {
						variable: 'muted-channel-color',
						value: 'var(--interactive-muted)',
						type: 'RGB',
						title: 'Muted Channel colour',
						hint: 'Applies to muted channels and categories'
					}
				},
				{
					type: 'select',
					props: {
						variable: 'show-channel-unread-dot',
						value: 'block',
						options: [
							{ label: 'Show', value: 'block' },
							{ label: 'Hide', value: 'none' }
						],
						title: 'Show Unread Dot'
					}
				},
				{
					type: 'colour',
					props: {
						variable: 'locked-voice-channel-color',
						value: 'var(--red-color)',
						type: 'HEX',
						title: 'Locked Voice Channel colour',
						hint: 'Applies to locked voice channels'
					}
				}
			]
		},
		{
			title: 'Status Colours',
			icon: 'Cog6Tooth',
			inputs: [
				{
					type: 'colour',
					props: {
						variable: 'green-color',
						value: '#43b581',
						type: 'HEX',
						title: 'Online status colour',
						hint: 'also applies to Green buttons and various other elements'
					}
				},
				{
					type: 'colour',
					props: {
						variable: 'yellow-color',
						value: '#f9a719',
						type: 'HEX',
						title: 'Idle status colour',
						hint: 'also applies to Yellow buttons and various other elements'
					}
				},
				{
					type: 'colour',
					props: {
						variable: 'red-color',
						value: '#ec4144',
						type: 'HEX',
						title: 'Do not Disturb status colour',
						hint: 'also applies to Red buttons and various other elements'
					}
				},
				{
					type: 'colour',
					props: {
						variable: 'live-color',
						value: '#583594',
						type: 'HEX',
						title: 'Streaming status colour'
					}
				},
				{
					type: 'colour',
					props: {
						variable: 'offline-color',
						value: '#737e8c',
						type: 'HEX',
						title: 'Offline and invisible status colour'
					}
				},
				{
					type: 'colour',
					props: {
						variable: 'link-color',
						value: '#00aef3',
						type: 'HEX',
						title: 'URL/link colour'
					}
				}
			]
		},
		{
			title: 'Custom Fonts',
			icon: 'ChatBubbleBottomCenterText',
			inputs: [
				{
					type: 'font',
					props: {
						variable: 'body-font',
						value: 'Whitney, "gg sans", "Noto Sans", "Helvetica Neue", Helvetica, sans-serif',
						index: 0,
						title: 'Main font',
						hint: 'If the Whitney import is not selected, "gg sans", Discord\'s default will be used instead'
					}
				},
				{
					type: 'font',
					props: {
						variable: 'code-font',
						value: 'Hack, Monaco, Consolas, Courier, monospace',
						index: 1,
						title: 'Code font',
						hint: 'It\'s likely two or more fonts won\'t exist for you so multiple have been included'
					}
				}
			]
		},
		{
			title: 'Toggles',
			icon: 'Cog6Tooth',
			inputs: [
				{
					type: 'number',
					props: {
						variable: 'hide-speed',
						value: 0.5,
						max: 10,
						min: 0,
						step: 0.1,
						unit: 's',
						title: 'Hide speed',
						hint: 'How long it should take to show/hide certain sections'
					}
				},
				{
					type: 'banner',
					props: {
						id: 'pyrite-toggles-warning',
						message: 'Setting the values of these below beneath 0 or above the maximum may have unknown effects. Do so at your own risk.',
						type: 'warning',
						closable: false
					}
				},
				{
					type: 'number',
					props: {
						variable: 'hide-member-list',
						value: 1,
						max: 1,
						min: 0,
						step: 0.1,
						title: 'Hide Member List',
						hint: 'How much to hide the Member List. Set this to 1.333333 to completely hide it'
					}
				},
				{
					type: 'number',
					props: {
						variable: 'hide-active-now',
						value: 1,
						max: 1,
						min: 0,
						step: 0.1,
						title: 'Hide Active Now',
						hint: 'How much to hide the Active Now section in the friends list. Set this to 1.2 to completely hide it'
					}
				},
				{
					type: 'number',
					props: {
						variable: 'hide-profile-panel',
						value: 1,
						max: 1,
						min: 0,
						step: 0.1,
						title: 'Hide Profile Panel',
						hint: 'How much to hide Profile Panel in direct messages. Set this to 1.214284 to completely hide it'
					}
				},
				{
					type: 'number',
					props: {
						variable: 'hide-channel-list',
						value: 0,
						max: 1,
						min: 0,
						step: 0.1,
						title: 'Hide Channel List',
						hint: 'How much to hide the Channel List. Set this to 1.4226 to completely hide it'
					}
				}
			]
		},
		{
			title: 'Others',
			icon: 'Cog6Tooth',
			inputs: [
				{
					type: 'colour',
					props: {
						variable: 'mention-background',
						value: 'var(--primary-color)',
						type: 'HEX',
						title: 'Mention background colour'
					}
				},
				{
					type: 'number',
					props: {
						variable: 'mention-opacity',
						value: 0.3,
						max: 1.0,
						step: 0.1,
						min: -0.2,
						title: 'Mention background opacity',
						hint: 'A fixed 0.2 is added to the opacity on hover'
					}
				},
				{
					type: 'number',
					props: {
						variable: 'win-min-max-close-button-width',
						value: 28,
						unit: 'px',
						max: 100,
						min: 12,
						title: 'Windows Min/Max/Close Button Width',
						hint: 'The preview on this page shows Windows. You do not need to worry about changing this for Mac OS, Linux or Web.'
					}
				}
			]
		},
		{
			title: 'Dark Theme',
			icon: 'Moon',
			varGroup: '.theme-dark, .theme-dark :not(div[class*=previewContainer_]) .theme-light:not(div[class*=layer_]):not(div[class*=userProfileOuterThemed_])',
			inputs: [
				{
					type: 'colour',
					props: {
						variable: 'card-background',
						value: 'rgba(0,0,0,0.5)',
						type: 'RGB',
						alpha: true,
						rule: true,
						title: 'Catch-all background',
						hint: ''
					}
				},
				{
					type: 'colour',
					props: {
						variable: 'side-shading',
						value: 'rgba(0,0,0,0.5)',
						type: 'RGB',
						alpha: true,
						rule: true,
						title: 'Side shading',
						hint: 'Applies a background to the Member list, Channel list and Server List (without HSL)'
					}
				},
				{
					type: 'colour',
					props: {
						variable: 'middle-shading',
						value: 'rgba(0,0,0,0.3)',
						type: 'RGB',
						alpha: true,
						rule: true,
						title: 'Middle shading',
						hint: 'Applies a background to the main chat area'
					}
				},
				{
					type: 'colour',
					props: {
						variable: 'header-shading',
						value: 'rgba(0,0,0,0.7)',
						type: 'RGB',
						alpha: true,
						rule: true,
						title: 'Header shading',
						hint: 'Applies a background to the Header Bar'
					}
				},
				{
					type: 'colour',
					props: {
						variable: 'hover-filter',
						value: 'rgba(0,0,0,0.2)',
						type: 'RGB',
						alpha: true,
						rule: true,
						title: 'Hover Button Overlay',
						hint: 'Overlay applied to buttons on hover'
					}
				},
				{
					type: 'colour',
					props: {
						variable: 'active-filter',
						value: 'rgba(0,0,0,0.4)',
						type: 'RGB',
						alpha: true,
						rule: true,
						title: 'Active Button Overlay',
						hint: 'Overlay applied to buttons when clicked'
					}
				}
			]
		},
		{
			title: 'Light Theme',
			icon: 'Sun',
			varGroup: '.theme-light, .theme-light :not(div[class*=previewContainer_]) .theme-dark:not(div[class*=layer_]):not(div[class*=userProfileOuterThemed_]):not(div[class*=sidebar_]):not(nav[class*=guilds_]):not(div[class*=sidebarRegion_])',
			inputs: [
				{
					type: 'colour',
					props: {
						variable: 'card-background',
						value: 'rgba(255,255,255,0.05)',
						type: 'RGB',
						alpha: true,
						rule: true,
						title: 'Catch-all background',
						hint: ''
					}
				},
				{
					type: 'colour',
					props: {
						variable: 'side-shading',
						value: 'rgba(255,255,255,0.4)',
						type: 'RGB',
						alpha: true,
						rule: true,
						title: 'Side shading',
						hint: 'Applies a background to the Member list, Channel list and Server List (without HSL)'
					}
				},
				{
					type: 'colour',
					props: {
						variable: 'middle-shading',
						value: 'rgba(255,255,255,0.3)',
						type: 'RGB',
						alpha: true,
						rule: true,
						title: 'Middle shading',
						hint: 'Applies a background to the main chat area'
					}
				},
				{
					type: 'colour',
					props: {
						variable: 'header-shading',
						value: 'rgba(255,255,255,0.5)',
						type: 'RGB',
						alpha: true,
						rule: true,
						title: 'Header shading',
						hint: 'Applies a background to the Header Bar'
					}
				},
				{
					type: 'colour',
					props: {
						variable: 'hover-filter',
						value: 'rgba(255,255,255,0.2)',
						type: 'RGB',
						alpha: true,
						rule: true,
						title: 'Hover Button Overlay',
						hint: 'Overlay applied to buttons on hover'
					}
				},
				{
					type: 'colour',
					props: {
						variable: 'active-filter',
						value: 'rgba(255,255,255,0.4)',
						type: 'RGB',
						alpha: true,
						rule: true,
						title: 'Active Button Overlay',
						hint: 'Overlay applied to buttons when clicked'
					}
				}
			]
		},
		{
			title: 'Horizontal Server List',
			icon: 'Cog6Tooth',
			inputs: [
				{
					type: 'banner',
					props: {
						message: 'These will only take effect if Pyrite\'s \"Horizontal Server List\" optional import is enabled.',
						id: 'pyrite-hsl-info',
						type: 'info',
						closable: false
					}
				},
				{
					type: 'number',
					props: {
						variable: 'HSL-server-icon-size',
						title: 'Icon Size',
						unit: 'px',
						value: 40,
						min: 0
					}
				},
				{
					type: 'number',
					props: {
						variable: 'HSL-server-spacing',
						title: 'Icon Spacing',
						unit: 'px',
						value: 10,
						min: 0
					}
				},
				{
					type: 'select',
					props: {
						value: 'column',
						variable: 'HSL-server-direction',
						title: 'Direction',
						options: [
							{ label: 'Left-to-right', value: 'column' },
							{ label: 'Right-to-left', value: 'column-reverse' }
						]
					}
				}
			]
		}
	],
	hiddenVars: [
		{
			// Really it's used for a "Please redownload" update warning
			variable: 'update-notice-dec23',
			value: 'none',
			comment: 'Debug; please do not touch'
		}
	],
	optionalImports: [
		{
			name: 'User Modal Layout',
			description: 'Pyrite\'s own custom user modal layout',
			enabled: true,
			imports: ['https://leafyluigi.github.io/discord-themes/pyrite/build/userModalLayout.css'],
		},
		{
			name: 'BetterDiscord Support',
			description: 'Enables support for BetterDiscord and a few plugins',
			enabled: true,
			imports: ['https://leafyluigi.github.io/discord-themes/pyrite/build/better-discord.css']
		},
		{
			name: 'Vencord Support',
			description: 'Enables support for Vencord and a few plugins (it\'s also very cute)',
			enabled: true,
			imports: ['https://leafyluigi.github.io/discord-themes/pyrite/build/vencord.css']
		},
		{
			name: 'Whitney Font',
			description: 'Allows usage of Discord\'s previously used font, Whitney.',
			enabled: true,
			imports: ['https://leafyluigi.github.io/discord-themes/whitney.css']
		},
		{
			name: 'HorizontalServerList',
			description: 'Forked from Gibbu. Do not use this with the original. Moves the server list from the left to the top of Discord.',
			enabled: false,
			imports: ['https://leafyluigi.github.io/discord-themes/pyrite/build/horizontal-server-list.css']
		},
		{
			name: 'HorizontalServerList on bottom',
			description: 'Requires the above optional import to be enabled.',
			enabled: false,
			imports: ['https://leafyluigi.github.io/discord-themes/pyrite/build/horizontal-server-list-bottom.css']
		},
		{
			name: 'Border Radius / Radical Status',
			description: 'Forked from Gibbu. Do not use this with the original. Changes the status icons to wrap around the avatar.',
			enabled: false,
			imports: ['https://leafyluigi.github.io/discord-themes/pyrite/build/borders.css']
		},
		{
			name: 'Restore Windows Titlebar',
			description: 'The preview on this website is for Windows. This optional import will not work for those using Mac OS, Linux or using Web.',
			enabled: false,
			imports: ['https://leafyluigi.github.io/discord-themes/pyrite/build/windows-titlebar.css']
		}
	],
	addons: [discolored]
};

export default theme;
