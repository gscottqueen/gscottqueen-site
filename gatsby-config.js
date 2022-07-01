const url =
  process.env.NODE_ENV === 'development'
    ? 'localhost:8000'
    : 'https://www.gscottqueen.com'

module.exports = {
  trailingSlash: 'never',
  siteMetadata: {
    title: 'G. Scott Queen | Artist',
    description: 'Research and Conceptual Art.',
    baseUrl: url,
    defaultImage: '/images/gscottqueen.png',
    siteUrl: 'https://gscottqueen.com'
  },
  plugins: [
    'gatsby-plugin-netlify',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-image',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`
      }
    },
    'gatsby-plugin-mdx-frontmatter',
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        extensions: ['.mdx', '.md']
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: `${__dirname}/src/pages`
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'writing',
        path: `${__dirname}/src/content/writing`
      }
    },
    {
      resolve: 'gatsby-plugin-plausible',
      options: {
        domain: 'gscottqueen.com'
      }
    },
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://www.gscottqueen.com',
        sitemap: 'https://www.gscottqueen.com/sitemap/sitemap-index.xml',
        policy: [{userAgent: '*', allow: '/'}]
      }
    }
  ]
}
