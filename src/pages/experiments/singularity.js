import React from 'react'
import {
  ExperimentDescription,
  BackNavLink,
  Layout,
  Seo
} from '../../components'
import { w } from '../../const'
import data from './data.json'
// this drawing includes an audio aspect, sound on!!
// this works best on desktop

// get data
const item = [data[1].items[1]]

const handlSEO = (item) =>
  item.map((detail, i) => (
    <Seo
      title={detail.title}
      description={detail.description}
      key={`${detail.title}-${i}`}
    />
  ))

const SingularityP5 = React.lazy(() =>
  import('../../components/lazy/singularityP5')
)

const Singulartiy = () => {
  return (
    <Layout nonav>
      {handlSEO(item)}
      <BackNavLink
        location="experiments"
        inverse
        style={{
          position: 'absolute',
          zIndex: '2'
        }}
      />
      <div className="singularity-container">
        {/* map data to description */}
        {item.map((detail, i) => (
          <ExperimentDescription
            title={detail.title}
            description={detail.description}
            key={`${detail.title}--${i}`}
            inverse
            style={{ marginTop: '50px' }}
          />
        ))}
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