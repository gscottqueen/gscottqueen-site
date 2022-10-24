/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

async function makeWritingPages({ actions, graphql, reporter }) {
  const result = await graphql(`
    query {
      allMdx(filter: { fileAbsolutePath: { regex: "/content/writing/" } }) {
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
      path: `/${page.slug}`,
      component: require.resolve('./src/templates/article-template'),
      context: {
        slug: page.slug,
        body: page.body,
        frontmatter: page.frontmatter
      }
    })
  })
}

async function makeExperimentsPages({ actions, graphql, reporter }) {
  const result = await graphql(`
    query {
      allDataJson(filter: {dir: {eq: "experiments"}}) {
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
        component: require.resolve(`./src/experiments/${item.link}`),
        context: {
          data: item
        }
      })
    }
    ))
  })
}

async function makeArtListingPage({ actions, graphql, reporter }) {
  const result = await graphql(`
    query {
      allDataJson(filter: {dir: {eq: "art"}}) {
        edges {
          node {
            title
            items {
              description
              link
              ogImage
              title
              ogDescription
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

  actions.createPage({
    path: '/art',
    component: require.resolve('./src/pages/art/art-listing'),
    context: {
      data: groups[0].node.items
    }
  })
}

async function makeGalleryPages({ actions, graphql, reporter }) {
  const result = await graphql(`
    query {
      allMdx(filter: {fileAbsolutePath: {regex: "/content/art/"}}) {
        nodes {
          slug
          frontmatter {
            alt
            archived
            description
            group
            image
            image_title
            medium
            slug
            related {
              experiment
              path
              title
            }
            title
            year
          }
          body
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panic('failed to create posts ', result.errors)
  }

  const works = result.data.allMdx.nodes

  works.forEach((work) => {
    actions.createPage({
      path: `/${work.slug}`,
      component: require.resolve('./src/templates/gallery-template'),
      context: {
        slug: work.slug,
        data: work.frontmatter
      }
    })
  })
}

exports.createPages = async ({ actions, graphql, reporter }) => {
  await Promise.all([
    makeWritingPages({ actions, graphql, reporter }),
    makeExperimentsPages({ actions, graphql, reporter }),
    makeArtListingPage({ actions, graphql, reporter }),
    makeGalleryPages({ actions, graphql, reporter })
  ])
}
