import React from 'react'
import { Link } from 'gatsby'

import { Layout, Seo, Image } from '../../components'
import { ListingTemplate } from '../../templates'

import './index.css'

const IndexArchives = () => (
  <Layout>
    <Seo title="Art" slug="art" />
    <ListingTemplate title="Art">
      <div>
        <h1 className="listing-heading">New Works</h1>
        <div className="latest-block">
          <div className="latest-block-description">
            <h2>&quot;Moment&quot;</h2>
            <p>New Media Public Sculpture [concept]</p>
            <p>
              Commision by Charlotte City Center Partners for display @ I Heart
              Rail Trail: Lights, comming Feb. 2023.
            </p>
            <p>
              Building on the influence of a historical internet diagram,
              coupling AI with iterative design inputs that seek to provide a
              moment of clarity and reflection in an urban setting.
            </p>
          </div>
          <Image src="gscottqueen_meditation_computer_tower_machine_sculpture_ultra_h_52bcd96a-11dd-4c34-adfb-8294f1ec605b.png"></Image>
        </div>
      </div>
      <div className="art-listing-links">
        New concepts are in the works, in the meantime follow progress on{' '}
        <Link to={'/experiments'}>experiments</Link>, or visit the{' '}
        <Link to={'archives'}>archives</Link> to see previous years work.
      </div>
    </ListingTemplate>
  </Layout>
)

export default IndexArchives
