import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Section from '@/components/ui/Section'
import Timeline from '@/components/ui/Timeline'
import Referees from '@/components/home/Referees'
import { timelineMilestones } from '@/lib/data'

export const metadata = {
  title: 'Journey',
  description: "The education, milestones, competitions, and certifications that shaped Dilum Samarathunga as a developer — from A/Ls to Computer Science.",
  openGraph: {
    title: 'Journey — Dilum Samarathunga',
    description: "The education, milestones, competitions, and certifications that shaped Dilum Samarathunga as a developer — from A/Ls to Computer Science.",
  },
}

export default function JourneyPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <Section
          title="The Journey"
          subtitle="Milestones, education, competitions, and growth — in chronological order."
        >
          <Timeline milestones={timelineMilestones} />
        </Section>

        <Referees />
      </main>
      <Footer />
    </>
  )
}
