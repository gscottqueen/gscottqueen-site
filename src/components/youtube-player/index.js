import React from 'react'
import { w } from '../../const'
const YoutubePlayer = ({ title, videoRef, ...props }) => {
  const [navHeight, setNavHeight] = React.useState(0)

  React.useEffect(() => {
    // get the elements
    const backLinkNavElement = document.getElementsByClassName(
      'back-nav-link-wrapper'
    )
    const headingElement = document.getElementsByTagName('h1')
    const marginElement = document.getElementsByTagName('section')

    // get the style values
    const computedStyle =
      marginElement.length && w.getComputedStyle(marginElement[0])

    // get numbers
    const backLinkNavElementHeight = backLinkNavElement.length
      ? backLinkNavElement[0].offsetHeight
      : 0
    const headingElementHeight = headingElement.length
      ? headingElement[0].offsetHeight
      : 0
    const marginElementHeight = marginElement.length
      ? computedStyle['margin-top'].match(/(\d+)/)[1]
      : 0

    console.log(backLinkNavElementHeight)
    console.log(headingElementHeight)
    console.log(Number(`${marginElementHeight}`))

    // get calculation
    const calculatedHeight =
      backLinkNavElementHeight +
      headingElementHeight +
      Number(`${marginElementHeight}`)

    setNavHeight(calculatedHeight)
  }, [setNavHeight])

  console.log(w.innerHeight, navHeight)

  return (
    <iframe
      width="100%"
      height={`${w.innerHeight - navHeight}`}
      src={videoRef}
      title={title || 'YouTube video player'}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      {...props}
    ></iframe>
  )
}

export default YoutubePlayer
