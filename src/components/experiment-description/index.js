import React from 'react'
import { GithubLink } from '../index'

import './index.css'

const ExperimentDescription = ({ githubLink, description, title, inverse }) => {
  const handleClass = inverse
    ? `description-group ${inverse && 'inverse'}`
    : 'description-group'

  return (
    <div className={handleClass}>
      {title ? <h1>{title}</h1> : null}
      <p>{description}</p>
      {githubLink && <GithubLink githubLink={githubLink} />}
    </div>
  )
}

export default ExperimentDescription
