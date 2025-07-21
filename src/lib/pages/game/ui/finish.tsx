'use client'
import { SupportedLangs } from 'shared'

interface Props {
  type: 'win' | 'lose'
  word: string
  restartGame: () => void
  lang: SupportedLangs
}

export const Finish = ({ type, word, restartGame, lang }: Props) => {
  const text: Record<
    SupportedLangs,
    Record<'title' | 'word' | 'definition' | 'button', string>
  > = {
    en: {
      title: `You ${type === 'win' ? 'won!' : 'lost'}`,
      word: 'It was word',
      definition: '',
      button: 'Start again'
    },
    ru: {
      title: `Вы ${type === 'win' ? 'выиграли!' : 'проиграли'}`,
      word: 'Это было слово',
      definition: '',
      button: 'Ещё раз'
    }
  }

  return (
    <div className="flex-col justify-items-center text-lg xl:text-xl 2xl:text-2xl text-center">
      <h2 className="text-3xl 2xl:text-4xl font-black">{text[lang].title}</h2>
      <div className="mt-4">
        {text[lang].word} <span className="font-bold">«{word}»</span>
      </div>
      <button
        onClick={restartGame}
        className="bg-white mt-8 py-3 px-12 cursor-pointer rounded"
      >
        {text[lang].button}
      </button>
    </div>
  )
}
