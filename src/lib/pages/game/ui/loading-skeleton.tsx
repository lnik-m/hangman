import { alphabet } from 'shared'
import { Word } from './word'

export const LoadingSkeleton = () => {
  return (
    <>
      <Word word={'_____'} letterClassName="text-gray-600 animate-pulse" />
      <div className="flex items-center justify-center w-full mt-7 font-fancy">
        <div className="flex flex-wrap md:max-w-2/3 items-center justify-center w-full text-2xl xl:text-3xl 2xl:text-4xl gap-x-4 gap-y-3 lg:gap-x-4 lg:gap-y-4">
          {alphabet['en'].map((letter, index) => (
            <button
              className={`
                border-2 rounded-md
                bg-gray-200 
                border-amber-200 
                border-dotted
                animate-pulse
                lg:py-1 lg:px-2 py-0.5 px-1
                text-transparent
                select-none
                min-w-[32px]
              `}
              key={`letters-${index}-${letter}`}
              disabled
            >
              {letter}
            </button>
          ))}
        </div>
      </div>
    </>
  )
}
