import React from 'react'
import {
  Video,
  // LoadingOverlay,
  ExperimentDescription,
  BackNavLink,
  Layout,
  Seo
} from '../../components'
import { w } from '../../const'
import EclipseVideo from '../../video/eclipse-video.mp4'

const Eclipse = () => {
  return (
    <Layout nonav>
      <Seo
        title="Eclipse"
        description="Simplex 4D noise, using graphic network."
      />
      <BackNavLink location="experiments" inverse />
      <div className="eclipse-container">
        <ExperimentDescription
          title="Eclipse"
          description="Simplex 4D noise, using graphic network."
          inverse
        />
        <Video
          id="video"
          loop
          srcRef={EclipseVideo}
          width={`${w.innerWidth}px`}
          height={`${w.innerHeight}px`}
        />
      </div>
    </Layout>
  )
}

export default Eclipse
