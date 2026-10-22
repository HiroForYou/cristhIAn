// English lives at the root ("/blog/..."), Spanish under "/es" ("/es/blog/...").
// Every page exists in both languages under the same slug, so switching
// language is just adding or dropping the prefix.
export const languages = ['en', 'es'];
export const defaultLang = 'en';

// Search engines read these from hreflang / og:locale.
export const ogLocale = { en: 'en_US', es: 'es_PE' };
// Used by Intl date formatting.
export const dateLocale = { en: 'en-US', es: 'es-PE' };

export const getLang = pathname =>
  pathname === '/es' || pathname.startsWith('/es/') ? 'es' : 'en';

/** Same page in another language: "/blog/x/" ⇄ "/es/blog/x/". */
export const localizePath = (pathname, lang) => {
  const bare = pathname.replace(/^\/es(?=\/|$)/, '') || '/';
  return lang === 'es' ? `/es${bare === '/' ? '/' : bare}` : bare;
};

/** getStaticPaths params for pages under src/pages/[...locale]/. */
export const localeParams = () =>
  languages.map(lang => ({ params: { locale: lang === defaultLang ? undefined : lang } }));

/** Prefix for links built inside a page: '' or '/es'. */
export const basePath = lang => (lang === 'es' ? '/es' : '');

/**
 * Data fields are either a plain value or `{ en, es }`.
 * @template T
 * @param {T | { en: T, es?: T }} value
 * @param {string} lang
 * @returns {T}
 */
export const pick = (value, lang) =>
  value && typeof value === 'object' && !Array.isArray(value) && 'en' in value
    ? (value[lang] ?? value.en)
    : value;

export const useTranslations = lang => key => ui[lang]?.[key] ?? ui.en[key] ?? key;

