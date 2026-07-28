import { alphabet } from './constants'
import { SupportedLangs, WordData } from './types'

export const LANG: SupportedLangs = 'en'

export const startGame = (initWord: string) => {
  const wordInitData: WordData = {}

  alphabet[LANG].forEach(letter => {
    wordInitData[letter] = {
      isInWord: initWord.includes(letter),
      isUsed: false
    }
  })

  return { initWord, wordInitData }
}
