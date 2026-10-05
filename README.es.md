<p align="center">
  <a href="https://www.cristhianwiki.com/">
    <img alt="cristhIAn" src="./public/favicon.svg" width="80" />
  </a>
</p>
<h1 align="center">cristhianwiki.com</h1>
<p align="center">Sitio personal y blog construido con Astro.</p>
<p align="center"><a href="README.md">English</a> · <b>Español</b></p>

<p align="center">
  <img alt="Vista previa del sitio" src="./public/images/social-banner.jpg" width="600" />
</p>

Sitio estático con JavaScript en el cliente limitado a dos componentes: la barra de navegación y el selector de tema. Migrado desde Gatsby.

## Stack

| Área | Elección |
|---|---|
| Framework | [Astro](https://astro.build), con islas de React (`client:load`) para los componentes interactivos |
| Estilos | CSS escrito a mano con custom properties: tema claro/oscuro y selector de paleta de marca (solo en desarrollo). Sin Tailwind ni kit de UI. |
| Gestor de paquetes | `pnpm` (lockfile: `pnpm-lock.yaml`) |
| Contenido | Content collections en Markdown (`src/content/blog/<slug>/index.md`) |
| Hosting | GitHub Pages, desplegado con GitHub Actions |

## Ejecución local

```bash
git clone https://github.com/HiroForYou/cristhIAn.git
cd cristhIAn
pnpm install
pnpm dev
```

| Comando | Resultado |
|---|---|
| `pnpm dev` | Servidor de desarrollo en `http://localhost:4321` |
| `pnpm build` | Sitio estático en `dist/` |
| `pnpm preview` | Sirve el build de `dist/` en local |

## Estructura del proyecto

```
src/
├── components/  # un .astro por sección (.jsx para los dos componentes interactivos)
├── config/      # definiciones de la paleta del tema
├── content/     # posts del blog y casos de estudio (Markdown)
├── data/        # experiencia, stack, educación (arrays JS)
├── layouts/     # <Layout> compartido
├── pages/       # rutas: inicio, lista y post del blog, casos de estudio
├── styles/      # global.css: tokens, resets, espaciado de secciones
└── utils/       # slugify, tiempo de lectura
```

Nuevo post: una carpeta en `src/content/blog/` con un `index.md` y una subcarpeta `images/` opcional. No requiere cambios en otros archivos.

## Despliegue

| Elemento | Valor |
|---|---|
| Rama de producción | `astro-migration` (el historial de Gatsby y `develop` se conservan en `old`) |
| Workflow | `.github/workflows/main.yml` |
| Disparador | Push a `astro-migration`. Se ignoran cambios en archivos `.md`, salvo el contenido de `src/content/`. |
| Publicación | `dist/` a la rama `gh-pages` mediante `peaceiris/actions-gh-pages` |
| Dominio | `www.cristhianwiki.com` |

## Atribución

Si usas este repositorio como plantilla, se agradece un enlace de vuelta con mi nombre en el footer.
