import { useCallback, useState } from 'react'
import { alphabet, LANG, type Difficulty, type WordData } from 'shared'
import { getRandomWord } from './get-random-word'
import {
  type WordDefinitionResult,
  getWordDefinition
} from './get-word-definition'
import type { Category } from './types'
import { getRandomCategory, getRandomLength } from './utils'

interface UseGetWordProps {
  difficulty: Difficulty
}

export const useGetWord = () => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const [word, setWord] = useState('')
  const [wordData, setWordData] = useState<WordData>({})
  const [definition, setDefinition] = useState<WordDefinitionResult | null>(
    null
  )

  const getWord = useCallback(async ({ difficulty }: UseGetWordProps) => {
    setLoading(true)

    const [category, length] = ((): [Category, number] => {
      if (difficulty === 'easy') {
        return [getRandomCategory(), getRandomLength(3, 4)]
      }

      if (difficulty === 'medium') {
        const isWordle = Math.random() < 0.5
        if (isWordle) {
          return ['wordle', 5]
        }
        return [getRandomCategory(), getRandomLength(5, 7)]
      }

      return [getRandomCategory(), getRandomLength(8, 10)]
    })()

    try {
      const word = await getRandomWord({ category, length })
      if (!word) throw new Error('No word data')
      const definitionData = await getWordDefinition(word)
      setWord(word)
      const wordInitData: WordData = {}
      alphabet[LANG].forEach(letter => {
        wordInitData[letter] = {
          isInWord: word.includes(letter),
          isUsed: false
        }
      })
      setWordData(wordInitData)
      setDefinition(definitionData)
    } catch (err) {
      console.error(err)
      const errorMessage = err instanceof Error ? err.message : null
      setError(errorMessage)
    } finally {
      setLoading(false)
    }
  }, [])

  return { loading, error, word, wordData, setWordData, definition, getWord }
}
