import type {IAddon} from '$types/addon';
import DevilBro from '$data/devs/devilbro';

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
			details: {
				variable: 'columns',
				value: 3,
				min: 1,
				title: 'Number of columns',
				addon: true
			}
		},
		{
			type: 'number',
			details: {
				variable: 'guildgap',
				value: 3,
				min: 0,
				title: 'Server icon spacing',
				addon: true
			}
		},
		{
			type: 'select',
			details: {
				addon: true,
				variable: 'aligndms',
				value: '0',
				customValue: false,
				options: [
					{title: 'True', value: '0'},
					{title: 'False', value: '1'}
				],
				title: 'Align DMs'
			}
		}
	]
}

export default addon;