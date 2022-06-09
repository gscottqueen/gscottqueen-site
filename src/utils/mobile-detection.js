import MobileDetect from 'mobile-detect'
import { w } from '../const'

const TestSupport = () => {
  const md = new MobileDetect(w?.navigator?.userAgent)
  !md.mobile() &&
    alert('This experiment would be better expereinced on desktop.')
}

export default TestSupport
