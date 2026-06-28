import { useState } from 'react'
import { projects } from '../data/projects'
import type { Project } from '../data/projects'

const filters = [
  { label: 'Todos', value: 'all' },
  { label: 'Web', value: 'web' },
  { label: 'Desktop / Móvil', value: 'desktop' },
  { label: 'Infraestructura', value: 'infra' },
]

const categoryColors: Record<string, string> = {
  web: '#3b82f6',
  desktop: '#a855f7',
  infra: '#22c55e',
  design: '#f59e0b',
}

function ProjectCard({ p }: { p: Project }) {
  const [expanded, setExpanded] = useState(false)

  return (
    <div className="card-glass rounded-2xl p-6 md:p-7 flex flex-col gap-4">
      {/* Header */}
      <div className="flex items-start justify-between gap-3">
        <div>
          <div className="flex flex-wrap gap-2 mb-2">
            {p.tags.map((t) => (
              <span key={t} className="badge text-xs">{t}</span>
            ))}
          </div>
          <h3 className="text-xl font-bold text-white leading-tight">{p.name}</h3>
          <p className="text-[#00aaff] text-sm font-medium mt-1">{p.tagline}</p>
        </div>
        <div
          className="w-3 h-3 rounded-full mt-1 flex-shrink-0"
          style={{ background: categoryColors[p.category], boxShadow: `0 0 8px ${categoryColors[p.category]}` }}
        />
      </div>

      <p className="text-[#7a9bcb] text-sm leading-relaxed">{p.description}</p>

      {/* Stack badges */}
      <div className="flex flex-wrap gap-1.5">
        {p.stack.map((s) => (
          <span key={s} className="badge text-xs">{s}</span>
        ))}
      </div>

      {/* Deploy */}
      <div className="flex flex-wrap gap-2">
        {p.deploy.map((d) => (
          <span
            key={d}
            className="text-xs px-3 py-1 rounded-full border font-medium"
            style={{ borderColor: 'rgba(0,200,100,0.4)', color: '#4ade80', background: 'rgba(0,200,100,0.07)' }}
          >
            🚀 {d}
          </span>
        ))}
      </div>

      {/* Highlights collapsible */}
      <div>
        <button
          onClick={() => setExpanded(!expanded)}
          className="text-xs text-[#00aaff] font-semibold cursor-pointer bg-transparent border-none p-0 hover:underline"
        >
          {expanded ? '▲ Ocultar detalles' : '▼ Ver detalles técnicos'}
        </button>
        {expanded && (
          <ul className="mt-3 space-y-1.5 list-none p-0 m-0">
            {p.highlights.map((h) => (
              <li key={h} className="text-xs text-[#7a9bcb] flex gap-2">
                <span className="text-[#00aaff] flex-shrink-0">→</span>
                {h}
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Links */}
      {(p.liveUrl || p.githubUrl || p.privateRepo) && (
        <div className="flex gap-3 items-center mt-auto pt-2 border-t border-[rgba(0,150,255,0.15)]">
          {p.liveUrl && (
            <a
              href={p.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-xs py-2 px-4 whitespace-nowrap"
            >
              Ver en vivo ↗
            </a>
          )}
          {p.githubUrl && (
            <a
              href={p.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline text-xs py-2 px-4 whitespace-nowrap"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.605-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z" />
              </svg>
              GitHub
            </a>
          )}
          {p.privateRepo && (
            <span className="text-xs text-[#7a9bcb] inline-flex items-center gap-1.5 whitespace-nowrap">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
                <path d="M12 1a5 5 0 00-5 5v3H6a2 2 0 00-2 2v9a2 2 0 002 2h12a2 2 0 002-2v-9a2 2 0 00-2-2h-1V6a5 5 0 00-5-5zm3 8H9V6a3 3 0 016 0v3z" />
              </svg>
              Repo privado (cliente)
            </span>
          )}
        </div>
      )}
    </div>
  )
}

export default function Projects() {
  const [filter, setFilter] = useState('all')
  const filtered = filter === 'all' ? projects : projects.filter((p) => p.category === filter)

  return (
    <section
      id="proyectos"
      className="py-16 md:py-24 px-5 md:px-6"
      style={{ background: 'linear-gradient(180deg, transparent 0%, rgba(0,30,70,0.15) 50%, transparent 100%)' }}
    >
      <div className="max-w-6xl mx-auto">
        <p className="text-[#00aaff] text-sm font-semibold tracking-widest uppercase text-center mb-3">
          Casos reales en producción
        </p>
        <h2 className="section-title glow-text">Proyectos</h2>
        <div className="divider-glow" />

        {/* Filter tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {filters.map((f) => (
            <button
              key={f.value}
              onClick={() => setFilter(f.value)}
              className={`px-5 py-2 rounded-full text-sm font-semibold border transition-all cursor-pointer ${
                filter === f.value
                  ? 'bg-[#00aaff] text-white border-[#00aaff] shadow-[0_0_16px_rgba(0,170,255,0.4)]'
                  : 'bg-transparent text-[#7ab8ff] border-[rgba(0,150,255,0.3)] hover:border-[rgba(0,170,255,0.6)]'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {filtered.map((p) => (
            <ProjectCard key={p.id} p={p} />
          ))}
        </div>
      </div>
    </section>
  )
}
