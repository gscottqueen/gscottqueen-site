import React from "react"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import { Link } from "gatsby"
import './index.css'

const IndexPage = () => (
  <Layout>
    <SEO title="G. Scott Queen | Writing" />
      <ul>
        <h2>Philosophy</h2>
        <li>
          <Link to="/writing/logos-emc2">
            Logos = mc<sup>2</sup>
          </Link>
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
