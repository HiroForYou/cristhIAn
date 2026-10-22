import { getCollection } from 'astro:content';

// Entry ids are "slug" (English) or "es/slug" (Spanish); see content/config.ts.
export const entryLang = entry => (entry.id.startsWith('es/') ? 'es' : 'en');
export const entrySlug = entry => entry.id.replace(/^es\//, '');

/** Blog posts in one language, newest first. */
export const getPosts = async lang =>
  (await getCollection('blog', post => entryLang(post) === lang)).sort(
    (a, b) => b.data.date.valueOf() - a.data.date.valueOf()
  );

export const getCaseStudies = async lang =>
  (await getCollection('caseStudies', study => entryLang(study) === lang)).sort(
    (a, b) => a.data.order - b.data.order
  );
