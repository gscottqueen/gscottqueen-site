import React from 'react'
import { MDXRenderer } from 'gatsby-plugin-mdx'

import { Seo, Layout, GithubFooter } from '../../components'
import './index.css'

const ArticleTemplate = ({ pageContext }) => {
  console.log(pageContext)
  const { frontmatter, slug, body } = pageContext

  return (
    <Layout nonav>
      <Seo
        title={frontmatter.title}
        description={frontmatter.description}
        slug={slug}
        defaultImage={frontmatter.image}
      />
      <article id={slug}>
        <MDXRenderer>{body}</MDXRenderer>
        <GithubFooter slug={slug} />
      </article>
    </Layout>
  )
}

export default ArticleTemplate
