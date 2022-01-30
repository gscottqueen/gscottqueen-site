import React, { useMemo } from "react";

import { graphql, useStaticQuery } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Image from "../components/image.js";
import "./gallery-template.css";

const GalleryTemplate = ({ path, children }) => {
  const data = useStaticQuery(graphql`
    query {
      allMdx {
        edges {
          node {
            slug
            frontmatter {
              title
              year
              image
              alt
              medium
            }
          }
        }
      }
      allFile(filter: {sourceInstanceName: {eq: "images"}}) {
        nodes {
          publicURL
          base
        }
      }
    }
  `);

  const findFrontMatter = useMemo(
    () =>
      data.allMdx.edges.find(
        ({ node }) => node.slug === path.replace(/^\/|\/$/g, "")
      ),
    [data, path]
  );

  if (!findFrontMatter) return null;
  let { node: { frontmatter } = {} } = findFrontMatter;
  const { title, year, image, alt, medium } = frontmatter;

  const findDefaultImage = image
    && data.allFile.nodes.find(
        ({ base }) => base === image
      )

  if (!findFrontMatter) return null;
  const {publicURL} = findDefaultImage

  return (
    <Layout nonav>
      <SEO title={title} description={`${alt}; ${medium}`} defaultImage={publicURL}/>
      <section id={title} className="gallery-template">
        <Image src={image} alt={alt}></Image>
        <div className="citation">
          <cite>
            "{title}", {year}
          </cite>{" "}
          - {medium}
        </div>
      </section>
    </Layout>
  );
};
export default GalleryTemplate;
