import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-geist-sans',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Tristan Murad - Full Stack and AI Engineer | Portfolio',
  description: 'Professional portfolio of Tristan Murad, a full stack and AI engineer specializing in React, Next.js, machine learning, and modern web technologies. View projects, resume, and get in touch.',
  keywords: ['Tristan Murad', 'Full Stack Developer', 'AI Engineer', 'Machine Learning', 'React', 'Next.js', 'Portfolio', 'Web Developer', 'JavaScript', 'TypeScript', 'Python'],
  authors: [{ name: 'Tristan Murad', url: 'https://tristanmurad.dev' }],
  creator: 'Tristan Murad',
  publisher: 'Tristan Murad',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://tristanmurad.dev'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://tristanmurad.dev',
    title: 'Tristan Murad - Full Stack and AI Engineer Portfolio',
    description: 'Professional portfolio showcasing full stack development and AI engineering projects in React, Next.js, machine learning, and modern web technologies.',
    siteName: 'Tristan Murad Portfolio',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Tristan Murad - Full Stack and AI Engineer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tristan Murad - Full Stack and AI Engineer Portfolio',
    description: 'Professional portfolio showcasing full stack development and AI engineering projects.',
    images: ['/images/og-image.jpg'],
    creator: '@tristanmurad',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${jetbrainsMono.variable} antialiased bg-gray-900 text-white`}>
        {children}
      </body>
    </html>
  )
}
