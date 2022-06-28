import React from 'react'
import { Link } from 'gatsby'
import './index.css'

const RelatedWorks = ({ related }) => {
  return (
    <>
      <h3>Related Works</h3>
      <ul className="related-works">
        {related.map((item, i) => (
          <div className="related-works-block" key={item.title + i}>
            <Link to={item.path}>
              <li>{item.title}</li>
            </Link>
            {item.experiment && <span className="tag">experiment</span>}
          </div>
        ))}
      </ul>
    </>
  )
}

export default RelatedWorks
