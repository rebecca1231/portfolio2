import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

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
        <div className="card-text">
          <h3>{title}</h3> <p>About: {description}</p> <p>Tech: {tech}</p>{" "}
          <p>Skills: {skill}</p>
        </div>
      ) : (
        <img src={image} alt="project" />
      )}
    </div>
  );
};

export default Card;
