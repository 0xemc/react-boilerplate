module.exports = {
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 2019,
		sourceType: 'module',
		ecmaFeatures: {
			jsx: true,
		},
	},
	plugins: ['@typescript-eslint', 'react', 'jsx-a11y', 'prettier', 'react-hooks'],
	env: {
		browser: true,
		jest: true,
		node: true,
	},
	extends: [
		'plugin:jsx-a11y/recommended',
		'plugin:@typescript-eslint/recommended',
		'prettier',
		'prettier/react',
		'prettier/@typescript-eslint',
	],
	settings: {
		react: {
			version: 'detect',
		},
	},
	rules: {
		'@typescript-eslint/explicit-function-return-type': [
			'error',
			{
				allowExpressions: true,
				allowTypedFunctionExpressions: true,
			},
		],
		'react/jsx-uses-vars': 1,
		'react/jsx-uses-react': 1,
		'react-hooks/rules-of-hooks': 'error',
		'react-hooks/exhaustive-deps': 'warn',
	},
	globals: {
		page: true,
		browser: true,
		context: true,
		jestPuppeteer: true,
	},
};
