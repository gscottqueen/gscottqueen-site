import React from 'react'
import {
  Video,
  ExperimentDescription,
  BackNavLink,
  Layout,
  Seo
} from '../components'
import { w } from '../const'
import EclipseVideo from '../video/eclipse-video.mp4'

const Nemesis = ({ pageContext }) => {
  const { data } = pageContext

  return (
    <Layout nonav>
      <Seo
        title={data.title}
        description={data.description}
        slug={data.link}
        defaultImage={data.ogImage}
      />
      <BackNavLink location="experiments" inverse />
      <div className="eclipse-container">
        <ExperimentDescription
          title={data.title}
          description={data.description}
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

export default Nemesis
