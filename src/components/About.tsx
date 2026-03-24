import { motion } from 'framer-motion'

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
          <p className="font-mono text-xs text-accent tracking-widest mb-3 uppercase">About</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mb-8">
            A bit about me
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-2xl space-y-4 text-text-secondary leading-relaxed"
        >
          <p>
            I build data pipelines, the kind that hold up in production. Most of my work has been on cloud
            infrastructure for pharma clients: getting messy source data into clean, reliable datasets that
            analysts and executives can trust.
          </p>
          <p>
            I've spent the past couple years at{' '}
            <span className="text-text-primary">MathCo</span> working on Merck's oncology data across
            European markets, including the first account hierarchy implementation of its kind in the region.
            Before that, a stint at <span className="text-text-primary">Infosys</span> doing web performance
            and data cleanup work.
          </p>
          <p>
            Currently pursuing an M.S. in Computer Science (Big Data Systems) at{' '}
            <span className="text-text-primary">Arizona State University</span>, and picking up projects
            on the side that interest me.
          </p>
          <div className="pt-2">
            <a
              href="#contact"
              onClick={e => {
                e.preventDefault()
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="inline-flex items-center gap-2 font-mono text-sm text-accent hover:opacity-70 transition-opacity"
            >
              Let's work together →
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
