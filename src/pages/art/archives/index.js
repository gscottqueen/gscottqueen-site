import React from 'react'
import { graphql, useStaticQuery, Link } from 'gatsby'

import { Layout, Seo } from '../../../components'
import { ListingTemplate } from '../../../templates'

const ArchiveListing = ({ groupValue }) => {
  const data = useStaticQuery(graphql`
    query {
      allMdx(filter: { frontmatter: { archived: { eq: true } } }) {
        nodes {
          frontmatter {
            title
            year
            medium
            image
            alt
            group
            slug
          }
        }
      }
    }
  `)

  return (
    <ul>
      <h2>{groupValue}</h2>
      <div className="works-listing">
        {data.allMdx.nodes.map((item, i) => {
          const { group, slug, year, title } = item.frontmatter
          return (
            group === groupValue && (
              <li key={`${group}-item-${i}`}>
                <Link to={`/art/${year}/${slug}/`}>
                  <div>{title}</div>
                </Link>
              </li>
            )
          )
        })}
      </div>
    </ul>
  )
}

// TODO: build all archive pages with gatsby node
const IndexArchive = () => (
  <Layout>
    <Seo title="Art" slug="archives" />
    <ListingTemplate title="Art">
      <ArchiveListing groupValue="Sculpture" />
      <ArchiveListing groupValue="Painting" />
    </ListingTemplate>
  </Layout>
)

export default IndexArchive
