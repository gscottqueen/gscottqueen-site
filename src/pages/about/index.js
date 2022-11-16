import React from 'react'

import { Layout, Seo, SocialIcons } from '../../components'

import './index.css'

const IndexAbout = () => (
  <Layout>
    <Seo title="About" slug="about" />
    <div className="about-wrapper">
      <div>
        <h2>Artist Statement</h2>
        <p>
          Queen believes that in this age of computerization, machine-human
          collaboration can unlock the full potential of our societies and
          future generations. In this way, public works with technologies create
          a deeper level of engagement and spark unique conversations from these
          experiences.
        </p>
      </div>
      <div>
        <h2>About</h2>
        <p>
          G. Scott Queen is a research and conceptual artist. He takes a
          technologist approach to create innovative site specific art, engaging
          with new media and public interaction for expressive purposes. His
          installations leverage generative and cybernetic programming,
          interactive audio, video, and lighting, AI, custom computers, and
          extended reality (AR, VR, Omniverse) technology.
        </p>
      </div>
      <div>
        <ul className="about-list">
          <h2>Honors and Public Arts Awards</h2>
          <li>
            <b>Rail Trail Lights Award</b>, Public works placed in the heart of
            Charlotte, NC, 2023
          </li>
          <li>
            <b>Pedestrian Public Art Award</b>, Public works placed in the heart
            of Wilmington, NC, 2012
          </li>
          <li>
            <b>First Place, Painting</b>, Central Piedmont Community College
            Student Exhibition, Wilmington, NC, 2010
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
        <li>Generative Works</li>
        <li>Brain Network Interfaces</li>
        <li>3D Printing</li>
        <li>Extended Reality (AR, VR, Omniverse)</li>
      </ul>
      <ul className="about-list">
        <h2>Exhibitions</h2>
        <li>
          <b>Rail Trail Lights presented by US Bank</b>, Public Exhibition, US
          Bank Center City Partners
        </li>
        <li>
          <b>Augmented Reality</b>, Charlotte Art League, Group Exhibition, 2022
        </li>
        <li>
          <b>No Boundaries International Art Colony</b>, Resident Exhibition,
          2013
        </li>
        <li>
          <b>NODA Studio Tours</b>, North Davidson Art Association, 2013
        </li>
        <li>
          <b>No Boundaries International Art Colony</b>, Resident Exhibition,
          2012
        </li>
        <li>
          <b>State of the Art</b>, Cameron Museum of Art, Group Exhibition, 2012
        </li>
        <li>
          <b>Pedestrian Public Art Exhibition</b>, City of Wilmington, 2012
        </li>
        <li>
          <b>Undergraduate Exhibition</b>, University of North Carolina at
          Charlotte, 2012
        </li>
        <li>
          <b>Larger than Life</b>, Thrive Studios, 2011
        </li>
        <li>
          <b>Define Surrealism</b>, Thrive Studios, 2011
        </li>
        <li>
          <b>Miniatures Show</b>, Thrive Studios, 2011
        </li>
        <li>
          <b>Live Painting</b>, Multiple Installations, 2011-2012
        </li>
        <li>
          <b>Electro Sensory Stimulus (ESS) Multimedia Installation</b>,
          Multiple installations, 2011-2012
        </li>
        <li>
          <b>No Boundaries International Art Colony</b>, Resident Exhibition,
          2011
        </li>
        <li>
          <b>Student Art Exhibition</b>, Cape Fear Community College, First
          Place Painting, 2010
        </li>
      </ul>
      <ul className="about-list">
        <h2>Education</h2>
        <li>
          <b>Post-Bachelor&#39;s Studies</b>, MicroMaster - Integrated Digital
          Media, New York University, Current
        </li>
        <li>
          <b>Post-Bachelor&#39;s Studies</b>, Aesthetics and Applied Ethics,
          University of North Carolina at Charlotte, 2014
        </li>
        <li>
          <b>Bachelor&#39;s</b>, Studio Art and Design, University of North
          Carolina Wilmington, 2012
        </li>
      </ul>
      <ul className="about-list">
        <h2>Certifications</h2>
        <li>
          <b>AR/VR Development and 3D graphics</b>, New York University Tandon
          School of Engineering, 2022-Current
        </li>
        <li>
          <b>Creative Code, New York University</b>, 2022
        </li>
        <li>
          <b>SCRUM Master, Scrum Alliance</b>, 2016
        </li>
        <li>
          <b>Project Management Professional (PMP)</b>, TIA, 2016
        </li>
        <li>
          <b>Project Management Certification</b>, Wake Forest University, 2015
        </li>
        <li>
          <b>Business Essentials Certification</b>, Wake Forest University, 2015
        </li>
      </ul>
    </div>
    <cite>Front page image credit: Alex Gibbs</cite>
    <SocialIcons />
  </Layout>
)

export default IndexAbout
