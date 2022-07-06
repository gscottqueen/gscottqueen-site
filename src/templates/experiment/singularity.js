import React from 'react'
import {
  ExperimentDescription,
  BackNavLink,
  Layout,
  Seo
} from '../../components'
import { w } from '../../const'
// this drawing includes an audio aspect, sound on!!

const SingularityP5 = React.lazy(() =>
  import('../../components/lazy/singularityP5')
)

const Singulartiy = ({ pageContext }) => {
  const { data } = pageContext
  return (
    <Layout nonav>
      <Seo
        title={data.title}
        description={data.description}
        slug={`${data.link}`}
      />
      <BackNavLink
        location="experiments"
        inverse
        style={{
          position: 'absolute',
          zIndex: '2'
        }}
      />
      <div className="singularity-container">
        <ExperimentDescription
          title={data.title}
          description={data.description}
          githubLink={data.extlink}
          inverse
          style={{ marginTop: '50px' }}
        />
        {w && (
          <React.Suspense fallback={<div />}>
            <SingularityP5 />
          </React.Suspense>
        )}
      </div>
    </Layout>
  )
}

export default Singulartiy
