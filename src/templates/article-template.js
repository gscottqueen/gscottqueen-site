import React, { useMemo } from "react";

import { graphql, useStaticQuery } from "gatsby";
import Layout from "../components/layout";
import Seo from "../components/seo";
import "./article-template.css";

const ArticleTemplate = ({ path, children }) => {
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
              description
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
  const { title, description } = frontmatter;


  return (
  <Layout nonav>
    <Seo title={title} description={description}/>
    <article id={`${title}`}>{children}</article>
  </Layout>
)};

export default ArticleTemplate;
