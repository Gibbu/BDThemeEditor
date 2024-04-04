import type { Addon } from '$types/addon/FVUI';
import FeoreV from '$data/devs/FeoreV';

const addon: Addon = {
	name: 'Addon - MaterialYou',
	description: 'The theme color scheme adjusts to the accent color',
	developer: FeoreV,
	imports: ['https://feorev.github.io/Themes/Discord/FVUI/Addons/MaterialYou.css'],
	previewUrl: ['https://feorev.github.io/Themes/Discord/FVUI/Addons/MaterialYou.css'],
	group: 'MaterialYou',
	selector: 'MaterialYou',
	use: false,
	variables: [
        {
            type: 'slider',
            props: {
                variable: 'accentcolor-HUE',
                value: 210,
                max: 255,
                step: 1,
                title: 'Hue'
            }
        },
        {
            type: 'slider',
            props: {
                variable: 'accentcolor-SATURATION',
                value: 68,
                max: 255,
                unit: '%',
                step: 1,
                title: 'Saturation',
            }
        },
	]
};

export default addon;