import MobileDetect from 'mobile-detect'

const TestSupport = (path) => {
  const w = typeof window !== 'undefined' && window
  const md = new MobileDetect(w?.navigator?.userAgent)

  if (process.env.NODE_ENV === 'development') {
    return
  } else {
    if (md.mobile()) {
      alert(
        'This experiment would be better expereinced on desktop. redirecting you to'`${path}`
      )
      window.location = `${path}`
    }
  }
}

export default TestSupport
