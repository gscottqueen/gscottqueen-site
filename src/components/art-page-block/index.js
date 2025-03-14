import React from 'react'
import { Image } from '../../components'

import './index.css'

const ArtPageBlock = ({
  type,
  inverse,
  title,
  children,
  content,
  ...props
}) => {
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

  const Quote = ({ content }) => {
    return (
      <div className={handleClass}>
        <p dangerouslySetInnerHTML={{ __html: content }} />
      </div>
    )
  }

  const Hero = ({ child, content, ...props }) => {
    const { alternate, portrait, description, gif } = props
    const handleImageClass = portrait
      ? `hero-image ${type} ${portrait && 'portrait'}`
      : `hero-image ${type}`
    const handleImageDescriptionClass =
      alternate === false
        ? 'hero-image-description alternate'
        : 'hero-image-description'

    return (
      <div className={handleClass}>
        {alternate !== false ? (
          <>
            <div className="hero-image-wrapper">
              {gif === undefined ? (
                <Image className={handleImageClass} src={content} alt="" />
              ) : (
                <img className={handleImageClass} src={gif} alt="" />
              )}
              <div className={handleImageDescriptionClass}>
                <i>{description}</i>
              </div>
            </div>
            <div className="hero-description">{child}</div>
          </>
        ) : (
          <>
            <div className="hero-description">{child}</div>
            <div className="hero-image-wrapper">
              {gif === undefined ? (
                <Image className={handleImageClass} src={content} alt="" />
              ) : (
                <img className={handleImageClass} src={gif} alt="" />
              )}
              <div className={handleImageDescriptionClass}>
                <i>{description}</i>
              </div>
            </div>
          </>
        )}
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

  const Block = ({ type, title, content, ...props }) => {
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
      <Hero child={children} content={content} {...props} />
    ) : type === 'quote' ? (
      <Quote content={content} {...props} />
    ) : (
      ''
    )
  }

  return <Block type={type} title={title} content={content} {...props} />
}

export default ArtPageBlock
