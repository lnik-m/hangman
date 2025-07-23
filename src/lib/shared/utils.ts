import { alphabet } from './constants'
import { words } from './words'
import { Difficulty, SupportedLangs, WordData } from './types'

// TODO change settings, save in localStorage
export const LANG: SupportedLangs = 'ru'

export const startGame = (difficulty: Difficulty) => {
  const getRandomWord = () =>
    words[LANG][difficulty][
      Math.floor(Math.random() * words[LANG][difficulty].length)
    ]
  const initWord = getRandomWord()
  const wordInitData: WordData = {}
  alphabet[LANG].forEach(letter => {
    wordInitData[letter] = {
      isInWord: initWord.includes(letter),
      isUsed: false
    }
  })
  return { initWord, wordInitData }
}
