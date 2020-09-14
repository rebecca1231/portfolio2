import React, { useState } from "react";
import emailjs from "emailjs-com";
import { init } from "emailjs-com";
init("user_fXK9H9tV0VfVcqQbo28id");

export default function ContactUs() {
  const [sent, setSent] = useState(false);

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ts0cbib",
        "template_ymcpv5c",
        e.target,
        ID
      )
      .then(
        (result) => {
          console.log(result.text);
          setSent(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  }

  return (
    <div>
      {sent === false ? (
        <>
          <form className="ui inverted big form" onSubmit={sendEmail}>
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
                style={{ padding: "5px" }}
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
              <input className="ui big button teal" type="submit" value="Send" />
            </div>
          </form>
        </>
      ) : (
        <div className="ui huge header">
          <h3 style={{ marginTop: "1rem" }}>Thank you!</h3>
          <p>Your message has been sent!</p>
        </div>
      )}
    </div>
  );
}
