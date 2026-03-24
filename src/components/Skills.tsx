import { motion } from 'framer-motion'

const skillGroups = [
  {
    category: 'Programming & Querying',
    skills: ['Python', 'SQL'],
  },
  {
    category: 'Big Data & Cloud',
    skills: ['Apache Spark', 'Databricks', 'AWS', 'Snowflake', 'Delta Lake', 'Kafka'],
  },
  {
    category: 'ETL & Orchestration',
    skills: ['Airflow', 'Matillion', 'dbt'],
  },
  {
    category: 'DevOps & CI/CD',
    skills: ['Docker', 'Terraform', 'Jenkins', 'GitHub Actions', 'Git'],
  },
  {
    category: 'Governance & Integration',
    skills: ['Collibra', 'REST APIs', 'GDPR Compliance'],
  },
  {
    category: 'Certifications',
    skills: ['Databricks Certified Data Analyst Associate'],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-surface/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="font-mono text-xs text-accent tracking-widest mb-3">04 / SKILLS</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Tech Stack</h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: gi * 0.08 }}
              className="bg-surface rounded-2xl p-5 card-border hover:shadow-glow transition-all duration-300"
            >
              <h3 className="font-mono text-xs text-accent tracking-wider mb-4 uppercase">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill, si) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: gi * 0.08 + si * 0.05 }}
                    whileHover={{ scale: 1.05, color: '#00ffcc' }}
                    className="font-mono text-xs px-3 py-1.5 rounded-lg bg-bg text-slate-300 border border-white/8 hover:border-accent/30 hover:text-accent transition-all cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
