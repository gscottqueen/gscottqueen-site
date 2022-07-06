import React from 'react'
import { Link } from 'gatsby'

import { Layout, Seo } from '../../components'
import { ListingTemplate } from '../../templates'

const IndexArchives = () => (
  <Layout>
    <Seo title="Art" slug="art" />
    <ListingTemplate title="Art">
      {/* <ul>{ groups.map(group => <ArchiveListing groupValue={group} />) }</ul> */}
      New concepts are in the works, in the meantime follow progress on{' '}
      <Link to={'/experiments'}>experiments</Link>, or visit the{' '}
      <Link to={'archives'}>archives</Link> to see previous years work.
    </ListingTemplate>
  </Layout>
)

export default IndexArchives
