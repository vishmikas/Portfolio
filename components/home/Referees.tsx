'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, User } from 'lucide-react'
import { referees } from '@/lib/data'

export default function Referees() {
  return (
    <section className="border-t border-stone-200 bg-white">
      <div className="container-shell py-16">
        <div className="max-w-5xl mx-auto">
          <div className="mb-8">
            <p className="text-[10px] uppercase tracking-[0.3em] text-stone-400 mb-2">References</p>
            <h2 className="text-2xl font-display font-bold text-stone-950">Referees</h2>
            <p className="mt-2 text-sm text-stone-500 max-w-lg">
              Academic referees from the Informatics Institute of Technology, available on request.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {referees.map((ref, i) => (
              <motion.div
                key={ref.name}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="rounded-2xl border border-stone-200 bg-stone-50 p-6 h-full">
                  {/* Avatar initial */}
                  <div className="flex items-start gap-4 mb-5">
                    <div className="w-11 h-11 rounded-2xl bg-stone-950 text-white flex items-center justify-center font-display font-bold text-base shrink-0">
                      {ref.name.split(' ').filter(w => w.length > 2).slice(0, 2).map(w => w[0]).join('')}
                    </div>
                    <div>
                      <h3 className="text-sm font-display font-semibold text-stone-950 leading-tight">{ref.name}</h3>
                      <p className="text-xs text-stone-500 mt-0.5">{ref.title}</p>
                      <p className="text-xs text-stone-400">{ref.institution}</p>
                    </div>
                  </div>

                  {/* Contact */}
                  <div className="space-y-2.5 pt-4 border-t border-stone-200">
                    <a
                      href={`tel:${ref.phone}`}
                      className="flex items-center gap-2.5 text-xs text-stone-600 hover:text-stone-950 transition-colors group"
                    >
                      <div className="w-6 h-6 rounded-lg bg-white border border-stone-200 flex items-center justify-center shrink-0 group-hover:border-stone-400 transition-colors">
                        <Phone size={11} className="text-stone-400" />
                      </div>
                      {ref.phone}
                    </a>
                    <a
                      href={`mailto:${ref.email}`}
                      className="flex items-center gap-2.5 text-xs text-stone-600 hover:text-stone-950 transition-colors group"
                    >
                      <div className="w-6 h-6 rounded-lg bg-white border border-stone-200 flex items-center justify-center shrink-0 group-hover:border-stone-400 transition-colors">
                        <Mail size={11} className="text-stone-400" />
                      </div>
                      {ref.email}
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <p className="mt-5 text-xs text-stone-400 flex items-center gap-1.5">
            <User size={11} />
            References are available to prospective employers on direct request.
          </p>
        </div>
      </div>
    </section>
  )
}
