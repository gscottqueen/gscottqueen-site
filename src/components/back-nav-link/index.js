import React from 'react'
import { Link } from 'gatsby'

import './index.css'

const BackNavLink = ({ location }) => (
  <div className="back-nav-link--wrapper">
    <Link
    to={`/${location}`}
    className="back-nav-link">
      {`⇠ Back to ${location}`}
    </Link>
  </div>
)

export default BackNavLink
