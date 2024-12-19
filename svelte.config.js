import adapter from '@sveltejs/adapter-node';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { fastDimension } from 'svelte-fast-dimension';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: [vitePreprocess(), fastDimension()],
	kit: {
		adapter: adapter({
			out: 'build',
			precompress: true,
			envPrefix: 'HASS_'
		}),
		alias: {
			$lib: 'src/lib'
		},
		paths: {
			base: process.env.NODE_ENV === 'production' ? '/hacsfiles/ha-fusion' : ''
		}
	},
	typescript: {
		config(config) {
			config.include.push('../global.d.ts');
		}
	},
	vitePlugin: {
		inspector: {
			toggleKeyCombo: 'control-shift',
			showToggleButton: 'never'
		}
	}
};

export default config;
