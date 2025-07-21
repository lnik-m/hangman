import { DIFFICULTY, hangmanState, HangmanSvg } from 'shared'

interface Props {
  mistakes: number
}

export const Mistakes = ({ mistakes }: Props) => {
  return (
    <div className="flex justify-center h-full">
      <HangmanSvg state={hangmanState[DIFFICULTY][mistakes]} />
    </div>
  )
}
