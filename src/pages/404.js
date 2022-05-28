import React from 'react';

import Layout from '@components/Layout/Layout';
import SEO from '@components/seo';

import Link from 'gatsby-link';

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>Upss, parace que estas perdido!</h1>
    <p>
      Piensas regresar? o <Link to="/blog">deseas leer mi blog</Link>
    </p>
  </Layout>
);

export default NotFoundPage;
