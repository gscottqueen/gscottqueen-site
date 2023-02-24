import React from 'react'

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

  const Gallery = ({ child }) => {
    return <div className={handleClass}>{child}</div>
  }

  const Block = ({ type }) => {
    return type === 'title' ? (
      <Title title={title} />
    ) : type === 'intro' ? (
      <Intro child={children} />
    ) : type === 'video' ? (
      <Video child={children} />
    ) : type === 'standard' ? (
      <Standard child={children} />
    ) : type === 'gallery' ? (
      <Gallery child={children} />
    ) : type === 'hero' ? (
      <Gallery child={children} />
    ) : (
      ''
    )
  }

  return <Block type={type} />
}

export default ArtPageBlock
