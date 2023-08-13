import CapnKitten from '../devs/capnkitten';
import { columns, hsl, radialstatus, discolored } from '../addons';

import type { Theme } from '$types/theme';

const theme: Theme = {
	name: 'Translucence',
	thumbnail: 'https://user-images.githubusercontent.com/4013216/125158359-b07aec80-e13e-11eb-8a85-01e49d772192.png',
	developer: CapnKitten,
	meta: {
		name: 'Translucence',
		version: '1.0.6.3',
		description: 'A translucent/frosted glass Discord theme',
		author: 'CapnKitten',
		website: 'http://github.com/CapnKitten',
		source: 'https://github.com/CapnKitten/BetterDiscord/blob/master/Themes/Translucence/css/source.css',
		donate: 'https://paypal.me/capnkitten',
		invite: 'jzJkA6Z'
	},
	preview: `
		@import url(https://capnkitten.github.io/BetterDiscord/Themes/Translucence/css/source.css);
		:root {
			--app-bg: url(https://i.imgur.com/bgmVeyt.jpg);
			--app-blur: 6px;
			--app-margin: 24px;
			--app-radius: 8px; /*	-	*/
			--accent-hue: 156;
			--accent-saturation: 77.5%;
			--accent-lightness: 47.1%;
			--accent-opacity: 1;
			--accent-text-color: #000; /*	-	*/
			--sidebar-color: rgba(0,0,0,0.4);
			--main-content-color: rgba(0,0,0,0.2); /*	-	*/
			--message-color: rgba(0,0,0,0.4);
			--message-radius: 8px;
			--message-padding-top: 8px;
			--message-padding-side: 8px; /*	-	*/
			--reply-hue: 226;
			--reply-saturation: 77.4%;
			--reply-lightness: 61.8%;
			--reply-opacity: 1; /*	-	*/
			--textarea-color: 255,255,255;
			--textarea-alpha: 0.1;
			--textarea-alpha-focus: 0.15;
			--textarea-text-color: #fff;
			--textarea-radius: 22px;  /*	-	*/
			--card-color: rgba(0,0,0,0.4);
			--card-color-hover: rgba(0,0,0,0.5);
			--card-color-select: rgba(0,0,0,0.7); /*	-	*/
			--button-height: 32px;
			--button-padding: 0 16px;
			--button-action-color: #000;
			--button-radius: 16px; /*	-	*/
			--interactive-normal: #aaa;
			--interactive-hover: #ddd;
			--interactive-active: #fff;
			--interactive-muted: #777; /*	-	*/
			--background-modifier-hover: rgba(255,255,255,0.075);
			--background-modifier-selected: rgba(255,255,255,0.125);
		}
	`,
	features: ['background', 'addons', 'transparent'],
	imports: ['https://capnkitten.github.io/BetterDiscord/Themes/Translucence/css/source.css'],
	fonts: [],
	variables: [
		{
			title: 'App',
			description: 'Options to edit the app in general.',
			icon: 'Photo',
			inputs: [
				{
					type: 'image',
					props: {
						variable: 'app-bg',
						start: 'https://i.imgur.com/bgmVeyt.jpg',
						value: '',
						title: 'Background Image'
					}
				},
				{
					type: 'slider',
					props: {
						variable: 'app-blur',
						max: 50,
						value: 6,
						title: 'Blur',
						unit: 'px'
					}
				},
				{
					type: 'number',
					props: {
						variable: 'app-margin',
						value: 24,
						title: 'App margin',
						unit: 'px',
						hint: 'The spacing around the Discord app and the window.'
					}
				},
				{
					type: 'number',
					props: {
						variable: 'app-radius',
						value: 8,
						title: 'App radius',
						unit: 'px',
						hint: 'The roundness of the Discord app'
					}
				}
			]
		},
		{
			title: 'Accent',
			icon: 'Swatch',
			description: 'The colour used around the Discord app.',
			inputs: [
				{
					type: 'slider',
					props: {
						variable: 'accent-hue',
						max: 360,
						title: 'Hue',
						value: 156
					}
				},
				{
					type: 'slider',
					props: {
						variable: 'accent-saturation',
						max: 100,
						value: 77,
						title: 'Saturation',
						unit: '%'
					}
				},
				{
					type: 'slider',
					props: {
						variable: 'accent-lightness',
						max: 100,
						value: 47,
						title: 'Lightness',
						unit: '%'
					}
				},
				{
					type: 'slider',
					props: {
						variable: 'accent-opacity',
						max: 1,
						value: 1,
						title: 'Opacity',
						step: 0.01
					}
				}
			]
		},
		{
			title: 'Colours',
			icon: 'ListBullet',
			inputs: [
				{
					type: 'colour',
					props: {
						variable: 'sidebar-color',
						type: 'RGB',
						value: 'rgba(0,0,0,0.4)',
						title: 'Sidebar colour',
						alpha: true,
						rule: true
					}
				},
				{
					type: 'colour',
					props: {
						variable: 'main-content-color',
						type: 'RGB',
						value: 'rgba(0,0,0,0.2)',
						title: 'Content area colour',
						alpha: true,
						rule: true
					}
				},
				{
					type: 'divider',
					props: {}
				},
				{
					type: 'colour',
					props: {
						variable: 'interactive-normal',
						type: 'HEX',
						value: '#aaa',
						title: 'Normal text'
					}
				},
				{
					type: 'colour',
					props: {
						variable: 'interactive-hover',
						type: 'HEX',
						value: '#ddd',
						title: 'Hover text'
					}
				},
				{
					type: 'colour',
					props: {
						variable: 'interactive-active',
						type: 'HEX',
						value: '#fff',
						title: 'Active text'
					}
				},
				{
					type: 'colour',
					props: {
						variable: 'interactive-muted',
						type: 'HEX',
						value: '#777',
						title: 'Muted text'
					}
				},
				{
					type: 'divider',
					props: {}
				},
				{
					type: 'colour',
					props: {
						variable: 'background-modifier-hover',
						type: 'RGB',
						value: 'rgba(255,255,255,0.075)',
						title: 'Hover background',
						alpha: true,
						rule: true
					}
				},
				{
					type: 'colour',
					props: {
						variable: 'background-modifier-selected',
						type: 'RGB',
						value: 'rgba(255,255,255,0.125)',
						title: 'Selected backgrounds',
						alpha: true,
						rule: true
					}
				}
			]
		},
		{
			title: 'Messages',
			icon: 'ChatBubbleLeft',
			inputs: [
				{
					type: 'colour',
					props: {
						variable: 'message-color',
						type: 'RGB',
						value: 'rgba(0,0,0,0.4)',
						title: 'Message color',
						rule: true,
						alpha: true
					}
				},
				{
					type: 'number',
					props: {
						variable: 'message-radius',
						value: 8,
						title: 'Message roundness',
						unit: 'px'
					}
				},
				{
					type: 'number',
					props: {
						variable: 'message-padding-top',
						value: 8,
						title: 'Padding top',
						unit: 'px'
					}
				},
				{
					type: 'number',
					props: {
						variable: 'message-padding-side',
						value: 8,
						title: 'Padding sides',
						unit: 'px'
					}
				},
				{
					type: 'divider',
					props: {
						title: 'Reply colours'
					}
				},
				{
					type: 'slider',
					props: {
						variable: 'reply-hue',
						max: 360,
						value: 226,
						title: 'Reply hue'
					}
				},
				{
					type: 'slider',
					props: {
						variable: 'reply-saturation',
						max: 100,
						value: 77,
						title: 'Saturation',
						unit: '%'
					}
				},
				{
					type: 'slider',
					props: {
						variable: 'reply-lightness',
						max: 100,
						value: 61,
						title: 'Lightness',
						unit: '%'
					}
				},
				{
					type: 'slider',
					props: {
						variable: 'reply-opacity',
						max: 1,
						value: 1,
						title: 'Opacity',
						step: 0.01
					}
				}
			]
		},
		{
			title: 'Textbox',
			icon: 'Envelope',
			description: 'The colour for all textboxes',
			inputs: [
				{
					type: 'colour',
					props: {
						variable: 'textarea-color',
						type: 'RGB',
						value: '255,255,255',
						title: 'Colour'
					}
				},
				{
					type: 'slider',
					props: {
						variable: 'textarea-alpha',
						max: 1,
						value: 0.1,
						title: 'Opacity',
						step: 0.01
					}
				},
				{
					type: 'slider',
					props: {
						variable: 'textarea-alpha-focus',
						max: 1,
						value: 0.15,
						title: 'Focus opacity',
						step: 0.01
					}
				},
				{
					type: 'number',
					props: {
						variable: 'textarea-radius',
						value: 22,
						title: 'Roundness',
						unit: 'px'
					}
				}
			]
		},
		{
			title: 'Cards',
			icon: 'Square2Stack',
			inputs: [
				{
					type: 'colour',
					props: {
						variable: 'card-color',
						type: 'RGB',
						value: 'rgba(0,0,0,0.4)',
						title: 'Colour',
						rule: true,
						alpha: true
					}
				},
				{
					type: 'colour',
					props: {
						variable: 'card-color-hover',
						type: 'RGB',
						value: 'rgba(0,0,0,0.5)',
						title: 'Hover state',
						rule: true,
						alpha: true
					}
				},
				{
					type: 'colour',
					props: {
						variable: 'card-color-select',
						type: 'RGB',
						value: 'rgba(0,0,0,0.7)',
						title: 'Selected state',
						rule: true,
						alpha: true
					}
				}
			]
		}
	],
	addons: [columns, hsl, radialstatus, discolored],
	hiddenVars: [
		{ variable: 'button-height', value: '32px' },
		{ variable: 'button-padding', value: '0 16px' },
		{ variable: 'button-radius', value: '16px' }
	]
};

export default theme;
