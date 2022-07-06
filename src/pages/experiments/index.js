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
      {data.map((group) => (
        <ListGroup data={group} key={group.title} />
      ))}
    </ListingTemplate>
  </Layout>
)

export default IndexPage
