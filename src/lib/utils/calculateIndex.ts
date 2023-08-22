type Action = 'prev' | 'next' | 'first' | 'last';

export default <T>(action: Action, items: T[], index: number, loop: boolean = false) => {
	if (action === 'first') index = 0;
	if (action === 'last') index = items.length - 1;

	if (action === 'prev') {
		if (loop) index = index === -1 ? items.length - 1 : index !== 0 ? index - 1 : items.length - 1;
		else index = index === -1 ? items.length - 1 : index >= 1 ? index - 1 : index;
	}
	if (action === 'next') {
		if (loop) index = index !== items.length - 1 ? index + 1 : 0;
		else index = index !== items.length - 1 ? index + 1 : index;
	}

	return index;
};
