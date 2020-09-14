import React from "react";
import myFace from "../myFace copy.jpeg";
import EmWaterfall from "../EmWaterfall.jpeg";

import styled from "styled-components";

const Me = styled.div`
display:flex;
flex-direction:row;
margin-top: 5rem;
justify-content:space-around;

`

const About = () => {
  return (
    <Me>
        <div>
        <h3 className="ui large header"> Hi,</h3>
        <h4 className="ui medium header">I build web applications.</h4>
        <p> I'm always interested in working with positive people on interesting projects. </p>
      </div>
        <div className="image1">
          <img
            className="face"
            src={myFace}
            alt="face"
            style={{ maxWidth: "8rem", borderRadius: "50%", border:"2px solid #008080" }}
            />
        </div>

  
    </Me>
  );
};

export default About;
