const meta = {
  // Metadata
  siteTitle: 'Cristhian Wiki - Machine Learning Engineer',
  siteDescription:
    'Cristhian Wiki - Creative ML enginner who loves pytorch and modern deep learning technologies.',
  siteTitleAlt: 'Cristhian Wiki',
  siteShortName: 'cristhIA',
  siteUrl: 'https://hiroforyou.github.io/cristhIAn/', // No trailing slash!
};

const social = {
  siteLogo: `src/static/logo.svg`,
  siteBanner: `${meta.siteUrl}/images/social-banner.png`,
  twitter: '@HiroCharlie',
};

const website = { 
  ...meta,
  ...social,
  disqusShortName: 'https-hiroforyou-github-io-cristhian',
  googleAnalyticsID: 'UA-194287994-1',
  // Manifest
  themeColor: '#6D83F2',
  backgroundColor: '#6D83F2',
};

module.exports = website;
