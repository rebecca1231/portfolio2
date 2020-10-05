import React, { useRef, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import myFace from "../myFace copy.jpeg";
import styled from "styled-components";
import fluffybg from "../fluffybg.jpeg";

import { projectData } from "./ProjectCards/projectData";
import Card from "./ProjectCards/Card";
import Contact from "./Contact";
import About from "./About";

const Me = styled.div`
  max-width: 800px;
  margin: auto;
  background-image: url(${fluffybg});
  background-repeat: no-repeat;
  background-size: 800px auto;
  background-position: top;
  height: 50vh;
  img {
    max-width: 10rem;
    border-radius: 10px;
  }

  p {
    font-size: 1.5rem;
    line-height: 1.5;
    padding: 10px 0;
  }

  @media (max-width: 750px) {
    margin-bottom: 0.5rem;
    background-size: 700px auto;
    background-position: top;

    p {
      font-size: 1.2rem;
    }
  }
`;

gsap.registerPlugin(ScrollTrigger);

const Landing = () => {
  const history = useHistory();

  const cardsRef = useRef(null);
  const aboutRef = useRef(null);
  const borderRef = useRef(null);
  const topRef = useRef(null);
  const headRef = useRef(null);

  const project = projectData[0];
  const project2 = projectData[1];
  const project3 = projectData[2];

  const animation = (ref) => {
    return {
      duration: 0.75,
      autoAlpha: 0,
      y: 10,
      ease: "power4.in",
      scrollTrigger: {
        trigger: ref.current,
        start: "top center+=200",
      },
    };
  };

  useEffect(() => {
    gsap.from(cardsRef.current, animation(cardsRef));
    gsap.from(topRef.current, animation(topRef));
    gsap.from(headRef.current, {
      duration: 1,
      x: 200,
      scrollTrigger: {
        trigger: headRef.current,
        start: "top center+=200",
      },
    });
    gsap.from(borderRef.current, {
      duration: 1,
      x: -500,
      scrollTrigger: {
        trigger: borderRef.current,
        start: "top center+=200",
      },
    });

    gsap.from(aboutRef.current, animation(aboutRef));
  }, []);

  return (
    <div>
      <div style={{ marginTop: "50px" }}>
        <div
          className="ui container"
          style={{
            marginTop: "7rem",
            maxWidth: "750px",
            padding: "2px",
            marginBottom: "1rem",
          }}
        >
          <h2> Hi,</h2>
          <h2>I'm Rebecca.</h2>
        </div>
        <Me ref={topRef}>
          <div
            style={{
              backgroundColor: "rgba(255,255,255, 0.75)",
            }}
          >
            <div
              ref={headRef}
              className="ui container"
              style={{ maxWidth: "750px", padding: "2px" }}
            >
              <p>
                I enjoy nature with my fluffy dog and <br />I love building
                stuff with code.
              </p>
            </div>
          </div>
        </Me>
        <div>
          <div style={{ textAlign: "center", margin: "auto" }}></div>
        </div>

        <div style={{ marginTop: "2rem" }} ref={cardsRef}>
          <div
            id="top-project"
            className="ui large header"
            style={{ fontSize: "2rem", marginLeft: "" }}
          >
            Top Projects
          </div>
          <div className="ui large header"></div>
          <Card
            title={project.title}
            image1={project.image1}
            image2={project.image2}
            description={project.description}
            tech={project.tech}
            url={project.url}
            github={project.github}
          />
          <Card
            title={project2.title}
            image1={project2.image1}
            image2={project2.image2}
            description={project2.description}
            tech={project2.tech}
            url={project2.url}
            github={project2.github}
          />
          <Card
            title={project3.title}
            image1={project3.image1}
            image2={project3.image2}
            description={project3.description}
            tech={project3.tech}
            url={project3.url}
            github={project3.github}
          />
        </div>

        <div
          ref={borderRef}
          className="ui container"
          style={{
            marginTop: "2rem",
            borderBottom: "40px dotted rgba(0, 128, 128, 0.25)",
            width: "40%",
          }}
        />
        <div id="about" ref={aboutRef}>
          <About />
        </div>
      </div>
      <div>
        <Contact />
      </div>
    </div>
  );
};

export default Landing;
