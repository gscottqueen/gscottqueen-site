import React from 'react'
import Sketch from 'react-p5'
import RiTa from 'rita'
import { LoadingOverlay } from '../index'
import { w } from '../../const'
import { iOS } from '../../utils/iOS'

import RavensVideo from '../../video/raven-flight.mp4'
import RavensTrimmed from '../../video/ravens-trimmed.mp4'

let RAVEN = ''

const INFO = {}
INFO.time_opened = new Date()
INFO.previous_requests =
  history.length > 0
    ? `you are being tracked through your last ${history.length} request`
    : null

const API_KEY = 'd29394918b24428581709b373f7ddb29'

let words,
  typographicVideo,
  resdiv,
  poemdiv,
  button,
  playing,
  ravensVideo,
  ravensSoundVideo,
  count = 0

const drawTypographicVideo = (p5) => {
  p5.textFont('monospace')
  // set dimensions of our captured graphic
  typographicVideo.image(ravensVideo, 0, -40, 210, 180)

  // create a pre text response from the tokenized array
  // using these characters to
  let res = '<pre style="margin: 0;">'
  if (words.length > 45) {
    for (let i = 0; i < 60; i++) {
      // rows
      let line = ''
      for (let j = 0; j < 185; j++) {
        // cols
        const x = typographicVideo.get(Math.round(j * 1.143), i * 2)
        let f = 1 - x[0] / 1500
        f = f * f // square factor to lighten up, because less bright characters
        const v = Math.round(f * 40)
        const index = Math.floor(Math.random(words[v].length))
        const chr = words[v][index]
        line += chr
      }
      res += line + '<br>'
    }
  }
  res += '</pre>'
  resdiv.class('resdiv')
  resdiv.html(res)
}

const drawPoem = () => {
  console
  let stringFromPoem = words[count]
  let poem = `<div style="
    position: absolute;
    font-size: 60px;
    width: 100vw;
    height: 100vh;
    margin-top: calc((100vh / 2) - 60px);
    top: 0;
    text-align: center;">${stringFromPoem}</div>`

  poemdiv.html(poem)
}

const toggleVid = () => {
  if (!playing) {
    ravensVideo.loop()
    ravensSoundVideo.loop()
    // hide the button after video starts
    button.hide()
    // set playing state to true
    playing = true
  }
}

const NevermoreP5 = () => {
  const preload = () => {}

  const setup = (p5) => {
    try {
      fetch('https://api.ipify.org?format=json').then((response) => {
        if (!response.ok) {
          throw Error(response.statusText)
        }
      })
    } catch (error) {
      console.log(error)
    }

    try {
      fetch('https://api.ipify.org?format=json')
        .then((response) => {
          if (response.ok) return response.json()
          else throw new Error('Status code error :' + response.status)
        })
        .then((data) => {
          INFO.ip_address = data.ip
          try {
            fetch(`https://ip-api.com/json/${data.ip}`)
              .then((response) => {
                if (response.ok) return response.json()
                else throw new Error('Status code error :' + response.status)
              })
              .then((data) => {
                INFO.country = data.country
                INFO.timezone = data.timezone
                INFO.region = data.regionName
                INFO.city = data.city
                INFO.zip = data.zip
                INFO.latitude = data.lat
                INFO.longitude = data.lon
                INFO.internet_service_provider = data.isp
                INFO.origin = data.org
                INFO.hostname = data.query
                try {
                  fetch(
                    `https://api.ipgeolocation.io/astronomy?apiKey=${API_KEY}&lat=${data.lat}&long=${data.lon}`
                  )
                    .then((response) => {
                      if (response.ok) return response.json()
                      else
                        throw new Error('Status code error :' + response.status)
                    })
                    .then((data) => {
                      INFO.length_of_day = data.day_length
                      INFO.solar_noon = data.solar_noon
                      INFO.current_distance_from_the_sun = data.sun_distance
                      INFO.current_distance_from_the_moon = data.moon_distance
                    })
                } catch (error) {
                  console.error('error', error)
                }
              })
          } catch (error) {
            console.error('error', error)
          }
        })
    } catch (error) {
      console.error('error', error)
    }

    // set up our canvas
    p5.createCanvas(p5.windowWidth, p5.windowHeight)

    // paragraph for display of tokenized results
    resdiv = p5.createDiv('')
    resdiv.hide()
    resdiv.style('position', 'absolute')
    resdiv.style('top', 0)

    // video capture elements
    typographicVideo = p5.createGraphics(p5.width, p5.height)

    // paragraph for display of the modified poem
    poemdiv = p5.createDiv('')

    // most browsers will require the user to click and play the video
    const message =
      iOS() === true
        ? 'sound on ... if iOS, toggle off silent mode'
        : 'sound on...'
    button = p5.createButton(message)
    button.size(p5.windowWidth, p5.windowHeight)
    button.position(0, 0)
    button.style('font-family', 'monospace')
    button.style('font-size', '16px')
    button.style('border', 'none')
    button.style('background', 'white')
    button.style('cursor', 'pointer')

    // play video when button is pressed
    button.mousePressed(toggleVid)

    // bring in the video from our files
    ravensVideo = p5.createVideo(RavensVideo)
    ravensVideo.style('display', 'none')

    // we underlay sound from this video
    ravensSoundVideo = p5.createVideo(RavensTrimmed)
    ravensSoundVideo.style('display', 'none')

    p5.noCanvas() // we create our own

    // every 1000ms display that index of the tokenized data
    w.setInterval(function () {
      if (playing === true) {
        resdiv.show()
        words !== undefined && drawPoem()
        console.log(words)
        if (count > words.length) count = 0
        count++
      }
    }, 1000)
  }

  const draw = (p5) => {
    words = RiTa.tokenize(RAVEN.toUpperCase())
    // replace with space
    words.forEach((word, i) =>
      word === ':' || word === '(' || word === ')' || word === '\n'
        ? (words[i] = ' ')
        : null
    )

    RAVEN = '' // clear the string each frame

    for (let [k, v] of Object.entries(INFO)) {
      RAVEN = `${RAVEN} ${k} ${v} \n \n`
    }

    drawTypographicVideo(p5)
  }

  return (
    w && (
      <>
        <div id="p5_loading">
          <LoadingOverlay />
        </div>
        <React.Suspense fallback={<div />}>
          <Sketch
            className="sketch-nevermore"
            setup={setup}
            draw={draw}
            preload={preload}
          />
        </React.Suspense>
      </>
    )
  )
}

export default NevermoreP5
