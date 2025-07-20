import type { Metadata } from 'next'
import { Geist, Geist_Mono, Schoolbell } from 'next/font/google'
import './globals.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin']
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin']
})

const schoolbell = Schoolbell({
  variable: '--font-schoolbell',
  subsets: ['latin'],
  weight: '400'
})

export const metadata: Metadata = {
  title: 'hangman',
  description: 'hangman'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${schoolbell.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  )
}
