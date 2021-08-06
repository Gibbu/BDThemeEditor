import { mdsvex } from "mdsvex";
import preprocess from 'svelte-preprocess';
import autoprefixer from 'autoprefixer';
import path from 'path';

/** @type {import('@sveltejs/kit').Config} */
const config = {
    extensions: [".svelte", ".svx"],
    preprocess: [
			preprocess({
				defaults: {
					script: 'typescript'
				},
				scss: {
					prependData: `@use 'src/scss/functions.scss' as *;`
				},
				postcss: {
					plugins: [autoprefixer()]
				}
			}), 
			mdsvex()
		],
    kit: {
		target: '#svelte',
		vite: {
			optimizeDeps: {
				include: ['svelte-hero-icons']
			},
			resolve: {
				alias: {
					'$components': path.resolve('./src/components'),
					'$types': path.resolve('./src/types'),
					'$data': path.resolve('./src/data'),
					'$scss': path.resolve('./src/scss')
				}
			}
		}
	}
};

export default config;
