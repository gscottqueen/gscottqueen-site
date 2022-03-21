import React from 'react'

const GithubFooter = ({ slug }) => (
  <>
    <hr />
    <p className="github-footer">
      All writings are open for peer review and contributions. Visit{' '}
      <a
        target="_blank"
        rel="noreferrer"
        href={`https://github.com/gscottqueen/gscottqueen-site/edit/main/src/content/writing/${slug}.mdx`}
      >
        the remote origin
      </a>{' '}
      to propose changes in a version controlled env.
    </p>
  </>
)

export default GithubFooter
