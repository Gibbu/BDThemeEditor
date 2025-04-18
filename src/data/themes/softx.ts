import type { Theme } from '$types/theme';
import Gibbu from '../devs/gibbu';

const theme: Theme = {
	name: 'SoftX',
	thumbnail:
		'https://camo.githubusercontent.com/e8fa95603e0fff8ffcc7a831fb6229ca8840625bc565ccc041987c354ef45d3a/68747470733a2f2f692e696d6775722e636f6d2f4535376746334c2e706e67',
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
	preview: `
		@import url('https://discordstyles.github.io/SoftX/SoftX.css');
		@import url("https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500&display=swap");
		@import url("https://discordstyles.github.io/SoftX/RadialGlow.css");
		:root {
			--background-image: url("https://i.imgur.com/Nglfni6.png");
			--background-blur: 0px;
			--accent: 0, 231, 169;
			--channels-width: 300px;
			--guilds-width: 105px;
			--members-width: 280px;
			--server-size: 50px;
			--chat-avatar-size: 32px;
			--glow-intensity: 1;
			--opacity: .85;
			--font: "Inter";
			--avatar-roundness: 50%;
			--server-roundness: 50%;
			--rs-small-spacing: 2px;
			--rs-medium-spacing: 4px;
			--rs-large-spacing: 4px;
			--rs-small-width: 1.5px;
			--rs-medium-width: 2px;
			--rs-large-width: 2px;
			--rs-online-color: #43b581;
			--rs-idle-color: #faa61a;
			--rs-dnd-color: #f04747;
			--rs-offline-color: #636b75;
			--rs-streaming-color: #643da7;
			--rs-invisible-color: #747f8d;
			--rs-phone-color: var(--rs-online-color);
			--rs-phone-visible: block;
		}
	`,
	imports: ['https://discordstyles.github.io/SoftX/SoftX.css', 'https://discordstyles.github.io/SoftX/RadialGlow.css'],
	optionalImports: [
		{
			name: 'Vertical User Area',
			description: 'Moves the user are to the server list',
			imports: ['https://discordstyles.github.io/SoftX/VerticalUserArea.css'],
			enabled: true
		},
		{
			name: 'Window Titlebar',
			description: 'Moves the Windows buttons to the header',
			imports: ['https://discordstyles.github.io/Addons/windows-titlebar.css'],
			enabled: true
		}
	],
	fonts: ['https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500&display=swap'],
	variables: [
		{
			title: 'Background image',
			icon: 'Photo',
			inputs: [
				{
					type: 'image',
					props: {
						variable: 'background-image',
						start: 'https://i.imgur.com/Nglfni6.png',
						value: '',
						title: 'Image',
						comment: 'Background image | URL MUST BE A DIRECT LINK (ending in .jpg, .jpeg, .png, .gif)'
					}
				},
				{
					type: 'slider',
					props: {
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
					props: {
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
			icon: 'Swatch',
			inputs: [
				{
					type: 'colour',
					props: {
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
					props: {
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
			icon: 'ChatBubbleBottomCenterText',
			inputs: [
				{
					type: 'font',
					props: {
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
			icon: 'ArrowsRightLeft',
			inputs: [
				{
					type: 'number',
					props: {
						variable: 'channels-width',
						value: 300,
						unit: 'px',
						title: 'Channels width',
						comment: 'Width of the channels list. | Default: 300px'
					}
				},
				{
					type: 'number',
					props: {
						variable: 'guilds-width',
						value: 105,
						unit: 'px',
						title: 'Server list width',
						comment: 'Width of the server list. | Default: 105px'
					}
				},
				{
					type: 'number',
					props: {
						variable: 'members-width',
						value: 280,
						unit: 'px',
						title: 'Members list width',
						comment: 'Width of the members list. | Default: 280px'
					}
				},
				{
					type: 'number',
					props: {
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
					props: {
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
			icon: 'Cog6Tooth',
			inputs: [
				{
					type: 'slider',
					props: {
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
					props: {
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
					props: {
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
					props: {
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
					props: {
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
					props: {
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
					props: {
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
					props: {
						variable: 'rs-online-color',
						value: '#43b581',
						type: 'HEX',
						title: 'Online status colour',
						comment: 'Colour for online status'
					}
				},
				{
					type: 'colour',
					props: {
						variable: 'rs-idle-color',
						value: '#faa61a',
						type: 'HEX',
						title: 'Idle status colour',
						comment: 'Colour for idle status'
					}
				},
				{
					type: 'colour',
					props: {
						variable: 'rs-dnd-color',
						value: '#f04747',
						type: 'HEX',
						title: 'Do not disturb status colour',
						comment: 'Colour for dnd status'
					}
				},
				{
					type: 'colour',
					props: {
						variable: 'rs-offline-color',
						value: '#636b75',
						type: 'HEX',
						title: 'Offline status colour',
						comment: 'Colour for offline status'
					}
				},
				{
					type: 'colour',
					props: {
						variable: 'rs-phone-color',
						value: 'var(--rs-online-color)',
						type: 'HEX',
						title: 'Phone icon colour',
						comment: 'Colour of the ring and phone icon when a user is on their phone'
					}
				},
				{
					type: 'colour',
					props: {
						variable: 'rs-streaming-color',
						value: '#643da7',
						type: 'HEX',
						title: 'Streaming status colour',
						comment: 'Colour for streaming status'
					}
				},
				{
					type: 'select',
					props: {
						variable: 'rs-phone-visible',
						custom: false,
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
