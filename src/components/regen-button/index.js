import React from 'react'

import './index.css'

const RegenButton = ({ anchor }) => {
  const handleRegenerate = () => location.reload()

  return (
    <button
      className={`regen-button ${anchor ? 'anchor' : ''}`}
      onClick={handleRegenerate}
    >
      Regen
    </button>
  )
}

export default RegenButton
