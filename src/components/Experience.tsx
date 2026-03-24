import { motion } from 'framer-motion'

const experiences = [
  {
    role: 'Lead AI Prompt Engineer',
    company: 'Apex CoVantage',
    period: 'Jun 2025 – Aug 2025',
    location: 'Remote',
    bullets: [
      'Led and trained 40+ prompt engineers, ensuring 100% deadline adherence over 3 months.',
      'Revamped 8,000+ rubrics, elevating AI model performance for a leading AI Research Org.',
      'Streamlined timesheet compliance and dispute resolution, maintaining 100% adherence for 40 team members.',
    ],
  },
  {
    role: 'Data Engineer',
    company: 'MathCo (The Math Company)',
    period: 'Jan 2024 – Jun 2025',
    location: 'Bangalore, India',
    bullets: [
      'Built commercial data processing solutions for Merck Oncology division, achieving a 40% reduction in processing time.',
      'Implemented a first-ever query solution for account hierarchy management in Europe, unlocking new data engineering opportunities across the org.',
      'Coordinated data migration with regional heads across diverse markets, which directly delivered $200M in business value through improved data transparency.',
      'Implemented rule-based validation checks, increasing data accuracy across KPI dashboards and reducing downstream reporting errors by 25%.',
      'Ensured 100% GDPR compliance for data governance in five European oncology markets.',
    ],
  },
  {
    role: 'Intern',
    company: 'Infosys',
    period: 'Feb 2022 – May 2022',
    location: 'Bangalore, India',
    bullets: [
      'Optimized page load speeds using template redirection, improving web application efficiency.',
      'Developed Python and SQL scripts to convert messy, redundant data into clean standardized datasets.',
    ],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 bg-surface/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="font-mono text-xs text-accent tracking-widest mb-3 uppercase">Experience</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-text-primary">Work History</h2>
        </motion.div>

        <div className="relative">
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
            style={{ originY: 0 }}
            className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-accent/40 via-accent/15 to-transparent hidden sm:block"
          />

          <div className="space-y-10">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.role + exp.company}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="relative sm:pl-20"
              >
                <div className="absolute left-0 md:left-8 top-5 w-2.5 h-2.5 rounded-full bg-accent -translate-x-1/2 hidden sm:block" />

                <div className="bg-white rounded-2xl p-6 card-border">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-lg font-semibold text-text-primary">{exp.role}</h3>
                      <p className="text-accent font-mono text-sm">{exp.company}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-mono text-xs text-text-secondary">{exp.period}</p>
                      <p className="font-mono text-xs text-text-secondary/60">{exp.location}</p>
                    </div>
                  </div>

                  <ul className="space-y-2">
                    {exp.bullets.map((b, bi) => (
                      <li key={bi} className="flex gap-3 text-sm text-text-secondary leading-relaxed">
                        <span className="text-accent/60 mt-1 flex-shrink-0 font-mono text-xs">▸</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
