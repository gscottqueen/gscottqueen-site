import React, { useEffect, useState } from 'react'
import {
  ArtPageBlock,
  BackNavLink,
  Layout,
  Seo,
  SocialIcons,
  YoutubePlayer
} from '../../../components'

const NewMediaGenerativeWorks = ({ pageContext }) => {
  const [seoData, setSeoData] = useState({})
  const { data, slug } = pageContext

  useEffect(() => {
    setSeoData(data.data)
  }, [seoData])

  const { description, ogImage, theme, title } = seoData

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
