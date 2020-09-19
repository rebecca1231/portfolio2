import React, { useRef, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { projectData } from "./ProjectCards/projectData";
import Card from "./ProjectCards/Card";
import Contact from "./Contact";
import About from "./About";

gsap.registerPlugin(ScrollTrigger);

const Landing = () => {
  const history = useHistory();

  const cardsRef = useRef(null);
  const contactRef = useRef(null);
  const aboutRef = useRef(null);
  const borderRef = useRef(null);

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
        start: "top center+=200"
      }
    };
  };

  useEffect(() => {
    gsap.from(cardsRef.current, animation(cardsRef));
    gsap.from(borderRef.current, {
      duration: 1,
      y: -200,
      ease: "bounce",
      scrollTrigger: {
        trigger: borderRef.current,
        start: "top center+=200"
      }
    });

    gsap.from(contactRef.current, animation(contactRef));
    gsap.from(aboutRef.current, animation(aboutRef));
  }, []);

  return (
    <div>
      <div className="ui container">
        <div className="ui large header" style={{ fontSize: "2rem" }}>
          Dream it.
        </div>
        <div
          className="ui big header"
          style={{ marginLeft: "3rem", fontSize: "3rem" }}
        >
          Believe it.
        </div>
        <div
          className="ui huge header"
          style={{ marginLeft: "6rem", fontSize: "4rem" }}
        >
          Build it.
        </div>
        <button
          onClick={() => history.push("/contact")}
          style={{ marginLeft: "8rem" }}
          className="ui basic button huge teal"
        >
          Get in touch <i className="envelope outline right floated icon"></i>
        </button>
      </div>

      <div style={{ marginTop: "2rem" }} ref={cardsRef}>
        <div
          id="top-project"
          className="ui large header"
          style={{ fontSize: "2rem", marginLeft: "1rem" }}
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
          margin: "5rem",
          borderBottom: "40px dotted rgba(0, 128, 128, 0.25)",
          width: "40%"
        }}
      ></div>
      <div id="about" ref={aboutRef}>
        <About />
        <div>
        </div>
      </div>

      <div ref={contactRef}>
        <Contact />
      </div>
    </div>
  );
};

export default Landing;
