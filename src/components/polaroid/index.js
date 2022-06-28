import React, { useMemo } from 'react'
import { graphql, useStaticQuery, Link } from 'gatsby'
import { w } from '../../const'
import './index.css'

const Polaroid = ({ src, alt, slug, title, year, ...imgAttr }) => {
  const data = useStaticQuery(graphql`
    query {
      images: allFile(filter: { sourceInstanceName: { eq: "images" } }) {
        edges {
          node {
            relativePath
            childImageSharp {
              resize(width: 800, height: 800, cropFocus: ENTROPY) {
                src
              }
            }
          }
        }
      }
    }
  `)

  const findImage = useMemo(
    () => data.images.edges.find(({ node }) => src === node.relativePath),
    [data, src]
  )

  if (!findImage) return null

  let { node: { childImageSharp } = {} } = findImage

  return (
    <div className="polaroid-wrapper">
      <Link
        to={`/art/${year}/${slug}/`}
        onClick={() => (w.refLocation = w.location.pathname)}
      >
        <div className="polaroid-overlay" />
        <img src={childImageSharp.resize.src} alt={alt} {...imgAttr} />
        <div className="polaroid-title">{title}</div>
      </Link>
    </div>
  )
}

export default Polaroid
