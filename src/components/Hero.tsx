import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import ParticlesBg from './ParticlesBg'
import FloatingOrb from './FloatingOrb'

const ROLES = ['Data Engineer', 'ETL Developer']

function useTypewriter(words: string[], speed = 75, pause = 2200) {
  const [display, setDisplay] = useState('')
  const [wordIndex, setWordIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    if (paused) return
    const current = words[wordIndex]
    const delay = deleting ? speed / 2 : speed

    const timer = setTimeout(() => {
      if (!deleting) {
        const next = current.slice(0, charIndex + 1)
        setDisplay(next)
        if (next === current) {
          setPaused(true)
          setTimeout(() => {
            setPaused(false)
            setDeleting(true)
          }, pause)
        } else {
          setCharIndex(c => c + 1)
        }
      } else {
        const next = current.slice(0, charIndex - 1)
        setDisplay(next)
        if (next === '') {
          setDeleting(false)
          setCharIndex(0)
          setWordIndex(i => (i + 1) % words.length)
        } else {
          setCharIndex(c => c - 1)
        }
      }
    }, delay)

    return () => clearTimeout(timer)
  }, [charIndex, deleting, paused, wordIndex, words, speed, pause])

  return display
}

export default function Hero() {
  const role = useTypewriter(ROLES)

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden grid-bg">
      <div className="absolute inset-0">
        <ParticlesBg />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-12 lg:gap-20 pt-24 pb-12">

        <div className="flex-1 text-center lg:text-left">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-text-primary leading-tight mb-4"
          >
            Pranjal{' '}
            <span className="text-accent">Padakannaya</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="font-mono text-xl sm:text-2xl text-text-secondary mb-2 h-8"
          >
            <span className="text-accent/60">&gt;</span>{' '}
            {role}
            <span className="inline-block w-0.5 h-5 bg-accent ml-1 animate-pulse align-middle" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-text-secondary font-mono text-sm mb-8"
          >
            Tempe, AZ &nbsp;·&nbsp;{' '}
            <a href="mailto:pranjalpadak@gmail.com" className="hover:text-accent transition-colors">
              pranjalpadak@gmail.com
            </a>
            &nbsp;·&nbsp; 3x Hackathon Winner
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap gap-4 justify-center lg:justify-start"
          >
            <a
              href="/Pranjal_Padakannaya_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-accent text-white font-semibold text-sm rounded-lg hover:bg-accent/90 hover:shadow-card-hover transition-all duration-200 font-mono"
            >
              Download Resume
            </a>
            <button
              onClick={scrollToContact}
              className="px-6 py-3 border border-border text-text-primary font-mono text-sm rounded-lg hover:border-accent/40 hover:text-accent transition-all duration-200 bg-white/60"
            >
              Get In Touch
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.65 }}
            className="flex gap-6 mt-8 justify-center lg:justify-start"
          >
            {[
              { label: 'GitHub', href: 'https://github.com/pranjalpadakannaya' },
              { label: 'LinkedIn', href: 'https://www.linkedin.com/in/pranjal-padakannaya/' },
              { label: 'IEEE', href: 'https://ieeexplore.ieee.org/document/10179616' },
            ].map(link => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-secondary hover:text-accent transition-colors font-mono text-xs tracking-widest"
              >
                {link.label} ↗
              </a>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          className="relative flex-shrink-0 w-64 h-64 lg:w-80 lg:h-80"
        >
          <div className="absolute inset-0">
            <FloatingOrb />
          </div>

          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-40 h-40 lg:w-52 lg:h-52 rounded-full overflow-hidden border-2 border-border shadow-card-hover">
              <img
                src="/images/avatar.jpg"
                alt="Pranjal Padakannaya"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.0 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <div className="w-px h-10 bg-gradient-to-b from-accent/30 to-transparent" />
      </motion.div>
    </section>
  )
}
