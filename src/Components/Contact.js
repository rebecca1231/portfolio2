import React, {useState} from 'react';
import emailjs from 'emailjs-com';
import{ init } from 'emailjs-com';
init("user_fXK9H9tV0VfVcqQbo28id");


export default function ContactUs() {
const [sent, setSent] = useState(false)

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_ts0cbib', 'template_ymcpv5c', e.target, 'user_fXK9H9tV0VfVcqQbo28id')
      .then((result) => {
          console.log(result.text);
          setSent(true)

      }, (error) => {
          console.log(error.text);
      });

  }

  return (
    <div className="ui container">
    {sent === false ? 
(<>
    <form className="ui form" onSubmit={sendEmail}>
      <input type="hidden" name="contact_number"   />
      <label>Name</label>
      <input required className="field" type="text" name="user_name" placeholder="First Last" />
      <label>Email</label>
      <input required className="field" type="email" name="user_email" placeholder="email@example.com"/>
      <label>Message</label>
      <textarea required className="field" name="message" placeholder="Write your message here." />
      <input className="ui button teal" type="submit" value="Send" />
    </form>
    </>)
    :(
    <div className="ui huge header">
    <h3 style={{marginTop:"1rem"}} >Thank you!</h3>
    <p>Your message has been sent!</p>
    </div>)
  }
  </div>
  );
}