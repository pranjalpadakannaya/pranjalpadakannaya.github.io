import { motion } from 'framer-motion'

const experiences = [
  {
    role: 'Lead AI Prompt Engineer',
    company: 'Apex CoVantage',
    period: 'Jun 2025 – Aug 2025',
    location: 'Remote',
    bullets: [
      'Led and trained 40+ prompt engineers, ensuring 100% deadline adherence over 3 months',
      'Revamped 8,000+ rubrics, elevating AI model performance for a leading AI research lab',
    ],
    tags: ['LLM', 'Prompt Engineering', 'AI Training'],
  },
  {
    role: 'Data Engineer',
    company: 'The Math Company (MathCo)',
    period: 'Jan 2024 – Jun 2025',
    location: 'Bangalore, India',
    bullets: [
      'Built commercial data solutions for Merck, including multi-market KPI dashboards, achieving a 40% reduction in processing time',
      'Implemented a first-ever recursive query solution for account hierarchy in Europe, enabling future projects in sales and Veeva activity distribution',
      'Coordinated migrations with regional heads across diverse markets, directly delivering $200M in business value through improved transparency',
      'Implemented rule-based validation checks, reducing downstream reporting errors by 25%',
      'Ensured 100% GDPR compliance for oncology market data across five European regions',
    ],
    tags: ['Databricks', 'Spark', 'Snowflake', 'Python', 'SQL', 'AWS'],
  },
  {
    role: 'Intern',
    company: 'Infosys',
    period: 'Feb 2022 – May 2022',
    location: 'Bangalore, India',
    bullets: [
      'Optimized page load speeds via template redirection, improving web app efficiency (up to 60% faster)',
      'Developed Python and SQL scripts to convert messy data to clean, standardized datasets',
    ],
    tags: ['Python', 'SQL', 'Web Optimization'],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 bg-surface/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="font-mono text-xs text-accent tracking-widest mb-3">02 / EXPERIENCE</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Work History</h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
            style={{ originY: 0 }}
            className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-accent/60 via-accent/20 to-transparent hidden sm:block"
          />

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.role + exp.company}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="relative sm:pl-20"
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-8 top-5 w-3 h-3 rounded-full bg-accent shadow-glow -translate-x-1/2 hidden sm:block" />

                {/* Card */}
                <div className="bg-surface rounded-2xl p-6 card-border hover:shadow-glow transition-all duration-300 group">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-lg font-semibold text-white group-hover:text-accent transition-colors">
                        {exp.role}
                      </h3>
                      <p className="text-accent/80 font-mono text-sm">{exp.company}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-mono text-xs text-slate-500">{exp.period}</p>
                      <p className="font-mono text-xs text-slate-600">{exp.location}</p>
                    </div>
                  </div>

                  <ul className="space-y-2 mb-5">
                    {exp.bullets.map((b, bi) => (
                      <li key={bi} className="flex gap-3 text-sm text-slate-400 leading-relaxed">
                        <span className="text-accent mt-1 flex-shrink-0 font-mono text-xs">▸</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map(tag => (
                      <span
                        key={tag}
                        className="font-mono text-xs px-2.5 py-1 rounded-md bg-accent/8 text-accent/80 border border-accent/15"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
