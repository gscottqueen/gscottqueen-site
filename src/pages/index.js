import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Layout, Seo, RegenButton } from '../components'

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "gscottqueen.png" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
    }
  `)

  return (
    <Layout bgImage={data?.placeholderImage}>
      <Seo slug={'/'} />
      <RegenButton anchor />
    </Layout>
  )
}

export default IndexPage
