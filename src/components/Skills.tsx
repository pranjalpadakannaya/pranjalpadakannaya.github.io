import { motion } from 'framer-motion'

const skillGroups = [
  {
    category: 'Languages',
    skills: ['Python', 'SQL'],
  },
  {
    category: 'Big Data & Cloud',
    skills: ['Apache Spark', 'PySpark', 'Databricks', 'AWS (S3, Lambda, Redshift)', 'Snowflake'],
  },
  {
    category: 'ETL & Orchestration',
    skills: ['Airflow', 'Matillion', 'dbt'],
  },
  {
    category: 'APIs & Frameworks',
    skills: ['FastAPI', 'Flask', 'REST APIs'],
  },
  {
    category: 'DevOps & CI/CD',
    skills: ['Docker', 'Terraform', 'GitHub Actions', 'Jenkins', 'Git'],
  },
  {
    category: 'Governance',
    skills: ['Collibra', 'GDPR Compliance'],
  },
  {
    category: 'Currently Exploring',
    skills: ['Kafka', 'React / TypeScript', 'LLM Engineering'],
  },
  {
    category: 'Certifications',
    skills: ['Databricks Certified Data Analyst Associate'],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-surface/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="font-mono text-xs text-accent tracking-widest mb-3 uppercase">Skills</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-text-primary">Tech Stack</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {skillGroups.map(group => (
            <div
              key={group.category}
              className="bg-white rounded-2xl p-5 card-border"
            >
              <h3 className="font-mono text-xs text-text-secondary tracking-wider mb-4 uppercase">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map(skill => (
                  <span
                    key={skill}
                    className="font-mono text-xs px-3 py-1.5 rounded-lg bg-surface text-text-secondary border border-border hover:border-accent/30 hover:text-accent hover:bg-accent-soft transition-all cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
