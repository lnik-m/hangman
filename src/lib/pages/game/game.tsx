'use client'
import { useCallback, useEffect, useState } from 'react'
import { useGetWord } from 'features/use-get-word'
import {
  type Difficulty,
  type WordData,
  LANG,
  MISTAKE_LIMIT,
  startGame
} from 'shared'
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
  const [word, setWord] = useState<string>('')
  const [wordData, setWordData] = useState<WordData>({})
  const [gameStarted, setGameStarted] = useState(false)

  const {
    word: fetchedWord,
    definition,
    error,
    getWord,
    loading
  } = useGetWord({ difficulty })

  useEffect(() => {
    if (fetchedWord && !gameStarted) {
      const { initWord, wordInitData } = startGame(fetchedWord)
      setWord(initWord)
      setWordData(wordInitData)
      setGameStarted(true)
    }
  }, [fetchedWord, difficulty, gameStarted])

  useEffect(() => {
    setGameStarted(false)
    getWord()
  }, [difficulty, getWord])

  const mistakes = Object.values(wordData).filter(
    ({ isInWord, isUsed }) => isUsed && !isInWord
  ).length

  const restartGame = useCallback(() => {
    const newDifficulty: Difficulty = (() => {
      const random = Math.floor(Math.random() * 3)
      if (random === 0) return 'easy'
      if (random === 1) return 'medium'
      return 'hard'
    })()
    setDifficulty(newDifficulty)
    setGameStarted(false)
    setWordData({})
  }, [])

  const updateWordData = useCallback((newWordData: WordData) => {
    setWordData({ ...newWordData })
  }, [])

  const renderState = () => {
    if (loading) {
      return <LoadingSkeleton />
    }

    if (error) {
      return (
        <ErrorState
          restartGame={() => {
            setGameStarted(false)
            getWord()
          }}
        />
      )
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
