import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Section from '@/components/ui/Section'
import Timeline from '@/components/ui/Timeline'
import { timelineMilestones } from '@/lib/data'

export const metadata = {
  title: 'Journey — Dilum Samarathunga',
  description: 'My education, projects, and certifications over time.',
}

export default function JourneyPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <Section
          title="The Journey"
          subtitle="Milestones, education, and projects — in chronological order."
        >
          <Timeline milestones={timelineMilestones} />
        </Section>
      </main>
      <Footer />
    </>
  )
}
