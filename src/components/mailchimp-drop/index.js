import React from 'react'
import Mailchimp from 'react-mailchimp-form'

import './index.css'

const MailChimpDrop = ({ cta }) => {
  return (
    <div className="mailchimp-drop-wrapper">
      <h2>{cta ? cta : 'Get the drop!'}</h2>
      <Mailchimp
        action="https://gscottqueen.us14.list-manage.com/subscribe/post?u=036f380089a46d5d0d691b193&amp;id=a075acbe01&amp;f_id=009dafe0f0"
        className="mailchimp-drop-form"
        fields={[
          {
            name: 'EMAIL',
            placeholder: 'Email',
            type: 'email',
            required: true
          }
        ]}
      />
    </div>
  )
}

export default MailChimpDrop
