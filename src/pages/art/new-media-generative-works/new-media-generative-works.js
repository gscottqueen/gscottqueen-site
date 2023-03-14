import React from 'react'
import {
  ArtPageBlock,
  BackNavLink,
  Layout,
  Seo,
  SocialIcons,
  YoutubePlayer
} from '../../../components'

const NewMediaGenerativeWorks = ({ pageContext }) => {
  const { data, slug } = pageContext
  const { description, ogImage, theme, title } = data.data

  return (
    <Layout nonav>
      <Seo
        title={title}
        description={description}
        slug={slug}
        defaultImage={ogImage}
      />
      <BackNavLink
        location="art"
        inverse
        style={theme === 'dark' ? { backgroundColor: 'black' } : {}}
      />
      <ArtPageBlock type="title" title={title} inverse />
      <ArtPageBlock type="video">
        <YoutubePlayer
          videoRef="https://www.youtube.com/embed/videoseries?list=PLzS1mIBFtkc9JAjhlVclUDEP5Q-trak79"
          title="Generataive Art Gallery"
        />
      </ArtPageBlock>
      <SocialIcons />
    </Layout>
  )
}

export default NewMediaGenerativeWorks
