import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import Hero from '@/components/sections/Hero'
import Section from '@/components/ui/Section'
import ProjectCard from '@/components/ui/ProjectCard'
import SplashGate from '@/components/home/SplashGate'
import ContactPopup from '@/components/home/ContactPopup'
import AboutHighlights from '@/components/home/AboutHighlights'
import { projects } from '@/lib/data'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function HomePage() {
  const featuredProjects = projects.filter((project) => project.featured)

  return (
    <>
      <SplashGate />
      <Navbar />
      <main>
        <Hero />

        <Section
          title="Selected Work"
          subtitle="A curated look at the projects that best represent how I think about product structure, engineering decisions, and user-focused software."
        >
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>

          <div className="mt-8">
            <Link
              href="/projects"
              className="group inline-flex items-center gap-2 text-sm font-medium text-stone-900 transition-opacity hover:opacity-70"
            >
              Explore all project case studies
              <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </Section>

        <AboutHighlights />
      </main>
      <Footer />
      <ContactPopup />
    </>
  )
}
