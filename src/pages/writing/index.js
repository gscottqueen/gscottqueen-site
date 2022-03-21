import React from 'react'
import { Link } from 'gatsby'

import { Layout, Seo } from '../../components'
import { ListingTemplate } from '../../templates'


const IndexPage = () => (
  <Layout>
    <Seo title="Writing" slug="writing" />
    <ListingTemplate title="Writing">
      <ul>
        <h2>Philosophy</h2>
        <li>
          <Link to="/writing/logos-equals-mc2">
            Logos = mc<sup>2</sup>
          </Link>
        </li>
        <li>
          <Link to="/writing/the-possibility-of-agreement-in-aesthetic-judgments">
            The Possibility of Agreement in Aesthetic Judgments
          </Link>
        </li>
      </ul>
    </ListingTemplate>
  </Layout>
)

export default IndexPage
