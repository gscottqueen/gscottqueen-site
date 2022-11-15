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
            <div
              className={`latest-block ${item.theme}`}
              key={`${item.title}-${i}`}
            >
              <div className={`latest-block-description ${item.theme}`}>
                {item.qrCode && (
                  <a href={item.qrCodeLink}>
                    <Image
                      className="qr-code"
                      src={`${item.qrCode}`}
                      alt=""
                    ></Image>
                  </a>
                )}
                <h2>&quot;{item.title}&quot;</h2>
                <p dangerouslySetInnerHTML={{ __html: item.description }} />
                {item.link && (
                  <div className={`latest-block-link ${item.theme}`}>
                    <Link to={item.link}>Visit work page</Link>
                  </div>
                )}
              </div>
              <Image src={`${item.ogImage}`} alt={`${item.ogAlt}`}></Image>
            </div>
          )
        })}
      </div>
    )
  }

  return (
    <Layout>
      {data && (
        <Seo
          title="Art"
          slug="art"
          defaultImage={data[0].ogImage}
          description={`Queen's latest work "${data[0].title}" explores ${data[0].ogDescription}`}
        />
      )}
      <ListingTemplate title="Art">
        {data && <IndexListingComponent data={data} />}
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
