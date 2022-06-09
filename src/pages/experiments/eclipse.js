import React from 'react'
import {
  Video,
  ExperimentDescription,
  BackNavLink,
  Layout,
  Seo
} from '../../components'
import { w } from '../../const'
import EclipseVideo from '../../video/eclipse-video.mp4'
import data from './data.json'

// get data
const item = [data[1].items[0]]
// map data to seo
const handlSEO = (item) =>
  item.map((detail, i) => (
    <Seo
      title={detail.title}
      description={detail.description}
      key={`${detail.title}-${i}`}
    />
  ))

const Eclipse = () => {
  return (
    <Layout nonav>
      {handlSEO(item)}
      <BackNavLink location="experiments" inverse />
      <div className="eclipse-container">
        {/* map data to description */}
        {item.map((detail, i) => (
          <ExperimentDescription
            title={detail.title}
            description={detail.description}
            key={`${detail.title}--${i}`}
            inverse
          />
        ))}
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
