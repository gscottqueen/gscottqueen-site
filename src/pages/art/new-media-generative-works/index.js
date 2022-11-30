import React from 'react'
import {
  ArtPageBlock,
  BackNavLink,
  Layout,
  Seo,
  SocialIcons
} from '../../../components'

const NewMediaGenerativeWorks = () => {
  return (
    <Layout nonav>
      <Seo
        title="New Media Generative Works"
        description="A collection of new media generative works that explore storytelling through the computational display of visual data and sound."
        slug="new-media-generative-works"
        // defaultImage={data.ogImage}
      />
      <BackNavLink location="art" />
      <ArtPageBlock type="video">
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/videoseries?list=PLzS1mIBFtkc9JAjhlVclUDEP5Q-trak79"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </ArtPageBlock>
      <SocialIcons />
    </Layout>
  )
}

export default NewMediaGenerativeWorks
