import { fallbacks } from '$data/themes';
import { error } from '@sveltejs/kit';

import type { PageLoad } from './$types';

export const load: PageLoad = ({ params }) => {
	const slug = params.slug.toLowerCase();

	if (!fallbacks.includes(slug)) throw error(404, 'That theme cannot be found');

	return {
		slug
	};
};
