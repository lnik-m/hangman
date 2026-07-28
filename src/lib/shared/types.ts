export type SupportedLangs = 'en'
export type Difficulty = 'easy' | 'medium' | 'hard'

export type LetterData = {
  isInWord: boolean
  isUsed: boolean
}
export type WordData = Record<string, LetterData>
