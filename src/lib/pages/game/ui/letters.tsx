'use client'
import type { LetterData, WordData } from 'shared'

interface Props {
  wordData: WordData
  updateWordData: (wordData: WordData) => void
}

export const Letters = ({ wordData, updateWordData }: Props) => {
  const handleClick = (letter: string) => {
    const updatedWordData = { ...wordData }
    updatedWordData[letter].isUsed = true
    updateWordData(wordData)
  }

  const getLetterClassName = ({ isUsed, isInWord }: LetterData) => {
    if (!isUsed) return ''
    if (isInWord) return 'text-green-600 border-green-600 bg-gray-100'
    return 'text-red-600 border-red-600 bg-gray-100'
  }

  return (
    <div className="flex items-center justify-center w-full mt-7 font-fancy">
      <div className="flex flex-wrap md:max-w-2/3 items-center justify-center w-full text-2xl xl:text-3xl 2xl:text-4xl gap-x-4 gap-y-3 lg:gap-x-4 lg:gap-y-4">
        {Object.entries(wordData).map(
          ([letter, { isUsed, isInWord }], index) => {
            return (
              <button
                className={`border-2 bg-gray-50 border-amber-200 border-dotted rounded-md not-disabled:hover:bg-amber-100 cursor-pointer disabled:cursor-not-allowed lg:py-1 lg:px-2 py-0.5 px-1 ${getLetterClassName(
                  { isUsed, isInWord }
                )}`}
                disabled={isUsed}
                key={`letters-${index}-${letter}`}
                onClick={() => handleClick(letter)}
              >
                {letter}
              </button>
            )
          }
        )}
      </div>
    </div>
  )
}
