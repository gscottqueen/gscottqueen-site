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

  return (
    <Layout nonav>
      <SEO title={`${title}`} />
      <section id={title}>
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
