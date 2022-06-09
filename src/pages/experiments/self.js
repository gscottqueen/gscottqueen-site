import React, { useEffect, useRef, useState } from 'react'
import { userMediaConfig } from '../../config/user-media-config'
import { domReady } from '../../utils/dom-ready'
import TestSupport from '../../utils/mobile-detection'
import {
  Video,
  LoadingOverlay,
  ExperimentDescription,
  BackNavLink,
  Layout,
  Seo
} from '../../components'
import { Camera } from '@mediapipe/camera_utils'
import { w } from '../../const'
import data from './data.json'

// get data
const item = [data[0].items[1]]
// map data to seo
const handlSEO = (item) =>
  item.map((detail, i) => (
    <Seo
      title={detail.title}
      description={detail.description}
      key={`${detail.title}-${i}`}
    />
  ))

const Echo = () => {
  TestSupport()
  const previewElement = useRef(null)
  const recordingElement = useRef(null)
  const ms = 8000
  const [recordingTimeMS, setRecordingTimeMS] = useState(ms)

  useEffect(() => {
    const preview = previewElement.current
    const recording = recordingElement.current

    function wait(delayInMS) {
      // eslint-disable-next-line no-undef
      return new Promise((resolve) => setTimeout(resolve, delayInMS))
    }

    function startRecording(stream, lengthInMS) {
      let recorder = new MediaRecorder(stream)
      let data = []

      recorder.ondataavailable = (event) => data.push(event.data)
      recorder.start()
      console.log(recorder.state + ' for ' + lengthInMS / 1000 + ' seconds...')

      // eslint-disable-next-line no-undef
      let stopped = new Promise((resolve, reject) => {
        recorder.onstop = resolve
        recorder.onerror = (event) => reject(event.name)
      })

      let recorded = wait(lengthInMS).then(
        () => recorder.state === 'recording' && recorder.stop()
      )

      // eslint-disable-next-line no-undef
      return Promise.all([stopped, recorded]).then(() => data)
    }

    function start() {
      navigator.mediaDevices
        .getUserMedia(userMediaConfig)
        .then((stream) => {
          preview.srcObject = stream
          preview.captureStream =
            preview.captureStream || preview.mozCaptureStream
          // eslint-disable-next-line no-undef
          return new Promise((resolve) => (preview.onplaying = resolve))
        })
        .then(() => startRecording(preview.captureStream(), recordingTimeMS))
        .then((recordedChunks) => {
          let recordedBlob = new Blob(recordedChunks, { type: 'video/webm' })
          const url = URL.createObjectURL(recordedBlob)
          recordingTimeMS < 15000 && setRecordingTimeMS(recordingTimeMS + 1000)
          recording.src = url

          console.log(
            'Successfully recorded ' +
              recordedBlob.size +
              ' bytes of ' +
              recordedBlob.type +
              ' media.'
          )
          start()
        })
        .catch((error) => {
          if (error.name === 'NotFoundError') {
            console.log('Camera or microphone not found. CanU+2019t record.')
          } else {
            console.log(error)
          }
        })
    }

    domReady(start)

    const camera = new Camera(preview, {
      onFrame: async () => {
        await true // TODO: need to remove this dependency
      }
    })
    camera.start()
  }, [recordingTimeMS])

  return (
    <Layout nonav>
      {handlSEO(item)}
      <BackNavLink location="experiments" />
      <div className="self-container">
        <LoadingOverlay hidden={recordingTimeMS > ms} />
        {/* map data to description */}
        {item.map((detail, i) => (
          <ExperimentDescription
            title={detail.title}
            description={detail.description}
            key={`${detail.title}--${i}`}
            githubLink={detail.extlink}
          />
        ))}
        <Video
          id="preview"
          className="self"
          hidden={recordingTimeMS < ms + 1000}
          videoRef={previewElement}
          width={`${w.innerWidth}px`}
          height={`${w.innerHeight}px`}
        />
        <Video
          id="recording"
          className="self"
          videoRef={recordingElement}
          width={`${w.innerWidth}px`}
          height={`${w.innerHeight}px`}
        />
      </div>
    </Layout>
  )
}

export default Echo
