import React from 'react'
// import { graphql, useStaticQuery } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'

import { Seo, Layout } from '../../components'
import './index.css'

const ArticleTemplate = ({ pageContext }) => {
  const { title, description, slug, body } = pageContext

  return (
    <Layout nonav>
      <Seo title={title} description={description} slug={slug} />
      <article id={`${title}`}>
        <MDXRenderer>{body}</MDXRenderer>
      </article>
    </Layout>
  )
}

export default ArticleTemplate
