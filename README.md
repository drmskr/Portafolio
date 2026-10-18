# Portafolio

Este es mi portafolio c: — hecho con [Astro](https://astro.build).

## Comandos

| Comando           | Acción                                        |
| :---------------- | :-------------------------------------------- |
| `npm install`     | Instala las dependencias                      |
| `npm run dev`     | Servidor local en `http://localhost:4321`     |
| `npm run build`   | Genera el sitio en `./dist/`                  |
| `npm run preview` | Previsualiza el build localmente              |

## Estructura

```text
/
├── public/                 # Archivos estáticos (favicon, imágenes, CV…)
├── src/
│   ├── components/         # Header, Footer, ProjectCard
│   ├── content/projects/   # Un archivo .md por proyecto
│   ├── data/site.ts        # Nombre, rol, correo, redes y navegación
│   ├── layouts/            # BaseLayout (HTML base, header y footer)
│   ├── pages/              # Rutas: /, /about, /projects, /contact, 404
│   ├── styles/global.css   # Variables de color y estilos globales
│   └── content.config.ts   # Esquema de la colección de proyectos
└── astro.config.mjs
```

## Agregar un proyecto

Crea un archivo en `src/content/projects/mi-proyecto.md`:

```md
---
title: Mi proyecto
description: Qué hace en una línea.
date: 2026-10-17
tags: [Astro, CSS]
repo: https://github.com/usuario/repo
demo: https://mi-proyecto.com
featured: true # aparece en la página de inicio
---

Contenido en Markdown…
```
