import { useState, useEffect } from 'react'

const links = [
  { label: 'Servicios', href: '#servicios' },
  { label: 'Experiencia', href: '#experiencia' },
  { label: 'Proyectos', href: '#proyectos' },
  { label: 'Stack', href: '#stack' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#020813]/95 backdrop-blur-md shadow-lg shadow-black/30' : 'bg-transparent'
      }`}
      style={{ borderBottom: scrolled ? '1px solid rgba(0,150,255,0.2)' : 'none' }}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2 text-white font-bold text-lg no-underline group">
          <span className="text-2xl font-black tracking-tight glow-text">Hexa38</span>
        </a>

        {/* Desktop */}
        <ul className="hidden md:flex items-center gap-8 list-none m-0 p-0">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-[#b8d4ff] no-underline font-medium transition-all duration-200 hover:text-[#00aaff]"
                style={{ textShadow: 'none' }}
                onMouseEnter={(e) => (e.currentTarget.style.textShadow = '0 0 8px rgba(0,170,255,0.6)')}
                onMouseLeave={(e) => (e.currentTarget.style.textShadow = 'none')}
              >
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a href="#contacto" className="btn-primary text-sm py-2 px-5">
              Contratar
            </a>
          </li>
        </ul>

        {/* Mobile toggle */}
        <button
          className="md:hidden flex flex-col gap-1.5 cursor-pointer bg-transparent border-none p-2"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          <span className={`block w-6 h-0.5 bg-[#00aaff] transition-all duration-200 ${open ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 bg-[#00aaff] transition-all duration-200 ${open ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-[#00aaff] transition-all duration-200 ${open ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-[#020813]/98 backdrop-blur-md border-t border-[rgba(0,150,255,0.2)] px-6 py-4">
          <ul className="list-none m-0 p-0 flex flex-col gap-4">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="text-[#b8d4ff] no-underline font-medium text-lg hover:text-[#00aaff] transition-colors"
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a href="#contacto" className="btn-primary inline-flex" onClick={() => setOpen(false)}>
                Contratar
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  )
}
