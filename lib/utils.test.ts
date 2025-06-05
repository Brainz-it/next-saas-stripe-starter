import { describe, it, expect } from 'vitest'
import { truncate, nFormatter } from './utils'

describe('truncate', () => {
  it('should truncate long strings', () => {
    const str = 'Hello world'
    expect(truncate(str, 5)).toBe('Hello...')
  })

  it('should return string when shorter than length', () => {
    const str = 'Hi'
    expect(truncate(str, 5)).toBe('Hi')
  })
})

describe('nFormatter', () => {
  it('should format numbers with K', () => {
    expect(nFormatter(1500)).toBe('1.5K')
  })

  it('should return 0 for falsy values', () => {
    expect(nFormatter(0)).toBe('0')
  })
})
