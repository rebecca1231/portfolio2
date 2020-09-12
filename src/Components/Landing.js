import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styled from "styled-components";

import { projectData } from "./ProjectCards/projectData";
import Card from "./ProjectCards/Card";
import Contact from "./Contact";

const Triangle = styled.div`
  width: 0; 
  height: 0; 
  margin: 1rem auto 0;
  border-left: 40vw solid transparent;
  border-right: 40vw solid transparent;
  
  border-top: 10vw solid #F5F5F5;
`

gsap.registerPlugin(ScrollTrigger);

const Landing = () => {
  const cardsRef = useRef(null);
  const contactRef = useRef(null);
  const project = projectData[0];
  const project2 = projectData[1];
  const project3 = projectData[2]


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

  return (
    <div
      className=""
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
          Top Projects
        </div>
        <div className="ui large header" ></div>
        <Card
          title={project.title}
          image1={project.image1}
          image2={project.image2}
          description={project.description}
          tech={project.tech}
          url={project.url}
        />
        <Card
          title={project2.title}
          image1={project2.image1}
          image2={project2.image2}
          description={project2.description}
          tech={project2.tech}
          url={project2.url}
        />
        <Card
          title={project3.title}
          image1={project3.image1}
          image2={project3.image2}
          description={project3.description}
          tech={project3.tech}
          url={project3.url}
        />
      </div>
      <div className="" ref={contactRef} style={{backgroundColor:"#808080", width:"100%", paddingBottom:"15px"}} >
      <Triangle/>
      <div className="ui container">
        <div
          id="contact"
          className="ui large header"
          style={{ fontSize: "2rem", marginLeft: "1rem", marginTop:"0.5rem" }}
        >
          Get in Touch
        </div>

        <Contact />
      </div>
      </div>
    </div>
  );
};

export default Landing;
