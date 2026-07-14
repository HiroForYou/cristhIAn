<p align="center">
  <a href="https://www.cristhianwiki.com/">
    <img alt="cristhIAn" src="./public/favicon.svg" width="80" />
  </a>
</p>
<h1 align="center">cristhianwiki.com</h1>
<p align="center">My personal site and blog — rebuilt in Astro.</p>

<p align="center">
  <img alt="Site preview" src="./public/images/social-banner.jpg" width="600" />
</p>

This used to be a Gatsby site. I migrated it to Astro to cut the JS-framework
weight down to just the two things on the page that actually need to be
interactive (the navbar and the theme toggle) and leave everything else as
plain, fast, static HTML.

## Stack

- [Astro](https://astro.build) for the site itself, with a couple of React
  islands (`client:load`) where actual interactivity is needed
- No Tailwind, no UI kit — just hand-written CSS with custom properties for
  theming (light/dark, plus a dev-only brand-palette toggle)
- `pnpm`, not npm — the lockfile is `pnpm-lock.yaml`, don't fight it
- Blog posts are plain Markdown content collections
  (`src/content/blog/<slug>/index.md`)
- Deployed via GitHub Actions straight to GitHub Pages

## Running it locally

```bash
git clone https://github.com/HiroForYou/cristhIAn.git
cd cristhIAn
pnpm install
pnpm dev
```

That starts the dev server on `http://localhost:4321`. `pnpm build` produces
the static site in `dist/`, and `pnpm preview` serves that build locally so
you can sanity-check it before pushing.

## Where things live

```
src/
├── components/  # one .astro (or .jsx, for the two interactive bits) per section
├── config/      # theme palette definitions
├── content/     # blog posts + case studies (Markdown)
├── data/        # experience, tech stack, education — plain JS arrays
├── layouts/     # the single shared <Layout>
├── pages/       # routes (index, blog list/post, case studies)
├── styles/      # global.css — tokens, resets, section spacing
└── utils/       # slugify, reading-time helpers
```

If you just want to add or edit a blog post, you don't need to touch anything
else — drop a folder in `src/content/blog/` with an `index.md` and an
`images/` subfolder if it needs any.

## Deploying

Pushing to `astro-migration` (the active branch — `develop` and the old
Gatsby history live on under `old` now) runs the GitHub Actions workflow in
`.github/workflows/main.yml`: it builds the site, then publishes `dist/` to
`gh-pages` via `peaceiris/actions-gh-pages`, which is what serves
`www.cristhianwiki.com`.

---

If you're using this as a template for your own site, a link back here with
my name somewhere in the footer would be appreciated — but no pressure.
