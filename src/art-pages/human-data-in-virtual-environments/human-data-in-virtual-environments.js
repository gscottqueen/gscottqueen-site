import React, { useEffect, useState } from 'react'
import {
  ArtPageBlock,
  BackNavLink,
  Layout,
  MailChimpDrop,
  Seo,
  SocialIcons,
  YoutubePlayer
} from '../../components'
import { w } from '../../const'

const HumanData = ({ pageContext }) => {
  const [isMobile, getDimension] = useState(false)
  const { data, slug } = pageContext
  const { description, ogImage, theme, title } = data

  // TODO: convert this to hook
  const setMobile = () => {
    getDimension(w.innerWidth < 900)
  }

  useEffect(() => {
    w.addEventListener('resize', setMobile)

    return () => {
      w.removeEventListener('resize', setMobile)
    }
  }, [isMobile])

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
        inverse={theme === 'dark'}
        style={theme === 'dark' ? { backgroundColor: 'black' } : {}}
      />
      <ArtPageBlock type="title" title={title} inverse={theme === 'dark'} />
      <ArtPageBlock type="video">
        <YoutubePlayer
          videoRef="https://www.youtube.com/embed/1dIw4W9iL_Q"
          title="Integrating Human Data with Virtual Systems"
        />
      </ArtPageBlock>
      <MailChimpDrop cta="Subscribe" />
      <SocialIcons />
    </Layout>
  )
}

export default HumanData
