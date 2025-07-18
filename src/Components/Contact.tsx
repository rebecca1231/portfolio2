import { FormEvent, useState } from 'react'

import emailjs, { init } from '@emailjs/browser'
import { Container } from './Projects/MovieQuiz'
import styled from 'styled-components'
const ID = import.meta.env.VITE_ID as string
init(ID)

const Triangle = styled.div`
  width: 0;
  height: 0;
  border-left: 500px solid transparent;
  border-right: 500px solid transparent;
  background: #fafafa;
  border-top: 10vw solid #fff;

  @media (max-width: 1000px) {
    border-left: 50vw solid transparent;
    border-right: 50vw solid transparent;
  }
`
export function Contact() {
  const [sent, setSent] = useState(false)
  const [sending, setSending] = useState(false)
  const [error, setError] = useState(false)

  const activeSpinner = sending ? 'active' : ''

  function sendEmail(e: FormEvent<HTMLFormElement> | any) {
    e.preventDefault()
    setSending(true)

    emailjs.sendForm('service_ts0cbib', 'template_ymcpv5c', e.target, ID).then(
      (result) => {
        setSent(true)
        setSending(false)
      },
      (error) => {
        setSending(false)
        setError(true)
      }
    )
  }

  function showMessage() {
    if (sent) {
      return (
        <div style={{ paddingBottom: '2rem' }}>
          <h3>Thanks for getting in touch!</h3>
          <h4>I'm looking forward to reading your message.</h4>
        </div>
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
    <Container>
      <Triangle />
      {!sent && !error ? (
        <div style={{ padding: '1rem 2rem', backgroundColor: '#fafafa' }}>
          <h2
            className='ui large header'
            id='contact'
            style={{
              marginBottom: '1rem',
            }}
          >
            Get in Touch
          </h2>
          <div className='ui container'>
            <form className='ui form' onSubmit={sendEmail}>
              <div className='field'>
                <label>Name</label>
                <input required type='text' name='user_name' placeholder='First Last' />
              </div>
              <div className='field'>
                <label>Email</label>
                <input
                  required
                  className='field'
                  type='email'
                  name='user_email'
                  placeholder='email@example.com'
                  style={{ padding: '5px' }}
                />
              </div>
              <div className='field'>
                <label>Message</label>

                <textarea required className='field' name='message' placeholder='Write your message here.' />
              </div>

              <div className='field send-button'>
                <button className='ui button teal' type='submit' disabled={sending}>
                  {sending ? 'Sending...' : 'Send'}
                </button>
              </div>
              <div className={`ui medium text loader ${activeSpinner}`}>Sending</div>
            </form>
          </div>
        </div>
      ) : (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>{showMessage()}</div>
      )}
    </Container>
  )
}
