import { alphabet } from './constants'
import { words } from './words'
import { Difficulty, SupportedLangs, WordData } from './types'

// TODO change settings, save in localStorage
export const LANG: SupportedLangs = 'ru'
export const DIFFICULTY: Difficulty = 'hard'

// TODO get word and definition from API
export const startGame = () => {
  const getRandomWord = () =>
    words[LANG][DIFFICULTY][
      Math.floor(Math.random() * words[LANG][DIFFICULTY].length)
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
