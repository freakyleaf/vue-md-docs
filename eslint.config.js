import globals from 'globals';
import pluginJs from '@eslint/js';
import pluginVue from 'eslint-plugin-vue';
import tsEslint from 'typescript-eslint';

/** @type {import('eslint').Linter.Config[]} */
export default [
  pluginJs.configs.recommended,
  ...tsEslint.configs.recommended,
  ...pluginVue.configs['flat/essential'],
  {
    files: ['**/*.{js,ts,vue}'],
    languageOptions: {
      globals: globals.browser,
      parserOptions: {
        parser: tsEslint.parser,
      },
    },
    rules: {
      'array-bracket-spacing': ['error', 'never'],
      'comma-dangle': [
        'error',
        {
          arrays: 'always-multiline',
          exports: 'always-multiline',
          functions: 'always-multiline',
          imports: 'always-multiline',
          objects: 'always-multiline',
        },
      ],
      'keyword-spacing': [
        'error',
        {
          after: true,
          before: true,
        },
      ],
      'linebreak-style': ['error', 'unix'],
      'object-curly-spacing': ['error', 'always'],
      'semi': ['error', 'always'],
      'sort-imports': [
        'error',
        {
          allowSeparatedGroups: true,
        },
      ],
      'sort-keys': ['error'],
      'sort-vars': ['error'],
      'space-in-parens': ['error', 'never'],
      'vue/no-lone-template': ['off'],
      'vue/no-v-html': ['off'],
    },
  },
  {
    ignores: ['**/dist/'], // Only works if placed in a configuration object with no other keys
  },
];
