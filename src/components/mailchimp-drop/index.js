import React from 'react'
import Mailchimp from 'react-mailchimp-form'

const MailChimpDrop = ({ cta }) => {
  return (
    <>
      <h2>{cta ? cta : 'Get the drop!'}</h2>
      <Mailchimp
        ction="https://gscottqueen.us14.list-manage.com/subscribe/post?u=036f380089a46d5d0d691b193&amp;id=a075acbe01&amp;f_id=009dafe0f0"
        fields={[
          {
            name: 'EMAIL',
            placeholder: 'Email',
            type: 'email',
            required: true
          }
        ]}
      />
    </>
  )
}

export default MailChimpDrop
