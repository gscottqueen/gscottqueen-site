import React from "react"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import './index.css'

const IndexPage = () => (
  <Layout>
    <SEO title="Writing" />
      <ul>
        <h2>Philosophy</h2>
        <li>
          <a href="/writing/logos-emc2.html">
            Logos = mc<sup>2</sup>
          </a>
        </li>
        <li>
          <a href="/writing/the-possibility-of-agreement-in-aesthetic-judgments.html">
            The Possibility of Agreement in Aesthetic Judgments
          </a>
        </li>
      </ul>
  </Layout>
);

export default IndexPage
