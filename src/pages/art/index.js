import React from "react";

import { graphql, useStaticQuery } from "gatsby";
import Layout from "../../components/layout";
import Seo from "../../components/seo";
// import Thumbnail from "../../components/thumbnail";
import ListingTemplate from "../../templates/listing-template";
// import { Link } from "gatsby";
import Deck from "../../components/deck"

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
    <div className="test">
    {/* <Deck /> */}
    {/* <ul className="test"> */}
        {/* <h2>{groupValue}</h2> */}
        {/* <div className="works-listing">
          {data.allMdx.nodes.map((item,i) => {
            const { group, slug, title, image, alt } = item.frontmatter
            return (
              group === groupValue &&
              <li key={`${group}-item-${i}`}>
                <Link to={`/art/${slug}/`}>
                  <Thumbnail src={image} alt={alt}/>
                  <div>{title}</div>
                </Link>
              </li>
            )}
          )}
        </div> */}
    {/* </ul> */}
    </div>
  )
}

const IndexArt = () => (
  <Layout>
    <Seo title="Art" />
    {/* <ListingTemplate title="Art" className="test"> */}
    <div className="test">
      <Deck />
    </div>
      {/* <ul>
        <ArtListing groupValue="Sculpture" />
        <ArtListing groupValue="Painting" />
      </ul> */}
    {/* </ListingTemplate> */}
  </Layout>
);

export default IndexArt;
