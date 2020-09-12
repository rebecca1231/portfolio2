import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { projectData } from "./ProjectCards/projectData";
import Card from "./ProjectCards/Card";

gsap.registerPlugin(ScrollTrigger);

const Landing = () => {
  const cardsRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      cardsRef.current,
      {
        autoAlpha: 0,
      },
      {
        duration: 1,
        autoAlpha: 1,
        y: -10,
        ease: "power4.in",
        scrollTrigger: {
          trigger: cardsRef.current,
          start: "top center+=100",
          toggleActions: "play none none reverse",
        },
      }
    );
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
        <div
        id="top-project" 
          className="ui large header"
          style={{ fontSize: "2rem", marginLeft: "1rem" }}
        >
Top Project: Opine
        </div>
      </div>
      <div style={{ marginTop: "2rem" }} ref={cardsRef}>
        <Card
          title={project.title}
          image1={project.image1}
          image2={project.image2}
          description={project.description}
          tech={project.tech}
          url={project.url}
        />
      </div>
    </div>
  );
};

export default Landing;
