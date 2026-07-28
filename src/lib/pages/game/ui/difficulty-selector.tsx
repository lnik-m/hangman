'use client'
import { useState } from 'react'
import {
  type Difficulty,
  StarSvg,
  LANG,
  DIFFICULTY_LABELS_BY_LANG,
  DIFFICULTIES
} from 'shared'

interface Props {
  value: Difficulty
  onChange: (value: Difficulty) => void
}

export const DifficultySelector = ({ value, onChange }: Props) => {
  const [hovered, setHovered] = useState<Difficulty | null>(null)
  const handleClick = (level: Difficulty) => {
    onChange(level)
  }
  return (
    <div className="flex flex-col items-center gap-2 mb-2">
      <div className="flex gap-2">
        {DIFFICULTIES.map(level => {
          const isActive = value === level
          const isHovered = hovered === level
          return (
            <button
              key={level}
              onClick={() => handleClick(level)}
              onMouseEnter={() => setHovered(level)}
              onMouseLeave={() => setHovered(null)}
              className="group relative flex flex-col items-center gap-1 p-2 rounded-xl transition-all duration-300 hover:scale-110"
            >
              <div className="flex gap-1">
                {[1, 2, 3].map(star => (
                  <StarSvg
                    key={star}
                    star={star}
                    level={level}
                    isActive={isActive}
                    isHovered={isHovered}
                  />
                ))}
              </div>

              <span
                className={`
                text-[10px] sm:text-xs font-medium
                transition-all duration-300
                ${
                  isActive
                    ? 'text-purple-700 opacity-100'
                    : 'text-gray-700 opacity-60'
                }
                ${isHovered ? 'opacity-100' : ''}
              `}
              >
                {DIFFICULTY_LABELS_BY_LANG[LANG][level]}
              </span>

              {isActive && (
                <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1/2 h-0.5 bg-purple-500 rounded-full animate-pulse" />
              )}
            </button>
          )
        })}
      </div>
    </div>
  )
}
