import type { Metadata } from 'next'
import { Crimson_Text, Source_Sans_3 } from 'next/font/google'
import './globals.css'

const crimsonText = Crimson_Text({
  subsets: ['latin'],
  weight: ['400', '600'],
  style: ['normal', 'italic'],
  variable: '--font-crimson',
  display: 'swap',
})

const sourceSans3 = Source_Sans_3({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-source-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Suisei Nakagawa — Computer Vision & Deep Learning',
  description:
    'Portfolio of Suisei Nakagawa, a machine learning student at Minerva University. Research interests include computer vision and deep learning.',
  keywords: ['computer vision', 'deep learning', 'machine learning', 'event cameras', 'Minerva University'],
  authors: [{ name: 'Suisei Nakagawa' }],
  openGraph: {
    title: 'Suisei Nakagawa — Computer Vision & Deep Learning',
    description: 'Portfolio of Suisei Nakagawa: computer vision and deep learning.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary',
    title: 'Suisei Nakagawa — Computer Vision & Deep Learning',
    description: 'Portfolio of Suisei Nakagawa: computer vision and deep learning.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${crimsonText.variable} ${sourceSans3.variable}`}>
      <body>{children}</body>
    </html>
  )
}
