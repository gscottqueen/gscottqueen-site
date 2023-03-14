import React from 'react'
import { Image } from '../../components'

import './index.css'

const ArtPageBlock = ({ type, inverse, title, children, content }) => {
  const handleClass = inverse
    ? `art-block ${type} ${inverse && 'inverse'}`
    : `art-block ${type}`

  const Title = ({ title }) => {
    return (
      <div className={handleClass}>
        <h1>{title}</h1>
      </div>
    )
  }

  const Intro = ({ child }) => {
    return <div className={handleClass}>{child}</div>
  }

  const Video = ({ child }) => {
    return (
      <div
        className={handleClass}
        style={{
          height: '100%'
        }}
      >
        {child}
      </div>
    )
  }

  const Standard = ({ child }) => {
    return <div className={handleClass}>{child}</div>
  }

  const Hero = ({ child, content }) => {
    return (
      <div className={handleClass}>
        <Image className="hero-image" src={content} alt=""></Image>
        <div className="hero-description">{child}</div>
      </div>
    )
  }

  const Gallery = ({ i, content }) => {
    return (
      <div className={handleClass} key={`gallery-${i}`}>
        <h2 className="gallery-heading">Gallery</h2>
        {content.map((images) => {
          const {
            galleryDescription,
            galleryAffiliateLink,
            galleryImages
          } = images

          console.log(galleryImages)

          return (
            <>
              <p className="gallery-descritption">
                <a href={galleryAffiliateLink} rel="noreferrer" target="_blank">
                  {galleryDescription}
                </a>
              </p>
              {galleryImages.map((image) => (
                <Image
                  className="gallery-image"
                  src={image}
                  alt=""
                  key={image}
                  title={galleryDescription}
                ></Image>
              ))}
            </>
          )
        })}
      </div>
    )
  }

  const Block = ({ type, title, content }) => {
    return type === 'title' ? (
      <Title title={title} />
    ) : type === 'intro' ? (
      <Intro child={children} />
    ) : type === 'video' ? (
      <Video child={children} />
    ) : type === 'standard' ? (
      <Standard child={children} />
    ) : type === 'gallery' ? (
      <Gallery content={content} />
    ) : type === 'hero' ? (
      <Hero child={children} content={content} />
    ) : (
      ''
    )
  }

  return <Block type={type} title={title} content={content} />
}

export default ArtPageBlock
