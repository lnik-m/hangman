export type SupportedLangs = 'en' | 'ru'
export type Difficulty = 'easy' | 'medium' | 'hard'

export type LetterData = {
  isInWord: boolean
  isUsed: boolean
}
export type WordData = Record<string, LetterData>
