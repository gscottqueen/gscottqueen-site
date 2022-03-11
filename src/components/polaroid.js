import React, { useMemo } from "react";
import { graphql, useStaticQuery } from "gatsby";
import './polaroid.css'

const Polaroid = ({ src, alt, ...imgAttr }) => {
  // sourceInstanceName defined in gatsby-config
  const data = useStaticQuery(graphql`
    query {
      images: allFile(filter: { sourceInstanceName: { eq: "images" } }) {
        edges {
          node {
            relativePath
            childImageSharp {

               resize(width: 800, height: 800, cropFocus: ENTROPY) {
                src
              }
            }
          }
        }
      }
    }
  `);

  const findImage = useMemo(
    () => data.images.edges.find(({ node }) => src === node.relativePath),
    [data, src]
  );

  if (!findImage) return null;

  let { node: { childImageSharp } = {} } = findImage;

  return (
    <div className="thumbnail-wrapper">
      <div className="thumbnail-overlay"/>
      <img src={childImageSharp.resize.src} alt={alt} {...imgAttr} />
    </div>
  );
};

export default Polaroid;
