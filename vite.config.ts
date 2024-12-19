import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import path from 'path';

dotenv.config();

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
	plugins: [sveltekit()],
	build: {
		chunkSizeWarningLimit: 1000
	},
	resolve: {
		alias: {
			$lib: path.resolve(__dirname, './src/lib')
		}
	},
	ssr: {
		noExternal: ['svelte-ripple']
	},
	optimizeDeps: {
		include: [
			'@jaames/iro',
			'd3-array',
			'd3-scale',
			'd3-shape',
			'dotenv',
			'express',
			'hls.js',
			'home-assistant-js-websocket',
			'http-proxy-middleware',
			'js-yaml',
			'konva',
			'maplibre-gl',
			'marked',
			'svelte-confetti',
			'svelte-dnd-action',
			'svelte-modals',
			'svelte-ripple',
			'svelte-tiny-virtual-list',
			'weekstart',
			'@iconify/svelte',
			'svelte-fast-dimension/action',
			'@event-calendar/core',
			'@event-calendar/day-grid',
			'@event-calendar/list',
			'konva/lib/Shape'
		],
		exclude: [
			'@codemirror/autocomplete',
			'@codemirror/commands',
			'@codemirror/language',
			'@codemirror/legacy-modes',
			'@codemirror/lint',
			'@codemirror/state',
			'@codemirror/theme-one-dark',
			'@codemirror/view',
			'codemirror'
		]
	},
	server: {
		host: true,
		proxy: {
			'/local/': {
				target: process.env.HASS_URL,
				changeOrigin: true
			},
			'/api/': {
				target: process.env.HASS_URL,
				changeOrigin: true
			}
		}
	}
});
