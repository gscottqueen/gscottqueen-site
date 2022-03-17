import React from "react";

import { graphql, useStaticQuery } from "gatsby";
import Layout from "../../../components/layout";
import Seo from "../../../components/seo";
import ListingTemplate from "../../../templates/listing-template";
import { Link } from "gatsby";

const ArchiveListing = ({groupValue}) => {
  const data = useStaticQuery(graphql`
    query {
      allMdx(filter: {frontmatter: {archived: {eq: true}}}) {
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

const IndexArchive = () => (
  <Layout>
    <Seo title="Art" slug="archives"/>
    <ListingTemplate title="Art">
      <ArchiveListing groupValue="Sculpture" />
      <ArchiveListing groupValue="Painting" />
    </ListingTemplate>
  </Layout>
);

export default IndexArchive;
