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
} from '../../components'
import pageData from './data.json'
import { w } from '../../const'
import GIF from '../../gifs/generativeFossil.gif'

const GenerativeFossils = ({ pageContext }) => {
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
          videoRef="https://www.youtube.com/embed/videoseries?list=PLzS1mIBFtkc8wrAY1Ns1YgO3vksmNYgTD"
          title="Generataive Fossils Process"
        />
      </ArtPageBlock>
      <ArtPageBlock type="quote" content={description} inverse />
      <ArtPageBlock
        type="hero"
        content="generative-fossils-installed-flux-galleries.png"
        description="View from latest installation of the Generative Fossils series"
      >
        <p>
          A fusion of code and art, this installation incorporates stylized wall
          treatments with vinyl lettering that features snippets of the
          algorithm used to create each artwork. This display presents the
          powerful union of art and technology. An exposure to the conversation
          that explores the impact of algorithmic environments on the human
          experience.
        </p>
      </ArtPageBlock>
      <ArtPageBlock
        type="hero"
        content="artist-with-trace-fossil-drawings.jpeg"
        alternate={isMobile}
        portrait
        description="2023, Ink on paper, 42&#34; x 68&#34;, photo of artist holding drawings."
      >
        <p>
          The drawings themselves are a sampling of wave frequencies included in
          generated bezier curves and written to paper with ink by an axis
          plotter.
        </p>
      </ArtPageBlock>
      <ArtPageBlock
        type="hero"
        content={ogImage}
        description="2023, 3D printed RGB Silk PLA, Pseudo Fossil, 6&#34; x 4&#34; x 8&#34;"
      >
        <p>
          The vector points generated from the original plotter drawings are
          converted to generative models inside an open form software. These are
          used to create objects that represent what the historical artifacts of
          imaginary creatures from virtual worlds might look like.
        </p>
      </ArtPageBlock>
      <ArtPageBlock
        type="hero"
        gif={GIF}
        alternate={isMobile}
        portrait
        description="2023, Digital Sculpture in augmented reality (AR)"
      >
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
      <MailChimpDrop cta="Subscribe" />
      <SocialIcons />
    </Layout>
  )
}

export default GenerativeFossils
