import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styled from "styled-components";


gsap.registerPlugin(ScrollTrigger);

const CarDiv = styled.div`

`;


const Card = ({ title, image, description, tech, skill }) => {
  const [show, setShow] = useState(false);

  const cardRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      cardRef.current,
      {
        autoAlpha: 0
      },
      {
        duration: 1,
        autoAlpha: 1,
        ease: "none",
        scrollTrigger: {
          id: `${title}`,
          trigger: cardRef.current,
          start: "top center+=100",
          toggleActions: "play none none reverse"
        }
      }
    );
  }, [title]);

  return (
    <div
      className="my-card"
      ref={cardRef}
      key={title}
      id={title}
      style={{ marginBottom: "5rem" }}
      onMouseOver={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      {show === true ? (
        <>
          <h3>{title}</h3> <p>About: {description}</p> <p>Tech: {tech}</p>{" "}
          <p>Skills: {skill}</p>
        </>
      ) : (
        <img src={image} alt="project" />
      )}
    </div>
  );
};

export default Card;
