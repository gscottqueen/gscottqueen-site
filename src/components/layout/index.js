import React from 'react'
import PropTypes from 'prop-types'

import { Header } from '../'
import './index.css'

const Layout = ({ children, bgImage = null, nonav }) => {
  return (
    <>
      {!nonav && <Header />}
      <div>
        <main
          style={
            bgImage !== null
              ? {
                  backgroundImage: `url(${bgImage?.childImageSharp.gatsbyImageData.images.fallback.src})`
                }
              : {}
          }
        >
          {children}
        </main>
        <footer></footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
