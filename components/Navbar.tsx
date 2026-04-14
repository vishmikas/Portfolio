'use client'

import { AnimatePresence, motion } from 'framer-motion'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { personalInfo } from '@/lib/data'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/projects', label: 'Projects' },
  { href: '/journey', label: 'Journey' },
  { href: '/skills', label: 'Skills' },
  { href: '/certificates', label: 'Vault' },
]

export default function Navbar() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 border-b border-stone-200/80 bg-white/85 backdrop-blur-xl">
      <div className="container-shell flex items-center justify-between py-4">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-stone-950 text-sm font-bold text-white shadow-sm">DS</div>
          <div>
            <p className="text-sm font-display font-semibold text-stone-950">Dilum Samarathunga</p>
            <p className="text-xs text-stone-500">Full-Stack Developer</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => {
            const active = pathname === link.href
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-full px-4 py-2 text-sm transition ${active ? 'bg-stone-950 text-white' : 'text-stone-600 hover:bg-stone-100 hover:text-stone-900'}`}
              >
                {link.label}
              </Link>
            )
          })}
        </nav>

        <div className="hidden md:block">
          <a href={personalInfo.cvPath} download className="rounded-full border border-stone-200 px-4 py-2 text-sm font-medium text-stone-900 transition hover:bg-stone-100">
            Download CV
          </a>
        </div>

        <button
          onClick={() => setOpen((value) => !value)}
          className="rounded-full border border-stone-200 p-2 text-stone-700 md:hidden"
          aria-label="Toggle navigation menu"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-t border-stone-200 bg-white md:hidden"
          >
            <div className="container-shell flex flex-col gap-2 py-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`rounded-2xl px-4 py-3 text-sm ${pathname === link.href ? 'bg-stone-950 text-white' : 'bg-stone-50 text-stone-700'}`}
                >
                  {link.label}
                </Link>
              ))}
              <a href={personalInfo.cvPath} download className="rounded-2xl border border-stone-200 px-4 py-3 text-sm font-medium text-stone-900">
                Download CV
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
