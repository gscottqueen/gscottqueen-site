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
      <Seo title="Self" description="Presenting the observer to themself." />
      <BackNavLink location="experiments" />
      <div className="self-container">
        <ExperimentDescription
          title="Eclipse"
          description="Simplex 4D noise, using TD graphic network."
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
