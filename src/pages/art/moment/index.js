import React from 'react'
import { BackNavLink, Layout, Seo, MailChimpDrop } from '../../../components'

const Moment = () => {
  return (
    <Layout nonav>
      <Seo
        title="Moment"
        description="Moment is a new media public sculpture that builds on the influence of a historical internet diagram. Coupling AI with iterative design inputs that seek to provide a moment of clarity and reflection in an urban setting."
        slug="art/moment"
        // defaultImage={data.ogImage} prebuild for SEO
      />
      <BackNavLink location="art" />
      <div
        className="moment"
        style={{
          height: '100%'
        }}
      >
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/g5BsdVcQuwQ"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <MailChimpDrop cta="Be the first to know when the phygital NFT drops!" />
    </Layout>
  )
}

export default Moment
