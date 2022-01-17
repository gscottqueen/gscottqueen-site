import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

function SEO({ description, lang, meta, title, defaultImage }) {
  const { site } = useStaticQuery(
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
      }
    `
  );

  const metaDescription = description !== undefined ? description : site.siteMetadata.description;
  const defaultTitle = title !== undefined ? `G. Scott Queen | ${title}` : site.siteMetadata?.title;
  const defaultMetaImage = defaultImage !== undefined ? `${site.siteMetadata.baseUrl}${defaultImage}` : `${site.siteMetadata.baseUrl}${site.siteMetadata.defaultImage}`

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={defaultTitle}
      link={[
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
        },
        {
          rel: "stylesheet",
          href:
            "https://fonts.googleapis.com/css2?family=Syne+Mono&display=swap",
        },
        {
          rel: "stylesheet",
          href:
            "https://fonts.googleapis.com/css2?family=Rock+Salt&display=swap",
        },
      ]}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `og:url`,
          content: site.siteMetadata.baseUrl
        },
        {
          property: `og:image`,
          content: defaultMetaImage,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          name: `twitter:card`,
          content: `summary_large_image`,
        },
        {
          name: `twitter:site`,
          content: site.siteMetadata.baseUrl
        },
        {
          name: `twitter:creator`,
          content: defaultTitle,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        {
          name: `twitter:image`,
          content: defaultMetaImage,
        },
      ].concat(meta)}
    />
  );
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
};

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string,
};
export default SEO;
