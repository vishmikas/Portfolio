import { Github, Linkedin, Mail } from 'lucide-react'
import { personalInfo } from '@/lib/data'

export default function Footer() {
  return (
    <footer className="border-t border-stone-200 bg-white">
      <div className="container-shell flex flex-col gap-5 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-display text-base font-semibold text-stone-950">{personalInfo.name}</p>
          <p className="mt-1 text-sm text-stone-500">Full-Stack Developer</p>
        </div>

        <div className="flex items-center gap-4">
          <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="rounded-full border border-stone-200 p-3 text-stone-700 transition hover:bg-stone-100"><Linkedin size={16} /></a>
          <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="rounded-full border border-stone-200 p-3 text-stone-700 transition hover:bg-stone-100"><Github size={16} /></a>
          <a href={`mailto:${personalInfo.email}`} className="rounded-full border border-stone-200 p-3 text-stone-700 transition hover:bg-stone-100"><Mail size={16} /></a>
        </div>
      </div>
    </footer>
  )
}
