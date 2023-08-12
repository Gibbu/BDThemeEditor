import type { Addon } from '$types/addon';
import Gibbu from '../devs/gibbu';

const addon: Addon = {
	name: 'RadialStatus',
	description: 'Changes the status icons to wrap around the avatar.',
	developer: Gibbu,
	imports: ['https://discordstyles.github.io/RadialStatus/dist/RadialStatus.css'],
	previewUrl: ['https://discordstyles.github.io/RadialStatus/RadialStatus.theme.css'],
	group: 'avatar',
	selector: 'rs',
	use: false,
	variables: [
		{
			type: 'slider',
			props: {
				variable: 'rs-small-spacing',
				value: 2,
				unit: 'px',
				max: 10,
				step: 1,
				title: 'Small avatar spacing',
				hint: 'Chat, members, dms'
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
				hint: 'User popout'
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
				hint: 'User profiles'
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
				hint: 'Thickness of the status border for members list/dms'
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
				hint: 'Thickness of the status border for User popout'
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
				hint: 'Thickness of the status border for User profile'
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
				hint: '0% = Square | 50% = Circle'
			}
		},
		{
			type: 'colour',
			props: {
				variable: 'rs-online-color',
				value: '#43b581',
				type: 'HEX',
				title: 'Online status colour'
			}
		},
		{
			type: 'colour',
			props: {
				variable: 'rs-idle-color',
				value: '#faa61a',
				type: 'HEX',
				title: 'Idle status colour'
			}
		},
		{
			type: 'colour',
			props: {
				variable: 'rs-dnd-color',
				value: '#f04747',
				type: 'HEX',
				title: 'Do not disturb status colour'
			}
		},
		{
			type: 'colour',
			props: {
				variable: 'rs-offline-color',
				value: '#636b75',
				type: 'HEX',
				title: 'Offline status colour'
			}
		},
		{
			type: 'colour',
			props: {
				variable: 'rs-streaming-color',
				value: '#643da7',
				type: 'HEX',
				title: 'Streaming status colour'
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
				title: 'Phone indicator visibility'
			}
		}
	],
	hiddenVars: [
		{
			variable: 'rs-invisible-color',
			value: '#747f8d'
		}
	]
};

export default addon;
