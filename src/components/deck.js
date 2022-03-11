import { graphql, useStaticQuery } from "gatsby";
import React, { useState, useMemo } from 'react'
import { useSprings, animated, to } from 'react-spring'
import { useGesture } from '@use-gesture/react'
import Polaroid from './polaroid'
import './deck.css'

// These two are just helpers, they curate spring data, values that are later being interpolated into css
const travelTo = i => ({ x: 0, y: i * -4, scale: 1, rot: -10 + Math.random() * 20, delay: i * 100 })
const travelFrom = i => ({ x: 0, rot: 0, scale: 1.5, y: -1000 })
// This is being used down there in the view, it interpolates rotation and scale into a css transform
const trans = (r, s) => `perspective(1500px) rotateX(30deg) rotateY(${r / 10}deg) rotateZ(${r}deg) scale(${s})`

const Deck = () => {

  const cards = []

  const data = useStaticQuery(graphql`
    query {
      allMdx {
        nodes {
          frontmatter {
            title
            year
            medium
            image
            alt
            group
            slug
          }
        }
      }
    }
  `)

  const markdownSources = data.allMdx.nodes
  markdownSources.forEach(image => cards.push(image.frontmatter.image))

  const [gone] = useState(() => new Set()) // The set flags all the cards that are flicked out
  const [props, set] = useSprings(cards.length, i => ({ ...travelTo(i), from: travelFrom(i) })) // Create a bunch of springs using the helpers above
  // Create a gesture, we're interested in down-state, delta (current-pos - click-pos), direction and velocity
  const bind = useGesture(({ args: [index], down, delta: [xDelta], distance, direction: [xDir], velocity }) => {
  console.log(down, index)
    const trigger = velocity > 0.2 // If you flick hard enough it should trigger the card to fly out
    const dir = xDir < 0 ? -1 : 1 // Direction should either point left or right
    if (!down && trigger) gone.add(index) // If button/finger's up and trigger velocity is reached, we flag the card ready to fly out
    set(i => {
      if (index !== i) return // We're only interested in changing spring-data for the current spring
      const isGone = gone.has(index)
      const x = isGone ? (200 + window.innerWidth) * dir : down ? xDelta : 0 // When a card is gone it flys out left or right, otherwise goes back to zero
      const rot = xDelta / 100 + (isGone ? dir * 10 * velocity : 0) // How much the card tilts, flicking it harder makes it rotate faster
      const scale = down ? 1.1 : 1 // Active cards lift up a bit
      return { x, rot, scale, delay: undefined, config: { friction: 50, tension: down ? 800 : isGone ? 200 : 500 } }
    })
    if (!down && gone.size === cards.length) setTimeout(() => gone.clear() || set(i => travelTo(i)), 600)
  })
  // Now we're just mapping the animated values to our view, that's it. Btw, this component only renders once.

  function shuffle(array) {
    let currentIndex = array.length,  randomIndex;

    // While there remain elements to shuffle...
    while (currentIndex != 0) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }

    return array;
  }
  const mixedCards = shuffle(cards)
  return props.map(({ x, y, rot, scale }, i) => (
    <animated.div
      key={i}
      style={{ transform: to([x, y], (x, y) => `translate3d(${x}px,${y}px,0)`) }} >
      {/* This is the card itself, we're binding our gesture to it (and inject its index so we know which is which) */}
      <animated.div style={{ transform: to([rot, scale], trans)}} {...bind(i)}>
        <Polaroid
          src={mixedCards[i]}
          style={{
            height: '600px',clipPath: `polygon(12% 15%, 92% 15%, 92% 78%, 11% 79%)`}}/>
      </animated.div>
    </animated.div>
  ))
}

export default Deck
