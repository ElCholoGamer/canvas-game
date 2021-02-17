const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { resolve } = require('path');
const pkg = require('./package.json');

const mode = process.env.NODE_ENV ?? 'development';

let publicPath = '/';
if (mode === 'production') publicPath += pkg.name;

/** @type {import('webpack').Configuration} */
const config = {
	mode,
	devtool: 'source-map',
	target: 'es5',
	entry: resolve(__dirname, 'src/index.ts'),
	output: {
		filename: 'js/[name].[contenthash:8].js',
		publicPath,
		chunkFilename: 'js/[name].[contenthash:8].chunk.js',
		path: resolve(__dirname, 'build'),
	},
	resolve: {
		extensions: ['.js', '.ts'],
	},
	devServer: {
		hot: true,
	},
	module: {
		rules: [
			{
				test: /\.(ts|js)$/i,
				exclude: /node_modules/,
				use: [
					{
						loader: 'babel-loader',
						options: {
							cacheDirectory: true,
							presets: ['@babel/env', '@babel/typescript'],
							plugins: [['@babel/transform-runtime', { regenerator: true }]],
						},
					},
					{
						loader: 'ts-loader',
						options: {
							transpileOnly: true,
						},
					},
				],
			},
			{
				test: /\.css$/i,
				use: [MiniCssExtractPlugin.loader, 'css-loader'],
			},
			{
				test: /\.(png|jpe?g|gif)$/i,
				loader: 'file-loader',
				options: {
					name: '[folder]/[name].[ext]',
					publicPath,
				},
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({ template: 'index.html' }),
		new ForkTsCheckerWebpackPlugin(),
		new CleanWebpackPlugin(),
		new MiniCssExtractPlugin({
			filename: 'css/[name].[contenthash:8].css',
			chunkFilename: 'css/[name].[contenthash:8].chunk.css',
		}),
	],
	devServer: {
		contentBase: resolve(__dirname, 'build'),
		port: 3000,
		hot: true,
		publicPath: '/',
	},
};

module.exports = config;
