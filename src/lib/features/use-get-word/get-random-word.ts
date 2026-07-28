import type { Category } from './types'

const BASE_URL = 'https://random-words-api.kushcreates.com/api'

interface GetRandomWordOptions {
  category: Category
  length?: number
  language?: string
}

interface WordResponse {
  word: string
  length: number
  category: Category
  language: string
}

/**
 * Gets random word from API
 * @param options.category - word category (wordle, animals, birds, sports)
 * @param options.length - word length
 * @param options.language - word language ('en' default)
 * @returns word or null
 */
export const getRandomWord = async ({
  category,
  length,
  language = 'en'
}: GetRandomWordOptions): Promise<string | null> => {
  try {
    const params = new URLSearchParams({
      category,
      language,
      words: '1'
    })
    if (length) params.append('length', String(length))
    const response = await fetch(`${BASE_URL}?${params.toString()}`)

    if (!response.ok) {
      console.error(`HTTP error! status: ${response.status}`)
      return null
    }
    const data: WordResponse[] = await response.json()
    if (!data || !Array.isArray(data) || data.length === 0) {
      console.error('No word data received')
      return null
    }

    const word = data[0]?.word
    return word || null
  } catch (error) {
    console.error('Failed to fetch random word:', error)
    return null
  }
}
