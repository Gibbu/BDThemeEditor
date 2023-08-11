import preprocess from 'svelte-preprocess';
import autoprefixer from 'autoprefixer';
import adapter from '@sveltejs/adapter-vercel';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', '.md'],

	preprocess: [
		preprocess({
			postcss: {
				plugins: [autoprefixer()]
			}
		})
	],

	kit: {
		adapter: adapter({
			runtime: 'edge'
		})
	}
};

export default config;
