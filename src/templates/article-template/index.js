import React from 'react'
import { MDXRenderer } from 'gatsby-plugin-mdx'

import {
  Seo,
  Layout,
  GithubFooter,
  BackNavLink,
  RelatedWorks
} from '../../components'
import './index.css'

const ArticleTemplate = ({ pageContext }) => {
  const { frontmatter, slug, body } = pageContext

  return (
    <Layout nonav>
      <Seo
        title={frontmatter.title}
        description={frontmatter.description}
        slug={slug}
        defaultImage={(frontmatter.image && frontmatter.image) || undefined}
      />
      <BackNavLink location="writing" />
      <article id={slug}>
        <MDXRenderer>{body}</MDXRenderer>
        <GithubFooter slug={slug} />
        {frontmatter.related && <RelatedWorks related={frontmatter.related} />}
      </article>
      <BackNavLink location="writing" />
    </Layout>
  )
}

export default ArticleTemplate
