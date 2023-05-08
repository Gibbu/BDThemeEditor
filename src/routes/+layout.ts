export const prerender = true;

export const load = ({ url }) => {
	return {
		url: url.pathname
	};
};
