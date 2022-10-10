import type { ITheme } from '$types/theme';
import Gibbu from '../devs/gibbu';

const theme: ITheme = {
	name: 'SoftX',
	previewUrls: ['https://discordstyles.github.io/SoftX/SoftX.theme.css'],
	thumbnail:
		'https://camo.githubusercontent.com/6806907a0313ec99a80fe2ead0d275570332a3d8b36287f9b97b6529543877ab/68747470733a2f2f692e696d6775722e636f6d2f4535376746334c2e706e67',
	developer: Gibbu,
	meta: {
		name: 'SoftX',
		author: 'Gibbu#1211',
		version: '1.0.0',
		description: `A soft and comfy feel for Discord.`,
		invite: 'ZHthyCw',
		authorId: '174868361040232448',
		source: 'https://github.com/DiscordStyles/SoftX'
	},
	features: ['background', 'font', 'transparent'],
	imports: [
		'https://discordstyles.github.io/SoftX/SoftX.css',
		'https://discordstyles.github.io/SoftX/RadialGlow.css',
		'https://discordstyles.github.io/SoftX/VerticalUserArea.css',
		'https://discordstyles.github.io/Addons/windows-titlebar.css'
	],
	fonts: ['https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500&display=swap'],
	variables: [
		{
			title: 'Background image',
			icon: 'Image',
			inputs: [
				{
					type: 'image',
					details: {
						variable: 'background-image',
						start: 'https://i.imgur.com/Nglfni6.png',
						value: '',
						title: 'Background Image',
						comment: 'Background image | URL MUST BE A DIRECT LINK (ending in .jpg, .jpeg, .png, .gif)'
					}
				},
				{
					type: 'slider',
					details: {
						variable: 'background-blur',
						value: 0,
						max: 50,
						unit: 'px',
						title: 'Background blur',
						comment: 'Blur intensity of --background-image'
					}
				},
				{
					type: 'slider',
					details: {
						variable: 'opacity',
						max: 0.85,
						step: 0.01,
						value: 0.85,
						title: 'App opacity',
						comment: 'Opacity of overall app. | Default: .85'
					}
				}
			]
		},
		{
			title: 'Colours/Glow',
			icon: 'Colour',
			inputs: [
				{
					type: 'colour',
					details: {
						variable: 'accent',
						type: 'RGB',
						value: '0, 231, 169',
						title: 'Accent',
						hint: 'Colour used around the app.',
						comment: 'Colour used around the app. | Values are in R,G,B format. | Default: 0, 231, 169'
					}
				},
				{
					type: 'number',
					details: {
						variable: 'glow-intensity',
						value: 1,
						min: 0,
						step: 0.1,
						title: 'Glow intensity',
						hint: 'Decimals are allowed.',
						comment:
							'Intensity of the glow used around the app. | Set to 0 to disable the glow. | Decimals allowed | Default: 1'
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
						value: 'Inter',
						title: 'App font',
						comment: "Custom font | Default: 'Inter'"
					}
				}
			]
		},
		{
			title: 'Sizing',
			icon: 'Sizing',
			inputs: [
				{
					type: 'number',
					details: {
						variable: 'channels-width',
						value: 300,
						unit: 'px',
						title: 'Channels width',
						comment: 'Width of the channels list. | Default: 300px'
					}
				},
				{
					type: 'number',
					details: {
						variable: 'guilds-width',
						value: 105,
						unit: 'px',
						title: 'Server list width',
						comment: 'Width of the server list. | Default: 105px'
					}
				},
				{
					type: 'number',
					details: {
						variable: 'members-width',
						value: 280,
						unit: 'px',
						title: 'Members list width',
						comment: 'Width of the members list. | Default: 280px'
					}
				},
				{
					type: 'number',
					details: {
						variable: 'server-size',
						value: 50,
						unit: 'px',
						title: 'Server size',
						hint: 'Size of the servers inside the server list.',
						comment: 'Size of the servers inside the server list. | Default: 50px'
					}
				},
				{
					type: 'number',
					details: {
						variable: 'chat-avatar-size',
						value: 32,
						unit: 'px',
						title: 'Chat avatar size',
						comment: 'Size of the chat avatars. | Default: 32px'
					}
				}
			]
		},
		{
			title: 'RadialGlow',
			icon: 'Gear',
			inputs: [
				{
					type: 'slider',
					details: {
						variable: 'rs-small-spacing',
						value: 2,
						unit: 'px',
						max: 10,
						step: 1,
						title: 'Small avatar spacing',
						hint: 'Chat, members, dms',
						comment: 'Gap between avatar and status for members list/dms | MUST end in px'
					}
				},
				{
					type: 'slider',
					details: {
						variable: 'rs-medium-spacing',
						value: 2,
						unit: 'px',
						max: 10,
						step: 1,
						title: 'Medium avatar spacing',
						hint: 'User popout',
						comment: 'Gap between avatar and status for User popout | MUST end in px'
					}
				},
				{
					type: 'slider',
					details: {
						variable: 'rs-large-spacing',
						value: 2,
						unit: 'px',
						max: 10,
						step: 1,
						title: 'Large avatar spacing',
						hint: 'User profiles',
						comment: 'Gap between avatar and status for User profiles | MUST end in px'
					}
				},
				{
					type: 'slider',
					details: {
						variable: 'rs-small-width',
						value: 2,
						unit: 'px',
						max: 5,
						step: 0.5,
						title: 'Small width',
						hint: 'Thickness of status border for members list/dms | MUST end in px',
						comment: 'Ring width | Default: 1.5px'
					}
				},
				{
					type: 'slider',
					details: {
						variable: 'rs-medium-width',
						value: 2,
						unit: 'px',
						max: 5,
						step: 0.5,
						title: 'Medium width',
						hint: 'Thickness of status border for User popout | MUST end in px'
					}
				},
				{
					type: 'slider',
					details: {
						variable: 'rs-large-width',
						value: 2,
						unit: 'px',
						max: 5,
						step: 0.5,
						title: 'Large width',
						hint: 'Thickness of status border for User profile | MUST end in px'
					}
				},
				{
					type: 'slider',
					details: {
						variable: 'rs-avatar-shape',
						value: 50,
						unit: '%',
						max: 50,
						step: 0.5,
						title: 'Avatar shape',
						hint: '0% = Square | 50% = Circle',
						comment: '50% for round - 0% for square'
					}
				},
				{
					type: 'colour',
					details: {
						variable: 'rs-online-color',
						value: '#43b581',
						type: 'HEX',
						title: 'Online status colour',
						comment: 'Colour for online status'
					}
				},
				{
					type: 'colour',
					details: {
						variable: 'rs-idle-color',
						value: '#faa61a',
						type: 'HEX',
						title: 'Idle status colour',
						comment: 'Colour for idle status'
					}
				},
				{
					type: 'colour',
					details: {
						variable: 'rs-dnd-color',
						value: '#f04747',
						type: 'HEX',
						title: 'Do not disturb status colour',
						comment: 'Colour for dnd status'
					}
				},
				{
					type: 'colour',
					details: {
						variable: 'rs-offline-color',
						value: '#636b75',
						type: 'HEX',
						title: 'Offline status colour',
						comment: 'Colour for offline status'
					}
				},
				{
					type: 'colour',
					details: {
						variable: 'rs-phone-color',
						value: 'var(--rs-online-color)',
						type: 'HEX',
						title: 'Phone icon colour',
						comment: 'Colour of the ring and phone icon when a user is on their phone'
					}
				},
				{
					type: 'colour',
					details: {
						variable: 'rs-streaming-color',
						value: '#643da7',
						type: 'HEX',
						title: 'Streaming status colour',
						comment: 'Colour for streaming status'
					}
				},
				{
					type: 'select',
					details: {
						variable: 'rs-phone-visible',
						customValue: false,
						options: [
							{ label: 'Visible', value: 'block' },
							{ label: 'Hidden', value: 'none' }
						],
						value: 'block',
						title: 'Phone indicator visibility',
						comment: 'Visibility of the phone icon next to a users avatar. | block = visible | none = hidden'
					}
				}
			]
		}
	],
	hiddenVars: [
		{
			variable: 'rs-invisible-color',
			value: '#747f8d',
			comment: 'Colour for invisible status - Note: this will only show for your own invisibility'
		}
	]
};

export default theme;
