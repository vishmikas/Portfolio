import type { Metadata } from 'next'
import './globals.css'

const siteUrl = 'https://portfolio-rosegamma-53.vercel.app'
const name = 'Dilum Samarathunga'
const title = `${name} — Full-Stack Developer & AI Enthusiast`
const description =
  'Computer Science undergraduate at the University of Westminster (IIT). I build full-stack applications, AI-assisted systems, and real-time platforms — turning complex problems into clean, useful software.'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: `%s — ${name}`,
  },
  description,
  keywords: [
    'Dilum Samarathunga',
    'Full-Stack Developer',
    'React Developer',
    'Node.js',
    'Python',
    'Flask',
    'AI ML',
    'Sri Lanka Developer',
    'IIT',
    'University of Westminster',
    'Portfolio',
  ],
  authors: [{ name, url: siteUrl }],
  creator: name,
  openGraph: {
    type: 'website',
    url: siteUrl,
    siteName: `${name} Portfolio`,
    title,
    description,
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: `${name} — Full-Stack Developer`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: ['/og-image.png'],
    creator: '@vishmikas',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
    },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
  },
  alternates: {
    canonical: siteUrl,
  },
}

// JSON-LD structured data
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name,
  url: siteUrl,
  jobTitle: 'Full-Stack Developer',
  description,
  email: 'vishmikas9@gmail.com',
  telephone: '+94713598786',
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'LK',
  },
  alumniOf: {
    '@type': 'EducationalOrganization',
    name: 'University of Westminster (via IIT)',
  },
  sameAs: [
    'https://www.linkedin.com/in/dilum-samarathunga/',
    'https://github.com/vishmikas',
  ],
  knowsAbout: [
    'React', 'Node.js', 'Python', 'Flask', 'MongoDB',
    'Machine Learning', 'Full-Stack Development', 'REST APIs',
    'Socket.IO', 'Spring Boot', 'TensorFlow',
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
