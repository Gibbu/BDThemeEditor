import type {IAddon} from '$types/addon';
import Nyria from '$data/devs/nyria';

const addon: IAddon = {
	name: 'Discolored',
	description: `Colorize Discord's boring SVGs.`,
	developer: Nyria,
	imports: ['https://nyri4.github.io/Discolored/main.css'],
	previewUrl: ['https://nyri4.github.io/Discolored/main.css'],
	group: 'svgs',
	selector: 'discolored',
	use: false
}

export default addon;