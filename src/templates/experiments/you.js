import React, { useEffect, useRef, useState } from 'react'
import {
  Holistic,
  POSE_CONNECTIONS,
  FACEMESH_TESSELATION,
  HAND_CONNECTIONS
} from '@mediapipe/holistic'
import { Camera } from '@mediapipe/camera_utils'
import { drawConnectors, drawLandmarks } from '@mediapipe/drawing_utils'

import {
  ExperimentDescription,
  LoadingOverlay,
  BackNavLink,
  Layout,
  Seo
} from '../../components'

const You = ({ pageContext }) => {
  const { data } = pageContext
  const videoElement = useRef(null)
  const canvasElement = useRef(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const video = videoElement.current
    const canvas = canvasElement.current
    const context = canvas.getContext('2d')
    const holistic = new Holistic({
      locateFile: (file) => {
        return `https://cdn.jsdelivr.net/npm/@mediapipe/holistic/${file}`
      }
    })

    holistic.setOptions({
      modelComplexity: 1,
      smoothLandmarks: true,
      enableSegmentation: true,
      smoothSegmentation: true,
      refineFaceLandmarks: true,
      minDetectionConfidence: 0.5,
      minTrackingConfidence: 0.5
    })

    function onResults(results, canvasCtx = context) {
      if (results.ea) {
        setLoading(true)
        canvasCtx.clearRect(0, 0, canvas.width, canvas.height)
        canvasCtx.save()
        canvasCtx.clearRect(0, 0, canvasElement.width, canvasElement.height)
        canvasCtx.drawImage(
          results.segmentationMask,
          0,
          0,
          canvasElement.width,
          canvasElement.height
        )

        // Only overwrite existing pixels.
        canvasCtx.globalCompositeOperation = 'source-both'
        canvasCtx.fillStyle = '#FFFFFF'
        canvasCtx.fillRect(0, 0, canvasElement.width, canvasElement.height)

        // Only overwrite missing pixels.
        canvasCtx.globalCompositeOperation = 'destination-atop'
        canvasCtx.drawImage(
          results.image,
          0,
          0,
          canvasElement.width,
          canvasElement.height
        )

        canvasCtx.globalCompositeOperation = 'source-over'

        // pose-connections
        drawConnectors(canvasCtx, results.poseLandmarks, POSE_CONNECTIONS, {
          color: '#000000',
          lineWidth: 1
        })

        // pose-landmarks
        drawLandmarks(canvasCtx, results.poseLandmarks, {
          color: '#000000',
          lineWidth: 1
        })

        // facemesh tesselation
        drawConnectors(canvasCtx, results.faceLandmarks, FACEMESH_TESSELATION, {
          color: '#00000',
          lineWidth: 1
        })

        // left hand connections
        drawConnectors(canvasCtx, results.leftHandLandmarks, HAND_CONNECTIONS, {
          color: '#000000',
          lineWidth: 1
        })

        // left hand landmarks
        drawLandmarks(canvasCtx, results.leftHandLandmarks, {
          color: '#000000',
          lineWidth: 1
        })

        // right hand connections
        drawConnectors(
          canvasCtx,
          results.rightHandLandmarks,
          HAND_CONNECTIONS,
          { color: '#000000', lineWidth: 1 }
        )

        // right hand landmarks
        drawLandmarks(canvasCtx, results.rightHandLandmarks, {
          color: '#000000',
          lineWidth: 1
        })

        canvasCtx.restore()
      } else {
        canvasCtx.clearRect(0, 0, canvas.width, canvas.height)
      }
    }

    holistic.onResults(onResults)

    const camera = new Camera(video, {
      onFrame: async () => {
        await holistic.send({ image: video })
      },
      width: 1080,
      height: 1080
    })
    camera.start()
  })

  console.log(data)

  return (
    <Layout nonav>
      <Seo title={data.title} description={data.description} slug={data.link} />
      <BackNavLink location="experiments" />
      <div className="holistic-container">
        <LoadingOverlay hidden={loading} />
        <ExperimentDescription
          title={data.title}
          description={data.description}
          githubLink={data.extlink}
          defaultImage={data.ogImage}
        />
        <video className="input_video" hidden ref={videoElement}></video>
        <canvas
          className="output_canvas"
          width="1080px"
          height="1080px"
          style={{ width: '100vw', height: '100vh' }}
          ref={canvasElement}
        ></canvas>
      </div>
    </Layout>
  )
}

export default You
