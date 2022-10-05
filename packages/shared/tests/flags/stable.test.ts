import * as flags from '../../src/featureFlags'

describe('stable feature flags', () => {
  test('should be true for stable features', () => {
    expect(flags.menu).toEqual(true)
    expect(flags.preloadImgHook).toEqual(true)
    expect(flags.tabs).toEqual(true)
    expect(flags.tabsHook).toEqual(true)
    expect(flags.modal).toEqual(true)
  })
})