const BASE_URL = 'https://api.dictionaryapi.dev'

interface DictionaryDefinition {
  definition: string
}

interface DictionaryMeaning {
  partOfSpeech: string
  definitions: DictionaryDefinition[]
}

interface DictionaryEntry {
  word: string
  phonetic?: string
  meanings: DictionaryMeaning[]
}

interface DictionaryError {
  title: string
  message: string
  resolution: string
}

type DictionaryResponse = DictionaryEntry[] | DictionaryError
export type WordDefinitionResult = DictionaryEntry | null

/**
 * Gets word definition from Free Dictionary API
 * @param word - search word (ex, 'serendipity')
 * @returns first definition or null
 */
export const getWordDefinition = async (
  word: string
): Promise<WordDefinitionResult> => {
  if (!word || word.trim().length === 0) {
    console.warn('Empty word provided')
    return null
  }

  try {
    const response = await fetch(
      `${BASE_URL}/api/v2/entries/en/${word.trim().toLowerCase()}`
    )

    if (!response.ok) {
      if (response.status === 404) {
        console.warn(`Word "${word}" not found in dictionary`)
        return null
      }
      console.error(`HTTP error! status: ${response.status}`)
      return null
    }

    const data: DictionaryResponse = await response.json()

    if (data && typeof data === 'object' && 'title' in data) {
      console.warn(`Dictionary API error: ${data.title} - ${data.message}`)
      return null
    }

    if (!Array.isArray(data) || data.length === 0) {
      console.warn(`No definitions found for "${word}"`)
      return null
    }

    return data[0] as DictionaryEntry
  } catch (error) {
    console.error('Failed to fetch word definition:', error)
    return null
  }
}
