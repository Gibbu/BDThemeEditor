import type {ITheme} from '$types/theme';
import Puckzxz from '$data/devs/puckzxz';

const theme: ITheme = {
	name: 'NotAnotherAnimeTheme',
	previewUrl: 'https://puckzxz.github.io/NotAnotherAnimeTheme/NotAnotherAnimeTheme.theme.css',
	thumbnail: 'https://raw.githubusercontent.com/puckzxz/NotAnotherAnimeTheme/master/image/header.jpg',
	developer: Puckzxz,
	tags: ['Background Image', 'Home Button', 'Colours', 'Addons'],
	meta: {
		name: 'NotAnotherAnimeTheme',
		author: 'puckzxz#2080',
		version: '2.2',
		description: 'An easily customizable and automatically updating theme.',
		invite: 'FdZhbjY',
		source: 'https://github.com/puckzxz/NotAnotherAnimeTheme'
	},
	imports: ['https://puckzxz.github.io/NotAnotherAnimeTheme/css/scsl.css'],
	fonts: [],
	variables: [
		{
			title: 'Background Image',
			icon: 'Photograph',
			inputs: [
				{
					type: 'image',
					details: {
						variable: 'background-image',
						start: 'https://i.imgur.com/kYW2H5C.jpg',
						value: '',
						title: 'Background Image'
					}
				}
			]
		},
		{
			title: 'Home button image',
			icon: 'Home',
			inputs: [
				{
					type: 'image',
					details: {
						variable: 'friends-icon',
						start: 'https://i.imgur.com/kYW2H5C.jpg',
						value: '',
						title: 'Home button image'
					}
				},
				{
					type: 'slider',
					details: {
						variable: 'friends-icon-zoom',
						value: 100,
						unit: '%',
						max: 200,
						step: 1,
						title: 'Zoom'
					}
				},
				{
					type: 'select',
					details: {
						variable: 'friends-icon-position',
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
						title: 'Image position'
					}
				}
			]
		},
		{
			title: 'Colours',
			icon: 'ColorSwatch',
			inputs: [
				{
					type: 'colour',
					details: {
						variable: 'main-color',
						value: 'rgb(67,181,129)',
						rule: true,
						type: 'RGB',
						title: 'Main'
					}
				},
				{
					type: 'colour',
					details: {
						variable: 'main-transparency',
						value: 'rgba(0, 0, 0, 0.8)',
						alpha: true,
						rule: true,
						type: 'RGB',
						title: 'Main transparency'
					}
				},
				{
					type: 'colour',
					details: {
						variable: 'hover-list-bg-color',
						value: 'rgba(0,0,0,0.15)',
						alpha: true,
						rule: true,
						type: 'RGB',
						title: 'Friends and members list background'
					}
				},
				{
					type: 'colour',
					details: {
						variable: 'border-lines-color',
						value: 'rgba(0,0,0,0.1)',
						alpha: true,
						rule: true,
						type: 'RGB',
						title: 'Message divider'
					}
				},
				{
					type: 'colour',
					details: {
						variable: 'scroll-bar-color',
						value: 'rgba(255,255,255,.15)',
						alpha: true,
						rule: true,
						type: 'RGB',
						title: 'Scrollbar'
					}
				},
				{
					type: 'colour',
					details: {
						variable: 'selected-text-voice-color',
						value: '#f6f6f7',
						type: 'HEX',
						title: 'Selected channel'
					}
				},
				{
					type: 'colour',
					details: {
						variable: 'channel-hover-text-color',
						value: 'rgba(255, 255, 255, 0.75)',
						alpha: true,
						rule: true,
						type: 'RGB',
						title: 'Hovered channel'
					}
				},
				{
					type: 'colour',
					details: {
						variable: 'unread-text-color',
						value: '67,181,129',
						alpha: true,
						rule: true,
						type: 'RGB',
						title: 'Unread text'
					}
				},
				{
					type: 'colour',
					details: {
						variable: 'user-popup-background',
						value: 'rgba(0,0,0,0.8)',
						alpha: true,
						rule: true,
						type: 'RGB',
						title: 'User popup background'
					}
				},
			]
		},
		{
			title: 'Others',
			icon: 'Cog',
			inputs: [
				{
					type: 'number',
					details: {
						variable: 'font-size',
						value: 16,
						unit: 'px',
						title: 'Chat font size'
					}
				},
				{
					type: 'text',
					details: {
						variable: 'unread-server-animation',
						value: 'rainbow',
						title: 'Unread server animation',
						hint: 'Replace it with "none" in order to remove any animations and use the main color instead'
					}
				}
			]
		}
	],
	addons: ['rs', 'columns', 'hsl']
}

export default theme;