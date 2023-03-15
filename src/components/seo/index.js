import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

function Seo({ description, lang, meta, title, defaultImage, slug }) {
  const { site, allSitePage, allFile } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            baseUrl
            defaultImage
          }
        }
        allFile(filter: { sourceInstanceName: { eq: "images" } }) {
          nodes {
            publicURL
            base
          }
        }
        allSitePage {
          edges {
            node {
              path
            }
          }
        }
      }
    `
  )

  const metaDescription =
    description.length > 0 ? description : site.siteMetadata.description

  const defaultTitle =
    title !== undefined ? `G. Scott Queen | ${title}` : site.siteMetadata?.title

  const findDefaultImage =
    defaultImage && allFile.nodes.find(({ base }) => base === defaultImage)

  const defaultMetaImage =
    findDefaultImage !== undefined
      ? `${site.siteMetadata.baseUrl}${findDefaultImage?.publicURL}`
      : `${site.siteMetadata.baseUrl}${site.siteMetadata?.defaultImage}`

  let regexPattern = new RegExp(`${slug}$`)

  const nodeObj =
    slug &&
    allSitePage.edges.filter((page) =>
      page.node.path.match(regexPattern) ? page.node.path : null
    )

  const canonicalURL =
    nodeObj &&
    nodeObj.length > 0 &&
    `${site.siteMetadata.baseUrl}${nodeObj[0].node.path}`

  return (
    <Helmet
      defer={false}
      htmlAttributes={{
        lang
      }}
      title={defaultTitle}
      meta={[
        {
          name: 'description',
          content: metaDescription
        },
        {
          itemprop: 'name',
          content: defaultTitle
        },
        {
          itemprop: 'description',
          content: metaDescription
        },
        {
          itemprop: 'image',
          content: defaultMetaImage
        },
        {
          property: 'og:title',
          content: defaultTitle
        },
        {
          property: 'og:type',
          content: 'website'
        },
        {
          name: 'og:url',
          content: canonicalURL || site.siteMetadata.baseUrl
        },
        {
          property: 'og:image',
          content: defaultMetaImage
        },
        {
          property: 'og:description',
          content: metaDescription
        },
        {
          name: 'twitter:card',
          content: 'summary_large_image'
        },
        {
          name: 'twitter:site',
          content: canonicalURL || site.siteMetadata.baseUrl
        },
        {
          name: 'twitter:creator',
          content: defaultTitle
        },
        {
          name: 'twitter:title',
          content: defaultTitle
        },
        {
          name: 'twitter:description',
          content: metaDescription
        },
        {
          name: 'twitter:image',
          content: defaultMetaImage
        },
        {
          name: 'viewport',
          id: 'viewport',
          content: 'width=device-width,user-scalable=yes,initial-scale=1'
        }
      ].concat(meta)}
      link={[
        {
          rel: 'canonical',
          href: canonicalURL || site.siteMetadata.baseUrl
        },
        {
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com'
        },
        {
          rel: 'stylesheet',
          href:
            'https://fonts.googleapis.com/css2?family=Syne+Mono&display=swap'
        },
        {
          rel: 'stylesheet',
          href:
            'https://fonts.googleapis.com/css2?family=Rock+Salt&display=swap'
        }
      ]}
    />
  )
}

Seo.defaultProps = {
  lang: 'en',
  meta: [],
  description: ''
}

Seo.propTypes = {
  description: PropTypes.string,
  title: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object)
}
export default Seo
