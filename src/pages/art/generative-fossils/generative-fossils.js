import React, { useEffect, useState } from 'react'
import {
  ArtPageBlock,
  BackNavLink,
  Image,
  Layout,
  MailChimpDrop,
  Seo,
  SocialIcons,
  YoutubePlayer
} from '../../../components'
import pageData from './data.json'
import { w } from '../../../const'

const GenerativeFossils = ({ pageContext }) => {
  const [isMobile, getDimension] = useState(false)

  const { data, slug } = pageContext
  const { description, ogImage, theme, title } = data.data

  // TODO: convert this to hook
  const setMobile = () => {
    getDimension(w.innerWidth < 900)
  }

  useEffect(() => {
    window.addEventListener('resize', setMobile)

    return () => {
      window.removeEventListener('resize', setMobile)
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
          videoRef="https://www.youtube.com/embed/videoseries?list=PLzS1mIBFtkc8wrAY1Ns1YgO3vksmNYgTD"
          title="Generataive Fossils Process"
        />
      </ArtPageBlock>
      <ArtPageBlock
        type="hero"
        content="generative-fossils-installed-flux-galleries.png"
      >
        <p>
          Latest installation of the Generative Fossils series - a fusion of
          code and art.
        </p>
        <p>
          In a departure from our previous approach, we&#39;ve incorporated
          stylized wall treatments with vinyl lettering that features snippets
          of the algorithm used to create each artwork. From a few lines of
          code, to xy plotter drawings, to 3D prints and AR digital sculptures,
          this installation showcases the powerful union of art and technology.
          An exposure to the conversation that explores the impact of
          algorithmic environments on the human experience.
        </p>
      </ArtPageBlock>
      <ArtPageBlock
        type="hero"
        content="artist-with-trace-fossil-drawings.jpeg"
        alternate={isMobile}
      >
        <p>
          <i>2023, Ink on paper, 42&#34; x 68&#34;</i>
        </p>
        <p>
          The drawings themselves are a sampling of wave frequencies included in
          generated bezier curves and written to paper with ink by an axis
          plotter.
        </p>
      </ArtPageBlock>
      <ArtPageBlock type="hero" content={ogImage}>
        <p>
          <i>2023, 3D printed PLA, Pseudo Fossil, 6” x 4” x 8”</i>
        </p>
        <p>
          The vector points generated from plotter drawings are converted to
          generative models. These are used to create objects that represent
          historical artifacts of imaginary creatures from virtual worlds.
        </p>
      </ArtPageBlock>
      <ArtPageBlock
        type="hero"
        content="generative-fossils-as-ar-creature.png"
        alternate={isMobile}
      >
        <p>
          <i>2023, Digital Sculpture in augmented reality (AR)</i>
        </p>
        <p>
          The generative models are brought back to life using code once more to
          animate the sculpture in a kinetic representation of creature like
          movments.
        </p>
        {isMobile && (
          <div style={{ textAlign: 'center' }}>
            <a href={pageData.qrCodeLink}>
              <Image
                className="qr-code"
                src={`${pageData.qrCode}`}
                alt=""
              ></Image>
            </a>
            <p>
              <i>Access this effect through the Meta platform Instagram.</i>
            </p>
          </div>
        )}
      </ArtPageBlock>
      <MailChimpDrop cta="Subscribe to get the drops!" />
      <SocialIcons />
    </Layout>
  )
}

export default GenerativeFossils
