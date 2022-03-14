import { graphql, useStaticQuery } from "gatsby";
import React from 'react'
import { useSprings, animated, to } from 'react-spring'
import Polaroid from './polaroid'
import './deck.css'

// These two are just helpers, they curate spring data, values that are later being interpolated into css
const travelTo = i => ({ x: 0, y: i * -4, scale: 1, rot: -10 + Math.random() * 20, delay: i * 100 })
const travelFrom = () => ({ x: 0, rot: 0, scale: 1.5, y: -1000 })
// This is being used down there in the view, it interpolates rotation and scale into a css transform
const trans = (r, s) => `perspective(1500px) rotateX(30deg) rotateY(${r / 10}deg) rotateZ(${r}deg) scale(${s})`

const Deck = () => {
  const cards = []

  const data = useStaticQuery(graphql`
    query {
      allMdx (filter: {frontmatter: {group: {ne: null}}}) {
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
  //build cards array from nodes
  markdownSources.forEach(image => cards.push(image.frontmatter.image))
  // Create a bunch of springs using the helpers above
  const [props] = useSprings(cards.length, i => ({ ...travelTo(i), from: travelFrom(i) }))

  return props.map(({ x, y, rot, scale }, i) => (
    <animated.div className="card-wrapper"
      key={i}
      style={{ transform: to([x, y], (x, y) => `translate3d(${x}px, ${y}px, 0)`) }}
       >
      <animated.div
        className="card"
        style={{ transform: to([rot, scale], trans)}}
        >
        <Polaroid
          slug={markdownSources[i].frontmatter.slug}
          title={markdownSources[i].frontmatter.title}
          src={ cards[i] }
          style={{
            height: '500px',
            clipPath: `polygon(12% 13%, 91% 13%, 90% 85%, 12% 85%)`}}
            />
      </animated.div>
    </animated.div>
  ))
}

export default Deck
