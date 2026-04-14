import { Camera, Coffee, GraduationCap, MapPin } from 'lucide-react'
import { personalInfo } from '@/lib/data'

const items = [
  {
    label: 'Based in',
    value: personalInfo.location,
    icon: MapPin,
  },
  {
    label: 'Education',
    value: 'BSc Computer Science — University of Westminster',
    icon: GraduationCap,
  },
  {
    label: 'Beyond tech',
    value: 'Completed barista course',
    icon: Coffee,
  },
  {
    label: 'Creative practice',
    value: 'Photography',
    icon: Camera,
  },
]

export default function AboutHighlights() {
  return (
    <section className="border-y border-stone-200 bg-stone-50">
      <div className="container-shell grid gap-4 py-16 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((item) => {
          const Icon = item.icon
          return (
            <div key={item.label} className="rounded-3xl border border-stone-200 bg-white p-5 shadow-sm">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-2xl bg-stone-950 text-white">
                <Icon size={18} />
              </div>
              <p className="text-xs uppercase tracking-[0.24em] text-stone-400">{item.label}</p>
              <p className="mt-2 text-sm font-medium text-stone-900">{item.value}</p>
            </div>
          )
        })}
      </div>
    </section>
  )
}
