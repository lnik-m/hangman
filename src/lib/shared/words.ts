import { Difficulty, SupportedLangs } from './types'
import easyEN from './words/en/easy'
import mediumEN from './words/en/medium'
import hardEN from './words/en/hard'

import easyRU from './words/ru/easy'
import mediumRU from './words/ru/medium'
import hardRU from './words/ru/hard'

export const words: Record<SupportedLangs, Record<Difficulty, string[]>> = {
  en: {
    easy: easyEN,
    medium: mediumEN,
    hard: hardEN
  },
  ru: {
    easy: easyRU,
    medium: mediumRU,
    hard: hardRU
  }
}
