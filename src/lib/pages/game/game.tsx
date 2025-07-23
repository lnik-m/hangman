'use client'
import { Difficulty, LANG, MISTAKE_LIMIT, startGame, WordData } from 'shared'
import { useState } from 'react'
import { Finish, Word, Letters, Mistakes } from './ui'

export const Game = () => {
  const [difficulty, setDifficulty] = useState<Difficulty>('medium')

  const { initWord, wordInitData } = startGame(difficulty)
  const [word, setWord] = useState<string>(initWord)
  const [wordData, setWordData] = useState<WordData>(wordInitData)

  const mistakes = Object.values(wordData).filter(
    ({ isInWord, isUsed }) => isUsed && !isInWord
  ).length

  const restartGame = () => {
    const newDifficulty: Difficulty = (() => {
      const random = Math.floor(Math.random() * 3)
      if (random === 0) return 'easy'
      if (random === 1) return 'medium'
      return 'hard'
    })()
    const { initWord, wordInitData } = startGame(newDifficulty)
    setWord(initWord)
    setWordData(wordInitData)
    setDifficulty(newDifficulty)
  }
  const updateWordData = (wordData: WordData) => {
    setWordData({ ...wordData })
  }

  const renderState = () => {
    const isLost = mistakes >= MISTAKE_LIMIT[difficulty]
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
          <Mistakes mistakes={mistakes} difficulty={difficulty} />
        </div>

        <div className="bg-blue-200 h-3/5 w-full lg:h-full lg:w-3/5 p-4">
          {renderState()}
        </div>
      </div>
    </main>
  )
}
