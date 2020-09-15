import React, { useState } from "react";
import styled from "styled-components";

import emailjs from "emailjs-com";
import { init } from "emailjs-com";
import {ID} from '../config'
init(ID);

const Triangle = styled.div`
  width: 0;
  height: 0;
  margin: 1rem auto 0;
  border-left: 40vw solid transparent;
  border-right: 40vw solid transparent;

  border-top: 10vw solid #fff;
`;

export default function ContactUs() {
  const [sent, setSent] = useState(false);

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm("service_ts0cbib", "template_ymcpv5c", e.target, ID).then(
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
    <div
      style={{
        backgroundColor: "#e8e8e8",
        width: "100%",
        paddingBottom: "15px"

      }}
    >
      <Triangle />
      <div
        id="contact"
        className="ui large header"
        style={{
          fontSize: "2rem",
          marginLeft: "1rem",
          marginTop: "0.5rem",
        }}
      >
        Get in Touch
      </div>
      <div className="ui container">
        {sent === false ? (
          <>
            <form className="ui big form" onSubmit={sendEmail}>
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
                <input
                  className="ui big button teal"
                  type="submit"
                  value="Send"
                />
              </div>
            </form>
          </>
        ) : (
          <div className="ui huge header">
            <h3 style={{ marginTop: "1rem" }}>Thank you!</h3>
            <p>Your message has been sent!</p>
          </div>
        )}
        <a href="https://www.linkedin.com/in/rebeccahirai" target="_blank"  style={{marginTop:"2rem"}} className="ui basic teal basic huge icon button" >Let's connect on <i className=" large linkedin icon"></i></a>

      </div>
    </div>
  );
}
