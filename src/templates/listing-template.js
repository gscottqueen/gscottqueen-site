import React from "react";

import Layout from "../components/layout";
import "./listing-template.css";

const ListingTemplate = ({ title, children }) => (
  <Layout nonav>
    <section id={`${title}`} className="listing-template">{children}</section>
  </Layout>
);

export default ListingTemplate;
