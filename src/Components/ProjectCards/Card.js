import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import styled from "styled-components";

import Modal from "../Modal";
import Modal2 from "../Modal"

const CarDiv = styled.div`
  width: 400px;
  height: 250px ;
  padding: 20px 0;
  margin: 0 auto;
  overflow:hidden;

  img {
    width: 100%;
  }
  @media (max-width: 500px) {
    width: 300px;
    height:175px;
    overflow: hidden;
    margin: 0 auto;
  }
`;



const Card = ({ title, image1, image2, description, tech, skill }) => {
  const [show, setShow] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const h3Ref = useRef(null);
  const bRef = useRef(null);

  useEffect(() => {
    gsap.from(h3Ref.current, {
      duration: 0.3,
      y: -5,
      ease: "none",
    });

  }, [show]);

  return (
    <CarDiv
      key={title}
      id={title}
      onPointerEnter={() => setShow(true)}
      onPointerLeave={() => setShow(false)}
    >
      {show === true ? (
        <div    style={{height:"100%", padding:"10%"}}
        >
          <h3 ref={h3Ref}>{title}</h3> <br />
          <button
            ref={bRef}
            className="ui basic teal button"
            onPointerDown={() => setIsOpen(true)}
          >
            Learn More
          </button>
          {isOpen === true ? (
            <Modal
              open={isOpen}
              onClose={() => {
                setIsOpen(false);
                setShow(false);
              }}
              image={image2}
              tech={tech}
              description={description}
            />
          ) : (
            ""
          )}
        </div>
      ) : (
        <img src={image1} alt="project" />
      )}
    </CarDiv>
  );
};

export default Card;
