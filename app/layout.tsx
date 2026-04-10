import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: 'Portfolio — Software Lead QA Engineer',
  description:
    '18+ years building quality into software across Fortune 500 companies and high-growth startups.'
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' className={`${inter.variable} h-full antialiased`}>
      <body className='min-h-full'>{children}</body>
    </html>
  )
}
