/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */

// You can delete this file if you're not using it
// gatsby-browser.js
// Logs when the client route changes
exports.onRouteUpdate = ({ location, prevLocation }) => {
  window.prevLocation = prevLocation === null ? undefined : location
}
