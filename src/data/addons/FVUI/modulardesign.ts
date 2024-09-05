import type { Addon } from '$types/addon/FVUI';
import FeoreV from '$data/devs/FeoreV';

const addon: Addon = {
	name: 'Addon - ModularDesign',
	description: 'Adds outline to main sections',
	developer: FeoreV,
	imports: ['https://feorev.github.io/Themes/Discord/FVUI/Addons/ModularDesign.css'],
	previewUrl: ['https://feorev.github.io/Themes/Discord/FVUI/Addons/ModularDesign.css'],
	group: 'MD',
	selector: 'MD',
	use: false,
	variables: [
        {
            type: 'divider',
            props: {
                title: '',
                description: 'Main modules'
            }
        },
        {
            type: 'number',
            props: {
                variable: 'outline',
                value: 3,
                step: 1,
                title: 'Outline size',
                unit: 'px',
            }
        },
        {
            type: 'colour',
            props: {
                variable: 'outlineCLR',
                type: 'RGB',
                value: 'var(--color03)',
                title: 'Outline color',
            }
        },
        {
            type: 'number',
            props: {
                variable: 'outlineBR',
                value: 16,
                step: 2,
                title: 'Outline rounding',
                unit: 'px',
            }
        },
        {
            type: 'number',
            props: {
                variable: 'outlineMG',
                value: 2,
                step: 0.5,
                title: 'Outline margin',
                unit: 'rem',
            }
        },
        {
            type: 'number',
            props: {
                variable: 'outlineBS',
                value: 16,
                step: 2,
                title: 'Outline boxshadow size',
                unit: 'px',
            }
        },
        {
            type: 'colour',
            props: {
                variable: 'outlineBGclr',
                type: 'RGB',
                value: 'unset',
                title: 'Outline content background color',
            }
        },
        {
            type: 'slider',
            props: {
                variable: 'outlineBGalpha',
                value: 1,
                max: 1,
                step: .1,
                title: 'Background transparency',
            }
        },
        {
            type: 'select',
            props: {
                variable: 'outlineBLUR',
                title: 'Background content blur. Format: blur(*px) ',
                value: '""',
                options: [
                    { label: 'No', value: '' },
                ],
                hint: 'Use only with the CustomBackground subtheme (NOT Mica and so on)',
                custom: true
            }
        }
	]
};

export default addon;
