import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";

import Header from "./header";
import "./layout.css";

const Layout = ({ children, bgImage = null, nonav }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  const ImageURL =
    bgImage !== null ? bgImage.childImageSharp.fluid.src : bgImage;
  return (
    <>
      {!nonav && <Header />}
      <div>
        <main
          style={{
            backgroundImage: `url(${ImageURL})`,
          }}
        >
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
