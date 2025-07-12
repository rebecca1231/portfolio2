import React, { useState } from 'react'
import styled from 'styled-components'

import emailjs from 'emailjs-com'
import { init } from 'emailjs-com'
const ID = 'ID'
init(ID)

const Triangle = styled.div`
  width: 0;
  height: 0;
  border-left: 400px solid transparent;
  border-right: 400px solid transparent;

  border-top: 10vw solid #fff;

  @media (max-width: 750px) {
    border-left: 45vw solid transparent;
    border-right: 45vw solid transparent;
    margin-top: 2rem;
  }
`

export default function ContactUs() {
  const [sent, setSent] = useState(false)
  const [sending, setSending] = useState(false)
  const [error, setError] = useState(false)

  const activeSpinner = sending ? 'active' : ''

  function sendEmail(e) {
    e.preventDefault()
    setSending(true)

    emailjs.sendForm('service_ts0cbib', 'template_ymcpv5c', e.target, ID).then(
      (result) => {
        console.log(result.text)
        setSent(true)
        setSending(false)
      },
      (error) => {
        console.log(error.text)
        setSending(false)
        setError(true)
      }
    )
  }

  function showMessage() {
    if (sent) {
      return (
        <>
          <h3 style={{ marginTop: '1rem' }}>Thanks for getting in touch!</h3>
          <h4>I'm looking forward to reading your message.</h4>
        </>
      )
    }
    if (error) {
      return (
        <>
          <h3 style={{ marginTop: '1rem' }}>Oops!</h3>
          <h4>It seems you've encountered a network error.</h4>
          <h4>Please reload the page and try again.</h4>
        </>
      )
    }
  }

  return (
    <div
      style={{
        backgroundColor: '#fafafafa',
        maxWidth: '800px',
        margin: 'auto',
        padding: '0 15px 15px',
        borderRadius: '10px',
        minHeight: '300px'
      }}
    >
      <Triangle />

      {sent === false && error === false ? (
        <>
          <h2
            className="ui container large header"
            id="contact"
            style={{
              marginBottom: '1rem'
            }}
          >
            Get in Touch
          </h2>
          <div className="ui container">
            <form className="ui form" onSubmit={sendEmail}>
              <input type="hidden" name="contact_number" />
              <div className="field">
                <label>Name</label>
                <input
                  required
                  type="text"
                  name="user_name"
                  placeholder="First Last"
                />
              </div>
              <div className="field">
                <label>Email</label>
                <input
                  required
                  className="field"
                  type="email"
                  name="user_email"
                  placeholder="email@example.com"
                  style={{ padding: '5px' }}
                />
              </div>
              <div className="field">
                <label>Message</label>

                <textarea
                  required
                  className="field"
                  name="message"
                  placeholder="Write your message here."
                />
              </div>

              <div className="field">
                <input
                  className="ui button teal"
                  type="submit"
                  disabled={sending}
                  value={!sending ? 'Send' : 'Sending...'}
                />
              </div>
              <div className={`ui medium text loader ${activeSpinner}`}>
                Sending
              </div>
            </form>
          </div>
        </>
      ) : (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
          {showMessage()}
        </div>
      )}
    </div>
  )
}
