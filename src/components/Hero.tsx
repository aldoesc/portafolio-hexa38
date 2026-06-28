export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center justify-center text-center px-6 overflow-hidden"
      style={{
        background: 'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(0,80,180,0.18) 0%, transparent 70%), #020813',
      }}
    >
      {/* Grid background */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(0,150,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,150,255,1) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Glow orb */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(0,120,255,0.07) 0%, transparent 70%)',
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 badge mb-6 text-sm py-1.5 px-4">
          <span className="w-2 h-2 rounded-full bg-[#00aaff] animate-pulse" />
          Disponible para proyectos · Lima, Perú
        </div>

        <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-4 leading-none">
          <span className="glow-text">Aldo Escobar</span>
        </h1>

        <p className="text-xl md:text-2xl text-[#7ab8ff] font-medium mb-3">
          Desarrollador Full-Stack & Cloud · Hexa38
        </p>

        <p className="text-[#7a9bcb] max-w-2xl mx-auto mb-10 text-lg leading-relaxed">
          Construyo <strong className="text-[#b8d4ff]">apps de escritorio</strong>, sistemas web, backends serverless e infraestructura cloud.
          Desde una idea hasta producción, con integración de IA incluida.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#proyectos" className="btn-primary text-base">
            Ver proyectos
          </a>
          <a href="#contacto" className="btn-outline text-base">
            Hablemos
          </a>
        </div>

        {/* Tech pills */}
        <div className="flex flex-wrap justify-center gap-2 mt-14">
          {['TypeScript', 'Python', 'React', 'Cloudflare', 'Docker', 'MCP / IA'].map((t) => (
            <span key={t} className="badge text-xs">
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
        <span className="text-xs text-[#7a9bcb] tracking-widest uppercase">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-[#00aaff] to-transparent animate-pulse" />
      </div>
    </section>
  )
}
