import React from 'react'
import { graphql, useStaticQuery, Link } from 'gatsby'

import { Layout, Seo } from '../../components'
import { ListingTemplate } from '../../templates'

const ArchiveListing = ({ groupValue }) => {
  const data = useStaticQuery(graphql`
    query {
      allMdx(
        filter: { fileAbsolutePath: { regex: "/content/writing/" } }
        sort: { fields: frontmatter___year, order: DESC }
      ) {
        nodes {
          slug
          frontmatter {
            description
            title
            group
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
          const { group, title } = item.frontmatter
          return (
            group === groupValue && (
              <li key={`${group}-item-${i}`}>
                <Link to={`/${item.slug}`}>
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

const IndexWriting = () => (
  <Layout>
    <Seo title="Writing" slug="writing" />
    <ListingTemplate title="Writing">
      <ArchiveListing groupValue="Art and Philosophy" />
    </ListingTemplate>
  </Layout>
)

export default IndexWriting
