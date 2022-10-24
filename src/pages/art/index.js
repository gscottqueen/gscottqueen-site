import React from 'react'
import { Link } from 'gatsby'

import { Layout, Seo, Image } from '../../components'
import { ListingTemplate } from '../../templates'

import './index.css'

const IndexArchives = ({ pageContext }) => {
  const { data } = pageContext

  const IndexListingComponent = (data) => {
    return (
      <div>
        <h1 className="listing-heading">New Works</h1>

        {data.data.map((item, i) => {
          return (
            <div className="latest-block" key={`${item.title}-${i}`}>
              <div className="latest-block-description">
                <h2>&quot;{item.title}&quot;</h2>
                <p dangerouslySetInnerHTML={{ __html: item.description }} />
              </div>
              <Image
                src={`${item.ogImage}`}
                alt="computer tower machine sculpture ultra hd lighting"
              ></Image>
            </div>
          )
        })}
      </div>
    )
  }

  const { ogImage, ogDescription, title } = data && data[0]

  return (
    <Layout>
      <Seo
        title="Art"
        slug="art"
        defaultImage={ogImage}
        description={`Queen's latest work "${title}" explores ${ogDescription}`}
      />
      <ListingTemplate title="Art">
        <IndexListingComponent data={data} />
        <div className="art-listing-links">
          Follow progress on <Link to={'/experiments'}>experiments</Link>, or
          visit the <Link to={'archives'}>archives</Link> to see previous years
          work.
        </div>
      </ListingTemplate>
    </Layout>
  )
}

export default IndexArchives
