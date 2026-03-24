import { motion } from 'framer-motion'

const education = [
  {
    degree: 'M.S. Computer Science — Big Data Systems',
    school: 'Arizona State University',
    period: 'Aug 2025 – May 2027',
    location: 'Tempe, AZ',
  },
  {
    degree: 'B.S. Computer Science',
    school: 'Dayananda Sagar University',
    period: 'Aug 2019 – May 2023',
    location: 'Bangalore, India',
  },
]

const awards = [
  { title: 'Impact Performer', org: 'MSD (Merck)', date: 'Jun 2025' },
  { title: 'Appreciation Award', org: 'MathCo', date: 'Oct 2024' },
]

export default function Education() {
  return (
    <section id="education" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="font-mono text-xs text-accent tracking-widest mb-3">05 / EDUCATION & AWARDS</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Background</h2>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Education */}
          <div className="lg:col-span-2 space-y-4">
            {education.map((edu, i) => (
              <motion.div
                key={edu.school}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-surface rounded-2xl p-6 card-border hover:shadow-glow transition-all duration-300 flex flex-col sm:flex-row sm:items-center gap-4"
              >
                <div className="flex-1">
                  <h3 className="text-white font-semibold mb-1">{edu.degree}</h3>
                  <p className="text-accent/80 font-mono text-sm">{edu.school}</p>
                </div>
                <div className="text-right flex-shrink-0">
                  <p className="font-mono text-xs text-slate-500">{edu.period}</p>
                  <p className="font-mono text-xs text-slate-600">{edu.location}</p>
                </div>
              </motion.div>
            ))}

            {/* Publication */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-surface rounded-2xl p-6 card-border hover:shadow-glow transition-all duration-300"
            >
              <p className="font-mono text-xs text-purple-400 tracking-wider mb-2 uppercase">Publication</p>
              <p className="text-slate-300 text-sm leading-relaxed">
                Building Accessible Video Games for Children with an Autism Spectrum Disorder
              </p>
              <a
                href="https://ieeexplore.ieee.org/document/10179616"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 font-mono text-xs text-accent mt-3 hover:glow-text transition-all"
              >
                IEEE Xplore ↗
              </a>
            </motion.div>
          </div>

          {/* Awards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="space-y-4"
          >
            <p className="font-mono text-xs text-slate-500 tracking-wider uppercase mb-4">
              Recognition
            </p>
            {awards.map((award, i) => (
              <div
                key={award.title}
                className={`bg-surface rounded-2xl p-5 card-border hover:shadow-glow transition-all duration-300 relative overflow-hidden ${i === 0 ? 'border-accent/20' : ''}`}
              >
                <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-accent/60 to-transparent rounded-l-2xl" />
                <p className="text-white font-medium text-sm pl-3">{award.title}</p>
                <p className="text-accent/70 font-mono text-xs pl-3 mt-1">{award.org}</p>
                <p className="text-slate-600 font-mono text-xs pl-3 mt-0.5">{award.date}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
