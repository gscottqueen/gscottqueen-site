import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import './index.css'

const Header = () => (
  <header>
    <div className="tape">
      <div>
        <div>
          <a href="/" className="h1">
            G. Scott Queen
          </a>
        </div>
        <nav>
          <span>
            <span>
              <Link to="/art">Art</Link>
            </span>{' '}
            /{' '}
            <span>
              <Link to="/experiments">Experiments</Link>
            </span>{' '}
            /{' '}
            <span>
              <Link to="/writing">Writing</Link>
            </span>{' '}
            /{' '}
            <span>
              <Link to="/about">About</Link>
            </span>
          </span>
        </nav>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string
}

Header.defaultProps = {
  siteTitle: ''
}

export default Header
