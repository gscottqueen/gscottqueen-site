import React from 'react'
import { Link } from 'gatsby'
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
        <Link to={'/art/human-data-in-virtual-environments'}>
          <h2 className="embossing-tape">
            <span>
              <span>INTEGRATING HUMAN DATA IN VIRTUAL ENVIRONMENTS</span>
            </span>
          </h2>
        </Link>
      </div>
      <RegenButton anchor />
    </Layout>
  )
}

export default IndexPage
