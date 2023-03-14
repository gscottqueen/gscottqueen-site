import React from 'react'
// import { Image } from '../../components'

import './index.css'

const ArtPageBlock = ({ type, inverse, title, children }) => {
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

  const Gallery = ({ content }) => {
    console.log(content)

    return (
      <p>Gallery Template</p>
      // content.images.map((i, images) => {

      //   const {
      //     galleryDescription,
      //     galleryAffiliateLink,
      //     galleryImages
      //   } = images[i]

      //   return (
      //     <div className={handleClass} key={`gallery-${i}`}>
      //     <h2 className="gallery-heading">Gallery</h2>
      //       <p className="gallery-descritption">
      //         <a
      //           href={galleryAffiliateLink}
      //           rel="noreferrer"
      //           target="_blank"
      //         >
      //           {galleryDescription}
      //         </a>
      //       </p>
      //       {galleryImages.map(
      //         (image, i) =>
      //           i < 4 && (
      //             <Image
      //               className="gallery-image"
      //               src={image}
      //               alt=""
      //               key={image}
      //               title={galleryDescription}
      //             ></Image>
      //           )
      //       )}
      //     </div>
      //   )
      // })
    )
  }

  const Block = ({ type, content }) => {
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
      <Gallery child={children} />
    ) : (
      ''
    )
  }

  return <Block type={type} />
}

export default ArtPageBlock
