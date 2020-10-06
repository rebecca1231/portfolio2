import React, { useRef, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styled from "styled-components";
import fluffybg from "../fluffybg.jpeg";

import { projectData } from "./ProjectCards/projectData";
import Card from "./ProjectCards/Card";
import Contact from "./Contact";

const Container = styled.div`
  max-width: 800px;
  margin: auto;
  color: #585858;

  .textBox {
    padding: 10px;
    max-width: 400px;
    margin: 0 auto;
  }
`;

const FlexContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: space-between;
  flex-wrap: wrap;
  p {
    font-size: 1rem;
    line-height: 1.5;
    padding: 10px 0;
    color: #707070;

    @media (max-width: 750px) {
      display: block;
    }
  }
`;

const Me = styled.div`
  border-radius: 5px;
  max-width: 800px;
  margin: auto;
  background-image: url(${fluffybg});
  background-repeat: no-repeat;
  background-size: 800px auto;
  background-position: top;
  height: 40vh;
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

  const project1 = projectData[0];
  const project2 = projectData[1];
  const project3 = projectData[2];
  const project4 = projectData[3];

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
    <Container>
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
        <FlexContainer>
          <div className="textBox">
            <p>

            </p>
          </div>
          <div className="textBox">
            <p>
            </p>
          </div>
        </FlexContainer>
        <div style={{ textAlign: "center" }}>
          <div
            className="ui teal small basic button"
            onClick={() => {
              history.push("/about");
            }}
          >
            My story{" "}
          </div>
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
      </div>
      <div style={{ marginTop: "2rem" }} ref={cardsRef}>
        <h2>What I've been working on </h2>
        <FlexContainer>
          <Card
            title={project1.title}
            image1={project1.image1}
            description={project1.description}
            slug={project1.slug}
          />
          <Card
            title={project2.title}
            image1={project2.image1}
            description={project2.description}
            slug={project2.slug}
          />
          <Card
            title={project3.title}
            image1={project3.image1}
            description={project3.description}
            slug={project3.slug}
          />
          <Card
            title={project4.title}
            image1={project4.image1}
            description={project4.description}
            slug={project4.slug}
          />
        </FlexContainer>
      </div>
      <div>
        <Contact />
      </div>
      <div style={{ margin: "0 auto", textAlign: "center" }}>
        <a
          href="https://www.linkedin.com/in/rebeccahirai"
          target="_blank"
          rel="noopener noreferrer"
          className="ui basic teal basic icon button"
        >
          Let's connect on <i className="large linkedin icon"></i>
        </a>
      </div>
    </Container>
  );
};

export default Landing;
