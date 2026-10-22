import rss from '@astrojs/rss';
import { getPosts, entrySlug } from '@/utils/content.js';
import { basePath, localeParams, useTranslations } from '@/i18n';

export const getStaticPaths = localeParams;

// One feed per language: /rss.xml and /es/rss.xml.
export async function GET(context) {
  const lang = context.params.locale ?? 'en';
  const t = useTranslations(lang);
  const posts = await getPosts(lang);

  return rss({
    title: t('meta.rss'),
    description: t('blog.description'),
    site: context.site,
    items: posts.map(post => ({
      title: post.data.title,
      description: post.data.excerpt,
      pubDate: post.data.date,
      link: `${basePath(lang)}/blog/${entrySlug(post)}/`,
      categories: post.data.tags,
    })),
    customData: `<language>${lang === 'es' ? 'es' : 'en-us'}</language>`,
  });
}
