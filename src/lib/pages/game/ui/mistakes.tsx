import { Difficulty, hangmanState, HangmanSvg } from 'shared'

interface Props {
  mistakes: number
  difficulty: Difficulty
}

export const Mistakes = ({ mistakes, difficulty }: Props) => {
  return (
    <div className="flex justify-center h-full relative">
      <HangmanSvg state={hangmanState[difficulty][mistakes]} />
    </div>
  )
}
