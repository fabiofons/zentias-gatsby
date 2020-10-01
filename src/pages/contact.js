import React from 'react';
import Layout from '../components/layout';
import Head from "../components/head"

const ContactPage = () => {
  return (
    <div>
      <Layout>
        <Head title="Contact" />
        <h1>Contact</h1>
        <h3>You can call us when you want, we don't worry about that</h3>
        <p><a href='https://twitter.com/fabiofons' target='_blank' rel='noreferrer'>twitter Acount</a></p>
      </Layout>
    </div>
  )
}

export default ContactPage;