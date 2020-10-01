import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';

import Layout from '../components/layout';
import blogStyle from './blog.module.scss';
import Head from '../components/head';

const BlogPage = () => {
  // const queryPostMd = useStaticQuery(graphql`
  //   query {
  //     allMarkdownRemark {
  //       edges {
  //         node {
  //           frontmatter {
  //             title
  //             date
  //           }
  //         }
  //       }
  //     }
  //   }
  // `)
  const queryPost = useStaticQuery(graphql`
    query {
      allContentfulBlogPost(sort: { order: DESC, fields: publisedDate }) {
        edges {
          node {
            id
            title
            slug
            publisedDate(formatString: "MMMM Do, YYYY")
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <Head title="Blog" />
      <h1>Blog</h1>
      <ol className={blogStyle.posts}>
        {queryPost.allContentfulBlogPost.edges.map(edge => {
          return (
            <li key={edge.node.id} className={blogStyle.post}>
              <h2>
                <Link to={`/blog/${edge.node.slug}`}>{edge.node.title}</Link>
              </h2>
              <p>{edge.node.publisedDate}</p>
            </li>
          )
        })}
      </ol>
    </Layout>
  )
}

export default BlogPage;