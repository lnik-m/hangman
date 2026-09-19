import type { Metadata } from 'next'
import { LANG } from 'shared'

import './globals.css'

const SITE_URL = 'https://hangman-eosin-sigma.vercel.app'
const SITE_NAME = 'hangman'
const TITLE = 'Play Hangman – Classic Word Game Online'
const DESCRIPTION =
  'Learn new words while playing the classic Hangman game. Guess letters, avoid mistakes and discover definitions. Three difficulty levels, free and fully responsive.'
const OG_IMAGE = `${SITE_URL}/preview.png`

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: SITE_URL
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: SITE_URL,
    siteName: SITE_NAME,
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: TITLE
      }
    ],
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
    images: [OG_IMAGE]
  }
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
