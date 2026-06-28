import { experience } from '../data/projects'

export default function Experience() {
  return (
    <section
      id="experiencia"
      className="py-16 md:py-24 px-5 md:px-6"
      style={{ background: 'linear-gradient(180deg, transparent 0%, rgba(0,30,70,0.15) 50%, transparent 100%)' }}
    >
      <div className="max-w-5xl mx-auto">
        <p className="text-[#00aaff] text-sm font-semibold tracking-widest uppercase text-center mb-3">
          Rol actual
        </p>
        <h2 className="section-title glow-text">Experiencia</h2>
        <div className="divider-glow" />

        {experience.map((exp) => (
          <div key={exp.role} className="card-glass rounded-2xl p-6 md:p-10">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
              <div>
                <div className="flex flex-wrap gap-2 mb-3">
                  <span
                    className="text-xs px-3 py-1 rounded-full font-semibold border"
                    style={{
                      borderColor: 'rgba(0,200,100,0.4)',
                      color: '#4ade80',
                      background: 'rgba(0,200,100,0.08)',
                    }}
                  >
                    ● Activo
                  </span>
                  <span className="badge">{exp.type}</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-1">{exp.role}</h3>
                <p className="text-[#00aaff] text-lg font-semibold">{exp.company}</p>
              </div>
              <div
                className="flex-shrink-0 text-left md:text-right"
              >
                <span
                  className="text-sm font-medium px-4 py-2 rounded-full"
                  style={{ background: 'rgba(0,150,255,0.1)', color: '#7ab8ff', border: '1px solid rgba(0,150,255,0.25)' }}
                >
                  {exp.period}
                </span>
              </div>
            </div>

            <p className="text-[#7a9bcb] leading-relaxed mb-7">{exp.description}</p>

            {/* Two-column responsibilities */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {exp.items.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 p-3 rounded-xl"
                  style={{ background: 'rgba(0,150,255,0.06)', border: '1px solid rgba(0,150,255,0.12)' }}
                >
                  <span
                    className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold mt-0.5"
                    style={{ background: 'rgba(0,150,255,0.2)', color: '#00aaff' }}
                  >
                    ✓
                  </span>
                  <span className="text-sm text-[#b8d4ff] leading-snug">{item}</span>
                </div>
              ))}
            </div>

            {/* Skills de soporte físico */}
            <div className="mt-7 pt-6 border-t border-[rgba(0,150,255,0.15)]">
              <p className="text-xs text-[#3a5a8a] font-semibold uppercase tracking-widest mb-3">
                Habilidades técnicas físicas
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  'Diagnóstico hardware/software',
                  'Reparación de equipos',
                  'Armado de simuladores VR',
                  'Configuración de redes',
                  'Soporte en sitio',
                  'Gestión operativa',
                  'Capacitación de personal',
                  'Coordinación multi-sede',
                ].map((s) => (
                  <span key={s} className="badge text-xs">{s}</span>
                ))}
              </div>
            </div>
          </div>
        ))}

        {/* "Perfil completo" callout */}
        <div
          className="mt-8 p-6 rounded-2xl text-center"
          style={{
            background: 'linear-gradient(135deg, rgba(0,80,200,0.1) 0%, rgba(0,150,255,0.06) 100%)',
            border: '1px solid rgba(0,150,255,0.2)',
          }}
        >
          <p className="text-[#b8d4ff] text-base">
            <span className="font-bold text-white">Perfil mixto:</span>{' '}
            combino desarrollo de software, infraestructura cloud y soporte técnico físico.
            Puedo abordar un problema desde el código hasta el hardware.
          </p>
        </div>
      </div>
    </section>
  )
}
