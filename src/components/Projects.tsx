import { motion } from 'framer-motion'

const projects = [
  {
    title: 'Heirloom',
    description:
      'A platform for preserving family knowledge. Records and transcribes conversations with elders locally via Whisper, then extracts structured artifacts like recipe cards and craft guides, with a constellation graph for family relationships.',
    tech: ['React', 'TypeScript', 'Claude API', 'Whisper', 'IndexedDB'],
    github: 'https://github.com/akashbagchi/heirloom',
    demo: null,
    note: null,
  },
  {
    title: 'unbored.AI',
    description:
      'Scans a GitHub repo, maps its dependency graph, and auto-generates onboarding docs with an architecture overview. Built at HackASU 2025.',
    tech: ['Python', 'Claude API', 'NetworkX', 'Docusaurus', 'React Flow'],
    github: 'https://github.com/akashbagchi/unbored.ai',
    demo: null,
    note: 'Co-author of the underlying unbored Python package',
  },
  {
    title: 'Socratic AI',
    description:
      'An AI tutor that guides students through problems with questions instead of answers. Teachers get a dashboard to track concept gaps across the class.',
    tech: ['Supabase', 'Google AI API', 'Vite', 'Node.js'],
    github: 'https://github.com/akashbagchi/socratic-ai',
    demo: null,
    note: null,
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="font-mono text-xs text-accent tracking-widest mb-3 uppercase">Projects</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-text-primary">Things I've Built</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-5">
          {projects.map((proj, i) => (
            <motion.div
              key={proj.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className="group bg-white rounded-2xl p-6 card-border flex flex-col"
            >
              <div className="mb-4">
                <h3 className="text-base font-semibold text-text-primary group-hover:text-accent transition-colors mb-2">
                  {proj.title}
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed">{proj.description}</p>
                {proj.note && (
                  <p className="font-mono text-xs text-accent/70 mt-2 italic">{proj.note}</p>
                )}
              </div>

              <div className="flex flex-wrap gap-1.5 mb-5 mt-auto pt-4">
                {proj.tech.map(t => (
                  <span
                    key={t}
                    className="font-mono text-xs px-2 py-1 rounded bg-accent-soft text-accent border border-accent/15"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex gap-4 border-t border-border pt-4">
                <a
                  href={proj.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-xs text-text-secondary hover:text-accent transition-colors"
                >
                  GitHub ↗
                </a>
                {proj.demo && (
                  <a
                    href={proj.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-xs text-text-secondary hover:text-accent transition-colors"
                  >
                    Live Demo ↗
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
