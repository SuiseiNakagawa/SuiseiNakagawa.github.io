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
  title: 'Suisei Nakagawa — ML Research',
  description:
    'ML research portfolio of Suisei Nakagawa. Research interests include [Topic A], [Topic B], and [Topic C].',
  keywords: ['machine learning', 'deep learning', 'research', 'NLP', 'computer vision'],
  authors: [{ name: 'Suisei Nakagawa' }],
  openGraph: {
    title: 'Suisei Nakagawa — ML Research',
    description: 'ML research portfolio of Suisei Nakagawa.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary',
    title: 'Suisei Nakagawa — ML Research',
    description: 'ML research portfolio of Suisei Nakagawa.',
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
