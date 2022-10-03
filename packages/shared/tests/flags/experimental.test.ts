import * as flags from '../../src/featureFlags'
import type { Flag } from '../../src/utils/types'

jest.mock('../../src/utils/helpers.ts', () => {
  return {
    createFlag: (flag: Flag) => {
      return 'experimental' === flag
    },
  }
})

describe('experimental feature flags', () => {
  test.todo('should be true for experimental features')

  test('should be false for next features', () => {
    expect(flags.menu).toEqual(false)
    expect(flags.modal).toEqual(false)
    expect(flags.preloadImgHook).toEqual(false)
    expect(flags.tabs).toEqual(false)
    expect(flags.tabsHook).toEqual(false)
  })
})