export const ui = {
  en: {
    'meta.title': 'Cristhian Wiki — Machine Learning Engineer',
    'meta.description':
      'Cristhian Wiki — Creative ML engineer who loves PyTorch and modern deep learning technologies.',
    'meta.rss': 'Cristhian Wiki — Blog',

    'nav.about': 'About',
    'nav.experience': 'Experience',
    'nav.education': 'Education',
    'nav.projects': 'Projects',
    'nav.blog': 'Blog',
    'nav.contact': 'Contact',
    'nav.home': 'Cristhian Wiki — home',
    'nav.primary': 'Primary',
    'nav.menu': 'Menu',
    'nav.close': 'Close',
    'nav.siteMenu': 'Site menu',
    'nav.toLight': 'Switch to light mode',
    'nav.toDark': 'Switch to dark mode',
    'nav.switchLang': 'Leer en español',

    'hero.hello': "Hello, I'm",
    'hero.bio':
      'Self-taught ML engineer from Peru, shipping deep learning systems from research to production — next up, grad school in deep learning and neuroscience.',
    'hero.resume': 'Download Resume',
    'hero.projects': 'View Projects',
    'hero.phrase1': 'Machine Learning Engineer',
    'hero.phrase2': 'PyTorch lover ❤',
    'hero.out1': 'FastAPI APIs',
    'hero.out2': 'ML models trained',
    'hero.out3': 'AWS deployment',
    'hero.out4': 'Production ready',
    'hero.codeRole': 'Machine Learning Engineer',
    'hero.codeBuild': 'production ML systems',
    'hero.status': 'Status:',
    'hero.statusValue': 'Shipping ML systems in production',

    'about.eyebrow': 'About',
    'about.title': 'A bit about <em>me.</em>',
    'about.p1':
      "Hi, I'm Cristhian Wiki, a passionate machine learning engineer and self-taught researcher from Peru. I am a PyTorch lover, very interested in the creation of novel neural network architectures (SOA), as well as their rapid implementation and accessibility (using MLOps tools).",
    'about.p2':
      "My goal as a human being is to be able to change the world and make it a better place (using deep learning and lots of creativity). I love a good challenge, and I'm planning to pursue a Master's or PhD next, focused on deep learning and neuroscience.",
    'about.p3':
      "Outside of work, you'll find me riding motorcycles, tinkering with cars, traveling whenever I can, and at the gym — but especially hanging out with my cats, who are pretty much my whole world.",

    'exp.eyebrow': 'Career experience',
    'exp.title': 'The path so <em>far.</em>',
    'exp.current': 'Current role',
    'exp.next': 'Next',
    'exp.nextStop': 'Next stop',
    'exp.yourTeam': 'Your <em>team?</em>',
    'exp.talk': "Let's talk ↗",

    'edu.eyebrow': 'Education & achievements',
    'edu.title': 'Always <em>learning.</em>',
    'edu.education': 'Education',
    'edu.achievements': 'Achievements',
    'edu.certificates': 'Certificates',
    'edu.presentations': 'Presentations',

    'stack.eyebrow': 'Tech stack',
    'stack.title': 'Tools of the <em>trade.</em>',

    'projects.eyebrow': 'Projects',
    'projects.title': 'Selected <em>work.</em>',
    'projects.caseStudy': 'Case Study',
    'projects.liveDemo': 'Live Demo',
    'projects.source': 'Source',
    'projects.demo': 'Demo',
    'projects.more': 'More to explore',
    'projects.small': 'Small Projects',
    'projects.goToPage': 'Go to page',
    'projects.idea': 'Idea:',

    'contact.eyebrow': 'Contact',
    'contact.line1': 'Let’s build',
    'contact.line2': 'something',
    'contact.accent': 'together.',
    'contact.text': 'Open to ML/AI conversations, collaborations, or opportunities.',
    'contact.write': 'Write to me',
    'contact.copy': 'Copy',
    'contact.copied': 'Copied ✓',
    'contact.copyLabel': 'Copy email address',
    'contact.copiedStatus': 'Email address copied to clipboard',
    'contact.badge': 'SAY HELLO · ',
    'contact.badgeLabel': 'Say hello — email',

    'footer.made': 'Made with ❤',

    'blog.title': 'Blog — Cristhian Wiki',
    'blog.description':
      'Notes on machine learning engineering, MLOps, and the side projects I build along the way.',
    'blog.eyebrow': 'Writing',
    'blog.heading': 'Notes from the <em>workbench.</em>',
    'blog.intro':
      'Machine learning, side projects, and the bugs that taught me the most. Long-form write-ups of things I built, broke, and eventually understood.',
    'blog.rss': 'Subscribe via RSS',
    'blog.latest': 'Latest',
    'blog.readPost': 'Read the post',
    'blog.minRead': 'min read',
    'blog.all': 'All',
    'blog.more': 'more',
    'blog.showLess': 'Show less',
    'blog.search': 'Search posts…',
    'blog.empty': 'Nothing matches that yet. Try another tag or a broader search.',

    'post.home': 'Home',
    'post.breadcrumb': 'Breadcrumb',
    'post.onThisPage': 'On this page',
    'post.writtenBy': 'Written by',
    'post.bio':
      'Senior Machine Learning Engineer. I write about the models I build, the bugs that cost me a weekend, and whatever I am currently learning the hard way.',
    'post.getInTouch': 'Get in touch',
    'post.morePosts': 'More posts',
    'post.previous': '← Previous',
    'post.next': 'Next →',
    'post.edit': 'Spotted a typo? Edit this post on GitHub ↗',
    'post.comments': 'Comments',
    'post.share': 'Share',
    'post.shareOn': 'Share on',
    'post.copyLink': 'Copy link',
    'post.linkCopied': 'Link copied',
    'post.copyFailed': 'Copy failed',
    'post.backToTop': 'Back to top',
    'post.linkTo': 'Link to',
    'post.copy': 'Copy',
    'post.copied': 'Copied',
    'post.failed': 'Failed',
  },

  es: {
    'meta.title': 'Cristhian Wiki — Ingeniero de Machine Learning',
    'meta.description':
      'Cristhian Wiki — Ingeniero de ML creativo, fan de PyTorch y de las tecnologías modernas de deep learning.',
    'meta.rss': 'Cristhian Wiki — Blog (español)',

    'nav.about': 'Sobre mí',
    'nav.experience': 'Experiencia',
    'nav.education': 'Formación',
    'nav.projects': 'Proyectos',
    'nav.blog': 'Blog',
    'nav.contact': 'Contacto',
    'nav.home': 'Cristhian Wiki — inicio',
    'nav.primary': 'Principal',
    'nav.menu': 'Menú',
    'nav.close': 'Cerrar',
    'nav.siteMenu': 'Menú del sitio',
    'nav.toLight': 'Cambiar a modo claro',
    'nav.toDark': 'Cambiar a modo oscuro',
    'nav.switchLang': 'Read in English',

    'hero.hello': 'Hola, soy',
    'hero.bio':
      'Ingeniero de ML autodidacta de Perú. Llevo sistemas de deep learning de la investigación a producción, y lo siguiente es un posgrado en deep learning y neurociencia.',
    'hero.resume': 'Descargar CV',
    'hero.projects': 'Ver proyectos',
    'hero.phrase1': 'Ingeniero de Machine Learning',
    'hero.phrase2': 'Fan de PyTorch ❤',
    'hero.out1': 'APIs con FastAPI',
    'hero.out2': 'Modelos de ML entrenados',
    'hero.out3': 'Despliegue en AWS',
    'hero.out4': 'Listo para producción',
    'hero.codeRole': 'Ingeniero de Machine Learning',
    'hero.codeBuild': 'sistemas de ML en producción',
    'hero.status': 'Estado:',
    'hero.statusValue': 'Llevando sistemas de ML a producción',

    'about.eyebrow': 'Sobre mí',
    'about.title': 'Un poco sobre <em>mí.</em>',
    'about.p1':
      'Hola, soy Cristhian Wiki, ingeniero de machine learning e investigador autodidacta de Perú. Soy fan de PyTorch y me interesa mucho crear arquitecturas de redes neuronales novedosas (estado del arte), además de implementarlas rápido y hacerlas accesibles con herramientas de MLOps.',
    'about.p2':
      'Mi meta como persona es poder cambiar el mundo y hacerlo un lugar mejor, con deep learning y mucha creatividad. Me encantan los retos, y lo siguiente en mis planes es una maestría o un doctorado enfocado en deep learning y neurociencia.',
    'about.p3':
      'Fuera del trabajo me encontrarás manejando moto, metiéndole mano a los carros, viajando cada vez que puedo y en el gimnasio. Pero sobre todo, pasando tiempo con mis gatos, que son prácticamente todo mi mundo.',

    'exp.eyebrow': 'Experiencia profesional',
    'exp.title': 'El camino hasta <em>ahora.</em>',
    'exp.current': 'Puesto actual',
    'exp.next': 'Sigue',
    'exp.nextStop': 'Próxima parada',
    'exp.yourTeam': '¿Tu <em>equipo?</em>',
    'exp.talk': 'Conversemos ↗',

    'edu.eyebrow': 'Formación y logros',
    'edu.title': 'Siempre <em>aprendiendo.</em>',
    'edu.education': 'Formación',
    'edu.achievements': 'Logros',
    'edu.certificates': 'Certificados',
    'edu.presentations': 'Charlas',

    'stack.eyebrow': 'Stack técnico',
    'stack.title': 'Las herramientas del <em>oficio.</em>',

    'projects.eyebrow': 'Proyectos',
    'projects.title': 'Trabajo <em>destacado.</em>',
    'projects.caseStudy': 'Caso de estudio',
    'projects.liveDemo': 'Demo en vivo',
    'projects.source': 'Código',
    'projects.demo': 'Demo',
    'projects.more': 'Hay más por ver',
    'projects.small': 'Proyectos pequeños',
    'projects.goToPage': 'Ir a la página',
    'projects.idea': 'Idea:',

    'contact.eyebrow': 'Contacto',
    'contact.line1': 'Construyamos',
    'contact.line2': 'algo',
    'contact.accent': 'juntos.',
    'contact.text': 'Abierto a conversaciones, colaboraciones u oportunidades en ML e IA.',
    'contact.write': 'Escríbeme',
    'contact.copy': 'Copiar',
    'contact.copied': 'Copiado ✓',
    'contact.copyLabel': 'Copiar correo electrónico',
    'contact.copiedStatus': 'Correo copiado al portapapeles',
    'contact.badge': 'ESCRÍBEME · ',
    'contact.badgeLabel': 'Escríbeme — correo',

    'footer.made': 'Hecho con ❤',

    'blog.title': 'Blog — Cristhian Wiki',
    'blog.description':
      'Notas sobre ingeniería de machine learning, MLOps y los proyectos personales que voy construyendo.',
    'blog.eyebrow': 'Escritos',
    'blog.heading': 'Notas desde el <em>taller.</em>',
    'blog.intro':
      'Machine learning, proyectos personales y los bugs que más me enseñaron. Artículos largos sobre cosas que construí, rompí y al final entendí.',
    'blog.rss': 'Suscríbete por RSS',
    'blog.latest': 'Lo más reciente',
    'blog.readPost': 'Leer el artículo',
    'blog.minRead': 'min de lectura',
    'blog.all': 'Todos',
    'blog.more': 'más',
    'blog.showLess': 'Ver menos',
    'blog.search': 'Buscar artículos…',
    'blog.empty': 'Nada coincide todavía. Prueba otra etiqueta o una búsqueda más amplia.',

    'post.home': 'Inicio',
    'post.breadcrumb': 'Ruta de navegación',
    'post.onThisPage': 'En esta página',
    'post.writtenBy': 'Escrito por',
    'post.bio':
      'Senior Machine Learning Engineer. Escribo sobre los modelos que construyo, los bugs que me costaron un fin de semana y lo que sea que esté aprendiendo a la mala.',
    'post.getInTouch': 'Contáctame',
    'post.morePosts': 'Más artículos',
    'post.previous': '← Anterior',
    'post.next': 'Siguiente →',
    'post.edit': '¿Viste un error? Edita este artículo en GitHub ↗',
    'post.comments': 'Comentarios',
    'post.share': 'Compartir',
    'post.shareOn': 'Compartir en',
    'post.copyLink': 'Copiar enlace',
    'post.linkCopied': 'Enlace copiado',
    'post.copyFailed': 'No se pudo copiar',
    'post.backToTop': 'Volver arriba',
    'post.linkTo': 'Enlace a',
    'post.copy': 'Copiar',
    'post.copied': 'Copiado',
    'post.failed': 'Error',
  },
};
