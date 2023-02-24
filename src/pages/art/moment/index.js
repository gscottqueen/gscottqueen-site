import React from 'react'
import {
  ArtPageBlock,
  BackNavLink,
  Layout,
  Seo,
  MailChimpDrop,
  SocialIcons,
  Image
} from '../../../components'

const content = {
  title: 'Moment',
  description:
    '<p>What is a moment? The word itself stands to be a nebulous description of everything and nothing at all, an indefinite interval of time. Moments can be fleeting, passing us by without notice. A moment can be recorded in history and celebrated for thousands of years. However, with all of its paradoxical descriptors, a moment will always be a precursor to what comes next.</p><p>This work “Moment”, is a new media public sculpture that primarily leverages the use of light to both explore the fluid meaning of a moment and to define it through utility. The dimensional nature of sculptural work is leveraged to present observers with a spectrum of experiences. Light is displaced and refracted as it passes through the sculptures&#39; prismed materials. From corner to corner it phases between its natural state and an infinite reflection of itself, redefined each time as a different color form. In opposition, light is taken under full control by the artist through computation and displayed in a specific sequence to provide the observer with a visually-guided-micro-meditation.</p>',
  images: [
    'moment-detail-1.png',
    'moment-detail-2.png',
    'moment-detail-3.png',
    'moment-detail-4.png',
    'moment-detail-5.png',
    'moment-detail-6.png',
    'moment-detail-7.png'
  ]
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
          src="https://www.youtube.com/embed/videoseries?list=PLzS1mIBFtkc9J9f818w5ctf8iprQZrs6b"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </ArtPageBlock>
      <ArtPageBlock type="intro">
        <div dangerouslySetInnerHTML={{ __html: content.description }} />
      </ArtPageBlock>
      <ArtPageBlock type="gallery">
        <h2 className="gallery-heading">Gallery</h2>
        <p className="gallery-descritption">
          Details from video captured by Ben Premeaux at the smARTlab.
        </p>
        {content.images.map((image) => (
          <Image
            className="gallery-image"
            src={image}
            alt=""
            key={image}
          ></Image>
        ))}
      </ArtPageBlock>
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
