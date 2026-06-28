export default function Contact() {
  const email = 'aldo@hexa38.com'
  const whatsapp = '51915964917'
  const github = 'https://github.com/aldoesc'

  return (
    <section
      id="contacto"
      className="py-16 md:py-24 px-5 md:px-6"
      style={{ background: 'linear-gradient(180deg, transparent 0%, rgba(0,30,70,0.2) 100%)' }}
    >
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-[#00aaff] text-sm font-semibold tracking-widest uppercase mb-3">
          Hablemos
        </p>
        <h2 className="section-title glow-text">¿Tienes un proyecto?</h2>
        <div className="divider-glow" />

        <p className="text-[#7a9bcb] text-lg leading-relaxed mb-10 max-w-xl mx-auto">
          Desde una app de gestión hasta infraestructura cloud completa.
          Cuéntame qué necesitas y lo resolvemos.
        </p>

        {/* Contact cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
          <a
            href={`mailto:${email}`}
            className="card-glass rounded-2xl p-6 text-center no-underline flex flex-col items-center gap-3 group"
          >
            <div className="text-3xl">📧</div>
            <div>
              <div className="text-white font-semibold text-sm mb-1">Email</div>
              <div className="text-[#7a9bcb] text-xs break-all">{email}</div>
            </div>
          </a>

          <a
            href={`https://wa.me/${whatsapp}?text=Hola%20Aldo%2C%20vi%20tu%20portafolio%20y%20me%20gustar%C3%ADa%20hablar%20de%20un%20proyecto.`}
            target="_blank"
            rel="noopener noreferrer"
            className="card-glass rounded-2xl p-6 text-center no-underline flex flex-col items-center gap-3"
            style={{ borderColor: 'rgba(37,211,102,0.3)' }}
          >
            <div className="text-3xl">💬</div>
            <div>
              <div className="text-white font-semibold text-sm mb-1">WhatsApp</div>
              <div className="text-[#4ade80] text-xs">+{whatsapp}</div>
            </div>
          </a>

          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="card-glass rounded-2xl p-6 text-center no-underline flex flex-col items-center gap-3"
          >
            <div className="text-3xl">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-9 h-9 text-[#7ab8ff]">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.605-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </div>
            <div>
              <div className="text-white font-semibold text-sm mb-1">GitHub</div>
              <div className="text-[#7a9bcb] text-xs">aldoesc</div>
            </div>
          </a>
        </div>

        {/* Primary CTA */}
        <a
          href={`https://wa.me/${whatsapp}?text=Hola%20Aldo%2C%20vi%20tu%20portafolio%20y%20me%20gustar%C3%ADa%20hablar%20de%20un%20proyecto.`}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary text-base inline-flex"
          style={{ background: 'linear-gradient(135deg, #1a9e40, #25D366)' }}
        >
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
          Escribir por WhatsApp
        </a>
      </div>
    </section>
  )
}
