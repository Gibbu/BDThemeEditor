interface Options {
	action: 'prev' | 'next' | 'first' | 'last';
	items: any[];
	index: number;
	loop?: boolean;
}

// There has to be a better way of doing this. KEKWs
export default ({ action, items = [], index = -1, loop = false }: Options) => {
	if (action === 'first') index = 0;
	if (action === 'last') index = items.length - 1;

	if (action === 'prev') {
		if (loop) {
			if (index !== 0) index--;
			else if (index === 0) index = items.length - 1;
		} else {
			if (index >= 1) index--;
		}
	}
	if (action === 'next') {
		if (loop) {
			if (index !== items.length - 1) index++;
			else if (index === items.length - 1) index = 0;
		} else {
			if (index !== items.length - 1) index++;
		}
	}

	return index;
};
