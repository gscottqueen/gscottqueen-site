import React from 'react'
import { Image } from '../index'
import './index.css'

const ReferenceFigure = ({ src, cite, href, ...props }) => (
  <div className="reference-figure">
    <a href={href} target="_blank" rel="noreferrer">
      <Image src={src} {...props} />
    </a>
    <cite>{cite}</cite>
  </div>
)

export default ReferenceFigure
