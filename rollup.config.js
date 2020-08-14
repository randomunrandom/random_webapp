import fs from 'fs';
import path from 'path';

import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import livereload from 'rollup-plugin-livereload';
import { terser } from 'rollup-plugin-terser';
import svelte from 'rollup-plugin-svelte';
import sveltePreprocess from 'svelte-preprocess';

import analyze from 'rollup-plugin-analyzer'
import del from 'rollup-plugin-delete'
import progress from 'rollup-plugin-progress';

import pug from "pug";
import html from '@open-wc/rollup-plugin-html';

import zipPlugin from 'rollup-plugin-zip'
import gzipPlugin from 'rollup-plugin-gzip'


import pkg from './package.json';

// `npm run build` -> `production` is true
// `npm run dev` -> `production` is false
const production = !process.env.ROLLUP_WATCH;

function serve() {
	let server;
	
	function toExit() {
		if (server) server.kill(0);
	}

	return {
		writeBundle() {
			if (server) return;
			server = require('child_process').spawn('npm', ['run', 'start', '--', '--dev'], {
				stdio: ['ignore', 'inherit', 'inherit'],
				shell: true
			});

			process.on('SIGTERM', toExit);
			process.on('exit', toExit);
		}
	};
}

let output_dir = path.join(__dirname, "dist")

/** @type {import('rollup').InputOptions} */
export default {
	input: path.join(__dirname, "src", "main.ts"),
	output: {
		sourcemap: true,
		format: 'iife',
		name: pkg.name,
		// file: 'dist/bundle.js',
		dir: output_dir,
	},
	plugins: [
		del({
			targets: output_dir,
			verbose: true
		}),
		analyze(),
		progress({
			clearLine: false
		}),
		gzipPlugin(),
		html({
			template() {
				return new Promise((resolve) => {
					const template_path = path.join(__dirname, "src", "template.pug");
					fs.readFile(template_path, 'utf-8', (err, data) => {
						resolve(pug.render(data))
					});
					;
				});
			},
		}),
		svelte({
			dev: !production,
			css: css => {
				css.write(path.join(output_dir, "bundle.css"));
			},
			preprocess: sveltePreprocess(),
		}),
		resolve({
			browser: true,
			dedupe: ['svelte']
		}),
		commonjs(),
		typescript({ sourceMap: !production }),
		!production && serve(),
		!production && livereload('dist'),
		production && terser(),
	],
	watch: {
		clearScreen: false,

	}
};
