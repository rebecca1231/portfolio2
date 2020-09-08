import React from "react";
import myFace from "../myFace.jpeg";
import EmWaterfall from "../EmWaterfall.jpeg";
import "./About.css";

const About = () => {
  return (
    <div style={{ fontFamily: "Poppins" }}>
      <div className="box" id="top">
        <div className="image1">
          <img
            className="face"
            src={myFace}
            alt="face"
            style={{ maxWidth: "10rem", borderRadius: "50%" }}
          />
        </div>

        <div className="head">
          <h1 className="" style={{}}>
            Hi, I'm Rebecca.
          </h1>
          <h2>I build web applications.</h2>{" "}
        </div>
      </div>

      <div className="content">
        <h3>Responsive </h3>
        <p>
          Your site should always look beautiful. Responsive sites reshape
          themselves to fit any screen size. I design apps that look just as
          good on a large monitor as they do on your phone.
        </p>

        <h3>Dynamic</h3>
        <p>
          Your application needs more than beauty. It needs to bend and flow as
          people interact with it, whether that's loading alternate data into a
          graph or switching between forms. I build applications that
          dynamically transform at the click of a button.
        </p>

        <h3> Secure </h3>
        <p>
          From login to payments, a lot of information has to travel the web. I
          use the latest technologies to keep important data safe.
        </p>

        <h3>Technical</h3>
        <p>
          I'm a <strong>JavaScript</strong> developer.
          <br />I use <strong> React and Node JS </strong> to build fullstack
          applications. I keep important information in the cloud with MongoDB.
          <br />
          <strong>D3js</strong> helps me create beautiful, animated charts and
          graphs to visualize important data.
          <br />I use <strong>CSS with flexbox</strong> for styling.
          I often use Bootstrap, Semantic UI, Styled Components, or
          SASS with Bulma for extra style and pizzazz.
        </p>
</div>
<div className="content2">
        <h3> About Me </h3>

        <div className="box">
          <div>
            <p>
              I have the best dog ever. We enjoy long walks together. She loves
              to play fetch and learn new tricks.
            </p>
            <p>
              I also like to learn new things. I enjoy travel and improving my
              foreign language skills (Spanish, Portuguese and Japanese).
            </p>
          </div>

          <div>
            <img id="Em" alt="pet" src={EmWaterfall} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
