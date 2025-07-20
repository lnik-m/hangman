'use client'
import { WordData } from 'shared'

interface Props {
  wordData: WordData
  word: string
}

export const Word = ({ word, wordData }: Props) => {
  return (
    <div className="flex gap-3 justify-center font-fancy sm:text-3xl text-xl">
      {word.split('').map((letter, index) => {
        const value = wordData[letter].isUsed ? letter : '_'
        return (
          <div
            key={`word-${index}-${letter}`}
            className="md:min-w-[24px] min-w-[17px]"
          >
            {value}
          </div>
        )
      })}
    </div>
  )
}
