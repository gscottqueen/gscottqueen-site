import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import './header.css'

const Header = ({ siteTitle }) => (
  <header>
      <div class="tape">
        <div>
          <h1><a href="/">G. Scott Queen</a></h1>
          <nav>
            <span>
              <span>
                <a href="/art">Art</a>
              </span> / <span>
                <a href="/writing">Writing</a>
              </span> / <span>
                  <a href="mailto:geoffreysqueen@gmail.com">Contact</a>
                </span>
              </span>
          </nav>
        </div>
      </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
