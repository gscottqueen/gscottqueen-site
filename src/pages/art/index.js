import React from "react";

import { graphql, useStaticQuery } from "gatsby";
import Layout from "../../components/layout";
import SEO from "../../components/seo";
// import Image from "../../components/image";
import ListingTemplate from "../../templates/listing-template";
import { Link } from "gatsby";

const ArtListing = ({groupValue}) => {
  const data = useStaticQuery(graphql`
    query {
      allMdx {
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
        {data.allMdx.nodes.map((item,i) => {
          const { group, slug, title, year } = item.frontmatter
          console.log(group, groupValue)
          return (
            group === groupValue &&
            <li key={`${group}-item-${i}`}>
              <Link to={`/art/${slug}/`}>
                {title}, {year}
              </Link>
            </li>
          )}
        )}
    </ul>
  )
}

const IndexArt = () => (
  <Layout>
    <SEO title="Art" />
    <ListingTemplate title="Art">
      <ul>
        <ArtListing groupValue="Sculpture" />
        <ArtListing groupValue="Painting" />
      </ul>
    </ListingTemplate>
  </Layout>
);

export default IndexArt;
