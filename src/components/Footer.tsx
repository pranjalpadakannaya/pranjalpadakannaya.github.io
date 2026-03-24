export default function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-border bg-surface/50">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="font-mono text-xs text-text-secondary/60">
          &copy; {new Date().getFullYear()} Pranjal Padakannaya
        </p>
        <div className="flex gap-6">
          {[
            { label: 'GitHub', href: 'https://github.com/pranjalpadakannaya' },
            { label: 'LinkedIn', href: 'https://www.linkedin.com/in/pranjal-padakannaya/' },
            { label: 'Email', href: 'mailto:pranjalpadak@gmail.com' },
          ].map(link => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="font-mono text-xs text-text-secondary/60 hover:text-accent transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
