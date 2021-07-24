const presets = [
	['@babel/preset-env'],
	'@babel/preset-typescript',
	'@babel/preset-react',
	//Remove the need for importing emotion on every object:
	// /* @jsx jsx */
	// import { jss, css } from '@emotion.core';
	'@emotion/babel-preset-css-prop',
];
const plugins = ['@babel/plugin-transform-runtime'];

module.exports = { presets, plugins };
