import { Difficulty, SupportedLangs } from './types'

export const MISTAKE_LIMIT: Record<Difficulty, number> = {
  easy: 5,
  medium: 7,
  hard: 9
}

export const alphabet: Record<SupportedLangs, string[]> = {
  en: 'abcdefghijklmnopqrstuvwxyz'.split(''),
  ru: 'абвгдеёжзийклмнопрстуфхцчшщъыьэюя'.split('')
}
