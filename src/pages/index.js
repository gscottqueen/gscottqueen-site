import React from 'react'

import Layout from '../components/layout'
import Seo from '../components/seo'
import { useStaticQuery, graphql } from 'gatsby'

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
      <Seo />
    </Layout>
  )
}

export default IndexPage
