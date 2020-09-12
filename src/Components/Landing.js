import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { projectData } from "./ProjectCards/projectData";
import Card from "./ProjectCards/Card";
import Contact from "./Contact";

gsap.registerPlugin(ScrollTrigger);

const animation = (ref) => {
  return {};
};

const Landing = () => {
  const cardsRef = useRef(null);
  const contactRef = useRef(null);

  const animation = (ref) => {
    return {
      duration: 1,
      autoAlpha: 0,
      y: 10,
      ease: "power4.in",
      scrollTrigger: {
        trigger: ref.current,
        start: "top center+=100",
      },
    };
  };

  useEffect(() => {
    gsap.from(cardsRef.current, animation(cardsRef));
    gsap.from(contactRef.current, animation(contactRef));
  }, []);

  const project = projectData[0];
  return (
    <div
      className="ui container"
      style={{ fontFamily: "Poppins", marginTop: "2rem" }}
    >
      <div>
        <div className="ui huge header" style={{ fontSize: "5rem" }}>
          Dream it.
        </div>
      </div>

      <div style={{ marginTop: "2rem" }} ref={cardsRef}>
        <div
          id="top-project"
          className="ui large header"
          style={{ fontSize: "2rem", marginLeft: "1rem" }}
        >
          Top Project: Opine
        </div>
        <Card
          title={project.title}
          image1={project.image1}
          image2={project.image2}
          description={project.description}
          tech={project.tech}
          url={project.url}
        />
      </div>
<div ></div>
     
      <div ref={contactRef} style={{ marginTop: "2rem", }}>
        <div
          id="contact"
          className="ui large header"
          style={{ fontSize: "2rem", marginLeft: "1rem" }}
        >
          Get in Touch
        </div>

        <Contact />
      </div>
    </div>
  );
};

export default Landing;
