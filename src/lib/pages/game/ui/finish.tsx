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
    <div className="text-xl">
      <h2 className="text-2xl font-black">{text[lang].title}</h2>
      {type === 'lose' && (
        <div className="mt-4">
          {text[lang].word} <span className="font-bold">«{word}»</span>
        </div>
      )}
      <button
        onClick={restartGame}
        className="mt-5 bg-white py-3 px-4 cursor-pointer rounded"
      >
        {text[lang].button}
      </button>
    </div>
  )
}
