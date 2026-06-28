export interface Project {
  id: string
  name: string
  tagline: string
  description: string
  tags: string[]
  stack: string[]
  deploy: string[]
  highlights: string[]
  liveUrl?: string
  githubUrl?: string
  privateRepo?: boolean
  category: 'web' | 'desktop' | 'infra' | 'design'
}

export const projects: Project[] = [
  {
    id: 'biblioteca',
    name: 'Biblioteca Cordillera',
    tagline: 'E-commerce de libros con catálogo por ISBN',
    description:
      'Plataforma fullstack para indexar una biblioteca física y vender libros online. Escaneo de ISBN por cámara con autocompletado vía Google Books, carrito de compras, autenticación y pagos integrados con MercadoPago y criptomonedas (NOWPayments).',
    tags: ['E-commerce', 'PWA', 'Serverless', 'Pagos'],
    stack: ['TypeScript', 'React', 'Vite', 'Hono', 'Drizzle ORM', 'Cloudflare D1', 'Cloudflare R2', 'MercadoPago', 'NOWPayments', 'ZXing (QR/ISBN)'],
    deploy: ['Cloudflare Pages', 'Cloudflare Workers'],
    highlights: [
      'Monorepo npm workspaces (apps/web, apps/api, packages/db)',
      'PWA instalable con escaneo de ISBN por cámara',
      'Auth por Bearer token con PBKDF2 (Web Crypto)',
      'Flujo de pagos MercadoPago + cripto con webhooks',
      'R2 para fotos de portadas, D1 como base de datos SQL serverless',
    ],
    liveUrl: 'https://biblioteca-cordillera.pages.dev',
    githubUrl: 'https://github.com/aldoesc/biblioteca-cordillera',
    category: 'web',
  },
  {
    id: 'crm',
    name: 'PlayinVR CRM',
    tagline: 'CRM multi-tienda para salas de realidad virtual',
    description:
      'Sistema de escritorio completo para la gestión de salas VR: fidelización de clientes, puntos y rangos, gift cards, bóveda de juegos, ventas por promotor, asistencia de personal y reportes. Con sincronización en la nube y métricas consultables por IA en lenguaje natural vía protocolo MCP.',
    tags: ['CRM', 'Desktop App', 'Multi-tienda', 'IA/MCP', 'Offline-first'],
    stack: ['Python', 'Flet', 'SQLite', 'SQLAlchemy', 'Cloudflare Workers', 'Cloudflare D1', 'FastMCP', 'PyInstaller', 'InnoSetup', 'ESC/POS'],
    deploy: ['App .exe instalable (Windows)', 'Cloudflare Workers (API cloud)'],
    highlights: [
      'Arquitectura offline-first: opera sin internet y sincroniza al reconectarse',
      'Multi-tienda: red compartida + datos locales por sede',
      'Servidor MCP propio: consultas IA en lenguaje natural ("¿quién cumplió la meta?")',
      'Impresión de tickets ESC/POS por red TCP/IP, serial o USB',
      'Instalador Windows con actualización in-place sin perder datos',
    ],
    privateRepo: true,
    category: 'desktop',
  },
  {
    id: 'cms',
    name: 'Hexa38 CMS',
    tagline: 'Sistema de cartelería digital para tótems y pantallas',
    description:
      'Plataforma para gestionar pantallas/tótems de cartelería digital desde un panel web central. El servidor Flask corre en Docker y permite subir contenido, programar horarios por tótem y monitorear el estado en tiempo real. Cada tótem es un equipo Windows con el reproductor en modo kiosko.',
    tags: ['CMS', 'Cartelería Digital', 'Docker', 'Kiosko'],
    stack: ['Python', 'Flask', 'SQLite', 'Docker', 'Docker Compose', 'PyInstaller', 'InnoSetup', 'VLC (portable)'],
    deploy: ['Docker (servidor central)', 'App .exe kiosko (cada tótem Windows)'],
    highlights: [
      'Panel web con dashboard en vivo: estado, almacenamiento y latido de cada pantalla',
      'Reproductor kiosko: pantalla completa, arranque automático con Windows',
      'Programación por horario, soporte de video e imágenes (mp4/jpg/png)',
      'Apagado remoto de tótems desde el panel central',
      'Despliegue con un solo `docker compose up -d`',
    ],
    githubUrl: 'https://github.com/aldoesc/Proyecto_cms_hexa38',
    category: 'desktop',
  },
  {
    id: 'sui',
    name: 'SUItime',
    tagline: 'Gestión de tareas y tiempos operacionales multiplataforma',
    description:
      'App de gestión operacional para equipos técnicos: tareas con ciclo de vida completo, registro de tiempo de trabajo, fallas/reparaciones y adjuntos fotográficos. Corre en Windows y Android desde el mismo código base Python. Con sincronización cloud offline-first y servidor MCP para consultas IA.',
    tags: ['Productividad', 'Desktop + Android', 'Offline-first', 'IA/MCP'],
    stack: ['Python', 'Flet', 'SQLite', 'bcrypt', 'Cloudflare Workers', 'Cloudflare D1', 'FastMCP', 'Flutter (Flet build)', 'GitHub Actions'],
    deploy: ['Windows .exe', 'Android APK', 'Cloudflare Workers (API)'],
    highlights: [
      'Un solo código base Python → compila a Windows y Android APK (Flet + Flutter)',
      'Sincronización offline-first con cola de reintentos y backoff',
      'Ciclo de vida de tareas: pendiente → en progreso → validación → cierre',
      'Servidor MCP: consulta operacional en lenguaje natural desde Claude',
      'CI/CD con GitHub Actions para builds automáticos',
    ],
    githubUrl: 'https://github.com/aldoesc/suitime',
    category: 'desktop',
  },
  {
    id: 'asistencia',
    name: 'Control de Asistencia Personal',
    tagline: 'Sistema de asistencia por QR y cámara',
    description:
      'App de escritorio para registrar asistencia de personal mediante códigos QR escaneados por cámara. Incluye panel de administración, gestión de horarios, reportes y base de datos local SQLite.',
    tags: ['RRHH', 'QR', 'Desktop App'],
    stack: ['Python', 'Flet', 'SQLAlchemy', 'SQLite', 'pyzbar', 'OpenCV'],
    deploy: ['App desktop Windows (local)'],
    highlights: [
      'Escaneo de QR por cámara en tiempo real',
      'Panel admin con gestión de personal y horarios',
      'Reportes de asistencia exportables',
      'Arquitectura MVC con backend separado (models, CRUD, logic)',
    ],
    githubUrl: 'https://github.com/aldoesc/asistencia-personal',
    category: 'desktop',
  },
  {
    id: 'nextcloud',
    name: 'Nube Privada Nextcloud',
    tagline: 'Infraestructura cloud personal self-hosted 24/7',
    description:
      'Nube personal tipo Google Drive corriendo en hardware propio (Intel NUC), accesible desde cualquier lugar del mundo sin IP pública. Arquitectura de 6 contenedores Docker con backup 3-2-1 automático, monitoreo en 3 capas, VPN mesh y gestión asistida por IA mediante servidor MCP propio.',
    tags: ['DevOps', 'Self-hosted', 'Docker', 'IA/MCP', 'Seguridad'],
    stack: ['Docker', 'Docker Compose', 'Nextcloud', 'MariaDB', 'Redis', 'Cloudflare Tunnel', 'Tailscale (WireGuard)', 'rclone', 'Python (MCP)', 'paramiko', 'Ubuntu Server 24.04'],
    deploy: ['Self-hosted (Intel NUC, Ubuntu Server)', 'Acceso global via Cloudflare Tunnel'],
    highlights: [
      '6 contenedores Docker orquestados con healthchecks y auto-recuperación',
      'Acceso global sin IP pública ni puertos abiertos (Cloudflare Tunnel)',
      'VPN mesh Tailscale (WireGuard) para SSH remoto seguro sin claves en disco',
      'Backup 3-2-1: local 7 días + Google Drive off-site 14 días vía rclone',
      '11 herramientas MCP para diagnosticar y operar el servidor desde una conversación IA',
      'Caso real: bug de driver WiFi diagnosticado por forense multicapa (−98.7% inestabilidad)',
    ],
    githubUrl: 'https://github.com/aldoesc/nextcloud-hexa38',
    category: 'infra',
  },
  {
    id: 'playinvr-web',
    name: 'Landing Page PlayinVR',
    tagline: 'Sitio web corporativo para sala de VR',
    description:
      'Landing page responsive para una sala de realidad virtual. Diseño oscuro con estética futurista, secciones de experiencias, precios y contacto. HTML/CSS/JS vanilla sin dependencias.',
    tags: ['Landing Page', 'Responsive', 'Diseño Web'],
    stack: ['HTML5', 'CSS3', 'JavaScript', 'Diseño UI propio'],
    deploy: ['Hosting estático'],
    highlights: [
      'Diseño responsive mobile-first',
      'Animaciones CSS (float, glow, hover effects)',
      'Glassmorphism y efectos neon',
      'Sección de precios, galería de experiencias y contacto WhatsApp',
    ],
    githubUrl: 'https://github.com/aldoesc/playinvr-landing',
    category: 'web',
  },
]

