import type { Difficulty } from 'shared'

const DIFFICULTY_STARS: Record<Difficulty, number> = {
  easy: 1,
  medium: 2,
  hard: 3
}

interface Props {
  star: number
  level: Difficulty
  isActive: boolean
  isHovered: boolean
}

export const StarSvg = ({ star, level, isActive, isHovered }: Props) => {
  return (
    <svg
      className={` w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 transition-all duration-300
                      ${
                        star <= DIFFICULTY_STARS[level] &&
                        (isActive || isHovered)
                          ? 'text-yellow-400 drop-shadow-lg scale-110'
                          : 'text-gray-300 dark:text-gray-600'
                      }
                      ${
                        isActive && star <= DIFFICULTY_STARS[level]
                          ? 'animate-pulse'
                          : ''
                      }
                    `}
      fill={
        star <= DIFFICULTY_STARS[level] && (isActive || isHovered)
          ? 'currentColor'
          : 'none'
      }
      stroke="currentColor"
      strokeWidth="1.5"
      viewBox="0 0 24 24"
    >
      <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
    </svg>
  )
}
