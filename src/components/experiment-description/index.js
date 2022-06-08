import React from 'react'
import { GithubLink } from '../index'

import './index.css'

const ExperimentDescription = ({ githubLink, description, title, inverse }) => (
  <div className="description-group" style={inverse ? { color: 'white' } : ''}>
    {title ? <h1>{title}</h1> : null}
    <p>{description}</p>
    {githubLink && <GithubLink githubLink={githubLink} />}
  </div>
)

export default ExperimentDescription
