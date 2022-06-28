import React from 'react'
import './index.css'

const LoadingOverlay = ({ hidden, ...props }) => {
  console.log(hidden)
  return (
    <div className="loading-overlay" hidden={hidden} {...props}>
      loading
      <span>.</span>
      <span>.</span>
      <span>.</span>
    </div>
  )
}

export default LoadingOverlay
