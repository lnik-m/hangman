'use client'
import { useCallback, useEffect, useState } from 'react'
import { useGetWord } from 'features/use-get-word'
import { type Difficulty, LANG, MISTAKE_LIMIT } from 'shared'
import {
  Finish,
  Word,
  Letters,
  Mistakes,
  ErrorState,
  LoadingSkeleton,
  DifficultySelector
} from './ui'

export const Game = () => {
  const [difficulty, setDifficulty] = useState<Difficulty>('medium')
  const [gameStarted, setGameStarted] = useState(false)

  const { word, wordData, setWordData, definition, getWord, loading, error } =
    useGetWord()

  const mistakes = Object.values(wordData).filter(
    ({ isInWord, isUsed }) => isUsed && !isInWord
  ).length

  const restartGame = useCallback(() => {
    setGameStarted(false)
    getWord({ difficulty })
  }, [difficulty, getWord])

  useEffect(() => {
    if (word && !gameStarted) {
      setGameStarted(true)
    }
  }, [word, gameStarted])

  useEffect(() => {
    restartGame()
  }, [difficulty, restartGame])

  const renderState = () => {
    if (loading) {
      return <LoadingSkeleton />
    }

    if (error) {
      return <ErrorState restartGame={restartGame} />
    }

    if (!gameStarted || !word) {
      return <LoadingSkeleton />
    }

    const isLost = mistakes >= MISTAKE_LIMIT[difficulty]
    const isWon = word.split('').every(letter => wordData[letter]?.isUsed)
    if (isLost || isWon) {
      return (
        <Finish
          isLost={isLost}
          word={word}
          definition={definition}
          restartGame={restartGame}
          lang={LANG}
        />
      )
    }

    return (
      <>
        <Word word={word} wordData={wordData} />
        <Letters
          wordData={wordData}
          updateWordData={newData => setWordData({ ...newData })}
        />
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
          <DifficultySelector
            value={difficulty}
            onChange={newDifficulty => setDifficulty(newDifficulty)}
          />
          {renderState()}
        </div>
      </div>
    </main>
  )
}
