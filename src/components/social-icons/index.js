import React from 'react'
import { Image } from '../index'

import './index.css'

const SocialIcons = () => {
  return (
    <ul className="social-icon-wrapper">
      <li>
        <button>
          <a
            href="https://www.instagram.com/gscottqueen/"
            target="_blank"
            rel="noreferrer"
          >
            <Image
              className="social-icon instagram"
              src="instagram_photo_share_icon.png"
              alt="social icon instagram"
            />
          </a>
        </button>
      </li>
      <li>
        <button>
          <a
            href="https://www.youtube.com/channel/UCYOcrfGJw1upv59yQXTH3gg"
            target="_blank"
            rel="noreferrer"
          >
            <Image
              className="social-icon youtube"
              src="youtube_social_icon.png"
              alt="social icon youtube"
            />
          </a>
        </button>
      </li>
      <li>
        <button>
          <a
            href="https://github.com/gscottqueen"
            target="_blank"
            rel="noreferrer"
          >
            <Image
              className="social-icon github"
              src="github_social_icon.png"
              alt="social icon github"
            />
          </a>
        </button>
      </li>
      <li>
        <button>
          <a
            href="https://www.reddit.com/user/gscottqueen"
            target="_blank"
            rel="noreferrer"
          >
            <Image
              className="social-icon reddit"
              src="reddit_social_icon.png"
              alt="social icon reddit"
            />
          </a>
        </button>
      </li>
    </ul>
  )
}

export default SocialIcons
