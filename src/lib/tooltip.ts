import tippy from 'tippy.js';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/animations/scale-subtle.css';

export default function (node: Element, props) {
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