import React, { useMemo } from "react";
import { graphql, useStaticQuery } from "gatsby";

const Thumbnail = ({ src, alt, ...imgAttr }) => {
  // sourceInstanceName defined in gatsby-config
  const data = useStaticQuery(graphql`
    query {
      images: allFile(filter: { sourceInstanceName: { eq: "images" } }) {
        edges {
          node {
            relativePath
            childImageSharp {
              resize(width: 300, height: 200, cropFocus: ENTROPY) {
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

  return <img src={childImageSharp.resize.src} alt={alt} {...imgAttr} />;
};

export default Thumbnail;
