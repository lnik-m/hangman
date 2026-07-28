import { useCallback, useMemo, useState } from 'react'
import type { Difficulty } from 'shared'
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

export const useGetWord = ({ difficulty }: UseGetWordProps) => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const [word, setWord] = useState('')
  const [definition, setDefinition] = useState<WordDefinitionResult | null>(
    null
  )

  const [category, length] = useMemo((): [Category, number] => {
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
  }, [difficulty])

  const getWord = useCallback(async () => {
    setLoading(true)
    try {
      const word = await getRandomWord({ category, length })
      if (!word) throw new Error('No word data')
      const definitionData = await getWordDefinition(word)
      setWord(word)
      setDefinition(definitionData)
    } catch (err) {
      console.error(err)
      const errorMessage = err instanceof Error ? err.message : null
      setError(errorMessage)
    } finally {
      setLoading(false)
    }
  }, [category, length])

  return { loading, error, word, definition, getWord }
}
