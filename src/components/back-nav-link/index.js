import React from 'react'
import { Link } from 'gatsby'

import './index.css'

const BackNavLink = ({ location, close, type }) => {
  const w = typeof window !== 'undefined' && window
  const refLocation = !w?.refLocation ? `/${location}` : `${w?.refLocation}`

  const linkTitle = close ? 'x' : `⇠ Back to ${location}`

  const handleClass = type
    ? `back-nav-link-wrapper ${type}`
    : 'back-nav-link-wrapper'

  return (
    <div className={handleClass}>
      <Link
        to={refLocation}
        className="back-nav-link"
        onClick={() => (w.refLocation = undefined)}
      >
        {linkTitle}
      </Link>
    </div>
  )
}

export default BackNavLink
