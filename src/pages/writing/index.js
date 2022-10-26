import React from 'react'
import { graphql, useStaticQuery, Link } from 'gatsby'

import { Layout, Seo } from '../../components'
import { ListingTemplate } from '../../templates'

import './index.css'

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
    <ul className="listing-group">
      <h2>{groupValue}</h2>
      <div>
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
      <div className="writings-listing-block">
        <h1 className="writings-listing-title">Writings</h1>
        <div className="writings-listing-description">
          <p>
            These writings are an attempt to clarify my understanding and
            arguments of philosophical concepts in aesthtetics and theories of
            new media. They attempt to consider areas of improvement or other
            perspectives that may add to the conversation. These are essential
            as resources that drive much of my studio work. I hope that you will
            find within them ideas that bring about your own considerations.
          </p>
          <p>
            All writings are open for peer review and contributions. Visit the{' '}
            <a
              href="https://github.com/gscottqueen/gscottqueen-site/tree/main/src/content/writing"
              target="_blank"
              rel="noreferrer"
            >
              remote origin
            </a>{' '}
            to propose changes in a version controlled platform.
          </p>
        </div>
      </div>
      <ArchiveListing groupValue="Art and Philosophy" />
    </ListingTemplate>
  </Layout>
)

export default IndexWriting
