import { Difficulty, SupportedLangs } from './types'

export const words: Record<SupportedLangs, Record<Difficulty, string[]>> = {
  en: {
    easy: ['zero', 'game', 'echo', 'ice', 'art'],
    medium: ['oasis', 'wheat', 'random', 'hunger', 'granny'],
    hard: ['tractor', 'cabbage', 'charcoal', 'cinnamon', 'saxophone']
  },
  ru: {
    easy: ['кот', 'лицо', 'окно', 'чудо', 'вода'],
    medium: ['точка', 'плита', 'металл', 'одеяло', 'сериал'],
    hard: ['барабан', 'линейка', 'фонарик', 'галактика', 'животное']
  }
}
