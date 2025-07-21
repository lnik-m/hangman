import type { Metadata } from 'next'
import { Geist, Geist_Mono, Shantell_Sans } from 'next/font/google'
import './globals.css'
import { LANG } from 'shared'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin']
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin']
})

const fancy = Shantell_Sans({
  variable: '--font-fancy',
  subsets: ['latin'],
  weight: '400'
})

export const metadata: Metadata = {
  title: LANG === 'en' ? 'hangman' : 'виселица',
  description:
    LANG === 'en'
      ? 'Classic hangman word game: guess letters to solve puzzles'
      : 'Классическая игра «виселица»: угадывайте слова по буквам, соревнуйтесь с компьютером'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang={LANG}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${fancy.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  )
}
