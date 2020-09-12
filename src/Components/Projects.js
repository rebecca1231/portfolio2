import React, {useRef, useEffect} from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Cards from "./ProjectCards/Cards";

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const cardsRef = useRef(null);


  useEffect(() => {
    gsap.fromTo(
      cardsRef.current,
      {
        autoAlpha: 0
      },
      {
        duration: 1,
        autoAlpha: 1,
        y:-10,
        ease: "power4.in",
        scrollTrigger: {
          trigger: cardsRef.current,
          start: "top center+=100",
          toggleActions: "play none none reverse"
        }
      }
    );
  }, []);


  return (
    <div
      className="ui container"
      style={{ fontFamily: "Poppins", marginTop: "2rem" }}
    >
      <div>
        <div
          className="ui huge header"
        >
          Dream it.
        </div>
        <div
                  className="ui medium header"
                  style={{marginLeft:"2rem"}}

        >
          Believe it. Build it.
        </div>
      </div>
      <div style={{marginTop:"2rem"}} ref={cardsRef} >
      <Cards />
      </div>
    </div>
  );
};

export default Projects;
