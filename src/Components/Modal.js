import React, { useEffect, useRef } from "react";
import styled from "styled-components";

import gsap from "gsap";
import ReactDOM from "react-dom";

const ModalWindow = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  background-color: #fff;
  z-index: 2;
  text-align: center;
  height: 90vh;
  width: 90vw;
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 128, 128, 0.7);
  z-index: 2;
`;

const ProjectImage = styled.div`
  width: 75%;
  max-height: 500px;
  margin: 0 auto;
  overflow: hidden;
  border-bottom: 2px solid #d3d3d3;

  @media (max-width: 400px) {
    width: 100%;
  }
  img {
    width: 100%;
  }
`;

const Modal = ({ description, tech, url, image, onClose }) => {
  const modRef = useRef(null);

  useEffect(() => {
    gsap.from(modRef.current, {
      duration: 1,
      y: 50,
      opacity: 0,
      ease: "back",
    });
  }, []);

  return ReactDOM.createPortal(
    <>
      <Overlay>
        <ModalWindow onPointerLeave={onClose} ref={modRef}>
          <ProjectImage>
            {" "}
            <img src={image} />{" "}
          </ProjectImage>
          <h3 className="ui large header" >Description: {description} </h3>
          <p>Tools Used: {tech} </p>
          <a className="ui button purple" href={url} target="_blank" >
            See Live Site
          </a>
          <button
            style={{ margin: "5px" }}
            className="ui basic button orange"
            onClick={onClose}
          >
            X
          </button>
        </ModalWindow>
      </Overlay>
    </>,
    document.querySelector("#portal")
  );
};

export default Modal;
