import React from 'react'
import Sketch from 'react-p5'
import 'p5/lib/addons/p5.sound'
import { w } from '../../const'
import Sound from '../../sound/sleep-walk.mp3'

const SingulartiyP5 = () => {
  let particles = []
  let particle, mobile, song, button
  let angle = 10

  class Particle {
    constructor(position, size) {
      this.name = 'Ball'
      this.position = position
      this.size = size
    }
  }

  const preload = (p5) => {
    // Load the sound file
    p5.soundFormats('mp3')
    // https://archive.org/details/sleep-walk
    song = p5.loadSound(Sound)
  }

  const setup = (p5, canvasParentRef) => {
    button = p5.createButton('sound on...')
    button.size(p5.windowWidth, p5.windowHeight)
    button.position(0, 0)
    button.style('font-family', 'monospace')
    button.style('font-size', '18px')
    button.style('background', 'black')
    button.style('opacity', '.8')
    button.style('border', 'none')
    button.style('color', 'white')
    button.style('cursor', 'pointer')
    // remove default browser margin on the body element
    // so our canvas fits snug to the windows 0,0 index
    document.getElementsByTagName('body')[0].style = 'margin: 0px'
    // instantiate WEBGL
    p5.createCanvas(p5.windowWidth, p5.windowHeight, p5.WEBGL).parent(
      canvasParentRef
    )

    button.mouseClicked(() => {
      button.hide()
      if (song.isPlaying() === false) {
        song.setVolume(0.4)
        song.play()
        song.loop()
        const particle = new Particle()
        const vector = p5.createVector(
          mobile ? -100 : -500,
          mobile ? 100 : 500,
          mobile ? 100 : 500
        )
        const size = mobile ? p5.random(10, 15) : p5.random(30, 50)
        particle.position = vector
        particle.size = size
        particles.push(particle)
      }
    })

    // set to degrees for easy mode
    p5.angleMode(p5.DEGREES)
    // try to handle mobile somewhat, not ideal
    mobile = p5.windowWidth < 900 ? true : false

    mobile
      ? p5.camera(-p5.width, p5.width / 2 - 100, angle)
      : p5.camera(-p5.width / 3, p5.width - 500, angle)

    p5.noStroke()
  }

  const draw = (p5) => {
    if (song && song.isPlaying() && p5.frameCount % 200 === 0) {
      // form a new Particle object
      const particle = new Particle()
      // include it's details
      const vector = p5.createVector(
        p5.random(-p5.width * 1.2, p5.width * 1.2),
        p5.random(-p5.width * 1.2, p5.width * 1.2),
        p5.random(-p5.width * 1.2, p5.width * 1.2)
      )
      const size = mobile ? p5.random(10, 15) : p5.random(30, 50)
      particle.position = vector
      particle.size = size
      particles.push(particle)
    }
    // set up mutable location coordinate variables
    let locX, locY, locZ
    // click screen to rotate angle
    p5.orbitControl(4, 4)
    // start our angle from the global variable
    p5.rotateX(angle)
    p5.rotateY(angle)
    p5.rotateZ(angle)

    // establish initial material characteristics
    // make them all shinny objects
    p5.shininess(20)
    // what color gets reflected
    p5.specularColor(255)
    p5.specularMaterial(255)

    // from our particle objects create spheres
    for (let i = 0; i < particles.length; i++) {
      // get the particle object referenced from current index
      particle = particles[i]
      // mutate loc variables
      locX = particle.position.x
      locY = particle.position.y
      locZ = particle.position.z
      // move to the loc coordinates
      p5.push() // do this in a push+pop to set back origin each time
      p5.translate(locX, locY, locZ)
      // set up where our light source for these particles comes from, center origin
      p5.pointLight(255, 255, 255, 0, 0, 0)
      // create sphere
      p5.sphere(particle.size)
      // update position adding gravity each time
      // this will pull the particles to the center allong our axis
      particle.position.x =
        Math.sign(locX) === -1
          ? (locX += mobile ? 0.1 : 0.3)
          : (locX += mobile ? -0.1 : -0.3)
      particle.position.y =
        Math.sign(locY) === -1
          ? (locY += mobile ? 0.1 : 0.3)
          : (locY += mobile ? -0.1 : -0.3)
      particle.position.z =
        Math.sign(locZ) === -1
          ? (locZ += mobile ? 0.1 : 0.3)
          : (locZ += mobile ? -0.1 : -0.3)
      if (locX <= 0.5 && locY <= 0.5 && locZ <= 0.5) {
        particle.size =
          particle.size >= 0 ? (particle.size += -0.1) : particle.size
      }
      p5.pop()
    }
    // create our inner hypercube square
    for (let i = 0; i < 4; i++) {
      // each time increase size by 50x
      let coordinate = mobile ? i * 10 : i * 50
      // create x number of spheres per square
      for (let j = 0; j < 500; j++) {
        p5.push()
        p5.ambientLight(255)
        // we limit the location by square dimensions
        p5.translate(
          p5.random(-coordinate, coordinate),
          p5.random(-coordinate, coordinate),
          p5.random(-coordinate, coordinate)
        )
        // create a single pixel sphere
        p5.sphere(mobile ? 0.3 : 1.5)
        p5.pop()
      }
    }

    // establish outer sphere material characteristics
    // make them all shinny objects
    p5.shininess(20)
    // what color gets reflected
    p5.specularColor(255)
    p5.specularMaterial(255)
    // create a pointlight on the outside of sphere
    p5.pointLight(255, 255, 255, p5.width, p5.width, p5.width)
    // create our sphere
    p5.sphere(p5.width)

    // increment variables
    angle += 0.2
  }

  return (
    w && (
      <React.Suspense fallback={<div />}>
        <Sketch
          className="sketch-singularity"
          setup={setup}
          draw={draw}
          preload={preload}
        />
      </React.Suspense>
    )
  )
}

export default SingulartiyP5
