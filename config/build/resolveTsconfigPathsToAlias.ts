import path from 'path';

function resolveTsconfigPathsToAlias(
	tsconfigPath: string = '../../tsconfig.json'
	// webpackPath: string = __dirname
) {
	const aliases: Record<string, string> = {};
	// const { paths } = require(tsconfigPath).compilerOptions;
	console.log(222);
	const { paths } = require('../../tsconfig.json').compilerOptions;
	console.log(333);

	// const aliasesKeys = Object.keys(paths);

	// for (let alias of aliasesKeys) {
	// 	const key = alias.replace('/*', '');
	// 	const value = path.resolve(
	// 		webpackPath,
	// 		paths[alias][0].replace('/*', '').replace('*', '')
	// 	);

	// 	aliases[key] = value;
	// }

	// console.log(aliases);

	// return aliases;
}

export default resolveTsconfigPathsToAlias;
