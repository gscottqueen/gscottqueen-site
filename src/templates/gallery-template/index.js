import React from 'react'
// import { graphql, useStaticQuery } from 'gatsby'

import { Layout, Seo, Image, BackNavLink } from '../../components'
import './index.css'

const GalleryTemplate = ({ pageContext }) => {
  const { data, slug } = pageContext

  return (
    <Layout nonav>
      <Seo
        title={data.title}
        description={`${data.alt}; ${data.medium}`}
        defaultImage={data.image}
        slug={slug}
      />
      <BackNavLink location="art/archives" close type="gallery" />
      <section id={data.title} className="gallery-template">
        <Image src={data.image} alt={data.alt}></Image>
        <div className="citation">
          <cite>
            &quot;{data.title}&quot;, {data.year} - {data.medium}
          </cite>
        </div>
      </section>
    </Layout>
  )
}
export default GalleryTemplate
