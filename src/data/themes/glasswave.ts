import type { Theme } from '$types/theme';
import Elisniper from '../devs/elisniper';
import { radialstatus } from '../addons';

const theme: Theme = {
    name: 'Glass Wave',
    thumbnail: 'https://raw.githubusercontent.com/Elisniper/Glass-Wave/master/resources/Image%204.PNG',
    developer: Elisniper,
    meta: {
        name: 'Glass Wave',
        author: 'Elisniper',
        version: '1.2.0',
        description: 'Discord Glass Wave Theme',
        source: 'https://github.com/Elisniper/Glass-Wave',
        website: 'https://xbased.net',
    },
    preview: `
	@import url(https://elisniper.github.io/Glass-Wave/release/import.css);
	`,
    features: ['background', 'font', 'transparent'],
    imports: ['https://elisniper.github.io/Glass-Wave/release/import.css'],
    fonts: [],
    addons: [radialstatus],
    variables: [
        {
            title: 'Background Image',
            icon: 'Photo',
            inputs: [
                {
                    type: 'image',
                    props: {
                        variable: 'var-background',
                        start: 'linear-gradient(138deg, rgba(162,247,220,1) 0%, rgba(18,145,187,1) 80%, rgba(35,108,179,1) 100%)',
                        value: '',
                        title: 'Background Image'
                    }
                },
                {
                    type: 'select',
                    props: {
                        variable: 'var-background-size',
                        value: 'cover',
                        options: [
                            { label: 'Cover', value: 'cover' },
                            { label: 'Contain', value: 'contain' },
                            { label: 'Auto', value: 'auto' },
                            { label: '100%', value: '100%' },
                            { label: '150%', value: '150%' },
                            { label: '200%', value: '200%' }
                        ],
                        custom: true,
                        title: 'Size'
                    }
                },
                {
                    type: 'select',
                    props: {
                        variable: 'var-background-position',
                        value: 'center',
                        options: [
                            { label: 'Top left', value: 'top left' },
                            { label: 'Top centre', value: 'top center' },
                            { label: 'Top right', value: 'top right' },
                            { label: 'Centre left', value: 'center left' },
                            { label: 'Centre', value: 'center' },
                            { label: 'Centre right', value: 'center right' },
                            { label: 'Bottom left', value: 'Bottom left' },
                            { label: 'Bottom centre', value: 'Bottom center' },
                            { label: 'Bottom right', value: 'bottom right' }
                        ],
                        custom: true,
                        title: 'Position'
                    }
                },
            ]
        },
        {
            title: 'Colours',
            icon: 'Swatch',
            inputs: [
                {
                    type: 'colour',
                    props: {
                        variable: 'var-accent',
                        value: '#0a4355',
                        type: 'HEX',
                        title: 'Accent Color'
                    }
                },
                {
                    type: 'colour',
                    props: {
                        variable: 'var-popout-color',
                        value: 'rgba(10, 21, 21, 1)',
                        type: 'RGB',
                        alpha: false,
                        rule: true,
                        title: 'Popout Color'
                    }
                },
                {
                    type: 'colour',
                    props: {
                        variable: 'var-chat-bubbles-background',
                        value: '#0b2328',
                        type: 'HEX',
                        alpha: true,
                        rule: true,
                        title: 'Chat bubbles background Color',
                    }
                },
                {
                    type: 'colour',
                    props: {
                        variable: 'var-chat-mentioned',
                        value: '#3b594a',
                        type: 'HEX',
                        alpha: true,
                        rule: true,
                        title: 'Chat bubbles mentioned Color',
                    }
                },
            ]
        },
        {
            title: 'Font',
            icon: 'ChatBubbleBottomCenterText',
            inputs: [
                {
                    type: 'font',
                    props: {
                        variable: 'var-font',
                        index: 0,
                        value: '',
                        title: 'App font'
                    }
                },
            ]
        },
    ]
};

export default theme;