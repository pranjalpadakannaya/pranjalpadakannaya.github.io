import { motion } from 'framer-motion'

const projects = [
  {
    title: 'End-to-End Supply Chain Processing',
    status: 'In Progress',
    description:
      'Distributed supply chain data pipeline with real-time event streaming, HTAP storage, and transformation layers for analytics at scale.',
    tech: ['CockroachDB', 'AWS', 'Kafka', 'dbt', 'Python'],
    github: 'https://github.com/pranjalpadakannaya',
    demo: null,
    accent: '#00ffcc',
  },
  {
    title: 'Secret Project',
    status: 'Coming Soon',
    description:
      'Real-time streaming data platform leveraging structured streaming for sub-second latency processing on cloud-native infrastructure.',
    tech: ['Kafka', 'Spark Structured Streaming', 'Databricks', 'Delta Lake'],
    github: 'https://github.com/pranjalpadakannaya',
    demo: null,
    accent: '#7c3aed',
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
          <p className="font-mono text-xs text-accent tracking-widest mb-3">03 / PROJECTS</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Things I'm Building</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((proj, i) => (
            <motion.div
              key={proj.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              whileHover={{ y: -4 }}
              className="group relative bg-surface rounded-2xl p-6 card-border transition-all duration-300 hover:shadow-glow flex flex-col"
            >
              {/* Top accent line */}
              <div
                className="absolute top-0 left-6 right-6 h-px opacity-60 group-hover:opacity-100 transition-opacity"
                style={{
                  background: `linear-gradient(90deg, ${proj.accent}, transparent)`,
                }}
              />

              <div className="flex items-start justify-between mb-4">
                <h3 className="text-lg font-semibold text-white group-hover:text-accent transition-colors leading-tight pr-4">
                  {proj.title}
                </h3>
                <span
                  className="font-mono text-xs px-2.5 py-1 rounded-full border flex-shrink-0"
                  style={{
                    color: proj.accent,
                    borderColor: `${proj.accent}40`,
                    background: `${proj.accent}10`,
                  }}
                >
                  {proj.status}
                </span>
              </div>

              <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-1">{proj.description}</p>

              <div className="flex flex-wrap gap-2 mb-6">
                {proj.tech.map(t => (
                  <span
                    key={t}
                    className="font-mono text-xs px-2.5 py-1 rounded-md bg-white/4 text-slate-400 border border-white/8"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                <a
                  href={proj.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-xs text-slate-500 hover:text-accent transition-colors"
                >
                  GitHub ↗
                </a>
                {proj.demo && (
                  <a
                    href={proj.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-xs text-slate-500 hover:text-accent transition-colors"
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
