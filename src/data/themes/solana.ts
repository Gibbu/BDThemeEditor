import type {ITheme} from '$types/theme';
import Disease from '$data/devs/disease';

const theme: ITheme = {
	name: 'Solana',
	previewUrl: 'https://maendisease.github.io/BetterDiscordStuff/Themes/Solana/Solana.theme.css',
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
						variable: 'text-link-hue',
						value: 212,
						max: 359,
						title: 'Text link hue'
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
					type: 'slider',
					details: {
						variable: 'background-image-blur',
						value: 0,
						max: 50,
						unit: 'px',
						title: 'Background image blur',
						comment: 'Blur intensity of --background-image'
					}
				},
                {
					type: 'select',
					details: {
						variable: 'background-image-position',
						value: 'center',
						options: [
							{label: 'Top left', value: 'top left'},
							{label: 'Top centre', value: 'top center'},
							{label: 'Top right', value: 'top right'},
							{label: 'Centre left', value: 'center left'},
							{label: 'Centre', value: 'center'},
							{label: 'Centre right', value: 'center right'},
							{label: 'Bottom left', value: 'Bottom left'},
							{label: 'Bottom centre', value: 'Bottom center'},
							{label: 'Bottom right', value: 'bottom right'}
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
							{label: 'Cover', value: 'cover'},
							{label: 'Contain', value: 'contain'},
							{label: 'Auto', value: 'auto'},
							{label: '100%', value: '100%'},
							{label: '150%', value: '150%'},
							{label: '200%', value: '200%'}
						],
						title: 'Size'
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
						variable: 'background-hue-shift-strength',
						value: 100,
						max: 100,
                        unit: '%',
						title: 'Background hue-shift strength'
					}
                }
			]
		},
		{
			title: 'Window',
			icon: 'App',
			inputs: [
                {
					type: 'slider',
					details: {
						variable: 'window-margin',
						value: 24,
						max: 100,
						step: 1,
						title: 'Window padding',
						hint: 'Spacing around the window'
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
                },
                {
                    type: 'slider',
					details: {
						variable: 'window-opacity',
						value: 100,
						max: 100,
                        unit: '%',
						title: 'Window opacity'
					}
                },
                {
					type: 'slider',
					details: {
						variable: 'window-blur',
						value: 0,
						max: 50,
						unit: 'px',
						step: 1,
						title: 'Window blur',
						hint: 'Blur behind the window'
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
						hint: 'Roundness of the window'
					}
				}
			]
		},
        {
			title: 'Floating background',
			icon: 'Colour',
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
						hint: 'Blur behind the floating background'
					}
				},
                {
					type: 'select',
					details: {
						variable: 'enable-floating-transparency',
						value: '1',
						options: [
							{label: 'True', value: '1'},
							{label: 'False', value: '0'}
						],
						title: 'Enable floating transparency'
					}
				},
			]
		},
        {
			title: 'Home icon',
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
						title: 'Primary font',
					}
				},
                {
					type: 'font',
					details: {
						variable: 'custom-font-code',
						start: '""',
						index: 0,
						value: '',
						title: 'Code font',
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
							{label: 'True', value: '1'},
							{label: 'False', value: '0'}
						],
						title: 'Enable blur',
                        hint: 'Forces blur variables to 0'
					}
                }
			]
		}
	]
}

export default theme;