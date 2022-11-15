import React from 'react'
import { BackNavLink, Layout, Seo } from '../components'

const AIConceptualRendering = ({ pageContext }) => {
  const { data } = pageContext

  return (
    <Layout nonav>
      <Seo
        title={data.title}
        description={data.description}
        slug={data.link}
        defaultImage={data.ogImage}
      />
      <BackNavLink location="experiments" />
      <div
        className="ai-conceptual-rendering"
        style={{
          height: '100%'
        }}
      >
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/bhQ0jmcGA-w"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </Layout>
  )
}

export default AIConceptualRendering
