'use client'
import { WordData } from 'shared'

interface Props {
  wordData: WordData
  updateWordData: (wordData: WordData) => void
}

export const Letters = ({ wordData, updateWordData }: Props) => {
  const onClick = (letter: string) => {
    const updatedWordData = { ...wordData }
    updatedWordData[letter].isUsed = true
    updateWordData(wordData)
  }

  return (
    <div className="flex items-center justify-center w-full mt-7 font-fancy">
      <div className="flex items-center justify-center w-full md:gap-x-6 md:gap-y-2 gap-6 md:text-4xl text-2xl flex-wrap md:max-w-2/3">
        {Object.entries(wordData).map(
          ([letter, { isUsed, isInWord }], index) => {
            return (
              <button
                className={`border-2 bg-gray-50 border-amber-200 border-dotted rounded-md not-disabled:hover:bg-amber-100 cursor-pointer disabled:cursor-not-allowed md:py-1 md:px-2 ${
                  isUsed
                    ? isInWord
                      ? 'text-green-400 border-green-400 bg-gray-100'
                      : 'text-red-400 border-red-400 bg-gray-100'
                    : ''
                }`}
                disabled={isUsed}
                key={`letters-${index}-${letter}`}
                onClick={() => onClick(letter)}
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
