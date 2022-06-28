import React from 'react'
import { Link } from 'gatsby'
import { w } from '../../const'

import './index.css'

const BackNavLink = ({ location, close, type, inverse, style }) => {
  const refLocation = !w?.refLocation ? `/${location}` : `${w?.refLocation}`

  const linkTitle = close ? '⇠' : `⇠ Back to ${location}`

  const handleClass =
    type || inverse
      ? `back-nav-link-wrapper ${type && type !== undefined ? type : ''} ${
          inverse && 'inverse'
        }`
      : 'back-nav-link-wrapper'

  return (
    <div className={handleClass} style={style}>
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
