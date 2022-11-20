const path = require('path');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = {
	stories: [
		'../src/**/*.stories.mdx',
		'../src/**/*.stories.@(js|jsx|ts|tsx)',
		'../components/**/*.stories.?(ts|tsx|js|jsx)',
	],
	staticDirs: [path.resolve(__dirname, '../public')],
	addons: [
		'@storybook/addon-links',
		'@storybook/addon-essentials',
		'@storybook/addon-interactions',
		'@storybook/addon-jest',
		'@storybook/preset-create-react-app',
		'@storybook/addon-react-native-web',
	],
	framework: '@storybook/react',
	core: {
		builder: '@storybook/builder-webpack5',
	},
	webpackFinal: async config => {
		config.module.rules.push({
			test: /\.css$/,
			use: [
				{
					loader: 'postcss-loader',
					options: {
						postcssOptions: {
							plugins: [require('tailwindcss'), require('autoprefixer')],
						},
					},
				},
			],
			include: path.resolve(__dirname, '../'),
		});
		config.resolve.plugins = [
			...(config.resolve.plugins || []),
			new TsconfigPathsPlugin({
				extensions: config.resolve.extensions,
			}),
		];
		return config;
	},
};
