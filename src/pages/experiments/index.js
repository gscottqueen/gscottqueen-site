import React from 'react'
import { Link } from 'gatsby'

import { Layout, Seo } from '../../components'
import { ListingTemplate } from '../../templates'

import data from './data.json'

import './index.css'

const ListGroup = ({ data }) => (
  <ul>
    <h2>{data.title}</h2>
    {data.items.map((item, i) => (
      <li key={i}>
        <Link to={`/experiments/${item.link}`}>{item.description}</Link>
      </li>
    ))}
  </ul>
)

// TODO: create experiments with gatsby node
const IndexPage = () => (
  <Layout>
    <Seo title="Experiments" slug="experiments" />
    <ListingTemplate title="Experiments">
      <div className="experiments-listing-block">
        <h1 className="experiments-listing-title">Experiments</h1>
        <p className="experiments-listing-description">
          This is a living document of experiments and learnings that focus on
          exploring a new piece of technology or software as a matter of
          expressive puposes. You will find here access to open source code,
          process videos, and writings. Much of this is work in progress, but if
          there is something here that you can use or remix yourself, please do.
        </p>
      </div>
      <div className="listing-group">
        {data.map((group) => (
          <ListGroup data={group} key={group.title} />
        ))}
      </div>
    </ListingTemplate>
  </Layout>
)

export default IndexPage
