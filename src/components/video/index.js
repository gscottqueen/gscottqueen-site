import React from 'react'
import './index.css'

const Video = ({ id, videoRef, srcRef, ...props }) => (
  <video id={id} playsInline autoPlay muted ref={videoRef} {...props}>
    <source src={srcRef} type="video/mp4" />
  </video>
)

export default Video
