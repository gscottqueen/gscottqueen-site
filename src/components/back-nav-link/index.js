import React from 'react'
import { Link } from 'gatsby'

import './index.css'

const BackNavLink = ({ location }) => {
  const refLocation =
    window?.refLocation === undefined
      ? `/${location}`
      : `${window?.refLocation?.pathname}`

  const linkTitle =
    window?.refLocation === undefined ? `⇠ Back to ${location}` : `x Close`

  return (
    <div className="back-nav-link--wrapper">
      <Link
        to={refLocation}
        className="back-nav-link"
        onClick={() => (window.refLocation = undefined)}
      >
        {linkTitle}
      </Link>
    </div>
  )
}

export default BackNavLink
