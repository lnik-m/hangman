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
    <main className="bg-blue-50 font-sans flex items-center justify-items-center h-screen min-w-4/5 p-4 lg:p-20">
      <div className="flex flex-col lg:flex-row h-full w-full">
        <div className="bg-blue-100 h-2/5 w-full lg:h-full lg:w-2/5 p-4">
          <Mistakes mistakes={mistakes} />
        </div>

        <div className="bg-blue-200 h-3/5 w-full lg:h-full lg:w-3/5 p-4">
          {renderState()}
        </div>
      </div>
    </main>
  )
}
