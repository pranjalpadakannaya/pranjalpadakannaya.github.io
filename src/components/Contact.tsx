import { motion } from 'framer-motion'
import { useState } from 'react'

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mgopwllv'

const contactLinks = [
  { label: 'Email', value: 'pranjalpadak@gmail.com', href: 'mailto:pranjalpadak@gmail.com' },
  { label: 'Phone', value: '(+1) 480-277-6530', href: 'tel:+14802776530' },
  { label: 'LinkedIn', value: 'pranjal-padakannaya', href: 'https://www.linkedin.com/in/pranjal-padakannaya/' },
  { label: 'GitHub', value: 'pranjalpadakannaya', href: 'https://github.com/pranjalpadakannaya' },
  { label: 'Location', value: 'Tempe, AZ 85281', href: null },
]

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('sending')
    const form = e.currentTarget
    const data = new FormData(form)
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      })
      if (res.ok) {
        setStatus('success')
        form.reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="py-24 px-6 bg-surface/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="font-mono text-xs text-accent tracking-widest mb-3 uppercase">Contact</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-text-primary">Get In Touch</h2>
          <p className="text-text-secondary mt-3 max-w-xl">
            Open to data engineering roles, collaborations, and interesting data problems. Reach out anytime.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
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
                <label className="font-mono text-xs text-text-secondary tracking-wider block mb-2 uppercase">Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Your name"
                  className="w-full bg-white border border-border rounded-xl px-4 py-3 text-sm text-text-primary placeholder-text-secondary/40 focus:outline-none focus:border-accent/60 transition-colors duration-200"
                />
              </div>
              <div>
                <label className="font-mono text-xs text-text-secondary tracking-wider block mb-2 uppercase">Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="you@example.com"
                  className="w-full bg-white border border-border rounded-xl px-4 py-3 text-sm text-text-primary placeholder-text-secondary/40 focus:outline-none focus:border-accent/60 transition-colors duration-200"
                />
              </div>
            </div>
            <div>
              <label className="font-mono text-xs text-text-secondary tracking-wider block mb-2 uppercase">Message</label>
              <textarea
                rows={5}
                name="message"
                required
                placeholder="What's on your mind?"
                className="w-full bg-white border border-border rounded-xl px-4 py-3 text-sm text-text-primary placeholder-text-secondary/40 focus:outline-none focus:border-accent/60 transition-colors duration-200 resize-none"
              />
            </div>
            {status === 'success' && (
              <p className="font-mono text-xs text-green-600 tracking-wide">Message sent! I'll get back to you soon.</p>
            )}
            {status === 'error' && (
              <p className="font-mono text-xs text-red-500 tracking-wide">Something went wrong. Please try again or email me directly.</p>
            )}
            <motion.button
              type="submit"
              disabled={status === 'sending'}
              whileHover={{ scale: status === 'sending' ? 1 : 1.02 }}
              whileTap={{ scale: status === 'sending' ? 1 : 0.98 }}
              className="w-full bg-accent text-white font-semibold py-3.5 rounded-xl hover:bg-accent/90 transition-colors duration-200 font-mono text-sm tracking-wide disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {status === 'sending' ? 'Sending...' : 'Send Message'}
            </motion.button>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-3"
          >
            {contactLinks.map(item => (
              <div
                key={item.label}
                className="flex items-center gap-4 p-4 bg-white rounded-xl card-border group"
              >
                <div className="w-8 h-8 rounded-lg bg-accent-soft flex items-center justify-center flex-shrink-0">
                  <span className="text-accent font-mono text-xs">{item.label[0]}</span>
                </div>
                <div>
                  <p className="font-mono text-xs text-text-secondary/60 tracking-wider uppercase">{item.label}</p>
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.href.startsWith('http') ? '_blank' : undefined}
                      rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="text-text-primary text-sm hover:text-accent transition-colors"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-text-primary text-sm">{item.value}</p>
                  )}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
