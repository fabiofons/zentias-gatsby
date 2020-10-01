import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import Head from "../components/head"

const AboutPage = () => {
  return (
    <div>
      <Layout>
        <Head title="About" />
        <h1>About</h1>
        <p>This page is about us, Maybe later we can explained what we do</p>
        <h4><Link to='/contact'>Contact Page</Link></h4>
      </Layout>
    </div>
  );
}

export default AboutPage;