import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#080c14',
        surface: '#0f1622',
        accent: '#00ffcc',
        purple: '#7c3aed',
      },
      fontFamily: {
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        glow: '0 0 20px rgba(0,255,204,0.3)',
        'glow-lg': '0 0 40px rgba(0,255,204,0.4)',
        'glow-purple': '0 0 20px rgba(124,58,237,0.4)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 8s linear infinite',
      },
    },
  },
  plugins: [],
} satisfies Config
