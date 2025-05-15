import { fallbacks } from '$data/themes';
import { error } from '@sveltejs/kit';

export const load = ({ params }) => {
	if (!fallbacks.includes(params.slug)) error(404, { message: 'Theme not found' });
};
