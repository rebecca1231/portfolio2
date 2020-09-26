import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import styled from "styled-components";

import Modal from "../Modal";

const CarDiv = styled.div`
  width: 500px;
  height: 300px;
  margin: 0 auto 1rem;
  overflow: hidden;
  border: 2px teal solid;
  border-radius: 5px;

  .text {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    margin-top: 10%;
  }
  img {
    width: 100%;
  }
  @media (max-width: 500px) {
    width: 300px;
    height: 175px;
    overflow: hidden;
  }
  @media (min-width: 900px) {
    width: 800px;
    height: 450px;
  }
`;

const Card = ({ title, image1, image2, url, github, description, tech }) => {
  const [show, setShow] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const h3Ref = useRef(null);
  const bRef = useRef(null);

  useEffect(() => {
    gsap.from(h3Ref.current, {
      duration: 0.75,
      y: -50,
      ease: "back",
    });
    gsap.from(bRef.current, {
      duration: 0.75,
      y: 50,
      ease: "back",
    });
  }, [show]);

  return (
    <CarDiv key={title} id={title} onPointerDown={() => setShow(true)}>
      {show === true ? (
        <>
          <button
            className="ui basic icon button right floated"
            onClick={() => setShow(false)}
          >
            <i className="close icon"></i>
          </button>
          <div className="ui container text">
            <h3 className="ui large header" ref={h3Ref}>
              {title}
            </h3>
            <button
              ref={bRef}
              className="ui basic teal button"
              onClick={() => setIsOpen(true)}
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
                url={url}
                github={github}
                title={title}
              />
            ) : (
              ""
            )}
          </div>
        </>
      ) : (
        <img src={image1} alt="project" />
      )}
    </CarDiv>
  );
};

export default Card;
