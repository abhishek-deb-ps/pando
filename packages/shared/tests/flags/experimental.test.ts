import * as flags from '../../src/featureFlags'

describe('experimental feature flags', () => {
  test('should be true for experimental features', () => {
    expect(flags.select).toEqual(__EXPERIMENTAL__)
  })
})
