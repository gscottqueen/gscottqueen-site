import React from "react";

import Layout from "../../components/layout";
import SEO from "../../components/seo";
import ListingTemplate from "../../templates/listing-template";
import { Link } from "gatsby";

const IndexArt = () => (
  <Layout>
    <SEO title="Art" />
    <ListingTemplate title="Art">
      <ul>
        <ul>
          <h2>Sculpture</h2>
          <li>
            <Link to="/art/untitled-sculpture-1">
              Untitled Sculpture #1, 2011
            </Link>
          </li>
          <li>
            <Link to="/art/persistence-of-man-over-nature">
              Persistence of Man Over Nature, 2010
            </Link>
          </li>
        </ul>
        <ul>
          <h2>Painting</h2>
          <li>
            <Link to="/art/on-the-way-to-telos">On the Way to Telos, 2012</Link>
          </li>
          <li>
            <Link to="/art/we-are-one">We Are One, 2012</Link>
          </li>
          <li>
            <Link to="/art/dark-matter">Dark Matter, 2011</Link>
          </li>
          <li>
            <Link to="/art/strange-days">Strange Days, 2012</Link>
          </li>
        </ul>
      </ul>
    </ListingTemplate>
  </Layout>
);

export default IndexArt;
