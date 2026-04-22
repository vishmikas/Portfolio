import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Section from '@/components/ui/Section'
import CertCard from '@/components/ui/CertCard'
import { certificates } from '@/lib/data'

export const metadata = {
  title: 'Certificates Vault',
  description: '9 certifications from Google, LinkedIn Learning, University of Moratuwa, and IEEE — earned by Dilum Samarathunga across technical, management, and design disciplines.',
  openGraph: {
    title: 'Certificates Vault — Dilum Samarathunga',
    description: '9 certifications from Google, LinkedIn Learning, University of Moratuwa, and IEEE — earned by Dilum Samarathunga across technical, management, and design disciplines.',
  },
}

export default function CertificatesPage() {
  const groups = [
    { label: 'Technical', items: certificates.filter(c => c.category === 'technical') },
    { label: 'Management', items: certificates.filter(c => c.category === 'management') },
    { label: 'Design', items: certificates.filter(c => c.category === 'design') },
    { label: 'Other', items: certificates.filter(c => c.category === 'other') },
  ].filter(g => g.items.length > 0)

  return (
    <>
      <Navbar />
      <main className="pt-20">
        <Section
          title="Certificates Vault"
          subtitle={`${certificates.length} certifications across technical, management, design, and other disciplines.`}
        >
          <div className="space-y-14">
            {groups.map(group => (
              <div key={group.label}>
                <h3
                  className="text-xs font-body font-medium tracking-widest uppercase mb-5"
                  style={{ color: '#a8a29e' }}
                >
                  {group.label}
                </h3>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
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
