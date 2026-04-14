import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, CheckCircle2, Clock, ExternalLink, Github } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { projects } from '@/lib/data'

interface Props {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }))
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params
  const project = projects.find((item) => item.slug === slug)

  if (!project) return {}

  return {
    title: `${project.title} | Dilum Samarathunga`,
    description: project.summary,
  }
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params
  const project = projects.find((item) => item.slug === slug)

  if (!project) notFound()

  const completed = project.status === 'completed'

  return (
    <>
      <Navbar />
      <main className="bg-stone-50">
        <section className="border-b border-stone-200 bg-white">
          <div className="container-shell py-16">
            <Link href="/projects" className="inline-flex items-center gap-2 text-sm text-stone-500 transition hover:text-stone-900">
              <ArrowLeft size={14} />
              Back to projects
            </Link>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <span className={`inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-medium ${completed ? 'bg-emerald-50 text-emerald-700' : 'bg-amber-50 text-amber-700'}`}>
                {completed ? <CheckCircle2 size={12} /> : <Clock size={12} />}
                {completed ? 'Completed' : 'Ongoing'}
              </span>
              <span className="rounded-full border border-stone-200 bg-stone-50 px-3 py-1 text-xs text-stone-600">{project.year}</span>
              <span className="rounded-full border border-stone-200 bg-stone-50 px-3 py-1 text-xs text-stone-600">{project.team === 'group' ? 'Group project' : 'Solo project'}</span>
            </div>

            <h1 className="mt-6 max-w-4xl text-4xl font-display font-bold tracking-tight text-stone-950 sm:text-5xl">{project.title}</h1>
            <p className="mt-4 max-w-3xl text-lg text-stone-600">{project.tagline}</p>
            <p className="mt-6 max-w-3xl text-base leading-8 text-stone-600">{project.description}</p>

            <div className="mt-8 flex flex-wrap gap-3">
              {project.githubUrl && (
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-2xl bg-stone-950 px-5 py-3 text-sm font-medium text-white">
                  <Github size={16} />
                  GitHub
                </a>
              )}
              {project.liveUrl && (
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-2xl border border-stone-200 bg-white px-5 py-3 text-sm font-medium text-stone-900">
                  <ExternalLink size={16} />
                  Live demo
                </a>
              )}
            </div>
          </div>
        </section>

        <section className="container-shell grid gap-6 py-10 lg:grid-cols-[1.2fr_0.8fr]">
          <article className="space-y-6">
            <InfoCard title="Overview">
              <p>{project.summary}</p>
            </InfoCard>
            <InfoCard title="Problem">
              <p>{project.problem}</p>
            </InfoCard>
            <InfoCard title="Solution">
              <p>{project.solution}</p>
            </InfoCard>
            <InfoCard title="Technical architecture">
              <BulletList items={project.architecture} />
            </InfoCard>
            {project.contributions && project.contributions.length > 0 && (
              <InfoCard title="My contribution">
                <BulletList items={project.contributions} />
              </InfoCard>
            )}
            <InfoCard title="Technical deep dive">
              <LongList items={project.technicalDetails} />
            </InfoCard>
            <InfoCard title="Challenges and engineering decisions">
              <BulletList items={project.challenges} />
            </InfoCard>
            {project.repoEvidence && project.repoEvidence.length > 0 && (
              <InfoCard title="Repository evidence used for this write-up">
                <BulletList items={project.repoEvidence} />
              </InfoCard>
            )}
          </article>

          <aside className="space-y-6">
            <InfoCard title="Role">
              <p>{project.role}</p>
            </InfoCard>
            <InfoCard title="Stack">
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span key={tech} className="rounded-full border border-stone-200 bg-stone-50 px-3 py-1 text-xs text-stone-700">
                    {tech}
                  </span>
                ))}
              </div>
            </InfoCard>
            <InfoCard title="Key highlights">
              <BulletList items={project.highlights} />
            </InfoCard>
          </aside>
        </section>
      </main>
      <Footer />
    </>
  )
}

function InfoCard({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="rounded-[28px] border border-stone-200 bg-white p-6 shadow-sm">
      <h2 className="text-lg font-display font-semibold text-stone-950">{title}</h2>
      <div className="mt-4 text-sm leading-7 text-stone-600">{children}</div>
    </section>
  )
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item} className="flex gap-3">
          <span className="mt-2 h-1.5 w-1.5 rounded-full bg-stone-900" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}

function LongList({ items }: { items: string[] }) {
  return (
    <div className="space-y-4">
      {items.map((item) => (
        <p key={item}>{item}</p>
      ))}
    </div>
  )
}
