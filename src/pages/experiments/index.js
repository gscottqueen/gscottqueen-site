import React from 'react'
import { Link } from 'gatsby'

import { Layout, Seo } from '../../components'
import { ListingTemplate } from '../../templates'

import './index.css'

const IndexPage = () => (
  <Layout>
    <Seo title="Experiments" slug="experiments" />
    <ListingTemplate title="Experiments">
      <ul>
        <h2>Cybernetic Programing</h2>
        <li>
          <Link to="/experiments/you">
            Socialized rendering of the observer, using trained models from the
            media pipe machine learning API
          </Link>
        </li>
        <li>
          <Link to="/experiments/self">
            Presenting the observer to themself occupying the same space at
            different times, using the web media API
          </Link>
        </li>
      </ul>
      <ul>
        <h2>Generative Programing</h2>
        <li>
          <Link to="/experiments/eclipse">
            Simplex 4D noise, using TD graphic network
          </Link>
        </li>
      </ul>
    </ListingTemplate>
  </Layout>
)

export default IndexPage
