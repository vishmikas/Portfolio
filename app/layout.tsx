import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Dilum Samarathunga — Full-Stack Developer & AI Enthusiast',
  description: 'Personal portfolio of Dilum Samarathunga. Full-Stack Developer and AI Enthusiast building scalable web applications and intelligent systems.',
  openGraph: {
    title: 'Dilum Samarathunga — Full-Stack Developer',
    description: 'Building scalable systems at the intersection of modern web and AI.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
