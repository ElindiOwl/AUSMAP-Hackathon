import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import importPlugin from 'eslint-plugin-import';
import preferArrowPlugin from 'eslint-plugin-prefer-arrow';
import reactPlugin from 'eslint-plugin-react';
import sortKeysFixPlugin from 'eslint-plugin-sort-keys-fix';

export default tseslint.config(
	eslint.configs.recommended,
	...tseslint.configs.recommended,
	{
		languageOptions: {
			ecmaVersion: 'latest',
			globals: {
				...tseslint.globals,
				browser: true,
				es2021: true,
				jest: true,
				node: true,
			},
			parser: tseslint.parser,
			parserOptions: {
				ecmaFeatures: {
					jsx: true,
				},
				ecmaVersion: 'latest',
				sourceType: 'module',
			},
			sourceType: 'module',
		},
		plugins: {
			'@typescript-eslint': tseslint.plugin,
			'import': importPlugin,
			'prefer-arrow': preferArrowPlugin,
			'react': reactPlugin,
			'sort-keys-fix': sortKeysFixPlugin,
		},
		rules: {
			'@typescript-eslint/no-explicit-any': 'warn',
			'@typescript-eslint/no-non-null-assertion': 'off',
			'@typescript-eslint/no-unused-vars': ['error', { 'varsIgnorePattern': '^_' }],
			'arrow-spacing': 'error',
			'import/no-cycle': 'error',
			'import/no-duplicates': 'error',
			'import/order': ['error', {
				'groups': ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
				'newlines-between': 'always',
			}],
			'indent': ['warn', 'tab'],
			'linebreak-style': ['error', 'unix'],
			'no-console': 'error',
			'no-const-assign': 'error',
			'no-undef': 'error',
			'no-use-before-define': 'error',
			'no-var': 'error',
			'object-curly-spacing': ['error', 'always'],
			'prefer-arrow/prefer-arrow-functions': [
				'error',
				{
					classPropertiesAllowed: false,
					disallowPrototype: true,
					singleReturnOnly: false,
				},
			],
			'prefer-const': 'error',
			'quotes': ['error', 'single'],
			'react/jsx-sort-props': ['error', {
				'callbacksLast': true,
				'noSortAlphabetically': false,
				'reservedFirst': true,
				'shorthandFirst': true,
			}],
			'react/prop-types': 'off',
			'react/react-in-jsx-scope': 'off',
			'sort-keys-fix/sort-keys-fix': 'error',
		},
		settings: {
			react: {
				version: 'detect',
			},
		},
	},
);