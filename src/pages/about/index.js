import React from 'react'

import { Layout, Seo } from '../../components'

import './index.css'

const IndexAbout = () => (
  <Layout>
    <Seo title="About" slug="about" />
    <div className="about-wrapper">
      <p>
        G. Scott Queen is a research and conceptual artist working in new media
        with a Bachelor’s of Studio Art from the University of North Carolina at
        Wilmington. While in his studies at the university, Queen worked
        primarily in sculpture, painting, and digital media through the artist
        collective Thrive Studios and international art colony, No Boundaries.
        Executing and participating in dozens of exhibitions and interactive
        exhibits bringing music, film, and artistry into collaboration. It was
        here that Queen found success exploring live music and art performances
        with real-time digital projections. Several of his large-scale
        sculptures were featured in indie award winning films and awarded the
        Pedestrian Public Art Award.
      </p>
      <p>
        Today his studio work is evolving, driven by Queen’s growing experience
        in computer science, as well as interest in the philosophy of aesthetics
        and theories of new media. From a technologist approach he engages with
        cutting edge software and hardware for expressive purposes through
        research, writing, and conceptual visual artworks. His experimentations
        utilize generative and cybernetic programming, machine learning, AI,
        brain network hardware, custom computers, and extended reality (AR, VR,
        Omniverse) for expressive purposes. In this age of computerization Queen
        believes we must explore the most creative approaches to problem
        solving. If we engage with technology collaboratively we can unlock the
        full potential of our societies and future generations.
      </p>
      <p>Front page image credit: Alex Gibbs</p>
    </div>
  </Layout>
)

export default IndexAbout
