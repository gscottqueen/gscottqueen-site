import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import "./listing-template.css";

const ListingTemplate = ({ title, children }) => (
  <Layout nonav>
    <SEO title={`G. Scott Queen | ${title}`} />
    <section id={`${title}`}>{children}</section>
  </Layout>
);

export default ListingTemplate;
