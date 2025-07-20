'use client'
import { DIFFICULTY, LANG, MISTAKE_LIMIT, startGame, WordData } from 'shared'
import { useState } from 'react'
import { Finish, Word, Letters, Mistakes } from './ui'

export const Game = () => {
  const { initWord, wordInitData } = startGame()
  const [word, setWord] = useState<string>(initWord)
  const [wordData, setWordData] = useState<WordData>(wordInitData)

  const mistakes = Object.values(wordData).filter(
    ({ isInWord, isUsed }) => isUsed && !isInWord
  ).length

  const restartGame = () => {
    const { initWord, wordInitData } = startGame()
    setWord(initWord)
    setWordData(wordInitData)
  }
  const updateWordData = (wordData: WordData) => {
    setWordData({ ...wordData })
  }

  const renderState = () => {
    const isLost = mistakes >= MISTAKE_LIMIT[DIFFICULTY]
    const isWon = !word.split('').filter(letter => !wordData[letter].isUsed)
      .length

    if (isLost || isWon)
      return (
        <Finish
          type={isLost ? 'lose' : 'win'}
          word={word}
          restartGame={restartGame}
          lang={LANG}
        />
      )
    return (
      <>
        <Word word={word} wordData={wordData} />
        <Letters wordData={wordData} updateWordData={updateWordData} />
      </>
    )
  }

  return (
    <main className="font-sans flex items-center justify-items-center h-screen p-4 md:p-20 min-w-4/5 bg-blue-50">
      <div className="flex flex-col md:flex-row w-full h-full">
        <div className="w-full md:w-2/5 bg-blue-100 p-4 h-2/5 md:h-full">
          <Mistakes mistakes={mistakes} />
        </div>

        <div className="w-full md:w-3/5 bg-blue-200 p-4 h-3/5 md:h-full">
          {renderState()}
        </div>
      </div>
    </main>
  )
}
