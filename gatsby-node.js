/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

exports.createPages = async ({ actions, graphql, reporter }) => {
  const result = await graphql(`
    query {
      allMdx(filter: { fileAbsolutePath: { regex: "/writing/" } }) {
        nodes {
          body
          slug
          frontmatter {
            description
            title
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panic('failed to create posts ', result.errors)
  }

  const pages = result.data.allMdx.nodes

  pages.forEach((page) => {
  console.log(page)
    actions.createPage({
      path: `/writing/${page.slug}`,
      component: require.resolve('./src/templates/article-template'),
      context: {
        slug: page.slug,
        body: page.body,
        frontmatter: page.frontmatter
      },
    })
  })
}
