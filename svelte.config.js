import { mdsvex } from 'mdsvex';
import slug from 'rehype-slug';
import preprocess from 'svelte-preprocess';
import autoprefixer from 'autoprefixer';
import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', '.md'],
	preprocess: [
		preprocess({
			postcss: {
				plugins: [autoprefixer()]
			}
		}),
		mdsvex({
			extensions: ['.md'],
			rehypePlugins: [slug]
		})
	],
	kit: {
		adapter: adapter()
	}
};

export default config;
