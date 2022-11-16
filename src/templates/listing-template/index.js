import React from 'react'

import { Layout, SocialIcons } from '../../components'
import './index.css'

const ListingTemplate = ({ title, children }) => (
  <Layout nonav>
    <section id={`${title}`} className="listing-template">
      <ul className="listing-wrapper">{children}</ul>
    </section>
    <SocialIcons />
  </Layout>
)

export default ListingTemplate
