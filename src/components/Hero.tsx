import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import ParticlesBg from './ParticlesBg'
import FloatingOrb from './FloatingOrb'

const ROLES = ['Data Engineer', 'ETL Developer', 'Pipeline Builder', 'Cloud Architect']

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
      {/* Particle constellation background */}
      <div className="absolute inset-0">
        <ParticlesBg />
      </div>

      {/* Radial glow center */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[600px] rounded-full bg-accent/5 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-12 lg:gap-20 pt-24 pb-12">

        {/* Left: text content */}
        <div className="flex-1 text-center lg:text-left">
          {/* Greeting chip */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 font-mono text-xs text-accent tracking-widest mb-6 px-3 py-1.5 rounded-full border border-accent/20 bg-accent/5"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            AVAILABLE FOR OPPORTUNITIES
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4"
          >
            Pranjal{' '}
            <span className="text-accent glow-text">Padakannaya</span>
          </motion.h1>

          {/* Typewriter role */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="font-mono text-xl sm:text-2xl text-slate-300 mb-2 h-8"
          >
            <span className="text-accent/80">&gt;</span>{' '}
            {role}
            <span className="inline-block w-0.5 h-5 bg-accent ml-1 animate-pulse align-middle" />
          </motion.div>

          {/* Location / contact line */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-slate-500 font-mono text-sm mb-8"
          >
            Tempe, AZ &nbsp;·&nbsp;{' '}
            <a href="mailto:pranjalpadak@gmail.com" className="hover:text-accent transition-colors">
              pranjalpadak@gmail.com
            </a>
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-wrap gap-4 justify-center lg:justify-start"
          >
            <a
              href="/Pranjal_Padakannaya_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-accent text-bg font-semibold text-sm rounded-lg hover:shadow-glow hover:scale-105 transition-all duration-200 font-mono"
            >
              Download Resume ↓
            </a>
            <button
              onClick={scrollToContact}
              className="px-6 py-3 border border-accent/30 text-accent font-mono text-sm rounded-lg hover:bg-accent/10 hover:border-accent/60 transition-all duration-200"
            >
              Get In Touch →
            </button>
          </motion.div>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.75 }}
            className="flex gap-6 mt-8 justify-center lg:justify-start"
          >
            <a
              href="https://github.com/pranjalpadakannaya"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-accent transition-colors font-mono text-xs tracking-widest"
            >
              GitHub ↗
            </a>
            <a
              href="https://www.linkedin.com/in/pranjal-padakannaya/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-accent transition-colors font-mono text-xs tracking-widest"
            >
              LinkedIn ↗
            </a>
            <a
              href="https://ieeexplore.ieee.org/document/10179616"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-accent transition-colors font-mono text-xs tracking-widest"
            >
              IEEE ↗
            </a>
          </motion.div>
        </div>

        {/* Right: avatar + 3D orb */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
          className="relative flex-shrink-0 w-64 h-64 lg:w-80 lg:h-80"
        >
          {/* 3D orb background */}
          <div className="absolute inset-0">
            <FloatingOrb />
          </div>

          {/* Avatar */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative">
              <div className="w-40 h-40 lg:w-52 lg:h-52 rounded-full overflow-hidden border-2 border-accent/40 shadow-glow">
                <img
                  src="/images/avatar.jpg"
                  alt="Pranjal Padakannaya"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Outer ring */}
              <div className="absolute -inset-2 rounded-full border border-accent/20 animate-spin-slow pointer-events-none" />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="font-mono text-xs text-slate-600 tracking-widest">SCROLL</span>
        <div className="w-px h-12 bg-gradient-to-b from-accent/40 to-transparent" />
      </motion.div>
    </section>
  )
}
