import { services } from '../data/projects'

export default function Services() {
  return (
    <section id="servicios" className="py-16 md:py-24 px-5 md:px-6">
      <div className="max-w-6xl mx-auto">
        <p className="text-[#00aaff] text-sm font-semibold tracking-widest uppercase text-center mb-3">
          Qué puedo hacer por ti
        </p>
        <h2 className="section-title glow-text">Servicios</h2>
        <div className="divider-glow" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div key={s.title} className="card-glass rounded-2xl p-7">
              <div className="text-4xl mb-4">{s.icon}</div>
              <h3 className="text-xl font-bold text-white mb-3">{s.title}</h3>
              <p className="text-[#7a9bcb] text-sm leading-relaxed mb-5">{s.description}</p>
              <div className="flex flex-wrap gap-2">
                {s.techs.map((t) => (
                  <span key={t} className="badge">{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
