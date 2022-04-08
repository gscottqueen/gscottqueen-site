import React from 'react'
import { GithubLink } from '../index'

const ExperimentDescription = ({ githubLink, description }) => (
  <div
    style={{
      position: 'absolute',
      width: '400px',
      padding: '20px'
    }}
  >
    <p>{description}</p>
    <GithubLink githubLink={githubLink} />
  </div>
)

export default ExperimentDescription
