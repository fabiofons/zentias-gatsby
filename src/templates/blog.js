import React from 'react'
import { graphql } from 'gatsby' 
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

import Layout from '../components/layout'
import Head from "../components/head"

// export const query = graphql`
//   query($slug: String!) {
//     markdownRemark(fields: { slug: { eq: $slug } }) {
//       frontmatter {
//         title
//         date
//       }
//       html
//     }
//   }
// `

// const Blog = (props) => {
//   return (
//     <Layout>
//       <h2>{props.data.markdownRemark.frontmatter.title}</h2>
//       <p>{props.data.markdownRemark.frontmatter.date}</p>
//       <div dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }}></div>
//     </Layout>
//   )
// }

export const query = graphql`
  query($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      publisedDate(formatString: "MMMM Do, YYYY")
      body {
        json
      }
    }
  }
`

const Blog = (props) => {
  const options = {
    renderNode: {
      "embedded-asset-block": (node) => {
        const alt = node.data.target.fields.title["en-US"]
        const url = node.data.target.fields.file["en-US"].url
        return <img src={url} alt={alt} />
      }
    }
  }
  return (
    <Layout>
      <Head title={props.data.contentfulBlogPost.title} />
      <h2>{props.data.contentfulBlogPost.title}</h2>
      <p>{props.data.contentfulBlogPost.publisedDate}</p>
      {documentToReactComponents(
        props.data.contentfulBlogPost.body.json,
        options
      )}
    </Layout>
  )
}

export default Blog