export const services = [
  {
    icon: '🌐',
    title: 'Apps Web & E-commerce',
    description:
      'Sitios web, tiendas online y SPAs con React + TypeScript. Desde landing pages hasta plataformas con pagos (MercadoPago, cripto), autenticación y carrito.',
    techs: ['React', 'TypeScript', 'Vite', 'Hono', 'Drizzle ORM'],
  },
  {
    icon: '🖥️',
    title: 'Apps de Escritorio & Móvil',
    description:
      'Aplicaciones de escritorio Windows y APK Android desde un solo código Python. Sistemas de gestión, CRM, control de asistencia, cartelería digital y más.',
    techs: ['Python', 'Flet', 'Flutter', 'PyInstaller', 'SQLite'],
  },
  {
    icon: '☁️',
    title: 'Backend Serverless',
    description:
      'APIs rápidas y escalables en el edge de Cloudflare: cero servidores que mantener, sincronización offline-first, bases de datos D1 y storage R2.',
    techs: ['Cloudflare Workers', 'D1', 'R2', 'Wrangler', 'Hono'],
  },
  {
    icon: '🐳',
    title: 'DevOps & Self-hosting',
    description:
      'Despliegue con Docker Compose, infraestructura segura sin IP pública (Cloudflare Tunnel), VPN mesh, backups automáticos y monitoreo en capas.',
    techs: ['Docker', 'Cloudflare Tunnel', 'Tailscale', 'Ubuntu Server', 'rclone'],
  },
  {
    icon: '🤖',
    title: 'Integración de IA / MCP',
    description:
      'Servidores MCP (Model Context Protocol) que conectan tus sistemas con Claude y otros modelos de IA. Consultas en lenguaje natural sobre tus datos operacionales.',
    techs: ['FastMCP', 'Python', 'Claude API', 'Cloudflare Workers AI'],
  },
  {
    icon: '🔧',
    title: 'Soporte Técnico & Asesoría',
    description:
      'Diagnóstico y resolución de fallas a nivel software y hardware, reparación de equipos, configuración de sistemas, instalación y armado de simuladores. Gestión de operatividad, capacitaciones técnicas y coordinación de personal.',
    techs: ['Hardware PC', 'Simuladores VR', 'Redes', 'Configuración Windows', 'Capacitaciones'],
  },
  {
    icon: '🎨',
    title: 'Diseño & Multimedia',
    description:
      'Identidad visual, piezas gráficas, edición de video y animación. Material para redes sociales, presentaciones, cartelería y contenido promocional.',
    techs: ['Photoshop', 'Illustrator', 'After Effects', 'Premiere Pro'],
  },
]

