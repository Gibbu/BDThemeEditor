import { error } from '@sveltejs/kit';
import { fallbacks } from '$data/themes';

export const load = ({ params }) => {
	if (!fallbacks.includes(params.slug)) error(404, { message: 'Theme not found' });
};
