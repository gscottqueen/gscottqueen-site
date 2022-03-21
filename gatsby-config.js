const url =
  process.env.NODE_ENV === 'development'
    ? 'localhost:8000'
    : `https://www.gscottqueen.com`

module.exports = {
  trailingSlash: 'never',
  siteMetadata: {
    title: `G. Scott Queen | Artist`,
    description: `Conceptual artist combining technology and design for one of a kind installations in unique spaces.`,
    baseUrl: url,
    defaultImage: `/images/gscottqueen.png`,
  },
  plugins: [
    'gatsby-plugin-netlify',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-image',
    'gatsby-plugin-mdx-frontmatter',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        extensions: ['.mdx', '.md'],
      },
      defaultLayouts: {
        writing: require.resolve(`${__dirname}/src/templates/article-template`),
        gallery: require.resolve(`${__dirname}/src/templates/gallery-template`),
        listing: require.resolve(`${__dirname}/src/templates/listing-template`),
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: `${__dirname}/src/pages/`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'writing',
        path: `${__dirname}/src/pages/writing/`,
      },
    },
    {
      resolve: 'gatsby-plugin-page-creator',
      options: {
        path: `${__dirname}/src/pages/writing/`,
      },
    },
  ],
}
