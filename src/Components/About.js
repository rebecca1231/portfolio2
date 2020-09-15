import React from "react";
import myFace from "../myFace copy.jpeg";

import styled from "styled-components";

const Me = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 5rem;
  justify-content: space-around;

  img {
    max-width: 10rem;
    border-radius: 50%;
    border: 2px solid #008080;
  }

  p {
    font-size: 1rem;
  }
`;

const About = () => {
  return (
    <>
      <Me>
        <div>
          <h3 className="ui large header"> Hi,</h3>
          <h4 className="ui large header">I build web applications.</h4>
          <p className="ui header">
            I'm always interested in working with positive people on interesting
            projects.
          </p>
        </div>
        <div className="image1">
          <img className="face" src={myFace} alt="face" />
        </div>
      </Me>
      <p className="content" style={{fontSize:"1.25rem"}}>
        I primarily work with React and JavaScript, but you can see my ToolBox
        below. I'm active in the Twitter Dev Community and enjoy keeping up to
        date with the latest technology. I love to learn and grow.
      </p>
    </>
  );
};

export default About;
