import React from "react";
import myFace from '../myFace.jpeg'
import EmWaterfall from '../EmWaterfall.jpeg'

const About = () => {
  return (
    <div className="ui container" style={{ fontFamily: "Poppins" }}>
      <div className="ui grid">
        <div className="four wide column">
        <img className="ui image" src={myFace} alt="face" style={{maxWidth:"10rem", borderRadius:"50%"}} />

        </div>
        <div className="nine wide column">
      <div
        className="ui huge header"
        style={{ fontSize: "3rem", margin:0 }}
      >
        Hi, I'm Rebecca.
      </div>
      <div className="ui large header" style={{ marginLeft: "2.5rem" }}>
        I'm a full stack developer.
      </div>{" "}
      </div>
      <div >
        <p style={{lineHeight:1.5}}>
          I often use React, Node JS, and MongoDB to build web applications with
          responsive design and proper functionality. I have experience with
          libraries like D3 for Data Visualization, Bootstrap for styling, and
          many more. I'm constantly learning new things. Currently those things
          include gaining more experience with cloud engineering and security.
        </p>
        <p style={{lineHeight:1.5}} >
          My latest project is a simple exercise tracker using Atlas, the cloud
          form of MongoDB. Check it out here. It's part of the Microservices and
          Api challenges on Free Code Camp. I intend to use the knowledge I
          gained from making this simple Api to create more complex and
          interactive sites in the future. 
          </p>
          <img className="ui image"  src={EmWaterfall} style={{display: "inline", maxWidth:"15rem", borderRadius:"10%"}} />
          <p>When I'm not learning something new
          chances are I'm playing with my fluffy dog. She loves to fetch and
          learn new tricks. Tummy rubs are also a major theme. image of my dog!
        </p>
      </div>
      </div>
    </div>
  );
};

export default About;
