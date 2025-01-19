import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Trener Marcin Blicharski - Treningi personalne ze sportów walki Wrocław',
  description: 'Profesjonalne treningi personalne z boksu, kickboxingu i kondycyjne we Wrocławiu. Wielokrotny Mistrz Polski i medalista Mistrzostw Świata.',
  keywords: ['trener personalny', 'boks', 'kickboxing', 'Wrocław', 'trening kondycyjny'],
  openGraph: {
    type: 'website',
    locale: 'pl_PL',
    url: 'https://www.example.com',
    siteName: 'Trener Marcin Blicharski',
    images: [
      {
        url: 'https://www.example.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Trener Marcin Blicharski',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@yourtwitterhandle',
    creator: '@yourtwitterhandle',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pl">
      <body className={inter.className}>{children}</body>
    </html>
  )
}


