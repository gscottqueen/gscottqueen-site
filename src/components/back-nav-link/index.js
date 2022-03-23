import React from 'react'
import { Link } from 'gatsby'

import './index.css'

const BackNavLink = ({ location, close }) => {
  const w = typeof window !== 'undefined' && window
  const refLocation =
    w?.refLocation === undefined
      ? `/${location}`
      : `${w?.refLocation?.pathname}`

  const linkTitle =
    close
      ? `x`
      : `⇠ Back to ${location}`

  return (
    <div className="back-nav-link--wrapper">
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
