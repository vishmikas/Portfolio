import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Section from '@/components/ui/Section'
import CertCard from '@/components/ui/CertCard'
import { certificates } from '@/lib/data'

export const metadata = {
  title: 'Certificates Vault — Dilum Samarathunga',
  description: 'Professional and academic certifications.',
}

export default function CertificatesPage() {
  const technical = certificates.filter(c => c.category === 'technical')
  const management = certificates.filter(c => c.category === 'management')
  const design = certificates.filter(c => c.category === 'design')

  const groups = [
    { label: 'Technical', items: technical },
    { label: 'Management', items: management },
    { label: 'Design', items: design },
  ].filter(g => g.items.length > 0)

  return (
    <>
      <Navbar />
      <main className="pt-20">
        <Section
          title="Certificates Vault"
          subtitle={`${certificates.length} certifications across technical, management, and design disciplines.`}
        >
          <div className="space-y-12">
            {groups.map(group => (
              <div key={group.label}>
                <h3
                  className="text-xs font-body font-medium tracking-widest uppercase mb-5"
                  style={{ color: '#a8a29e' }}
                >
                  {group.label}
                </h3>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                  {group.items.map((cert, i) => (
                    <CertCard key={cert.id} cert={cert} index={i} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Section>
      </main>
      <Footer />
    </>
  )
}
