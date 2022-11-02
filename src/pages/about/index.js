import React from 'react'
import { Link } from 'gatsby'

import { Layout, Seo, SocialIcons } from '../../components'

import './index.css'

const IndexAbout = () => (
  <Layout>
    <Seo title="About" slug="about" />
    <div className="about-wrapper">
      <div>
        <h2>Artist Statement</h2>
        <p>
          In this age of computerization Queen believes we must explore the most
          creative approaches to problem solving. If we engage with technology
          collaboratively we can unlock the full potential of our societies and
          future generations.
        </p>
      </div>
      <SocialIcons />
      <cite>Front page image credit: Alex Gibbs</cite>
      <div>
        <h2>Artist Bio</h2>
        <p>
          G. Scott Queen is a research and conceptual artist working in new
          media with a Bachelor’s of Studio Art from the University of North
          Carolina at Wilmington. While in his studies, Queen worked primarily
          in sculpture, painting, and digital media through the artist
          collective Thrive Studios and international art colony, No Boundaries.
          Executing and participating in dozens of exhibitions and interactive
          installations bringing music, film, and artistry into collaboration.
          It was here that Queen found success exploring live music and art
          performances with real-time digital projections. Several of his
          large-scale sculptures were featured in indie award winning films and
          awarded the Pedestrian Public Art Award.
        </p>
        <p>
          Today his studio work is evolving, driven by Queen’s growing
          experience in computer science, as well as interest in the philosophy
          of aesthetics and theories of new media. From a technologist approach
          he engages with cutting edge software and hardware for expressive
          purposes through research, writing, and conceptual visual artworks.
          His <Link to="/experiments">experimentations</Link> utilize generative
          and cybernetic programming, machine learning, AI, brain network
          hardware, custom computers, and extended reality (AR, VR, Omniverse)
          for expressive purposes.
        </p>
      </div>
      <div>
        <h2>Brief description of work and process.</h2>
        <p>
          Queen takes a philosophical approach to research. These{' '}
          <Link to="/writing">writings</Link> propose responses as thought
          experiments and inspire the design of art projects which in effect
          offer new perspectives between the artist, observer, and technology
          relationships. Although he does not prescribe to one specific approach
          to art making, his work intentionally engages with concepts that break
          away from traditional tools.
        </p>
        <p>
          Queen&#39;s work engages with data collection to provide input as a
          medium for the message. Examples of data collection include:
          electricity data from brain networks, streaming environment data from
          physical firmware devices and sensors, open source machine learning,
          application programming interfaces (API), and vector based custom
          generative objects. Data is then transformed through produced physical
          and virtual works with new media techniques, such as 3D printing and
          modeling, axis plotters, custom computers and software, immersive
          video projection, and node graphical systems.
        </p>
      </div>
      <ul className="about-list">
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
        <h2>Honors and Awards</h2>
        <li>
          Pedestrian Public Art Award, Public works placed in the heart of
          Wilmington, NC, 2012
        </li>
        <li>
          First Place, Painting, Central Piedmont Community College Student
          Exhibition, Wilmington, NC, 2010
        </li>
      </ul>
      <ul className="about-list">
        <h2>Exhibitions</h2>
        <li>Augmented Reality, Charlotte Art League, Group Exhibition, 2022</li>
        <li>
          No Boundaries International Art Colony, Resident Exhibition, 2013
        </li>
        <li>NODA Studio Tours, North Davidson Art Association, 2013</li>
        <li>
          No Boundaries International Art Colony, Resident Exhibition, 2012
        </li>
        <li>Pedestrian Public Art Exhibition, City of Wilmington, 2012</li>
        <li>
          Undergraduate Exhibition, University of North Carolina at Charlotte,
          2012
        </li>
        <li>Larger than Life, Thrive Studios, 2011</li>
        <li>Define Surrealism, Thrive Studios, 2011</li>
        <li>Miniatures Show, Thrive Studios, 2011</li>
        <li>Live Painting, Multiple Installations, 2011-2012</li>
        <li>
          Electro Sensory Stimulus (ESS) Multimedia Installation, Multiple
          installations, 2011-2012
        </li>
        <li>
          No Boundaries International Art Colony, Resident Exhibition, 2011
        </li>
        <li>
          Student Art Exhibition, Cape Fear Community College, First Place
          Painting, 2010
        </li>
      </ul>
      <ul className="about-list">
        <h2>Education</h2>
        <li>
          Post-Bachelor&#39;s Studies, MicroMaster - Integrated Digital Media,
          New York University, Current
        </li>
        <li>
          Post-Bachelor&#39;s, Aesthetics and Applied Ethics, University of
          North Carolina at Charlotte, 2014
        </li>
        <li>
          Bachelor&#39;s, Studio Art and Design, University of North Carolina
          Wilmington, 2012
        </li>
      </ul>
      <ul className="about-list">
        <h2>Certifications</h2>
        <li>
          AR/VR Development and 3D graphics, New York University Tandon School
          of Engineering, 2022-Current
        </li>
        <li>Creative Code, New York University, 2022</li>
        <li>Front End Development, General Assembly, D.C., 2016</li>
      </ul>
    </div>
  </Layout>
)

export default IndexAbout
