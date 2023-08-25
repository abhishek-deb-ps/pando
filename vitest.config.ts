import { resolve } from 'node:path'
import { defineConfig } from 'vitest/config'
import AutoImport from 'unplugin-auto-import/vite'

const aliases = [
  'headless-styles',
  'react',
  'react-aria',
  'react-utils',
  'shared',
]

export default defineConfig({
  root: resolve(__dirname, 'packages'),

  plugins: [
    AutoImport({
      imports: ['vitest'],
      dts: true,
    }),
  ],

  resolve: {
    alias: aliases.map((alias) => ({
      find: `@${alias}`,
      replacement: resolve(__dirname, `packages/${alias}/src`),
    })),
  },

  test: {
    include: ['**/*.test.{ts,tsx}'],
    exclude: ['**/node_modules/**', '**/npm/**'],
    globals: true,
    setupFiles: ['@testing-library/jest-dom'],
  },
})
