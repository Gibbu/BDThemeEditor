import { sveltekit } from '@sveltejs/kit/vite';
import { resolve } from 'path';

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [sveltekit()],
	resolve: {
		alias: {
			$components: resolve('./src/components'),
			$data: resolve('./src/data'),
			$scss: resolve('./src/scss')
		}
	}
};

export default config;
