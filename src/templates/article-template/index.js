import React from 'react'
import { MDXRenderer } from 'gatsby-plugin-mdx'

import { Seo, Layout, GithubFooter, BackNavLink } from '../../components'
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
      <BackNavLink location="writing" top/>
      <article id={slug}>
        <MDXRenderer>{body}</MDXRenderer>
        <GithubFooter slug={slug} />
      </article>
      <BackNavLink location="writing" />
    </Layout>
  )
}

export default ArticleTemplate
