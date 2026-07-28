'use client'
import { LANG, SupportedLangs } from 'shared'

interface Props {
  restartGame: () => void
}

export const ErrorState = ({ restartGame }: Props) => {
  const text: Record<SupportedLangs, Record<'title' | 'button', string>> = {
    en: {
      title: 'Failed to load word',
      button: 'Try Again'
    }
  }
  return (
    <div className="flex flex-col items-center justify-center h-full gap-4">
      <div className="text-xl text-red-700">{text[LANG].title}</div>
      <button
        onClick={restartGame}
        className="bg-white hover:bg-blue-50 mt-8 py-3 px-12 cursor-pointer rounded"
      >
        {text[LANG].button}
      </button>
    </div>
  )
}
