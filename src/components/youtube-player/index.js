import React from 'react'
import { w } from '../../const'
const YoutubePlayer = ({ title, videoRef, ...props }) => {
  const [navHeight, setNavHeight] = React.useState(0)

  React.useEffect(() => {
    const headingElement = document.getElementsByTagName('h1')
    setNavHeight(headingElement[0].offsetHeight)
  }, [setNavHeight])

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
