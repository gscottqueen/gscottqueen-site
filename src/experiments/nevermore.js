import React from 'react'
import { ExperimentDescription, BackNavLink, Layout, Seo } from '../components'
import { w } from '../const'
import { detectAnyAdblocker } from 'just-detect-adblock'
// this drawing includes an audio aspect, sound on!!

const NevermoreP5 = React.lazy(() => import('../components/lazy/nevermoreP5'))

const Singulartiy = ({ pageContext }) => {
  w &&
    detectAnyAdblocker().then((detected) => {
      console.log('working')
      console.log(detected)
      if (detected) {
        console.log(detected)
        alert(
          'This experiment requires access to some open source api calls, please turn off your browser shields and adblockers.'
        )
      }
    })
  const { data } = pageContext
  return (
    <Layout nonav>
      <Seo
        title={data.title}
        description={data.description}
        slug={data.link}
        defaultImage={data.ogImage}
      />
      <BackNavLink
        location="experiments"
        inverse
        style={{
          position: 'absolute',
          zIndex: '2',
          backgroundColor: 'black'
        }}
      />
      <div className="nevermore-container" style={{ postion: 'absolute' }}>
        <ExperimentDescription
          title={data.title}
          description={data.description}
          githubLink={data.extlink}
          inverse
          style={{ marginTop: '50px', backgroundColor: 'black' }}
        />
        {w && (
          <React.Suspense fallback={<div />}>
            <NevermoreP5 data={data} />
          </React.Suspense>
        )}
      </div>
    </Layout>
  )
}

export default Singulartiy
