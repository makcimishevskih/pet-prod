module.exports = {
	env: {
		browser: true,
		es2021: true,
		jest: true
	},
	extends: [
		'airbnb',
		'plugin:react/recommended',
		'plugin:i18next/recommended',
		'plugin:@typescript-eslint/recommended',
		'prettier',
		'plugin:prettier/recommended'
		// 'prettier/@typescript-eslint'
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaFeatures: {
			jsx: true
		},
		ecmaVersion: 'latest',
		sourceType: 'module'
	},
	plugins: [
		'react',
		'i18next',
		'prettier',
		'react-hooks',
		'@typescript-eslint'
	],
	rules: {
		// 'prettier/prettier': ['error'],

		'eol-last': 'off',
		indent: 'off',
		'comma-dangle': 'off',
		'arrow-body-style': 'off',
		'no-tabs': 'off',
		'linebreak-style': 'off',
		'react/jsx-indent': [2, 'tab'],
		'react/jsx-indent-props': [2, 'tab'],
		'react/jsx-filename-extension': [
			2,
			{ extensions: ['.js', '.jsx', '.tsx'] }
		],
		'import/no-unresolved': 'off',
		'import/prefer-default-export': 'off',
		'no-unused-vars': 'warn',
		'react/require-default-props': 'off',
		'react/react-in-jsx-scope': 'off',
		'react/jsx-props-no-spreading': 'warn',
		'react/function-component-definition': 'off',
		'no-shadow': 'off',
		'import/extensions': 'off',
		'import/no-extraneous-dependencies': 'off',
		'no-underscore-dangle': 'off',
		'i18next/no-literal-string': 'off',
		// 'i18next/no-literal-string': [ 'error',{
		// 	markupOnly: true,
		// 	ignoreAttribute: ['data-testid', 'to']}],
		'@typescript-eslint/no-empty-interface': 'off',
		'max-len': ['error', { ignoreComments: true, code: 100 }],
		'jsx-a11y/no-static-element-interactions': 'off',
		'jsx-a11y/click-events-have-key-events': 'off',
		'react-hooks/rules-of-hooks': 'error', // Checks rules of Hooks
		'react-hooks/exhaustive-deps': 'error' // Checks effect dependencies
	},
	globals: {
		__IS_DEV__: true
	},
	overrides: [
		{
			files: ['**/src/**/*.{test,stories}.{ts,tsx}'],
			rules: {
				'i18next/no-literal-string': 'off',
				'max-len': 'off'
			}
		}
	]
};
