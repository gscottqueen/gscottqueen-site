import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import './index.css'

const Header = () => (
  <header>
    <div className="tape">
      <div>
        <h1>
          <a href="/">G. Scott Queen</a>
        </h1>
        <nav>
          <span>
            <span>
              <Link to="/art">Art</Link>
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
