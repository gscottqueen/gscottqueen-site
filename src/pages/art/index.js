import React from "react";
import Layout from "../../components/layout";
import Seo from "../../components/seo";
import Deck from "../../components/deck"

const IndexArt = () => (
  <Layout style={{position: "relative"}}>
    <Seo title="Art" />
    <div className="cards-wrapper">
      <Deck />
    </div>
  </Layout>
);

export default IndexArt;
