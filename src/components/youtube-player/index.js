import React from 'react'

const YoutubePlayer = ({ title, videoRef, ...props }) => (
  <iframe
    width="100%"
    height="100%"
    src={videoRef}
    title={title || 'YouTube video player'}
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
    {...props}
  ></iframe>
)

export default YoutubePlayer
