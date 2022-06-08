import React from 'react'
import { GithubLink } from '../index'

import './index.css'

const ExperimentDescription = ({ githubLink, description, title }) => (
  <div className="description-group">
    {title ? <h1>{title}</h1> : null}
    <p>{description}</p>
    {githubLink && <GithubLink githubLink={githubLink} />}
  </div>
)

export default ExperimentDescription
