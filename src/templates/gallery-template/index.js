import React, { useMemo } from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import { Layout, Seo, Image, BackNavLink } from '../../components'
import './index.css'

const GalleryTemplate = ({ path }) => {
  const data = useStaticQuery(graphql`
    query {
      allMdx {
        edges {
          node {
            slug
            frontmatter {
              title
              year
              image
              alt
              medium
              slug
            }
          }
        }
      }
      allFile(filter: { sourceInstanceName: { eq: "images" } }) {
        nodes {
          publicURL
          base
        }
      }
    }
  `)

  const findFrontMatter = useMemo(
    () =>
      data.allMdx.edges.find(
        ({ node }) => node.slug === path.replace(/^\/|\/$/g, '')
      ),
    [data, path]
  )

  if (!findFrontMatter) return null
  let { node: { frontmatter } = {} } = findFrontMatter
  const { title, year, image, alt, medium, slug } = frontmatter

  const findDefaultImage =
    image && data.allFile.nodes.find(({ base }) => base === image)

  console.log(findDefaultImage)

  if (!findFrontMatter) return null
  const { publicURL } = findDefaultImage

  return (
    <Layout nonav>
      <Seo
        title={title}
        description={`${alt}; ${medium}`}
        defaultImage={publicURL}
        slug={slug}
      />
      <BackNavLink location="art/archives" close type="gallery" />
      <section id={title} className="gallery-template">
        <Image src={image} alt={alt}></Image>
        <div className="citation">
          <cite>
            &quot;{title}&quot;, {year} - {medium}
          </cite>
        </div>
      </section>
    </Layout>
  )
}
export default GalleryTemplate
