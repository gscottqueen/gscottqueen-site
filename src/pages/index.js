import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Layout, Seo, RegenButton } from '../components'
import './index.css'

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
      <div className="home-title">
        <h2 className="embossing-tape">
          <span>
            <span>INTEGRATING HUMAN DATA IN VIRTUAL ENVIRONMENTS</span>
          </span>
        </h2>
        <div className="embossing-tape">
          <span>
            <span>New Works Summer 2023</span>
          </span>
        </div>
      </div>
      <RegenButton anchor />
    </Layout>
  )
}

export default IndexPage
