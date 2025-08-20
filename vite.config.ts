import path from 'path';
import { fileURLToPath } from 'url';

import { defineConfig } from 'vite';
import { reactRouter } from '@react-router/dev/vite';
import tsconfigPaths from 'vite-tsconfig-paths';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
	plugins: [reactRouter(), tsconfigPaths()],
	resolve: {
		alias: [
			{ find: '@', replacement: path.resolve(__dirname, 'src') },
			{
				find: '+types',
				replacement: path.resolve(__dirname, '.react-router/types/src/routes/+types'),
			},
			{
				find: 'widgets',
				replacement: path.resolve(__dirname, 'src/widgets'),
			},
			{
				find: 'features',
				replacement: path.resolve(__dirname, 'src/features'),
			},
			{
				find: 'shared',
				replacement: path.resolve(__dirname, 'src/shared'),
			},
			{ find: 'app', replacement: path.resolve(__dirname, 'src/app') },
			{
				find: 'entities',
				replacement: path.resolve(__dirname, 'src/entities'),
			},
			{
				find: 'pages',
				replacement: path.resolve(__dirname, 'src/pages'),
			},
		],
	},
});