import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6">
      <p
        className="text-xs font-body font-medium tracking-widest uppercase mb-3"
        style={{ color: '#a8a29e' }}
      >
        404
      </p>
      <h1
        className="text-4xl font-display font-bold mb-4 tracking-tight"
        style={{ color: '#1c1917' }}
      >
        Page not found
      </h1>
      <p className="text-sm font-body mb-8" style={{ color: '#78716c' }}>
        The page you're looking for doesn't exist.
      </p>
      <Link
        href="/"
        className="px-5 py-2.5 rounded-lg text-sm font-body font-medium transition-opacity hover:opacity-70"
        style={{ backgroundColor: '#0f172a', color: '#fafaf9' }}
      >
        Back to Home
      </Link>
    </div>
  )
}
