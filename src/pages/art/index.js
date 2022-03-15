import React from "react";

import { graphql, useStaticQuery } from "gatsby";
import Layout from "../../components/layout";
import Seo from "../../components/seo";
import ListingTemplate from "../../templates/listing-template";
import { Link } from "gatsby";

const ArchiveListing = ({groupValue}) => {
  const data = useStaticQuery(graphql`
    query {
      allMdx(filter: {frontmatter: {archived: {eq: false}}}) {
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
          {data.allMdx.nodes.map((item,i) => {
            const { group, slug, year, title } = item.frontmatter
            return (
              group === groupValue &&
              <li key={`${group}-item-${i}`}>
                <Link to={`/art/${year}/${slug}/`}>
                  <div>{title}</div>
                </Link>
              </li>
            )}
          )}
        </div>
    </ul>
  )
}

// TODO: set up new work structure
// const groups = ["Concepts"]

const IndexArchives = () => (
  <Layout>
    <Seo title="Art" />
    <ListingTemplate title="Art">
      {/* <ul>{ groups.map(group => <ArchiveListing groupValue={group} />) }</ul> */}
      New concepts are in the works, in the meantime visit the <Link to={`archives`}>Archives</Link> to see previous years work.
    </ListingTemplate>
  </Layout>
);

export default IndexArchives;
