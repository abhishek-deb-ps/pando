import { defineWorkspace } from 'vitest/config'

type Workspace =
  | 'headless-styles'
  | 'react'
  | 'react-aria'
  | 'react-utils'
  | 'shared'

interface PresetOptions {
  environment?: 'node' | 'jsdom' | 'happy-dom' | 'edge-runtime'
}

function createPreset(workspace: Workspace, options?: PresetOptions) {
  return {
    extends: './vitest.config.ts',

    test: {
      include: ['tests/**/*.test.{ts,tsx}'],
      name: workspace,
      environment: options?.environment ?? 'node',
    },
  }
}

export default defineWorkspace([
  'packages/*',
  createPreset('headless-styles'),
  createPreset('react', {
    environment: 'jsdom',
  }),
  createPreset('react-aria', {
    environment: 'jsdom',
  }),
  createPreset('react-utils', {
    environment: 'jsdom',
  }),
  createPreset('shared'),
])
