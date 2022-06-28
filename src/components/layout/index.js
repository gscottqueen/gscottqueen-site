import React from 'react'
import PropTypes from 'prop-types'

import { Header } from '../'
import './index.css'

const Layout = ({ children, bgImage = null, nonav }) => {
  function getRandomInt(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min) + min) //The maximum is exclusive and the minimum is inclusive
  }

  return (
    <>
      {!nonav && <Header />}
      <div>
        <main
          style={
            bgImage !== null
              ? {
                  backgroundImage: `url(${bgImage?.childImageSharp.gatsbyImageData.images.fallback.src})`,
                  backgroundSize: `${getRandomInt(10, 3000)}px`
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
