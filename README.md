# Portafolio · Aldo Escobar / Hexa38

Portafolio profesional de servicios de desarrollo, desplegado en Cloudflare Pages.

🌐 **[hexa38.com](https://hexa38.com)**

## Stack

- **React 18** + **TypeScript** + **Vite 8**
- **Tailwind CSS v4** (plugin Vite)
- Desplegado en **Cloudflare Pages**

## Estructura

```
src/
├── components/     # Navbar, Hero, Services, Experience, Projects, Stack, Contact
├── data/
│   └── projects.ts # Toda la data del portafolio (proyectos, servicios, stack)
└── App.tsx
```

## Desarrollo local

```bash
npm install
npm run dev       # http://localhost:5173
```

## Deploy

```bash
npm run build
npx wrangler pages deploy dist --project-name=portafolio-hexa38
```

## Personalización

Toda la información del portafolio está centralizada en `src/data/projects.ts`:
- `projects` — fichas de proyectos con stack, deploy y highlights
- `services` — cards de servicios ofrecidos
- `skillGroups` — grupos del stack técnico
- `experience` — experiencia laboral

---

Desarrollado por [Aldo Escobar](https://hexa38.com) · Hexa38
