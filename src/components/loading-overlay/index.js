import React from 'react'
import './index.css'

const LoadingOverlay = ({ hidden, ...props }) => {
  return (
    <div
      className="loading-overlay"
      hidden={hidden}
      style={{
        display: hidden && 'none'
      }}
      {...props}
    >
      loading
      <span>.</span>
      <span>.</span>
      <span>.</span>
    </div>
  )
}

export default LoadingOverlay
