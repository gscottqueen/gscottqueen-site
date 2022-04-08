import React from 'react'

const GithubLink = ({ githubLink }) => (
  <p>
    All code is opensourced for peer review and contributions. Visit{' '}
    <a target="_blank" rel="noreferrer" href={githubLink}>
      the remote origin
    </a>{' '}
    to propose changes in a version controlled platform.
  </p>
)

export default GithubLink
