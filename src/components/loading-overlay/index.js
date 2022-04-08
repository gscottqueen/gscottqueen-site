import React from 'react'

const LoadingOverlay = ({ loading }) => (
  <div
    style={{
      position: 'absolute',
      width: '100vw',
      height: '100vh',
      zIndex: '99999',
      background: 'white',
      textAlign: 'center',
      paddingTop: '300px'
    }}
    hidden={loading}
  >
    loading...
  </div>
)

export default LoadingOverlay
