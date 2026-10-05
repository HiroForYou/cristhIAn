<p align="center">
  <a href="https://www.cristhianwiki.com/">
    <img alt="cristhIAn" src="./public/favicon.svg" width="80" />
  </a>
</p>
<h1 align="center">cristhianwiki.com</h1>
<p align="center">Mi sitio personal y blog, reconstruido en Astro.</p>
<p align="center"><a href="README.md">English</a> · <b>Español</b></p>

<p align="center">
  <img alt="Vista previa del sitio" src="./public/images/social-banner.jpg" width="600" />
</p>

Antes era un sitio en Gatsby. Lo migré a Astro para reducir el peso de JavaScript
a solo las dos cosas de la página que realmente necesitan ser interactivas (la
barra de navegación y el selector de tema) y dejar todo lo demás como HTML
estático, simple y rápido.

## Stack

- [Astro](https://astro.build) para el sitio, con un par de islas de React
  (`client:load`) donde se necesita interactividad
- Sin Tailwind ni kit de UI: CSS escrito a mano con custom properties para el
  tema (claro/oscuro, más un selector de paleta de marca solo en desarrollo)
- `pnpm`, no npm: el lockfile es `pnpm-lock.yaml`
- Los posts del blog son content collections en Markdown
  (`src/content/blog/<slug>/index.md`)
- Despliegue con GitHub Actions directo a GitHub Pages

## Ejecución local

```bash
git clone https://github.com/HiroForYou/cristhIAn.git
cd cristhIAn
pnpm install
pnpm dev
```

Esto levanta el servidor de desarrollo en `http://localhost:4321`. `pnpm build`
genera el sitio estático en `dist/`, y `pnpm preview` sirve ese build en local
para revisarlo antes de hacer push.

## Dónde está cada cosa

```
src/
├── components/  # un .astro (o .jsx, para las dos partes interactivas) por sección
├── config/      # definiciones de la paleta del tema
├── content/     # posts del blog + casos de estudio (Markdown)
├── data/        # experiencia, stack, educación: arrays JS simples
├── layouts/     # el único <Layout> compartido
├── pages/       # rutas (inicio, lista/post del blog, casos de estudio)
├── styles/      # global.css: tokens, resets, espaciado de secciones
└── utils/       # slugify, helpers de tiempo de lectura
```

Para agregar o editar un post no hace falta tocar nada más: basta con crear una
carpeta en `src/content/blog/` con un `index.md` y una subcarpeta `images/` si
lo necesita.

## Despliegue

Hacer push a `astro-migration` (la rama activa; `develop` y el historial
anterior de Gatsby quedan en `old`) ejecuta el workflow de GitHub Actions en
`.github/workflows/main.yml`: construye el sitio y publica `dist/` en
`gh-pages` mediante `peaceiris/actions-gh-pages`, que es lo que sirve
`www.cristhianwiki.com`.

---

Si usas esto como plantilla para tu propio sitio, se agradece un enlace de
vuelta aquí con mi nombre en algún lugar del footer, pero sin presión.
