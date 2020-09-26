import React from "react";
import myFace from "../myFace copy.jpeg";
import Skills from "./Skills";

import styled from "styled-components";

const Me = styled.div`
  display: flex;
  flex-direction: row;
  align-items: space-between;
  justify-content: flex-start;
  margin-top: 5rem;
  margin-bottom: 0.5rem;
  img {
    max-width: 10rem;
    border-radius: 50%;
    border: 2px solid #008080;
  }

  p {
    font-size: 1rem;
    line-height: 1.5;
  }
  @media (min-width: 900px) {
    font-size: 1.5rem;
  }

  @media (min-width: 1300px) {
    img {
      max-width: 15rem;
    }
    font-size: 1.75rem;
  }
`;

const About = () => {
  return (
    <div className="ui container">
      <Me>
        <div style={{}}>
          <h3 className="ui large header"> Hi,</h3>
          <h4 className="ui large header">I'm a full stack developer.</h4>
          <p className="ui header" style={{ lineHeight: 1.5 }}>
            I'm always interested in working with positive people on interesting
            projects.
          </p>
        </div>
        <div style={{ padding: "1px" }}>
          <img className="face" src={myFace} alt="face" />
        </div>
      </Me>
      <div style={{ fontSize: "1.25rem", lineHeight: "1.5" }}>
        <p>
          I primarily work with React and JavaScript, but you can see my ToolBox
          below. I'm active in the Twitter Dev Community and enjoy keeping up to
          date with the latest technology. I love to learn and grow.
        </p>
        <p>
          My latest project is an ecommerce web application, using Gatsby. It is
          a JamStack application, and utilizes the leading open source headless
          CMS: Strapi. It is still a work in progress, but you can check out the
          code to date on {" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/rebecca1231/ecomm-strapi"
          >
            Github
          </a>.
        </p>
      </div>
      <Skills />
    </div>
  );
};

export default About;