export const skillGroups = [
  {
    label: 'Frontend',
    skills: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'PWA', 'ZXing (QR)', 'HTML5 / CSS3'],
  },
  {
    label: 'Backend & APIs',
    skills: ['Hono', 'Flask', 'Python', 'Drizzle ORM', 'SQLAlchemy', 'FastMCP', 'REST / JSON'],
  },
  {
    label: 'Cloud & Serverless',
    skills: ['Cloudflare Workers', 'Cloudflare D1', 'Cloudflare R2', 'Cloudflare Pages', 'Cloudflare Tunnel', 'Wrangler'],
  },
  {
    label: 'Desktop & Móvil',
    skills: ['Flet', 'Flutter (via Flet build)', 'PyInstaller', 'InnoSetup', 'ESC/POS', 'VLC portable'],
  },
  {
    label: 'DevOps & Infra',
    skills: ['Docker', 'Docker Compose', 'Ubuntu Server', 'Tailscale', 'rclone', 'GitHub Actions', 'SQLite / MariaDB / Redis'],
  },
  {
    label: 'Diseño & Multimedia',
    skills: ['Adobe Photoshop', 'Adobe Illustrator', 'After Effects', 'Premiere Pro'],
  },
  {
    label: 'Soporte Técnico',
    skills: ['Diagnóstico hardware/software', 'Reparación de equipos', 'Armado de simuladores VR', 'Configuración de redes', 'Gestión operativa', 'Capacitación de personal'],
  },
]

export const experience = [
  {
    role: 'Asesor Tecnológico',
    company: 'PlayinVR',
    period: '2023 – presente',
    type: 'Consultoría',
    description:
      'Responsable del ecosistema tecnológico completo de las salas de realidad virtual: desde la infraestructura de software hasta el soporte físico de los equipos.',
    items: [
      'Asesoría tecnológica y toma de decisiones de infraestructura',
      'Diagnóstico y resolución de fallas de software y hardware',
      'Reparación, mantenimiento y configuración de equipos VR',
      'Instalación y armado de simuladores de vuelo, combate y conducción',
      'Gestión de operatividad de múltiples sedes simultáneas',
      'Capacitación técnica y operativa al personal de tienda',
      'Coordinación de equipos y gestión operacional',
      'Desarrollo de todas las soluciones de software internas (CRM, CMS, SUItime)',
    ],
  },
]
