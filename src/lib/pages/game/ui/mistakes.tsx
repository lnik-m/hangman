import { DIFFICULTY, MISTAKE_LIMIT } from 'shared'

interface Props {
  mistakes: number
}

export const Mistakes = ({ mistakes }: Props) => {
  return (
    <>
      {mistakes}/{MISTAKE_LIMIT[DIFFICULTY]} mistakes
    </>
  )
}
