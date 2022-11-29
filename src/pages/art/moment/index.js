import React from 'react'
import {
  ArtPageBlock,
  BackNavLink,
  Layout,
  Seo,
  MailChimpDrop,
  SocialIcons
} from '../../../components'

const content = {
  title: 'Moment',
  description:
    'A new media public sculpture that builds on the influence of a historical internet diagram, coupling AI with iterative design inputs that seek to provide a moment of clarity and reflection in an urban setting.'
}

const Moment = () => {
  return (
    <Layout nonav>
      <Seo
        title={content.title}
        description={content.description}
        slug="art/moment"
        // defaultImage={data.ogImage} prebuild for SEO
      />
      <BackNavLink
        location="art"
        inverse
        style={{ backgroundColor: 'black' }}
      />
      <ArtPageBlock type="title" title={content.title} inverse />
      <ArtPageBlock type="video">
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/g5BsdVcQuwQ"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </ArtPageBlock>
      <ArtPageBlock type="intro">
        <p>{content.description}</p>
      </ArtPageBlock>
      <MailChimpDrop cta="Be the first to know when the phygital NFT drops!" />
      <ArtPageBlock type="standard">
        <p>
          Moment has been Awarded for installation in 2023&#39;s Rail Trail
          Lights presented by US Bank in Charlotte NC.
        </p>
      </ArtPageBlock>
      <SocialIcons />
    </Layout>
  )
}

export default Moment
