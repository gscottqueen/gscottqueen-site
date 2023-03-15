import React from 'react'
import {
  ArtPageBlock,
  BackNavLink,
  Layout,
  MailChimpDrop,
  Seo,
  SocialIcons,
  YoutubePlayer
} from '../../components'
import pageData from './data.json'

const Moment = ({ pageContext }) => {
  const { data, slug } = pageContext

  const { description, ogImage, theme, title } = data

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
          videoRef="https://www.youtube.com/embed/videoseries?list=PLzS1mIBFtkc9J9f818w5ctf8iprQZrs6b"
          title="Moment Video Playlist"
        />
      </ArtPageBlock>
      <ArtPageBlock
        type="hero"
        content={ogImage}
        description="2023, New media public sculpture custom computer, animated and cast lighting, steel base, acrylic casing, 3D printed PLA, 48&#34; x 48&#34; x 108&#34;"
      >
        <p>
          Combining the final fabricated sculpture, with staged lighting, smoke
          machines, and the site specific details of our location, we aimed to
          recreate the initial concept image prompted by MidJourney. We then
          took this image into the DALL-E-2 AI server to extend generative
          renderings that place “Moment” in an artificial scene built from
          visual models of our new context.
        </p>
      </ArtPageBlock>
      <ArtPageBlock type="intro">
        <p>
          What is a moment? The word itself stands to be a nebulous description
          of everything and nothing at all, an indefinite interval of time.
          Moments can be fleeting, passing us by without notice. A moment can be
          recorded in history and celebrated for thousands of years. However,
          with all of its paradoxical descriptors, a moment will always be a
          precursor to what comes next.
        </p>
        <p>
          This work “Moment”, is a new media public sculpture that primarily
          leverages the use of light to both explore the fluid meaning of a
          moment and to define it through utility. The dimensional nature of
          sculptural work is leveraged to present observers with a spectrum of
          experiences. Light is displaced and refracted as it passes through the
          sculptures&#39; prismed materials. From corner to corner it phases
          between its natural state and an infinite reflection of itself,
          redefined each time as a different color form. In opposition, light is
          taken under full control by the artist through computation and
          displayed in a specific sequence to provide the observer with a
          visually-guided-micro-meditation.
        </p>
      </ArtPageBlock>
      <ArtPageBlock type="gallery" content={pageData.images} />
      <MailChimpDrop cta="Subscribe to get the drops!" />
      <ArtPageBlock type="standard">
        <p>
          Charlotte City Center Partners commissioned “Moment” as part of the
          2023 public exhibition, Rail Trail Lights presented by US Bank.
        </p>
      </ArtPageBlock>
      <SocialIcons />
    </Layout>
  )
}

export default Moment
