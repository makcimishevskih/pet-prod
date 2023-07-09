const path = require('path');

module.exports = {
	stories: ['../../src/**/*.stories.@(js|jsx|ts|tsx)'],
	addons: [
		'@storybook/addon-links',
		'@storybook/addon-essentials',
		'@storybook/addon-interactions',
		'@react-theming/storybook-addon' // my addon theme
	],
	framework: '@storybook/react',
	core: {
		builder: 'webpack5'
	},
	webpackFinal: async (config) => {
		config.resolve.alias = {
			app: path.resolve(__dirname, '../../', 'src/app'),
			'@pages': path.resolve(__dirname, '../../', 'src/pages'),
			shared: path.resolve(__dirname, '../../', 'src/shared'),
			widgets: path.resolve(__dirname, '../../', 'src/widgets')
		};

		return config;
	}
};
