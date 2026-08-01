import type { Category } from './types'

interface GetRandomWordOptions {
  category: Category
  length?: number
  language?: string
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
      language
    })

    if (length) {
      params.append('length', String(length))
    }

    const response = await fetch(`/api/random-word?${params.toString()}`)

    if (!response.ok) {
      throw new Error(`API error: ${response.status}`)
    }

    const data = await response.json()
    if (data && Array.isArray(data) && data.length > 0) {
      return data[0].word
    }

    return null
  } catch (error) {
    console.error('Failed to fetch random word:', error)
    return null
  }
}
