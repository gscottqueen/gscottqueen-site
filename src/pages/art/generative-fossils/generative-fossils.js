import React from 'react'
import {
  ArtPageBlock,
  BackNavLink,
  Layout,
  Image,
  MailChimpDrop,
  Seo,
  SocialIcons,
  YoutubePlayer
} from '../../../components'

const Moment = ({ pageContext }) => {
  const { data, slug } = pageContext
  const { title, heroDescription, ogImage, hero, description, images } = data
  return (
    <Layout nonav>
      <Seo
        title={title}
        description={heroDescription}
        slug={slug}
        defaultImage={ogImage}
      />
      <BackNavLink
        location="art"
        inverse
        style={{ backgroundColor: 'black' }}
      />
      <ArtPageBlock type="title" title={title} inverse />
      <ArtPageBlock type="video">
        <YoutubePlayer
          videoRef="https://www.youtube.com/embed/videoseries?list=PLzS1mIBFtkc9J9f818w5ctf8iprQZrs6b"
          title="Moment Video Playlist"
        />
      </ArtPageBlock>
      <ArtPageBlock type="hero">
        <Image className="hero-image" src={hero} alt=""></Image>
        <div className="hero-description">
          <div>
            <i>
              2023, New media public sculpture custom computer, animated and
              cast lighting, steel base, acrylic casing, 3D printed PLA, 48” x
              48” x 108”.
            </i>
          </div>
          <div>
            <i>
              Combining the final fabricated sculpture, with staged lighting,
              smoke machines, and the site specific details of our location, we
              aimed to recreate the initial concept image prompted by
              MidJourney. We then took this image into the DALL-E-2 AI server to
              extend generative renderings that place “Moment” in an artificial
              scene built from visual models of our new context.
            </i>
          </div>
        </div>
      </ArtPageBlock>
      <ArtPageBlock type="intro">
        <div dangerouslySetInnerHTML={{ __html: description }} />
      </ArtPageBlock>
      <ArtPageBlock type="gallery" content={images} />
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
