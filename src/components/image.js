import React, { useMemo } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import PropTypes from 'prop-types'

const Image = ({ src, thumbnail, ...imgAttr }) => {
  // sourceInstanceName defined in gatsby-config
  const data = useStaticQuery(graphql`
    query {
      images: allFile(filter: { sourceInstanceName: { eq: "images" } }) {
        edges {
          node {
            relativePath
            childImageSharp {
              resize(width: 180, height: 180, cropFocus: ENTROPY) {
                src
              }
              gatsbyImageData(placeholder: NONE)
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

  // const img = !thumbnail ? childImageSharp.gatsbyImageData : childImageSharp.resize.src

  return <GatsbyImage image={childImageSharp.gatsbyImageData} {...imgAttr} />
}

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
}

export default Image
