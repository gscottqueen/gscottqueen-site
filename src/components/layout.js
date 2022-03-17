import React from "react";
import PropTypes from "prop-types";

import Header from "./header";
import "./layout.css";

const Layout = ({ children, bgImage = null, nonav }) => {
  return (
    <>
      {!nonav && <Header />}
      <div>
        <main
          style={
            bgImage !== null ?
              { backgroundImage: `url(${bgImage.childImageSharp.fluid.src})`}
              : {}
            }>
          {children}
        </main>
        <footer></footer>
      </div>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
