'use client'
import { WordData } from 'shared'

interface Props {
  wordData: WordData
  word: string
}

export const Word = ({ word, wordData }: Props) => {
  return (
    <div className="flex gap-3 justify-center font-fancy text-3xl xl:text-4xl 2xl:text-6xl max-w-full">
      {word.split('').map((letter, index) => {
        const value = wordData[letter].isUsed ? letter : '_'
        return (
          <div
            key={`word-${index}-${letter}`}
            className="min-w-[18px] xl:min-w-[26px] 2xl:min-w-[42px]"
          >
            {value}
          </div>
        )
      })}
    </div>
  )
}
