// Text fields are `{ en, es }`, read with `pick` from src/i18n.
export const education = [
  {
    degree: {
      en: "Bachelor's Degree in Computer Science",
      es: 'Bachiller en Ciencia de la Computación',
    },
    institution: {
      en: 'Universidad Nacional de Ingeniería (UNI), Peru',
      es: 'Universidad Nacional de Ingeniería (UNI), Perú',
    },
    dateRange: '2018 – 2023',
    href: 'https://www.uni.edu.pe/',
  },
];

// Both achievements fall within the bachelor's degree timeframe (2018 – 2023).
export const achievements = [
  {
    text: {
      en: 'Beca 18 – PRONABEC (scholarship for students with high academic performance)',
      es: 'Beca 18 – PRONABEC (beca para estudiantes de alto rendimiento académico)',
    },
    dateRange: '2018 – 2023',
  },
  {
    text: {
      en: 'Top 5% – Faculty of Sciences, UNI',
      es: 'Top 5% – Facultad de Ciencias, UNI',
    },
    dateRange: '2018 – 2023',
  },
];

// Links extracted directly from the CV PDF's embedded link annotations
// (not visible in the plain-text export, but present as real URI targets).
// Course names stay as issued.
export const certificates = [
  {
    name: 'Deep Learning Specialization',
    issuer: 'Coursera',
    href: 'http://coursera.org/verify/specialization/2NN4TTN5ZEL2',
  },
  {
    name: 'AI in Medicine',
    issuer: 'Coursera',
    href: 'http://coursera.org/verify/specialization/D6S5VMQ9LULV',
  },
  {
    name: 'Advanced MLOps Bootcamp | Machine Learning Operations Hands-on',
    issuer: 'Udemy',
    href: 'https://www.udemy.com/certificate/UC-86d743a5-da0c-43cf-9335-21ff15ab1816/',
  },
  {
    name: 'AWS Certified Machine Learning Specialty 2024 – Hands On!',
    issuer: 'Udemy',
    href: 'https://www.udemy.com/certificate/UC-8d828880-dd76-41f0-89ee-288e92a45255/',
  },
  {
    name: 'Oracle AI Vector Search Professional',
    issuer: 'Oracle',
    href: 'https://catalog-education.oracle.com/ords/certview/sharebadge?id=F400F94BF298ABB35891799C474D36F75090DD970364FEE7FEC7D08F87FBB7E2',
  },
];

export const presentations = [
  {
    title: {
      en: 'Introduction to Computer Vision using Deep Learning',
      es: 'Introducción a la visión computacional con deep learning',
    },
    venue: 'UNI – IEEE CIS',
    date: { en: 'Sep 2022', es: 'Set 2022' },
    href: 'https://www.facebook.com/ieeecisuni/photos/145488051469769',
  },
  {
    title: { en: 'Introduction to Deep Learning', es: 'Introducción al deep learning' },
    venue: 'UNI – FC',
    date: { en: 'Oct 2020', es: 'Oct 2020' },
    href: 'https://www.facebook.com/acecom.uni/photos/a.485506841488143/3550442458327884',
  },
  {
    title: { en: 'Introduction to AI', es: 'Introducción a la IA' },
    venue: 'UNI – FC',
    date: { en: 'Aug 2020', es: 'Ago 2020' },
    href: 'https://www.facebook.com/acecom.uni/photos/3099606820078119',
  },
];
