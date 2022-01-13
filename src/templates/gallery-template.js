import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import './gallery-template.css'

const GalleryTemplate = ({ title, children }) => (
  <Layout nonav>
    <SEO title={`G. Scott Queen | ${title}`} />
    <section id={`${title}`}>
      <img src="/images/"></img>
      <div><cite>Title, Year</cite></div>
    </section>
  </Layout>
);

export default GalleryTemplate


