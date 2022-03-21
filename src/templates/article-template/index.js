import React from 'react'
import { MDXRenderer } from 'gatsby-plugin-mdx'

import { Seo, Layout } from '../../components'
import './index.css'

const ArticleTemplate = ({ pageContext }) => {
  const { frontmatter, slug, body } = pageContext

  return (
    <Layout nonav>
      <Seo
        title={frontmatter.title}
        description={frontmatter.description}
        slug={slug}
      />
      <article id={slug}>
        <MDXRenderer>{body}</MDXRenderer>
      </article>
    </Layout>
  )
}

export default ArticleTemplate
