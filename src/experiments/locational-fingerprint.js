import React from 'react'
import { ExperimentDescription, BackNavLink, Layout, Seo } from '../components'
import { w } from '../const'
// this drawing includes an audio aspect, sound on!!

const LocationalFingerprintP5 = React.lazy(() =>
  import('../components/lazy/locational-fingerprintP5')
)

const Singulartiy = ({ pageContext }) => {
  const { data } = pageContext
  return (
    <Layout nonav>
      <Seo
        title={data.title}
        description={data.description}
        slug={data.link}
        defaultImage={data.ogImage}
      />
      <BackNavLink
        location="experiments"
        inverse
        style={{
          position: 'absolute',
          zIndex: '2',
          backgroundColor: 'black'
        }}
      />
      <div
        className="locational-fingerprint-container"
        style={{ postion: 'absolute' }}
      >
        <ExperimentDescription
          title={data.title}
          description={data.description}
          githubLink={data.extlink}
          inverse
          style={{ marginTop: '50px', backgroundColor: 'black' }}
        />
        {w && (
          <React.Suspense fallback={<div />}>
            <LocationalFingerprintP5 data={data} />
          </React.Suspense>
        )}
      </div>
    </Layout>
  )
}

export default Singulartiy
