import { motion } from 'framer-motion'

const stats = [
  { value: '2+', label: 'Years Experience' },
  { value: '$200M', label: 'Business Value Delivered' },
  { value: '40%', label: 'Processing Time Reduced' },
  { value: '100%', label: 'GDPR Compliance' },
]

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          {/* Section label */}
          <p className="font-mono text-xs text-accent tracking-widest mb-3">01 / ABOUT</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">
            Building pipelines that{' '}
            <span className="text-accent">actually scale</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-4 text-slate-400 leading-relaxed"
          >
            <p>
              I'm a Data Engineer with <span className="text-slate-200">2 years of experience</span> building
              scalable data pipelines for Fortune 500 clients — improving processing efficiency and driving
              business decisions through high-quality data.
            </p>
            <p>
              I specialize in designing end-to-end ETL workflows using{' '}
              <span className="text-accent font-mono text-sm">Python</span>,{' '}
              <span className="text-accent font-mono text-sm">SQL</span>,{' '}
              <span className="text-accent font-mono text-sm">Apache Spark</span>, and{' '}
              <span className="text-accent font-mono text-sm">Databricks</span> — with a strong focus on
              data quality, governance, and compliance.
            </p>
            <p>
              Published researcher and Databricks-certified, currently pursuing an M.S. in Computer Science
              (Big Data Systems) at Arizona State University.
            </p>

            <div className="pt-2">
              <a
                href="#contact"
                onClick={e => {
                  e.preventDefault()
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="inline-flex items-center gap-2 font-mono text-sm text-accent hover:glow-text transition-all"
              >
                Let's work together <span>→</span>
              </a>
            </div>
          </motion.div>

          {/* Stats grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 gap-4"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                className="bg-surface rounded-xl p-6 card-border hover:shadow-glow transition-all duration-300 group"
              >
                <div className="text-3xl font-bold text-accent group-hover:glow-text transition-all mb-1">
                  {stat.value}
                </div>
                <div className="text-xs text-slate-500 font-mono leading-tight">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
