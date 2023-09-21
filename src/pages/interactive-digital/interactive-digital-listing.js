import React from 'react'
import { Link } from 'gatsby'

import {
  Layout,
  Seo,
  Image,
  ArtPageBlock,
  YoutubePlayer
} from '../../components'
import { ListingTemplate } from '../../templates'
import GIF from '../../gifs/generativeFossil.gif'

import './index.css'

const IndexArchives = ({ pageContext }) => {
  const { data } = pageContext

  const IndexListingComponent = (data) => {
    return (
      <div>
        <h1 className="listing-heading">Interactive Digital (XR/3D)</h1>
        <ArtPageBlock type="video">
          <YoutubePlayer
            videoRef="https://www.youtube.com/embed/RTOczfzl2NU?si=4YW0o1hvjbV036f2"
            title="Interactive Digital Reel"
          />
        </ArtPageBlock>
        {data.data.map((item, i) => {
          console.log(item)
          return (
            <div
              className={`latest-block ${item.theme}`}
              key={`${item.title}-${i}`}
            >
              <div className={`latest-block-description ${item.theme}`}>
                <h2>&quot;{item.title}&quot;</h2>
                <p dangerouslySetInnerHTML={{ __html: item.description }} />
                <br></br>
                <table className="tg">
                  <thead>
                    <tr>
                      <th className="tg-ucee">Integration</th>
                      <th className="tg-ucee">Solution</th>
                    </tr>
                  </thead>
                  <tbody>
                    {item.details &&
                      item?.details.map((td, i) => {
                        return (
                          <tr key={`${td}-${i}`}>
                            <td className="tg-2ep1">{td.col1}</td>
                            <td className="tg-j5oq">{td.col2}</td>
                          </tr>
                        )
                      })}
                  </tbody>
                </table>
                {item.link && (
                  <div className={`latest-block-link ${item.theme}`}>
                    <Link to={item.link}>Visit project page</Link>
                  </div>
                )}
              </div>
              {item.link ? (
                <Link to={item.link}>
                  {item.title === 'Generative Fossils' ? (
                    <img src={GIF} alt="" />
                  ) : (
                    <Image
                      src={`${item.ogImage}`}
                      alt={`${item.ogAlt}`}
                    ></Image>
                  )}
                </Link>
              ) : (
                <Image src={`${item.ogImage}`} alt={`${item.ogAlt}`}></Image>
              )}
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
