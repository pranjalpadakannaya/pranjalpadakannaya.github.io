import { useEffect, useState } from 'react'
import Particles, { initParticlesEngine } from '@tsparticles/react'
import { loadSlim } from '@tsparticles/slim'
import type { ISourceOptions } from '@tsparticles/engine'

const options: ISourceOptions = {
  fullScreen: { enable: false },
  background: { color: { value: 'transparent' } },
  fpsLimit: 60,
  interactivity: {
    events: {
      onHover: { enable: true, mode: 'grab' },
      onClick: { enable: true, mode: 'push' },
    },
    modes: {
      grab: { distance: 140, links: { opacity: 0.3 } },
      push: { quantity: 2 },
    },
  },
  particles: {
    color: { value: '#CC5500' },
    links: {
      color: '#CC5500',
      distance: 140,
      enable: true,
      opacity: 0.08,
      width: 1,
    },
    move: {
      enable: true,
      speed: 0.5,
      direction: 'none',
      random: true,
      straight: false,
      outModes: { default: 'out' },
    },
    number: { density: { enable: true, width: 1000 }, value: 50 },
    opacity: { value: { min: 0.05, max: 0.2 } },
    shape: { type: 'circle' },
    size: { value: { min: 1, max: 2 } },
  },
  detectRetina: true,
}

export default function ParticlesBg() {
  const [init, setInit] = useState(false)

  useEffect(() => {
    initParticlesEngine(async engine => {
      await loadSlim(engine)
    }).then(() => setInit(true))
  }, [])

  if (!init) return null

  return (
    <Particles
      id="tsparticles"
      options={options}
      className="absolute inset-0 w-full h-full"
    />
  )
}
