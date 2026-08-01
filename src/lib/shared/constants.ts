import type { Difficulty, SupportedLangs } from './types'

export const MISTAKE_LIMIT: Record<Difficulty, number> = {
  easy: 5,
  medium: 7,
  hard: 9
}

export const hangmanState: Record<Difficulty, number[]> = {
  easy: [1, 2, 3, 6, 7, 10],
  medium: [1, 2, 3, 4, 5, 6, 7, 10],
  hard: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
}

export const alphabet: Record<SupportedLangs, string[]> = {
  en: 'abcdefghijklmnopqrstuvwxyz'.split('')
}

const DIFFICULTY_LABELS: Record<Difficulty, string> = {
  easy: 'Easy',
  medium: 'Medium',
  hard: 'Hard'
}

export const DIFFICULTY_LABELS_BY_LANG: Record<
  SupportedLangs,
  typeof DIFFICULTY_LABELS
> = {
  en: DIFFICULTY_LABELS
}

export const DIFFICULTIES: Difficulty[] = ['easy', 'medium', 'hard']

export const LANG: SupportedLangs = 'en'
