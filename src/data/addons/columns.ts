import type { IAddon } from '$types/addon';
import DevilBro from '../devs/devilbro';

const addon: IAddon = {
	name: 'ServerColumns',
	description: 'Changes the Server List to a gridlike container to allow servers to be displayed in columns.',
	developer: DevilBro,
	imports: ['https://mwittrien.github.io/BetterDiscordAddons/Themes/ServerColumns/ServerColumns.css'],
	previewUrl: ['https://mwittrien.github.io/BetterDiscordAddons/Themes/ServerColumns/ServerColumns.theme.css'],
	group: 'serverlist',
	selector: 'columns',
	use: false,
	variables: [
		{
			type: 'number',
			props: {
				variable: 'columns',
				value: 3,
				min: 1,
				title: 'Number of columns',
				addon: true
			}
		},
		{
			type: 'number',
			props: {
				variable: 'guildgap',
				value: 3,
				min: 0,
				title: 'Server icon spacing',
				addon: true
			}
		},
		{
			type: 'select',
			props: {
				addon: true,
				variable: 'aligndms',
				value: '0',
				custom: false,
				options: [
					{ label: 'True', value: '0' },
					{ label: 'False', value: '1' }
				],
				title: 'Align DMs'
			}
		}
	]
};

export default addon;
