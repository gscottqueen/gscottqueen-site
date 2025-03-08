8import React from 'react'

import { Layout, Seo, SocialIcons, Image } from '../../components'

import './index.css'

const IndexAbout = () => (
  <Layout>
    <Seo title="About" slug="about" />
    <div className="about-wrapper">
      <div>
        <h2>Artist Statement</h2>
        <p>
          In the age of computerization, machine-human collaboration can unlock
          the full potential of our societies and future generations. It is in
          this way that artistic works with technologies create a deeper level
          of engagement and unique conversations beyond the vestige of
          traditional art experiences.
        </p>
      </div>
      <Image
        src="gscottqueen_headshot_2022.jpg"
        alt="artist standing in front of work in studio"
      />
      <div>
        <h2>About</h2>
        <p>G. Scott Queen is an emerging research and conceptual artist who approaches the creation of physical and virtual works of art with a technologist&#39;s perspective. He employs new media and observer interaction to achieve expressive goals, utilizing generative and cybernetic programming, AI, custom computers, extended reality (AR, VR, Omniverse), interactive audio, video, and lighting in his installations.
        </p>
        <p>The artist intentionally breaks away from traditional art-making tools in order to disrupt the commonality of historical works and provide a fresh perspective for public interaction. Each installation draws from theoretical research and writings, environmental data, open-source machine intelligence, and direct human touch to create ephemeral streams of data that coalesce into transformative physical and virtual works using new media techniques.
        </p>
        <p>Queen&#39;s studio practice is built on his nearly decade-long software development experience, a degree in studio art, and several successful public works projects. His recent presentation of a multimedia experience at the 2023 Rail Trail Lights in Uptown Charlotte, as well as his inclusion in the Arts and Science Council (ASC) public artist directory, showcase his ability to envision and present innovative works of art.
        </p>
      </div>
      <div>
        <ul className="about-list">
          <h2>Honors and Public Arts Awards</h2>
          <li>
            Public Art Incubator, Arts and Science Council Charlotte,
            NC, 2023
          </li>
          <li>
            Rail Trail Lights Award, Public works displayed in uptown Charlotte,
            NC, 2023
          </li>
          <li>
            Pedestrian Public Art Award, Public works placed in the heart of
            Wilmington, NC, 2012
          </li>
        </ul>
      </div>
      <div>
        <h2>Brief description of work and process.</h2>
        <p>
          Queen&#39;s work intentionally breaks away from traditional art making
          tools as a means of interrupting the commonality of historical work
          and provides a new perspective for public interaction. With each
          installation, there is an inventory of effects derived from the
          collection of theoretical research and writings, environmental data,
          open source machine intelligence, and direct human touch. These
          ephemeral streams of data coalesce to create transformative physical
          and virtual works using new media techniques.
        </p>
      </div>
      <ul className="about-list">
        <h2>Research Interests</h2>
        <li>Philosophy of Ethics and Aesthetics </li>
        <li>Technology</li>
        <li>Cybernetics</li>
        <li>Artificial Synesthesia</li>
        <li>Generative AI</li>
        <li>Brain Network Interfaces</li>
        <li>3D Printing</li>
        <li>Extended Reality (AR, VR, Omniverse)</li>
      </ul>
    <cite>Front page image credit: Alex Gibbs</cite>
    <SocialIcons />
  </Layout>
)

export default IndexAbout
