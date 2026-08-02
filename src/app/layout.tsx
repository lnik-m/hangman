import type { Metadata } from 'next'
import { LANG } from 'shared'

import './globals.css'

export const metadata: Metadata = {
  title: 'hangman',
  description: 'Classic hangman word game: guess letters to solve puzzles'
}

import { Geist, Geist_Mono, Shantell_Sans } from 'next/font/google'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin']
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin']
})

const shantellSans = Shantell_Sans({
  variable: '--font-shantell-sans',
  subsets: ['latin']
})

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang={LANG}
      className={`${geistSans.variable} ${shantellSans.variable} ${geistMono.variable}`}
    >
      <body className="antialiased">{children}</body>
    </html>
  )
}
