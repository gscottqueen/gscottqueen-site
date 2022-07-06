/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// writings under /writing
async function makeWritingPages({ actions, graphql, reporter }) {
  const result = await graphql(`
    query {
      allMdx(filter: { fileAbsolutePath: { regex: "/writing/" } }) {
        nodes {
          body
          slug
          frontmatter {
            description
            title
            image
            related {
              title
              path
              experiment
            }
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
    actions.createPage({
      path: `/writing/${page.slug}`,
      component: require.resolve('./src/templates/article-template'),
      context: {
        slug: page.slug,
        body: page.body,
        frontmatter: page.frontmatter
      }
    })
  })
}

// applications under /experiments
async function makeExperimentsPages({ actions, graphql, reporter }) {
  const result = await graphql(`
    query {
      allDataJson {
        edges {
          node {
            title
            items {
              description
              extlink
              link
              ogImage
              title
            }
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panic('failed to create posts ', result.errors)
  }

  const groups = result.data.allDataJson.edges

  groups.forEach((group) => {
    group.node.items.forEach((item => {
      actions.createPage({
        path: `/experiments/${item.link}`,
        component: require.resolve(`./src/templates/experiment/${item.link}`),
        context: {
          data: item
        }
      })
    }
    ))
  })
}

exports.createPages = async ({ actions, graphql, reporter }) => {
  await Promise.all([
    makeWritingPages({ actions, graphql, reporter }),
    makeExperimentsPages({ actions, graphql, reporter })
  ])
}
