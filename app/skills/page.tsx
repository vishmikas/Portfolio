import SkillsPageClient from './SkillsPageClient'

export const metadata = {
  title: 'Skills',
  description:
    'Technologies and tools Dilum Samarathunga uses — Python, React, Node.js, Flask, MongoDB, TensorFlow, and more.',
  openGraph: {
    title: 'Skills — Dilum Samarathunga',
    description:
      'Technologies and tools Dilum Samarathunga uses — Python, React, Node.js, Flask, MongoDB, TensorFlow, and more.',
  },
}

export default function SkillsPage() {
  return <SkillsPageClient />
}