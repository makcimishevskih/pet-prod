import { ResolveOptions } from 'webpack';
import { BuildOptions } from './types/config';
import path from 'path';

import resolveTsconfigPathsToAlias from './resolveTsconfigPathsToAlias';

export function buildResolvers(options: BuildOptions): ResolveOptions {
	return {
		extensions: ['.tsx', '.ts', '.js'],
		preferAbsolute: true,
		modules: [options.paths.src, 'node_modules'],
		mainFiles: ['index'],
		fallback: { path: require.resolve('path-browserify') },
		alias: {
			'@/': path.resolve(__dirname, 'src'),
			'@app': path.resolve(__dirname, 'src/app'),
			'@pages': path.resolve(__dirname, 'src/pages'),
			'@shared': path.resolve(__dirname, 'src/shared'),
			'@widgets': path.resolve(__dirname, 'src/widgets')
		}
	};
}
