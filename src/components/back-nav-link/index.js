import React from 'react'
import { Link } from 'gatsby'

import './index.css'

const BackNavLink = ({ location, close, type, inverse }) => {
  const w = typeof window !== 'undefined' && window
  const refLocation = !w?.refLocation ? `/${location}` : `${w?.refLocation}`

  const linkTitle = close ? '⇠' : `⇠ Back to ${location}`

  const handleClass = type
    ? `back-nav-link-wrapper ${type}`
    : 'back-nav-link-wrapper'

  return (
    <div className={handleClass}>
      <Link
        to={refLocation}
        className="back-nav-link"
        onClick={() => (w.refLocation = undefined)}
        style={inverse ? { color: 'white' } : ''}
      >
        {linkTitle}
      </Link>
    </div>
  )
}

export default BackNavLink
