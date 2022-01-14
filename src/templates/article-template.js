import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import "./article-template.css";

const ArticleTemplate = ({ title, children }) => (
  <Layout nonav>
    <SEO title={`G. Scott Queen | ${title}`} />
    <article id={`${title}`}>{children}</article>
  </Layout>
);

export default ArticleTemplate;
