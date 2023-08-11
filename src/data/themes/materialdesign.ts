import type { ITheme } from '$types/theme';
import TheCommieAxolotl from '../devs/thecommieaxolotl';
import { hsl, discolored, columns, radialstatus } from '../addons';

const theme: ITheme = {
	name: 'MaterialDesign',
	thumbnail: 'https://raw.githubusercontent.com/TheCommieAxolotl/BetterDiscord-Stuff/main/MaterialDesign/assets/md.png',
	developer: TheCommieAxolotl,
	meta: {
		name: 'MaterialDesign',
		version: '0.9.9',
		author: 'TheCommieAxolotl#0001',
		authorId: '538487970408300544',
		description: "A clean theme inspired by Google's Material Design Guidelines.",
		source: 'https://github.com/TheCommieAxolotl/BetterDiscord-Stuff/tree/main/MaterialDesign',
		website: 'https://thecommieaxolotl.github.io/BetterDiscord-Stuff/',
		invite: 'g2KnUw7u7N',
		donate: 'https://github.com/sponsors/TheCommieAxolotl/'
	},
	preview: `
		@import url("https://thecommieaxolotl.github.io/BetterDiscord-Stuff/MaterialDesign/Clients/betterdiscord.css");
		@import url("https://discord-custom-covers.github.io/usrbg/dist/usrbg.css");
		@import url("https://thecommieaxolotl.github.io/BetterDiscord-Stuff/Imports/UserBadges.css");
		@import url("https://maendisease.github.io/BetterDiscordStuff/css/bettterInvites.css");
		@import url("https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap");
		@import url("https://fonts.googleapis.com/css2?family=Source Code Pro:wght@550&display=swap");
		:root {
			--version: "0.9.9";
			--version0_9_9: none;
			--font-primary: "Roboto", "Helvetica Neue", Helvetica, Arial, sans-serif;
			--font-code: "Source Code Pro";
			--01dpShadow: 0 2px 1px -1px rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 1px 3px 0 rgba(0, 0, 0, 0.12);
			--02dpShadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);
			--03dpShadow: 0 3px 3px -2px rgba(0, 0, 0, 0.2), 0 3px 4px 0 rgba(0, 0, 0, 0.14), 0 1px 8px 0 rgba(0, 0, 0, 0.12);
			--04dpShadow: 0 2px 4px -1px rgba(0, 0, 0, 0.2), 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12);
			--06dpShadow: 0 3px 5px -1px rgba(0, 0, 0, 0.2), 0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12);
			--08dpShadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);
			--12dpShadow: 0 7px 8px -4px rgba(0, 0, 0, 0.2), 0 12px 17px 2px rgba(0, 0, 0, 0.14), 0 5px 22px 4px rgba(0, 0, 0, 0.12);
			--16dpShadow: 0 8px 10px -5px rgba(0, 0, 0, 0.2), 0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12);
			--24dpShadow: 0 11px 15px -7px rgba(0, 0, 0, 0.2), 0 24px 38px 3px rgba(0, 0, 0, 0.14), 0 9px 46px 8px rgba(0, 0, 0, 0.12);
			--brand-experiment: hsla(var(--skin-accent-h, 264), calc(var(--saturation-factor, 1) * var(--skin-accent-s, 84%)), calc(0.75% * var(--skin-accent-l, 100)), calc(1% * var(--skin-accent-a, 100)));
			--brand-experiment-100: hsla(var(--skin-accent-h, 264), calc(var(--saturation-factor, 1) * var(--skin-accent-s, 84%)), calc(0.98% * var(--skin-accent-l, 100)), calc(1% * var(--skin-accent-a, 100)));
			--brand-experiment-130: hsla(var(--skin-accent-h, 264), calc(var(--saturation-factor, 1) * var(--skin-accent-s, 84%)), calc(0.961% * var(--skin-accent-l, 100)), calc(1% * var(--skin-accent-a, 100)));
			--brand-experiment-160: hsla(var(--skin-accent-h, 264), calc(var(--saturation-factor, 1) * var(--skin-accent-s, 84%)), calc(0.942% * var(--skin-accent-l, 100)), calc(1% * var(--skin-accent-a, 100)));
			--brand-experiment-200: hsla(var(--skin-accent-h, 264), calc(var(--saturation-factor, 1) * var(--skin-accent-s, 84%)), calc(0.923% * var(--skin-accent-l, 100)), calc(1% * var(--skin-accent-a, 100)));
			--brand-experiment-230: hsla(var(--skin-accent-h, 264), calc(var(--saturation-factor, 1) * var(--skin-accent-s, 84%)), calc(0.93% * var(--skin-accent-l, 100)), calc(1% * var(--skin-accent-a, 100)));
			--brand-experiment-260: hsla(var(--skin-accent-h, 264), calc(var(--saturation-factor, 1) * var(--skin-accent-s, 84%)), calc(0.884% * var(--skin-accent-l, 100)), calc(1% * var(--skin-accent-a, 100)));
			--brand-experiment-300: hsla(var(--skin-accent-h, 264), calc(var(--saturation-factor, 1) * var(--skin-accent-s, 84%)), calc(0.865% * var(--skin-accent-l, 100)), calc(1% * var(--skin-accent-a, 100)));
			--brand-experiment-330: hsla(var(--skin-accent-h, 264), calc(var(--saturation-factor, 1) * var(--skin-accent-s, 84%)), calc(0.846% * var(--skin-accent-l, 100)), calc(1% * var(--skin-accent-a, 100)));
			--brand-experiment-360: hsla(var(--skin-accent-h, 264), calc(var(--saturation-factor, 1) * var(--skin-accent-s, 84%)), calc(0.827% * var(--skin-accent-l, 100)), calc(1% * var(--skin-accent-a, 100)));
			--brand-experiment-400: hsla(var(--skin-accent-h, 264), calc(var(--saturation-factor, 1) * var(--skin-accent-s, 84%)), calc(0.88% * var(--skin-accent-l, 100)), calc(1% * var(--skin-accent-a, 100)));
			--brand-experiment-430: hsla(var(--skin-accent-h, 264), calc(var(--saturation-factor, 1) * var(--skin-accent-s, 84%)), calc(0.788% * var(--skin-accent-l, 100)), calc(1% * var(--skin-accent-a, 100)));
			--brand-experiment-460: hsla(var(--skin-accent-h, 264), calc(var(--saturation-factor, 1) * var(--skin-accent-s, 84%)), calc(0.769% * var(--skin-accent-l, 100)), calc(1% * var(--skin-accent-a, 100)));
			--brand-experiment-500: hsla(var(--skin-accent-h, 264), calc(var(--saturation-factor, 1) * var(--skin-accent-s, 84%)), calc(0.75% * var(--skin-accent-l, 100)), calc(1% * var(--skin-accent-a, 100)));
			--brand-experiment-530: hsla(var(--skin-accent-h, 264), calc(var(--saturation-factor, 1) * var(--skin-accent-s, 84%)), calc(0.69% * var(--skin-accent-l, 100)), calc(1% * var(--skin-accent-a, 100)));
			--brand-experiment-560: hsla(var(--skin-accent-h, 264), calc(var(--saturation-factor, 1) * var(--skin-accent-s, 84%)), calc(0.63% * var(--skin-accent-l, 100)), calc(1% * var(--skin-accent-a, 100)));
			--brand-experiment-600: hsla(var(--skin-accent-h, 264), calc(var(--saturation-factor, 1) * var(--skin-accent-s, 84%)), calc(0.57% * var(--skin-accent-l, 100)), calc(1% * var(--skin-accent-a, 100)));
			--brand-experiment-630: hsla(var(--skin-accent-h, 264), calc(var(--saturation-factor, 1) * var(--skin-accent-s, 84%)), calc(0.51% * var(--skin-accent-l, 100)), calc(1% * var(--skin-accent-a, 100)));
			--brand-experiment-660: hsla(var(--skin-accent-h, 264), calc(var(--saturation-factor, 1) * var(--skin-accent-s, 84%)), calc(0.45% * var(--skin-accent-l, 100)), calc(1% * var(--skin-accent-a, 100)));
			--brand-experiment-700: hsla(var(--skin-accent-h, 264), calc(var(--saturation-factor, 1) * var(--skin-accent-s, 84%)), calc(0.39% * var(--skin-accent-l, 100)), calc(1% * var(--skin-accent-a, 100)));
			--brand-experiment-730: hsla(var(--skin-accent-h, 264), calc(var(--saturation-factor, 1) * var(--skin-accent-s, 84%)), calc(0.33% * var(--skin-accent-l, 100)), calc(1% * var(--skin-accent-a, 100)));
			--brand-experiment-760: hsla(var(--skin-accent-h, 264), calc(var(--saturation-factor, 1) * var(--skin-accent-s, 84%)), calc(0.27% * var(--skin-accent-l, 100)), calc(1% * var(--skin-accent-a, 100)));
			--brand-experiment-800: hsla(var(--skin-accent-h, 264), calc(var(--saturation-factor, 1) * var(--skin-accent-s, 84%)), calc(0.21% * var(--skin-accent-l, 100)), calc(1% * var(--skin-accent-a, 100)));
			--brand-experiment-830: hsla(var(--skin-accent-h, 264), calc(var(--saturation-factor, 1) * var(--skin-accent-s, 84%)), calc(0.15% * var(--skin-accent-l, 100)), calc(1% * var(--skin-accent-a, 100)));
			--brand-experiment-860: hsla(var(--skin-accent-h, 264), calc(var(--saturation-factor, 1) * var(--skin-accent-s, 84%)), calc(0.9% * var(--skin-accent-l, 100)), calc(1% * var(--skin-accent-a, 100)));
			--brand-experiment-900: hsla(var(--skin-accent-h, 264), calc(var(--saturation-factor, 1) * var(--skin-accent-s, 84%)), calc(0.3% * var(--skin-accent-l, 100)), calc(1% * var(--skin-accent-a, 100)));
			--brand-experiment-05a: hsla(var(--skin-accent-h, 264), calc(var(--saturation-factor, 1) * var(--skin-accent-s, 84%)), calc(0.75% * var(--skin-accent-l, 100)), calc(0.0005 * var(--skin-accent-a, 100)));
			--brand-experiment-10a: hsla(var(--skin-accent-h, 264), calc(var(--saturation-factor, 1) * var(--skin-accent-s, 84%)), calc(0.75% * var(--skin-accent-l, 100)), calc(0.001 * var(--skin-accent-a, 100)));
			--brand-experiment-15a: hsla(var(--skin-accent-h, 264), calc(var(--saturation-factor, 1) * var(--skin-accent-s, 84%)), calc(0.75% * var(--skin-accent-l, 100)), calc(0.0015 * var(--skin-accent-a, 100)));
			--brand-experiment-20a: hsla(var(--skin-accent-h, 264), calc(var(--saturation-factor, 1) * var(--skin-accent-s, 84%)), calc(0.75% * var(--skin-accent-l, 100)), calc(0.002 * var(--skin-accent-a, 100)));
			--brand-experiment-25a: hsla(var(--skin-accent-h, 264), calc(var(--saturation-factor, 1) * var(--skin-accent-s, 84%)), calc(0.75% * var(--skin-accent-l, 100)), calc(0.0025 * var(--skin-accent-a, 100)));
			--brand-experiment-30a: hsla(var(--skin-accent-h, 264), calc(var(--saturation-factor, 1) * var(--skin-accent-s, 84%)), calc(0.75% * var(--skin-accent-l, 100)), calc(0.003 * var(--skin-accent-a, 100)));
			--brand-experiment-35a: hsla(var(--skin-accent-h, 264), calc(var(--saturation-factor, 1) * var(--skin-accent-s, 84%)), calc(0.75% * var(--skin-accent-l, 100)), calc(0.0035 * var(--skin-accent-a, 100)));
			--brand-experiment-40a: hsla(var(--skin-accent-h, 264), calc(var(--saturation-factor, 1) * var(--skin-accent-s, 84%)), calc(0.75% * var(--skin-accent-l, 100)), calc(0.004 * var(--skin-accent-a, 100)));
			--brand-experiment-45a: hsla(var(--skin-accent-h, 264), calc(var(--saturation-factor, 1) * var(--skin-accent-s, 84%)), calc(0.75% * var(--skin-accent-l, 100)), calc(0.0045 * var(--skin-accent-a, 100)));
			--brand-experiment-50a: hsla(var(--skin-accent-h, 264), calc(var(--saturation-factor, 1) * var(--skin-accent-s, 84%)), calc(0.75% * var(--skin-accent-l, 100)), calc(0.005 * var(--skin-accent-a, 100)));
			--brand-experiment-55a: hsla(var(--skin-accent-h, 264), calc(var(--saturation-factor, 1) * var(--skin-accent-s, 84%)), calc(0.75% * var(--skin-accent-l, 100)), calc(0.0055 * var(--skin-accent-a, 100)));
			--brand-experiment-60a: hsla(var(--skin-accent-h, 264), calc(var(--saturation-factor, 1) * var(--skin-accent-s, 84%)), calc(0.75% * var(--skin-accent-l, 100)), calc(0.006 * var(--skin-accent-a, 100)));
			--brand-experiment-65a: hsla(var(--skin-accent-h, 264), calc(var(--saturation-factor, 1) * var(--skin-accent-s, 84%)), calc(0.75% * var(--skin-accent-l, 100)), calc(0.0065 * var(--skin-accent-a, 100)));
			--brand-experiment-70a: hsla(var(--skin-accent-h, 264), calc(var(--saturation-factor, 1) * var(--skin-accent-s, 84%)), calc(0.75% * var(--skin-accent-l, 100)), calc(0.007 * var(--skin-accent-a, 100)));
			--brand-experiment-75a: hsla(var(--skin-accent-h, 264), calc(var(--saturation-factor, 1) * var(--skin-accent-s, 84%)), calc(0.75% * var(--skin-accent-l, 100)), calc(0.0075 * var(--skin-accent-a, 100)));
			--brand-experiment-80a: hsla(var(--skin-accent-h, 264), calc(var(--saturation-factor, 1) * var(--skin-accent-s, 84%)), calc(0.75% * var(--skin-accent-l, 100)), calc(0.008 * var(--skin-accent-a, 100)));
			--brand-experiment-85a: hsla(var(--skin-accent-h, 264), calc(var(--saturation-factor, 1) * var(--skin-accent-s, 84%)), calc(0.75% * var(--skin-accent-l, 100)), calc(0.0085 * var(--skin-accent-a, 100)));
			--brand-experiment-90a: hsla(var(--skin-accent-h, 264), calc(var(--saturation-factor, 1) * var(--skin-accent-s, 84%)), calc(0.75% * var(--skin-accent-l, 100)), calc(0.009 * var(--skin-accent-a, 100)));
			--brand-experiment-95a: hsla(var(--skin-accent-h, 264), calc(var(--saturation-factor, 1) * var(--skin-accent-s, 84%)), calc(0.75% * var(--skin-accent-l, 100)), calc(0.0095 * var(--skin-accent-a, 100)));
		}
		.theme-dark {
			--skin-name: "Default";
			--skin-author: "TheCommieAxolotl";
			--skin-accent-h: 264;
			--skin-accent-s: 84%;
			--skin-accent-l: 100;
			--skin-accent-a: 100;
			--skin-background-h: 0;
			--skin-background-s: 0%;
			--skin-background-l: 100;
			--skin-background-a: 100;
			--00dp: hsla(var(--skin-background-h, 0), calc(var(--saturation-factor, 1) * var(--skin-background-s, 0%)), calc(0.07% * var(--skin-background-l, 0)), calc(1% * var(--skin-background-a, 100)));
			--01dp: hsla(var(--skin-background-h, 0), calc(var(--saturation-factor, 1) * var(--skin-background-s, 0%)), calc(0.11% * var(--skin-background-l, 0)), calc(1% * var(--skin-background-a, 100)));
			--02dp: hsla(var(--skin-background-h, 0), calc(var(--saturation-factor, 1) * var(--skin-background-s, 0%)), calc(0.13% * var(--skin-background-l, 0)), calc(1% * var(--skin-background-a, 100)));
			--03dp: hsla(var(--skin-background-h, 0), calc(var(--saturation-factor, 1) * var(--skin-background-s, 0%)), calc(0.14% * var(--skin-background-l, 0)), calc(1% * var(--skin-background-a, 100)));
			--04dp: hsla(var(--skin-background-h, 0), calc(var(--saturation-factor, 1) * var(--skin-background-s, 0%)), calc(0.15% * var(--skin-background-l, 0)), calc(1% * var(--skin-background-a, 100)));
			--06dp: hsla(var(--skin-background-h, 0), calc(var(--saturation-factor, 1) * var(--skin-background-s, 0%)), calc(0.17% * var(--skin-background-l, 0)), calc(1% * var(--skin-background-a, 100)));
			--08dp: hsla(var(--skin-background-h, 0), calc(var(--saturation-factor, 1) * var(--skin-background-s, 0%)), calc(0.18% * var(--skin-background-l, 0)), calc(1% * var(--skin-background-a, 100)));
			--12dp: hsla(var(--skin-background-h, 0), calc(var(--saturation-factor, 1) * var(--skin-background-s, 0%)), calc(0.19% * var(--skin-background-l, 0)), calc(1% * var(--skin-background-a, 100)));
			--16dp: hsla(var(--skin-background-h, 0), calc(var(--saturation-factor, 1) * var(--skin-background-s, 0%)), calc(0.2% * var(--skin-background-l, 0)), calc(1% * var(--skin-background-a, 100)));
			--24dp: hsla(var(--skin-background-h, 0), calc(var(--saturation-factor, 1) * var(--skin-background-s, 0%)), calc(0.22% * var(--skin-background-l, 0)), calc(1% * var(--skin-background-a, 100)));
			--26dp: hsla(var(--skin-background-h, 0), calc(var(--saturation-factor, 1) * var(--skin-background-s, 0%)), calc(0.27% * var(--skin-background-l, 0)), calc(1% * var(--skin-background-a, 100)));
			--background-primary: var(--02dp); /* 02dp */
			--background-secondary: var(--01dp); /* 01dp */
			--background-mobile-secondary: var(--01dp); /* 01dp */
			--background-accent: var(--12dp); /* 12dp */
			--background-tertiary: var(--00dp); /* 00dp */
			--background-secondary-alt: var(--06dp); /* 06dp */
			--channeltextarea-background: var(--24dp); /* 24dp */
			--background-floating: var(--24dp); /* 24dp */
			--background-modifier-selected: var(--06dp); /* 06dp */
			--background-modifier-hover: var(--02dp); /* 02dp */
			--background-modifier-active: var(--04dp); /* 04dp */
			--background-mentioned: transparent;
			--background-mentioned-hover: #e7c21f04;
			--info-warning-foreground: hsl(54, calc(var(--saturation-factor, 1) * var(--skin-accent-s, 84%)), 75%);
			--scrollbar-thin-thumb: var(--12dp); /* 12dp */
			--scrollbar-thin-track: transparent;
			--scrollbar-auto-thumb: var(--12dp); /* 12dp */
			--scrollbar-auto-track: var(--04dp); /* 04dp */
			--input-background: var(--08dp); /* 08dp */
			--switch-checked-background: hsl(101, calc(var(--saturation-factor) * 54%), 27%);
			--switch-unchecked-background: #74796e33;
			--switch-unchecked-color: #74796e;
		}
		.theme-light {
			--skin-name: "Default Light";
			--skin-author: "TheCommieAxolotl";
			--skin-accent-h: 264;
			--skin-accent-s: 84%;
			--skin-accent-l: 100;
			--skin-accent-a: 100;
			--switch-checked-background: hsl(101, calc(var(--saturation-factor) * 54%), 27%);
			--switch-unchecked-background: #74796e33;
			--switch-unchecked-color: #74796e;
		}
	`,
	features: ['light', 'transparent', 'solid', 'font'],
	imports: [
		'https://discord-custom-covers.github.io/usrbg/dist/usrbg.css',
		'https://thecommieaxolotl.github.io/BetterDiscord-Stuff/Imports/UserBadges.css',
		'https://maendisease.github.io/BetterDiscordStuff/css/bettterInvites.css',
		'https://thecommieaxolotl.github.io/BetterDiscord-Stuff/MaterialDesign/Clients/betterdiscord.css'
	],
	fonts: [
		'https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap',
		'https://fonts.googleapis.com/css2?family=Source Code Pro:wght@550&display=swap'
	],
	varGroups: [':root', '.theme-dark', '.theme-light'],
	variables: [
		{
			title: 'Colours (Dark Mode)',
			icon: 'Moon',
			inputs: [
				{
					type: 'slider',
					varGroup: '.theme-dark',
					props: {
						variable: 'skin-accent-h',
						max: 360,
						min: 0,
						value: 264,
						title: 'Accent Hue',
						hint: 'The hue of the accent color.'
					}
				},
				{
					type: 'slider',
					varGroup: '.theme-dark',
					props: {
						variable: 'skin-accent-s',
						max: 100,
						min: 0,
						unit: '%',
						value: 84,
						title: 'Accent Saturation',
						hint: 'The saturation of the accent color.'
					}
				},
				{
					type: 'slider',
					varGroup: '.theme-dark',
					props: {
						variable: 'skin-accent-l',
						max: 100,
						min: 0,
						value: 100,
						title: 'Accent Lightness',
						hint: 'The lightness of the accent color.'
					}
				},
				{
					type: 'slider',
					varGroup: '.theme-dark',
					props: {
						variable: 'skin-accent-a',
						max: 100,
						min: 0,
						value: 100,
						title: 'Accent Alpha',
						hint: 'The opacity of the accent color.'
					}
				},
				{
					type: 'slider',
					varGroup: '.theme-dark',
					props: {
						variable: 'skin-background-h',
						max: 360,
						min: 0,
						value: 0,
						title: 'Background Hue',
						hint: 'The hue of the background color.'
					}
				},
				{
					type: 'slider',
					varGroup: '.theme-dark',
					props: {
						variable: 'skin-background-s',
						max: 100,
						min: 0,
						unit: '%',
						value: 0,
						title: 'Background Saturation',
						hint: 'The saturation of the background color.'
					}
				},
				{
					type: 'slider',
					varGroup: '.theme-dark',
					props: {
						variable: 'skin-background-l',
						max: 100,
						min: 0,
						value: 100,
						title: 'Background Lightness',
						hint: 'The lightness of the background color.'
					}
				},
				{
					type: 'slider',
					varGroup: '.theme-dark',
					props: {
						variable: 'skin-background-a',
						max: 100,
						min: 0,
						value: 100,
						title: 'Background Alpha',
						hint: 'The opacity of the background color.'
					}
				},
				{
					type: 'colour',
					varGroup: '.theme-dark',
					props: {
						type: 'HSL',
						title: 'Switch Checked Background',
						variable: 'switch-checked-background',
						value: 'hsl(101, calc(var(--saturation-factor) * 54%), 27%)'
					}
				},
				{
					type: 'colour',
					varGroup: '.theme-dark',
					props: {
						title: 'Switch Unchecked Background',
						type: 'HEX',
						variable: 'switch-unchecked-background',
						value: '#74796e33'
					}
				},
				{
					type: 'colour',
					varGroup: '.theme-dark',
					props: {
						title: 'Switch Unchecked Color',
						type: 'HEX',
						variable: 'switch-unchecked-color',
						value: '#74796e'
					}
				}
			]
		},
		{
			title: 'Colours (Light Mode)',
			icon: 'Sun',
			inputs: [
				{
					type: 'slider',
					varGroup: '.theme-light',
					props: {
						variable: 'skin-accent-h',
						max: 360,
						min: 0,
						value: 264,
						title: 'Accent Hue',
						hint: 'The hue of the accent color.'
					}
				},
				{
					type: 'slider',
					varGroup: '.theme-light',
					props: {
						variable: 'skin-accent-s',
						max: 100,
						min: 0,
						unit: '%',
						value: 84,
						title: 'Accent Saturation',
						hint: 'The saturation of the accent color.'
					}
				},
				{
					type: 'slider',
					varGroup: '.theme-light',
					props: {
						variable: 'skin-accent-l',
						max: 100,
						min: 0,
						value: 100,
						title: 'Accent Lightness',
						hint: 'The lightness of the accent color.'
					}
				},
				{
					type: 'slider',
					varGroup: '.theme-light',
					props: {
						variable: 'skin-accent-a',
						max: 100,
						min: 0,
						value: 100,
						title: 'Accent Alpha',
						hint: 'The opacity of the accent color.'
					}
				},
				{
					type: 'colour',
					varGroup: '.theme-light',
					props: {
						type: 'HSL',
						title: 'Switch Checked Background',
						variable: 'switch-checked-background',
						value: 'hsl(101, calc(var(--saturation-factor) * 54%), 27%)'
					}
				},
				{
					type: 'colour',
					varGroup: '.theme-light',
					props: {
						title: 'Switch Unchecked Background',
						type: 'HEX',
						variable: 'switch-unchecked-background',
						value: '#74796e33'
					}
				},
				{
					type: 'colour',
					varGroup: '.theme-light',
					props: {
						title: 'Switch Unchecked Color',
						type: 'HEX',
						variable: 'switch-unchecked-color',
						value: '#74796e'
					}
				}
			]
		},
		{
			title: 'Fonts',
			icon: 'ChatBubbleBottomCenterText',
			inputs: [
				{
					type: 'font',
					varGroup: ':root',
					props: {
						variable: 'font-primary',
						value: 'Roboto',
						title: 'Font',
						index: 0
					}
				},
				{
					type: 'font',
					varGroup: ':root',
					props: {
						variable: 'font-code',
						value: 'Source Code Pro',
						title: 'Code Font',
						index: 1
					}
				}
			]
		},
		{
			title: 'Floating Backgrounds',
			icon: 'Square2Stack',
			inputs: [
				{
					type: 'slider',
					props: {
						variable: 'floating-background-opacity',
						max: 100,
						min: 0,
						value: 100,
						title: 'Opacity',
						hint: 'The opacity of floating backgrounds.'
					}
				},
				{
					type: 'slider',
					props: {
						variable: 'floating-background-blur',
						max: 40,
						min: 0,
						unit: 'px',
						value: 0,
						title: 'Blur',
						hint: 'The blur of floating backgrounds.'
					}
				}
			]
		}
	],
	hiddenVars: [
		{
			variable: 'version',
			value: '"0.9.9"',
			varGroup: ':root'
		},
		{
			variable: 'version0_9_9',
			value: 'none',
			varGroup: ':root'
		},
		{
			variable: '01dpShadow',
			value: '0 2px 1px -1px rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 1px 3px 0 rgba(0, 0, 0, 0.12)',
			varGroup: ':root'
		},
		{
			variable: '02dpShadow',
			value: '0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12)',
			varGroup: ':root'
		},
		{
			variable: '03dpShadow',
			value: '0 3px 3px -2px rgba(0, 0, 0, 0.2), 0 3px 4px 0 rgba(0, 0, 0, 0.14), 0 1px 8px 0 rgba(0, 0, 0, 0.12)',
			varGroup: ':root'
		},
		{
			variable: '04dpShadow',
			value: '0 2px 4px -1px rgba(0, 0, 0, 0.2), 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12)',
			varGroup: ':root'
		},
		{
			variable: '06dpShadow',
			value: '0 3px 5px -1px rgba(0, 0, 0, 0.2), 0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12)',
			varGroup: ':root'
		},
		{
			variable: '08dpShadow',
			value:
				'0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12)',
			varGroup: ':root'
		},
		{
			variable: '12dpShadow',
			value:
				'0 7px 8px -4px rgba(0, 0, 0, 0.2), 0 12px 17px 2px rgba(0, 0, 0, 0.14), 0 5px 22px 4px rgba(0, 0, 0, 0.12)',
			varGroup: ':root'
		},
		{
			variable: '16dpShadow',
			value:
				'0 8px 10px -5px rgba(0, 0, 0, 0.2), 0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12)',
			varGroup: ':root'
		},
		{
			variable: '24dpShadow',
			value:
				'0 11px 15px -7px rgba(0, 0, 0, 0.2), 0 24px 38px 3px rgba(0, 0, 0, 0.14), 0 9px 46px 8px rgba(0, 0, 0, 0.12)',
			varGroup: ':root'
		},
		{
			variable: 'skin-name',
			value: '"Default"',
			varGroup: '.theme-dark'
		},
		{
			variable: 'skin-author',
			value: '"TheCommieAxolotl"',
			varGroup: '.theme-dark'
		},
		{
			variable: 'skin-name',
			value: '"Default Light"',
			varGroup: '.theme-light'
		},
		{
			variable: 'skin-author',
			value: '"TheCommieAxolotl"',
			varGroup: '.theme-light'
		},
		{
			variable: '00dp',
			value:
				'hsla(var(--skin-background-h, 0), calc(var(--saturation-factor, 1) * var(--skin-background-s, 0%)), calc(0.07% * var(--skin-background-l, 0)), calc(1% * var(--skin-background-a, 100)))',
			varGroup: '.theme-dark'
		},

		{
			variable: '01dp',
			value:
				'hsla(var(--skin-background-h, 0), calc(var(--saturation-factor, 1) * var(--skin-background-s, 0%)), calc(0.11% * var(--skin-background-l, 0)), calc(1% * var(--skin-background-a, 100)))',
			varGroup: '.theme-dark'
		},
		{
			variable: '02dp',
			value:
				'hsla(var(--skin-background-h, 0), calc(var(--saturation-factor, 1) * var(--skin-background-s, 0%)), calc(0.13% * var(--skin-background-l, 0)), calc(1% * var(--skin-background-a, 100)))',
			varGroup: '.theme-dark'
		},
		{
			variable: '03dp',
			value:
				'hsla(var(--skin-background-h, 0), calc(var(--saturation-factor, 1) * var(--skin-background-s, 0%)), calc(0.14% * var(--skin-background-l, 0)), calc(1% * var(--skin-background-a, 100)))',
			varGroup: '.theme-dark'
		},
		{
			variable: '04dp',
			value:
				'hsla(var(--skin-background-h, 0), calc(var(--saturation-factor, 1) * var(--skin-background-s, 0%)), calc(0.15% * var(--skin-background-l, 0)), calc(1% * var(--skin-background-a, 100)))',
			varGroup: '.theme-dark'
		},
		{
			variable: '06dp',
			value:
				'hsla(var(--skin-background-h, 0), calc(var(--saturation-factor, 1) * var(--skin-background-s, 0%)), calc(0.17% * var(--skin-background-l, 0)), calc(1% * var(--skin-background-a, 100)))',
			varGroup: '.theme-dark'
		},
		{
			variable: '08dp',
			value:
				'hsla(var(--skin-background-h, 0), calc(var(--saturation-factor, 1) * var(--skin-background-s, 0%)), calc(0.18% * var(--skin-background-l, 0)), calc(1% * var(--skin-background-a, 100)))',
			varGroup: '.theme-dark'
		},
		{
			variable: '12dp',
			value:
				'hsla(var(--skin-background-h, 0), calc(var(--saturation-factor, 1) * var(--skin-background-s, 0%)), calc(0.19% * var(--skin-background-l, 0)), calc(1% * var(--skin-background-a, 100)))',
			varGroup: '.theme-dark'
		},
		{
			variable: '16dp',
			value:
				'hsla(var(--skin-background-h, 0), calc(var(--saturation-factor, 1) * var(--skin-background-s, 0%)), calc(0.2% * var(--skin-background-l, 0)), calc(1% * var(--skin-background-a, 100)))',
			varGroup: '.theme-dark'
		},
		{
			variable: '24dp',
			value:
				'hsla(var(--skin-background-h, 0), calc(var(--saturation-factor, 1) * var(--skin-background-s, 0%)), calc(0.22% * var(--skin-background-l, 0)), calc(1% * var(--skin-background-a, 100)))',
			varGroup: '.theme-dark'
		},
		{
			variable: '26dp',
			value:
				'hsla(var(--skin-background-h, 0), calc(var(--saturation-factor, 1) * var(--skin-background-s, 0%)), calc(0.27% * var(--skin-background-l, 0)), calc(1% * var(--skin-background-a, 100)))',
			varGroup: '.theme-dark'
		},
		{
			variable: 'background-primary',
			value: 'var(--02dp)',
			varGroup: '.theme-dark'
		},
		{
			variable: 'background-secondary',
			value: 'var(--01dp)',
			varGroup: '.theme-dark'
		},
		{
			variable: 'background-mobile-secondary',
			value: 'var(--01dp)',
			varGroup: '.theme-dark'
		},
		{
			variable: 'background-accent',
			value: 'var(--12dp)',
			varGroup: '.theme-dark'
		},
		{
			variable: 'background-tertiary',
			value: 'var(--00dp)',
			varGroup: '.theme-dark'
		},
		{
			variable: 'background-secondary-alt',
			value: 'var(--06dp)',
			varGroup: '.theme-dark'
		},
		{
			variable: 'channeltextarea-background',
			value: 'var(--24dp)',
			varGroup: '.theme-dark'
		},
		{
			variable: 'background-floating',
			value: 'var(--24dp)',
			varGroup: '.theme-dark'
		},
		{
			variable: 'background-modifier-selected',
			value: 'var(--06dp)',
			varGroup: '.theme-dark'
		},
		{
			variable: 'background-modifier-hover',
			value: 'var(--02dp)',
			varGroup: '.theme-dark'
		},
		{
			variable: 'background-modifier-active',
			value: 'var(--04dp)',
			varGroup: '.theme-dark'
		},
		{
			variable: 'background-mentioned',
			value: 'transparent',
			varGroup: '.theme-dark'
		},
		{
			variable: 'background-mentioned-hover',
			value: '#e7c21f04',
			varGroup: '.theme-dark'
		},
		{
			variable: 'info-warning-foreground',
			value: 'hsl(54, calc(var(--saturation-factor, 1) * var(--skin-accent-s, 84%)), 75%)',
			varGroup: '.theme-dark'
		},
		{
			variable: 'scrollbar-thin-thumb',
			value: 'var(--12dp)',
			varGroup: '.theme-dark'
		},
		{
			variable: 'scrollbar-thin-track',
			value: 'transparent',
			varGroup: '.theme-dark'
		},
		{
			variable: 'scrollbar-auto-thumb',
			value: 'var(--12dp)',
			varGroup: '.theme-dark'
		},
		{
			variable: 'scrollbar-auto-track',
			value: 'var(--04dp)',
			varGroup: '.theme-dark'
		},
		{
			variable: 'input-background',
			value: 'var(--08dp)',
			varGroup: '.theme-dark'
		},
		{
			variable: 'switch-checked-background',
			value: 'hsl(101, calc(var(--saturation-factor) * 54%), 27%)',
			varGroup: '.theme-dark'
		},
		{
			variable: 'switch-unchecked-background',
			value: '#74796e33',
			varGroup: '.theme-dark'
		},
		{
			variable: 'switch-unchecked-color',
			value: '#74796e',
			varGroup: '.theme-dark'
		},
		{
			variable: 'brand-experiment',
			value:
				'hsla(var(--skin-accent-h, 264), calc(var(--saturation-factor, 1) * var(--skin-accent-s, 84%)), calc(0.75% * var(--skin-accent-l, 100)), calc(1% * var(--skin-accent-a, 100)))',
			varGroup: ':root'
		},
		{
			variable: 'brand-experiment-100',
			value:
				'hsla(var(--skin-accent-h, 264), calc(var(--saturation-factor, 1) * var(--skin-accent-s, 84%)), calc(0.98% * var(--skin-accent-l, 100)), calc(1% * var(--skin-accent-a, 100)))',
			varGroup: ':root'
		},
		{
			variable: 'brand-experiment-130',
			value:
				'hsla(var(--skin-accent-h, 264), calc(var(--saturation-factor, 1) * var(--skin-accent-s, 84%)), calc(0.961% * var(--skin-accent-l, 100)), calc(1% * var(--skin-accent-a, 100)))',
			varGroup: ':root'
		},
		{
			variable: 'brand-experiment-160',
			value:
				'hsla(var(--skin-accent-h, 264), calc(var(--saturation-factor, 1) * var(--skin-accent-s, 84%)), calc(0.942% * var(--skin-accent-l, 100)), calc(1% * var(--skin-accent-a, 100)))',
			varGroup: ':root'
		},
		{
			variable: 'brand-experiment-200',
			value:
				'hsla(var(--skin-accent-h, 264), calc(var(--saturation-factor, 1) * var(--skin-accent-s, 84%)), calc(0.923% * var(--skin-accent-l, 100)), calc(1% * var(--skin-accent-a, 100)))',
			varGroup: ':root'
		},
		{
			variable: 'brand-experiment-230',
			value:
				'hsla(var(--skin-accent-h, 264), calc(var(--saturation-factor, 1) * var(--skin-accent-s, 84%)), calc(0.903% * var(--skin-accent-l, 100)), calc(1% * var(--skin-accent-a, 100)))',
			varGroup: ':root'
		},
		{
			variable: 'brand-experiment-260',
			value:
				'hsla(var(--skin-accent-h, 264), calc(var(--saturation-factor, 1) * var(--skin-accent-s, 84%)), calc(0.884% * var(--skin-accent-l, 100)), calc(1% * var(--skin-accent-a, 100)))',
			varGroup: ':root'
		},
		{
			variable: 'brand-experiment-300',
			value:
				'hsla(var(--skin-accent-h, 264), calc(var(--saturation-factor, 1) * var(--skin-accent-s, 84%)), calc(0.865% * var(--skin-accent-l, 100)), calc(1% * var(--skin-accent-a, 100)))',
			varGroup: ':root'
		},
		{
			variable: 'brand-experiment-330',
			value:
				'hsla(var(--skin-accent-h, 264), calc(var(--saturation-factor, 1) * var(--skin-accent-s, 84%)), calc(0.846% * var(--skin-accent-l, 100)), calc(1% * var(--skin-accent-a, 100)))',
			varGroup: ':root'
		},
		{
			variable: 'brand-experiment-360',
			value:
				'hsla(var(--skin-accent-h, 264), calc(var(--saturation-factor, 1) * var(--skin-accent-s, 84%)), calc(0.827% * var(--skin-accent-l, 100)), calc(1% * var(--skin-accent-a, 100)))',
			varGroup: ':root'
		},
		{
			variable: 'brand-experiment-400',
			value:
				'hsla(var(--skin-accent-h, 264), calc(var(--saturation-factor, 1) * var(--skin-accent-s, 84%)), calc(0.80% * var(--skin-accent-l, 100)), calc(1% * var(--skin-accent-a, 100)))',
			varGroup: ':root'
		},
		{
			variable: 'brand-experiment-430',
			value:
				'hsla(var(--skin-accent-h, 264), calc(var(--saturation-factor, 1) * var(--skin-accent-s, 84%)), calc(0.78% * var(--skin-accent-l, 100)), calc(1% * var(--skin-accent-a, 100)))',
			varGroup: ':root'
		},
		{
			variable: 'brand-experiment-460',
			value:
				'hsla(var(--skin-accent-h, 264), calc(var(--saturation-factor, 1) * var(--skin-accent-s, 84%)), calc(0.769% * var(--skin-accent-l, 100)), calc(1% * var(--skin-accent-a, 100)))',
			varGroup: ':root'
		},
		{
			variable: 'brand-experiment-500',
			value:
				'hsla(var(--skin-accent-h, 264), calc(var(--saturation-factor, 1) * var(--skin-accent-s, 84%)), calc(00.75% * var(--skin-accent-l, 100)), calc(1% * var(--skin-accent-a, 100)))',
			varGroup: ':root'
		},
		{
			variable: 'brand-experiment-530',
			value:
				'hsla(var(--skin-accent-h, 264), calc(var(--saturation-factor, 1) * var(--skin-accent-s, 84%)), calc(00.69% * var(--skin-accent-l, 100)), calc(1% * var(--skin-accent-a, 100)))',
			varGroup: ':root'
		},
		{
			variable: 'brand-experiment-560',
			value:
				'hsla(var(--skin-accent-h, 264), calc(var(--saturation-factor, 1) * var(--skin-accent-s, 84%)), calc(00.63% * var(--skin-accent-l, 100)), calc(1% * var(--skin-accent-a, 100)))',
			varGroup: ':root'
		},
		{
			variable: 'brand-experiment-600',
			value:
				'hsla(var(--skin-accent-h, 264), calc(var(--saturation-factor, 1) * var(--skin-accent-s, 84%)), calc(00.57% * var(--skin-accent-l, 100)), calc(1% * var(--skin-accent-a, 100)))',
			varGroup: ':root'
		},
		{
			variable: 'brand-experiment-630',
			value:
				'hsla(var(--skin-accent-h, 264), calc(var(--saturation-factor, 1) * var(--skin-accent-s, 84%)), calc(00.51% * var(--skin-accent-l, 100)), calc(1% * var(--skin-accent-a, 100)))',
			varGroup: ':root'
		},
		{
			variable: 'brand-experiment-660',
			value:
				'hsla(var(--skin-accent-h, 264), calc(var(--saturation-factor, 1) * var(--skin-accent-s, 84%)), calc(00.45% * var(--skin-accent-l, 100)), calc(1% * var(--skin-accent-a, 100)))',
			varGroup: ':root'
		},
		{
			variable: 'brand-experiment-700',
			value:
				'hsla(var(--skin-accent-h, 264), calc(var(--saturation-factor, 1) * var(--skin-accent-s, 84%)), calc(00.39% * var(--skin-accent-l, 100)), calc(1% * var(--skin-accent-a, 100)))',
			varGroup: ':root'
		},
		{
			variable: 'brand-experiment-730',
			value:
				'hsla(var(--skin-accent-h, 264), calc(var(--saturation-factor, 1) * var(--skin-accent-s, 84%)), calc(00.33% * var(--skin-accent-l, 100)), calc(1% * var(--skin-accent-a, 100)))',
			varGroup: ':root'
		},
		{
			variable: 'brand-experiment-760',
			value:
				'hsla(var(--skin-accent-h, 264), calc(var(--saturation-factor, 1) * var(--skin-accent-s, 84%)), calc(00.27% * var(--skin-accent-l, 100)), calc(1% * var(--skin-accent-a, 100)))',
			varGroup: ':root'
		},
		{
			variable: 'brand-experiment-800',
			value:
				'hsla(var(--skin-accent-h, 264), calc(var(--saturation-factor, 1) * var(--skin-accent-s, 84%)), calc(00.21% * var(--skin-accent-l, 100)), calc(1% * var(--skin-accent-a, 100)))',
			varGroup: ':root'
		},
		{
			variable: 'brand-experiment-830',
			value:
				'hsla(var(--skin-accent-h, 264), calc(var(--saturation-factor, 1) * var(--skin-accent-s, 84%)), calc(00.15% * var(--skin-accent-l, 100)), calc(1% * var(--skin-accent-a, 100)))',
			varGroup: ':root'
		},
		{
			variable: 'brand-experiment-860',
			value:
				'hsla(var(--skin-accent-h, 264), calc(var(--saturation-factor, 1) * var(--skin-accent-s, 84%)), calc(00.9% * var(--skin-accent-l, 100)), calc(1% * var(--skin-accent-a, 100)))',
			varGroup: ':root'
		},
		{
			variable: 'brand-experiment-900',
			value:
				'hsla(var(--skin-accent-h, 264), calc(var(--saturation-factor, 1) * var(--skin-accent-s, 84%)), calc(00.3% * var(--skin-accent-l, 100)), calc(1% * var(--skin-accent-a, 100)))',
			varGroup: ':root'
		},
		{
			variable: 'brand-experiment-05a',
			value:
				'hsla(var(--skin-accent-h, 264), calc(var(--saturation-factor, 1) * var(--skin-accent-s, 84%)), calc(00.75% * var(--skin-accent-l, 100)), calc(0.0005 * var(--skin-accent-a, 100)))',
			varGroup: ':root'
		},
		{
			variable: 'brand-experiment-10a',
			value:
				'hsla(var(--skin-accent-h, 264), calc(var(--saturation-factor, 1) * var(--skin-accent-s, 84%)), calc(00.75% * var(--skin-accent-l, 100)), calc(0.001 * var(--skin-accent-a, 100)))',
			varGroup: ':root'
		},
		{
			variable: 'brand-experiment-15a',
			value:
				'hsla(var(--skin-accent-h, 264), calc(var(--saturation-factor, 1) * var(--skin-accent-s, 84%)), calc(00.75% * var(--skin-accent-l, 100)), calc(0.0015 * var(--skin-accent-a, 100)))',
			varGroup: ':root'
		},
		{
			variable: 'brand-experiment-20a',
			value:
				'hsla(var(--skin-accent-h, 264), calc(var(--saturation-factor, 1) * var(--skin-accent-s, 84%)), calc(00.75% * var(--skin-accent-l, 100)), calc(0.002 * var(--skin-accent-a, 100)))',
			varGroup: ':root'
		},
		{
			variable: 'brand-experiment-25a',
			value:
				'hsla(var(--skin-accent-h, 264), calc(var(--saturation-factor, 1) * var(--skin-accent-s, 84%)), calc(00.75% * var(--skin-accent-l, 100)), calc(0.0025 * var(--skin-accent-a, 100)))',
			varGroup: ':root'
		},
		{
			variable: 'brand-experiment-30a',
			value:
				'hsla(var(--skin-accent-h, 264), calc(var(--saturation-factor, 1) * var(--skin-accent-s, 84%)), calc(00.75% * var(--skin-accent-l, 100)), calc(0.003 * var(--skin-accent-a, 100)))',
			varGroup: ':root'
		},
		{
			variable: 'brand-experiment-35a',
			value:
				'hsla(var(--skin-accent-h, 264), calc(var(--saturation-factor, 1) * var(--skin-accent-s, 84%)), calc(00.75% * var(--skin-accent-l, 100)), calc(0.0035 * var(--skin-accent-a, 100)))',
			varGroup: ':root'
		},
		{
			variable: 'brand-experiment-40a',
			value:
				'hsla(var(--skin-accent-h, 264), calc(var(--saturation-factor, 1) * var(--skin-accent-s, 84%)), calc(00.75% * var(--skin-accent-l, 100)), calc(0.004 * var(--skin-accent-a, 100)))',
			varGroup: ':root'
		},
		{
			variable: 'brand-experiment-45a',
			value:
				'hsla(var(--skin-accent-h, 264), calc(var(--saturation-factor, 1) * var(--skin-accent-s, 84%)), calc(00.75% * var(--skin-accent-l, 100)), calc(0.0045 * var(--skin-accent-a, 100)))',
			varGroup: ':root'
		},
		{
			variable: 'brand-experiment-50a',
			value:
				'hsla(var(--skin-accent-h, 264), calc(var(--saturation-factor, 1) * var(--skin-accent-s, 84%)), calc(00.75% * var(--skin-accent-l, 100)), calc(0.005 * var(--skin-accent-a, 100)))',
			varGroup: ':root'
		},
		{
			variable: 'brand-experiment-55a',
			value:
				'hsla(var(--skin-accent-h, 264), calc(var(--saturation-factor, 1) * var(--skin-accent-s, 84%)), calc(00.75% * var(--skin-accent-l, 100)), calc(0.0055 * var(--skin-accent-a, 100)))',
			varGroup: ':root'
		},
		{
			variable: 'brand-experiment-60a',
			value:
				'hsla(var(--skin-accent-h, 264), calc(var(--saturation-factor, 1) * var(--skin-accent-s, 84%)), calc(00.75% * var(--skin-accent-l, 100)), calc(0.006 * var(--skin-accent-a, 100)))',
			varGroup: ':root'
		},
		{
			variable: 'brand-experiment-65a',
			value:
				'hsla(var(--skin-accent-h, 264), calc(var(--saturation-factor, 1) * var(--skin-accent-s, 84%)), calc(00.75% * var(--skin-accent-l, 100)), calc(0.0065 * var(--skin-accent-a, 100)))',
			varGroup: ':root'
		},
		{
			variable: 'brand-experiment-70a',
			value:
				'hsla(var(--skin-accent-h, 264), calc(var(--saturation-factor, 1) * var(--skin-accent-s, 84%)), calc(00.75% * var(--skin-accent-l, 100)), calc(0.007 * var(--skin-accent-a, 100)))',
			varGroup: ':root'
		},
		{
			variable: 'brand-experiment-75a',
			value:
				'hsla(var(--skin-accent-h, 264), calc(var(--saturation-factor, 1) * var(--skin-accent-s, 84%)), calc(00.75% * var(--skin-accent-l, 100)), calc(0.0075 * var(--skin-accent-a, 100)))',
			varGroup: ':root'
		},
		{
			variable: 'brand-experiment-80a',
			value:
				'hsla(var(--skin-accent-h, 264), calc(var(--saturation-factor, 1) * var(--skin-accent-s, 84%)), calc(00.75% * var(--skin-accent-l, 100)), calc(0.008 * var(--skin-accent-a, 100)))',
			varGroup: ':root'
		},
		{
			variable: 'brand-experiment-85a',
			value:
				'hsla(var(--skin-accent-h, 264), calc(var(--saturation-factor, 1) * var(--skin-accent-s, 84%)), calc(00.75% * var(--skin-accent-l, 100)), calc(0.0085 * var(--skin-accent-a, 100)))',
			varGroup: ':root'
		},
		{
			variable: 'brand-experiment-90a',
			value:
				'hsla(var(--skin-accent-h, 264), calc(var(--saturation-factor, 1) * var(--skin-accent-s, 84%)), calc(00.75% * var(--skin-accent-l, 100)), calc(0.009 * var(--skin-accent-a, 100)))',
			varGroup: ':root'
		},
		{
			variable: 'brand-experiment-95a',
			value:
				'hsla(var(--skin-accent-h, 264), calc(var(--saturation-factor, 1) * var(--skin-accent-s, 84%)), calc(00.75% * var(--skin-accent-l, 100)), calc(0.0095 * var(--skin-accent-a, 100)))',
			varGroup: ':root'
		}
	],
	addons: [hsl, discolored, columns, radialstatus]
};

export default theme;
