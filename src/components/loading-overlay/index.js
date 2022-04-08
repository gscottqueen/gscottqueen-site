import React from 'react'
import './index.css'

const LoadingOverlay = ({ loading }) => (
  <>
    <div className="loading-overlay" hidden={loading}>
      <div className="loading-content">
        <div className="dot-gathering"></div>
      </div>
    </div>
  </>
)

export default LoadingOverlay
