import CapnKitten from '../devs/capnkitten';
import { columns, hsl, radialstatus, discolored } from '../addons';

import type { Theme } from '$types/theme';

const theme: Theme = {
	name: 'Material Discord',
	thumbnail: 'https://user-images.githubusercontent.com/4013216/216792441-cc02a2fc-d175-432d-af75-81975d75e65e.png',
	developer: CapnKitten,
	meta: {
		name: 'Material Discord',
		version: '1.0.6.3',
		description: `A theme based on Google's Material Design`,
		author: 'CapnKitten',
		website: 'http://github.com/CapnKitten',
		source: 'https://github.com/CapnKitten/BetterDiscord/blob/master/Themes/Material-Discord/css/source.css',
		donate: 'https://paypal.me/capnkitten',
		invite: 'jzJkA6Z'
	},
	preview: `
		@import url(https://capnkitten.github.io/BetterDiscord/Themes/Material-Discord/css/source.css);
		:root {
			--accent-hue: 224;
			--accent-saturation: 71%;
			--accent-lightness: 61%;
			--accent-text-color: #fff;
			--accent-button-action: #fff; /*	-	*/
			--avatar-radius: 50%; /*	-	*/
			--message-radius: 19px;
			--message-padding-top: 8px;
			--message-padding-side: 12px; /*	-	*/
			--media-radius: 19px; /*	-	*/
			--card-radius: 8px;
			--card-radius-big: 18px; /*	-	*/
			--popout-radius: 8px;
			--popout-radius-big: 18px;
		}
	`,
	features: ['solid', 'addons', 'light'],
	imports: ['https://capnkitten.github.io/BetterDiscord/Themes/Material-Discord/css/source.css'],
	fonts: [],
	variables: [
		{
			title: 'Accent colours',
			icon: 'Swatch',
			inputs: [
				{
					type: 'slider',
					props: {
						variable: 'accent-hue',
						max: 360,
						value: 224,
						title: 'Hue degree'
					}
				},
				{
					type: 'slider',
					props: {
						variable: 'accent-saturation',
						max: 100,
						value: 71,
						title: 'Saturation',
						unit: '%'
					}
				},
				{
					type: 'slider',
					props: {
						variable: 'accent-lightness',
						max: 100,
						value: 61,
						title: 'Lightness',
						unit: '%'
					}
				},
				{
					type: 'colour',
					props: {
						variable: 'accent-text-color',
						type: 'HEX',
						value: '#fff',
						title: 'Accent text colour'
					}
				}
			]
		},
		{
			title: 'Sizing',
			icon: 'ArrowsRightLeft',
			inputs: [
				{
					type: 'slider',
					props: {
						variable: 'avatar-radius',
						value: 50,
						max: 50,
						title: 'Avatar roundness',
						unit: '%',
						hint: 'Roundness for servers and avatars'
					}
				},
				{
					type: 'divider',
					props: {}
				},
				{
					type: 'slider',
					props: {
						variable: 'message-radius',
						value: 19,
						max: 20,
						title: 'Message roundness',
						unit: 'px'
					}
				},
				{
					type: 'number',
					props: {
						variable: 'message-padding-top',
						value: 8,
						title: 'Message top padding',
						unit: 'px'
					}
				},
				{
					type: 'number',
					props: {
						variable: 'message-padding-side',
						value: 12,
						title: 'Message side padding',
						unit: 'px'
					}
				},
				{
					type: 'divider',
					props: {}
				},
				{
					type: 'number',
					props: {
						variable: 'media-radius',
						value: 19,
						title: 'Chat media radius',
						unit: 'px',
						hint: 'Embeds, videos, uploads, ect...'
					}
				},
				{
					type: 'divider',
					props: {}
				},
				{
					type: 'number',
					props: {
						variable: 'card-radius',
						value: 8,
						title: 'Card roundness',
						unit: 'px',
						hint: 'Code blocks & mentions.'
					}
				},
				{
					type: 'number',
					props: {
						variable: 'card-radius-big',
						value: 18,
						title: 'Big card roundness',
						unit: 'px',
						hint: 'App roundness'
					}
				}
			]
		},
		{
			title: 'Popout',
			icon: 'Square2Stack',
			inputs: [
				{
					type: 'number',
					props: {
						variable: 'popout-radius',
						value: 8,
						title: 'Popout roundness',
						unit: 'px',
						hint: 'Context menus, status picker, ect...'
					}
				},
				{
					type: 'number',
					props: {
						variable: 'popout-radius-big',
						value: 18,
						title: 'Big popout radius',
						unit: 'px',
						hint: 'Profiles, modals, user popout.'
					}
				}
			]
		}
	],
	addons: [columns, hsl, radialstatus, discolored]
};

export default theme;
