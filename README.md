<p align="center">
  <a href="https://www.cristhianwiki.com/">
    <img alt="cristhIAn" src="./public/favicon.svg" width="80" />
  </a>
</p>
<h1 align="center">cristhianwiki.com</h1>
<p align="center">Personal site and blog built with Astro.</p>
<p align="center"><b>English</b> · <a href="README.es.md">Español</a></p>

<p align="center">
  <img alt="Site preview" src="./public/images/social-banner.jpg" width="600" />
</p>

Static site with client-side JavaScript limited to two components: the navbar and the theme toggle. Migrated from Gatsby.

## Stack

| Area | Choice |
|---|---|
| Framework | [Astro](https://astro.build), with React islands (`client:load`) for the interactive components |
| Styling | Hand-written CSS with custom properties: light/dark theme and a brand-palette toggle (development only). No Tailwind or UI kit. |
| Package manager | `pnpm` (lockfile: `pnpm-lock.yaml`) |
| Content | Markdown content collections (`src/content/blog/<slug>/index.md`) |
| Hosting | GitHub Pages, deployed with GitHub Actions |

## Running locally

```bash
git clone https://github.com/HiroForYou/cristhIAn.git
cd cristhIAn
pnpm install
pnpm dev
```

| Command | Result |
|---|---|
| `pnpm dev` | Development server at `http://localhost:4321` |
| `pnpm build` | Static site in `dist/` |
| `pnpm preview` | Serves the `dist/` build locally |

## Project structure

```
src/
├── components/  # one .astro per section (.jsx for the two interactive components)
├── config/      # theme palette definitions
├── content/     # blog posts and case studies (Markdown)
├── data/        # experience, tech stack, education (JS arrays)
├── layouts/     # shared <Layout>
├── pages/       # routes: home, blog list and post, case studies
├── styles/      # global.css: tokens, resets, section spacing
└── utils/       # slugify, reading time
```

New blog post: a folder in `src/content/blog/` with an `index.md` and an optional `images/` subfolder. No other files need changes.

## Deployment

| Item | Value |
|---|---|
| Production branch | `astro-migration` (Gatsby history and `develop` are kept in `old`) |
| Workflow | `.github/workflows/main.yml` |
| Trigger | Push to `astro-migration`. Changes to `.md` files are ignored, except content in `src/content/`. |
| Publishing | `dist/` to the `gh-pages` branch via `peaceiris/actions-gh-pages` |
| Domain | `www.cristhianwiki.com` |

## Attribution

If you use this repository as a template, a link back with my name in the footer is appreciated.
