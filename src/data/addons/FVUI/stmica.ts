import type { Addon } from '$types/addon/FVUI';
import FeoreV from '$data/devs/FeoreV';

const addon: Addon = {
	name: 'SubTheme - Mica',
	description: 'Fully transparent discord. Requires enabling transparency in client settings and using MicaForEveryone program. Not displayed in the editor.',
	developer: FeoreV,
	imports: ['https://feorev.github.io/Themes/Discord/FVUI/assets/SubThemes/Mica.css'],
	previewUrl: ['https://feorev.github.io/Themes/Discord/FVUI/assets/SubThemes/Mica.css'],
	use: false,
	group: 'subtheme',
	selector: 'mica',
	variables: [
        {
            type: 'slider',
            props: {
                variable: 'BGopacity',
                value: 30,
                max: 100,
                unit: '%',
                step: 1,
                title: 'Opacity',
            }
        },
        {
            type: 'colour',
            props: {
                variable: 'BGcolor',
                type: 'RGB',
                value: 'var(--color2)',
                title: 'Background color',
                hint: 'The default is set to variable theme color. Dont change it if you want to maintain compatibility with MaterialYou and accentcolor'
            }
        },
	]
};

export default addon;
