import '@testing-library/jest-dom'
import type { Category } from './types'
import { getRandomCategory, getRandomLength } from './utils'

describe('use-get-word utils', () => {
  describe('getRandomCategory', () => {
    it('should return a valid category from CATEGORIES list', () => {
      const validCategories: Category[] = ['animals', 'birds', 'sports']

      for (let i = 0; i < 50; i++) {
        const result = getRandomCategory()
        expect(validCategories).toContain(result)
      }
    })

    it('should return different values over multiple calls', () => {
      const results = new Set()

      for (let i = 0; i < 50; i++) {
        results.add(getRandomCategory())
      }

      expect(results.size).toBeGreaterThan(1)
    })
  })

  describe('getRandomLength', () => {
    it('should return a number within the specified range (min-max)', () => {
      const min = 3
      const max = 4

      for (let i = 0; i < 50; i++) {
        const result = getRandomLength(min, max)
        expect(result).toBeGreaterThanOrEqual(min)
        expect(result).toBeLessThanOrEqual(max)
        expect(Number.isInteger(result)).toBe(true)
      }
    })

    it('should return a number within range for different min-max values', () => {
      const testCases = [
        { min: 1, max: 1 },
        { min: 5, max: 7 },
        { min: 8, max: 10 },
        { min: 0, max: 100 }
      ]

      testCases.forEach(({ min, max }) => {
        for (let i = 0; i < 20; i++) {
          const result = getRandomLength(min, max)
          expect(result).toBeGreaterThanOrEqual(min)
          expect(result).toBeLessThanOrEqual(max)
          expect(Number.isInteger(result)).toBe(true)
        }
      })
    })

    it('should return only one possible value when min === max', () => {
      const min = 5
      const max = 5

      for (let i = 0; i < 10; i++) {
        expect(getRandomLength(min, max)).toBe(5)
      }
    })
  })
})
