import MobileDetect from 'mobile-detect'
import { w } from '../const'

const TestSupport = (path) => {
  const md = new MobileDetect(w?.navigator?.userAgent)

  if (process.env.NODE_ENV === 'development') {
    return
  } else {
    if (md.mobile()) {
      if (
        confirm(
          `This experiment would be better expereinced on desktop. Redirecting you back to ${path}`
        )
      ) {
        w.location = `${path}`
      }
    }
  }
}

export default TestSupport
