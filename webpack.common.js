const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const babelLoader = {
  loader: 'babel-loader',
  options: {
    presets: ['@babel/preset-env'],
  }
};

module.exports = {
	entry: path.resolve(__dirname, 'src', 'index.ts'),

	plugins: [
		new MiniCssExtractPlugin(),
		new HtmlWebpackPlugin({title: 'RPS Arena'}),
	],

	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: babelLoader,
			},

			{
				test: /\.ts$/,
				use: [babelLoader, 'ts-loader'],
				exclude: /node_modules/,
			},

			{
				test: /\.svelte$/,
				use: [
					babelLoader,

					{
						loader: 'svelte-loader',
						options: {
							emitCss: true,
						}
					},
				]
			},

			{
				test: /\.css$/,
				exclude: /node_modules/,
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
};
