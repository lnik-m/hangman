import type { Category } from './types'

const CATEGORIES: Category[] = ['animals', 'birds', 'sports']

export const getRandomCategory = (): Category => {
  return CATEGORIES[Math.floor(Math.random() * CATEGORIES.length)]
}

export const getRandomLength = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1)) + min
}
