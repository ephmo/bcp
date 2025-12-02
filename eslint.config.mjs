import js from '@eslint/js'
import globals from 'globals'
import prettier from 'eslint-plugin-prettier/recommended'
import { defineConfig } from 'eslint/config'

export default defineConfig([
  js.configs.recommended,
  prettier,

  {
    files: ['src/**/*.js'],

    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.browser,
      },
    },

    rules: {
      'no-unused-vars': 'warn',
      'no-console': 'off',
    },
  },
])
