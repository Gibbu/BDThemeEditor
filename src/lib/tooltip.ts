import tippy from 'tippy.js';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/animations/scale-subtle.css';

import type {Props} from 'tippy.js';

export default function (node: Element, props: Partial<Props>) {
  tippy(node, {
    allowHTML: true,
    placement: 'top',
    duration: 150,
    appendTo: document.querySelector('#tooltips'),
    animation: 'scale-subtle',
    arrow: true,
    ...props
  });
}