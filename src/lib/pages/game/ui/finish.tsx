'use client'
import type { WordDefinitionResult } from 'features/use-get-word'
import type { SupportedLangs } from 'shared'

interface Props {
  isLost: boolean
  word: string
  definition: WordDefinitionResult
  restartGame: () => void
  lang: SupportedLangs
}

export const Finish = ({
  isLost,
  word,
  definition,
  restartGame,
  lang
}: Props) => {
  const text: Record<
    SupportedLangs,
    Record<'title' | 'word' | 'button', string>
  > = {
    en: {
      title: `You ${isLost ? 'lost' : 'won!'}`,
      word: 'It was word',
      button: 'Start again'
    }
  }
  return (
    <div className="flex-col justify-items-center text-lg xl:text-xl 2xl:text-2xl text-center">
      <h2 className="text-3xl 2xl:text-4xl font-black">{text[lang].title}</h2>
      <div className="mt-4">
        {text[lang].word} <span className="font-bold">«{word}»</span>
      </div>
      {definition && (
        <div className="mt-4 w-full max-w-full sm:max-w-md bg-white/80  rounded-xl p-3 sm:p-4 shadow-inner max-h-40 sm:max-h-60 overflow-y-auto [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-purple-300 ">
          {definition.phonetic && (
            <div className="text-xs sm:text-sm text-gray-700  mb-2 sm:mb-3 font-mono bg-blue-100  px-2 sm:px-3 py-0.5 sm:py-1 rounded-full inline-block">
              {definition.phonetic}
            </div>
          )}
          <ul className="space-y-2 sm:space-y-3">
            {definition.meanings.map((meaning, i) => (
              <li
                key={i}
                className="border-b border-gray-100  pb-2 sm:pb-3 last:border-0 last:pb-0"
              >
                <span className="text-[10px] sm:text-xs font-medium text-gray-700  uppercase bg-blue-100 px-1.5 sm:px-2 py-0.5 rounded">
                  {meaning.partOfSpeech}
                </span>
                <ul className="mt-1 sm:mt-1.5 space-y-1 sm:space-y-1.5">
                  {meaning.definitions.map(({ definition }, index) => (
                    <li
                      key={index}
                      className="text-xs sm:text-sm text-gray-700 leading-relaxed pl-2 sm:pl-3 border-l-2 border-purple-500 "
                    >
                      {definition}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      )}
      <button
        onClick={restartGame}
        className="bg-white hover:bg-blue-50 mt-8 py-3 px-12 cursor-pointer rounded"
      >
        {text[lang].button}
      </button>
    </div>
  )
}
