import type { APIRoute, GetStaticPaths } from 'astro';
import { getCollection, type CollectionEntry } from 'astro:content';
import { readFile } from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

// 1200x630 PNG social card per post, rendered from its cover. Astro's image
// service passes SVGs through untouched, and social networks and Google's
// rich results don't accept SVG (and are picky about WebP), so the cover is
// rasterized here instead.
const WIDTH = 1200;
const HEIGHT = 630;
const BACKGROUND = '#191919';

// fsPath is a non-enumerable property Astro adds to imported raster images.
// SVG imports don't get one, so fall back to the path written in the post's
// frontmatter, resolved against the post's own folder.
async function coverPath(post: CollectionEntry<'blog'>) {
  const fsPath = (post.data.cover as { fsPath?: string } | undefined)?.fsPath;
  if (fsPath) return fsPath;
  const file = path.resolve('src/content/blog', post.id);
  const raw = await readFile(file, 'utf8');
  const match = raw.match(/^cover:\s*['"]?([^'"\r\n]+)/m);
  if (!match) throw new Error(`No cover path found in ${file}`);
  return path.resolve(path.dirname(file), match[1].trim());
}

export const getStaticPaths = (async () => {
  const posts = await getCollection('blog');
  return posts
    .filter(post => post.data.cover)
    .map(post => ({ params: { slug: post.slug }, props: { post } }));
}) satisfies GetStaticPaths;

export const GET: APIRoute<{ post: CollectionEntry<'blog'> }> = async ({ props }) => {
  const cover = props.post.data.cover!;
  const source = await coverPath(props.post);
  const isVector = cover.format === 'svg';
  const density = isVector ? 300 : 72;

  // Diagrams are shown whole and centred, letterboxed with their own corner
  // colour so the padding blends in; screenshots fill the card and keep
  // their top edge, where the interesting part usually is.
  let background = BACKGROUND;
  if (isVector) {
    const [r, g, b] = await sharp(source, { density })
      .flatten({ background: BACKGROUND })
      .extract({ left: 0, top: 0, width: 1, height: 1 })
      .raw()
      .toBuffer();
    background = `rgb(${r}, ${g}, ${b})`;
  }

  const png = await sharp(source, { density })
    .resize(WIDTH, HEIGHT, {
      fit: isVector ? 'contain' : 'cover',
      position: isVector ? 'centre' : 'top',
      background,
    })
    .flatten({ background })
    .png()
    .toBuffer();

  return new Response(new Uint8Array(png), { headers: { 'Content-Type': 'image/png' } });
};
