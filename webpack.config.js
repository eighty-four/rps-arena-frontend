const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
	entry: path.resolve(__dirname, 'src', 'index.ts'),

	plugins: [
		new MiniCssExtractPlugin(),
		new HtmlWebpackPlugin({title: 'RPS Arena'}),
	],

	module: {
		rules: [
			{
				test: /\.ts$/,
				use: 'ts-loader',
				exclude: /node_modules/,
			},

			{
				test: /\.svelte$/,
				use: {
					loader: 'svelte-loader',
					options: {
						emitCss: true,
					}
				}
			},

			{
				test: /\.css$/,
				use: [
					MiniCssExtractPlugin.loader,
					'css-loader',
					{
						loader: 'postcss-loader',
						options: {
							postcssOptions: {
								plugins: [
									'autoprefixer',
								],
							},
						},
					},
				],
			},
		],
	},

	resolve: {
		extensions: ['.ts', '.js', '.svelte'],
		alias: {
			svelte: path.resolve(__dirname, 'node_modules', 'svelte'),
		},
	},

	output: {
		filename: 'index.js',
		path: path.resolve(__dirname, 'dist'),
	},

	mode: 'development',
};
