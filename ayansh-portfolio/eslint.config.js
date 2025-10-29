import js from './client/src/node_modules/@eslint/js/types'
import globals from './client/src/node_modules/globals'
import reactHooks from './client/src/node_modules/eslint-plugin-react-hooks'
import reactRefresh from './client/src/node_modules/eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs['recommended-latest'],
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
  },
])
