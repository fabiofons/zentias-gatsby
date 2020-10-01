import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import Head from '../components/head';

const IndexPage = () => {
  return (
    <div>
      <Layout>
        <Head title="Home" />
        <h1>Hello.</h1>
        <h2>I'm Fabio, a full stack developer in develop living in Barranquilla</h2>
        <p>Need a developer? please <Link to="/contact">Contact Me</Link></p>
      </Layout>
    </div>
  )
}

export default  IndexPage;
