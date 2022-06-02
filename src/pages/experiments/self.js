import React, { useEffect, useRef, useState } from 'react'
import { userMediaConfig } from '../../config/user-media-config'
import { domReady } from '../../utils/dom-ready'
import {
  Video,
  LoadingOverlay,
  ExperimentDescription,
  BackNavLink,
  Layout,
  Seo
} from '../../components'
import { Camera } from '@mediapipe/camera_utils'

const w = typeof window !== 'undefined' && window

const Echo = () => {
  const previewElement = useRef(null)
  const recordingElement = useRef(null)
  const [recordingTimeMS, setRecordingTimeMS] = useState(10000)

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
      <Seo title="Self" description="Presenting the observer to themself." />
      <BackNavLink location="experiments" />
      <div className="self-container">
        <LoadingOverlay hidden={recordingTimeMS > 10000} />
        <ExperimentDescription
          title="Self"
          description="Presenting the observer to themself occupying the same space at different times."
          githubLink="https://github.com/gscottqueen/multiverse/blob/main/src/echo.js"
        />
        <Video
          id="preview"
          hidden={recordingTimeMS < 11000}
          videoRef={previewElement}
          width={`${w.innerWidth}px`}
          height={`${w.innerHeight}px`}
        />
        <Video
          id="recording"
          videoRef={recordingElement}
          width={`${w.innerWidth}px`}
          height={`${w.innerHeight}px`}
        />
      </div>
    </Layout>
  )
}

export default Echo
