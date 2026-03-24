import { motion } from 'framer-motion'

const contactLinks = [
  { label: 'Email', value: 'pranjalpadak@gmail.com', href: 'mailto:pranjalpadak@gmail.com' },
  { label: 'Phone', value: '(+1) 480-277-6530', href: 'tel:+14802776530' },
  { label: 'LinkedIn', value: 'pranjal-padakannaya', href: 'https://www.linkedin.com/in/pranjal-padakannaya/' },
  { label: 'GitHub', value: 'pranjalpadakannaya', href: 'https://github.com/pranjalpadakannaya' },
  { label: 'Location', value: 'Tempe, AZ 85281', href: null },
]

export default function Contact() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    window.location.href = 'mailto:pranjalpadak@gmail.com?subject=Portfolio%20Inquiry'
  }

  return (
    <section id="contact" className="py-24 px-6 bg-surface/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="font-mono text-xs text-accent tracking-widest mb-3">06 / CONTACT</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Get In Touch</h2>
          <p className="text-slate-400 mt-3 max-w-xl">
            Open to data engineering roles, collaborations, and interesting data problems. Reach out anytime.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="space-y-5"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="font-mono text-xs text-slate-500 tracking-wider block mb-2">NAME</label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full bg-surface border border-white/8 rounded-xl px-4 py-3 text-sm text-slate-200 placeholder-slate-600 focus:outline-none focus:border-accent/50 focus:shadow-glow transition-all duration-200 font-mono"
                />
              </div>
              <div>
                <label className="font-mono text-xs text-slate-500 tracking-wider block mb-2">EMAIL</label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full bg-surface border border-white/8 rounded-xl px-4 py-3 text-sm text-slate-200 placeholder-slate-600 focus:outline-none focus:border-accent/50 focus:shadow-glow transition-all duration-200 font-mono"
                />
              </div>
            </div>
            <div>
              <label className="font-mono text-xs text-slate-500 tracking-wider block mb-2">MESSAGE</label>
              <textarea
                rows={5}
                placeholder="What's on your mind?"
                className="w-full bg-surface border border-white/8 rounded-xl px-4 py-3 text-sm text-slate-200 placeholder-slate-600 focus:outline-none focus:border-accent/50 focus:shadow-glow transition-all duration-200 resize-none font-mono"
              />
            </div>
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-accent text-bg font-semibold py-3.5 rounded-xl hover:shadow-glow transition-all duration-200 font-mono text-sm tracking-wide"
            >
              Send Message →
            </motion.button>
          </motion.form>

          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-4"
          >
            {contactLinks.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.2 + i * 0.08 }}
                className="flex items-center gap-4 p-4 bg-surface rounded-xl card-border group hover:shadow-glow transition-all duration-300"
              >
                <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-accent font-mono text-xs">{item.label[0]}</span>
                </div>
                <div>
                  <p className="font-mono text-xs text-slate-600 tracking-wider uppercase">{item.label}</p>
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.href.startsWith('http') ? '_blank' : undefined}
                      rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="text-slate-300 text-sm hover:text-accent transition-colors group-hover:text-accent"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-slate-300 text-sm">{item.value}</p>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
