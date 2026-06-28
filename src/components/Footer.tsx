export default function Footer() {
  return (
    <footer
      className="py-8 px-6 text-center border-t"
      style={{ borderColor: 'rgba(0,150,255,0.15)', background: 'rgba(0,20,50,0.2)' }}
    >
      <p className="text-[#3a5a8a] text-sm">
        © 2026 Aldo Escobar · Hexa38 · Lima, Perú
      </p>
      <p className="text-[#2a3f5a] text-xs mt-1">
        Construido con React + Vite + TypeScript · Desplegado en Cloudflare Pages
      </p>
    </footer>
  )
}
