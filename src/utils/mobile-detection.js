import MobileDetect from 'mobile-detect'
import { w } from '../const'

const TestSupport = () => {
  const md = new MobileDetect(w?.navigator?.userAgent)
  if (md.mobile()) {
    confirm('This experiment would be better expereinced on desktop.')
  }
}

export default TestSupport
