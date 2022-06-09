import MobileDetect from 'mobile-detect'
import { w } from '../const'

const TestSupport = () => {
  const md = new MobileDetect(w?.navigator?.userAgent)

  if (process.env.NODE_ENV === 'development') {
    return
  } else {
    if (md.mobile()) {
      if (confirm('This experiment would be better expereinced on desktop.')) {
        console.log('I did warn you.')
      }
    }
  }
}

export default TestSupport
