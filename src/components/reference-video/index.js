import React from 'react'
import { Video } from '../index'
import './index.css'

const ReferenceVideo = ({ src, cite, href, className, ...props }) => (
  <div className={`reference-video ${className}`}>
    <a href={href} target="_blank" rel="noreferrer">
      <Video src={src} {...props} />
    </a>
    <cite>{cite}</cite>
  </div>
)

export default ReferenceVideo
