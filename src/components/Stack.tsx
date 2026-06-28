import { skillGroups } from '../data/projects'

const groupColors: Record<string, string> = {
  'Frontend': '#3b82f6',
  'Backend & APIs': '#a855f7',
  'Cloud & Serverless': '#f97316',
  'Desktop & Móvil': '#06b6d4',
  'DevOps & Infra': '#22c55e',
  'Diseño & Multimedia': '#ec4899',
}

export default function Stack() {
  return (
    <section id="stack" className="py-16 md:py-24 px-5 md:px-6">
      <div className="max-w-5xl mx-auto">
        <p className="text-[#00aaff] text-sm font-semibold tracking-widest uppercase text-center mb-3">
          Herramientas y tecnologías
        </p>
        <h2 className="section-title glow-text">Stack técnico</h2>
        <div className="divider-glow" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map((g) => {
            const color = groupColors[g.label] ?? '#00aaff'
            return (
              <div
                key={g.label}
                className="card-glass rounded-2xl p-6"
                style={{ borderColor: `${color}22` }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="w-1 h-6 rounded-full"
                    style={{ background: color, boxShadow: `0 0 8px ${color}` }}
                  />
                  <h3 className="font-bold text-white text-base">{g.label}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {g.skills.map((s) => (
                    <span
                      key={s}
                      className="text-xs px-3 py-1.5 rounded-full font-medium border"
                      style={{
                        background: `${color}12`,
                        borderColor: `${color}35`,
                        color: `${color}dd`,
                      }}
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
