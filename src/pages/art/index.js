import React from "react";

import { graphql, useStaticQuery } from "gatsby";
import Layout from "../../components/layout";
import SEO from "../../components/seo";
import Thumbnail from "../../components/thumbnail";
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
        <div className="works-listing">
          {data.allMdx.nodes.map((item,i) => {
            const { group, slug, title, image } = item.frontmatter
            return (
              group === groupValue &&
              <li key={`${group}-item-${i}`}>
                <Link to={`/art/${slug}/`}>
                  <Thumbnail src={image} />
                  <div>{title}</div>
                </Link>
              </li>
            )}
          )}
        </div>
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
