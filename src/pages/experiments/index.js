import React from 'react'
import { Link } from 'gatsby'

import { Layout, Seo } from '../../components'
import { ListingTemplate } from '../../templates'

const IndexPage = () => (
  <Layout>
    <Seo title="Writing" slug="writing" />
    <ListingTemplate title="Experiments">
      <ul>
        <h2>Generative Programing</h2>
        <li>
          <Link to="/experiments/you">
            Manipulating the image of self as presented through Machine Learning
            APIs
          </Link>
        </li>
      </ul>
    </ListingTemplate>
  </Layout>
)

export default IndexPage
