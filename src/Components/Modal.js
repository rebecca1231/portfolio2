import React, { useEffect, useRef } from "react";
import styled from "styled-components";

import gsap from "gsap";
import ReactDOM from "react-dom";

const ModalWindow = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  z-index: 2;
  text-align: left;
  height: 90vh;
  width: 90vw;
  padding: 10px;

  .text-box {
    font-size: 1.5rem;
    line-height: 1.25;
  }
  .modal-top {
    display: flex;
    justify-content: space-between;
  }

  .links {
    display: flex;
    justify-content: center;
    padding: 10px;
  }

  @media (max-width: 500) {
    .text-box {
      line-height: 1;
      font-size: 1rem;
    }
    .links {
      padding: 0;
    }
  }
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
  height: 40%;
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

const Modal = ({ description, tech, url, image, onClose, github, title }) => {
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
          <div className="modal-top">
            <h3 className="ui large header">{title}</h3>
            <button
              style={{ margin: "5px" }}
              className="ui icon basic button mini right floated"
              onClick={onClose}
            >
              <i className="close icon"></i>
            </button>
          </div>
          <ProjectImage>
            <img src={image} alt={title} />
          </ProjectImage>
          <div className="text-box">
            <p>
              <strong>About: </strong>
              {description}{" "}
            </p>
            <p>
              <strong>Main Tools: </strong>
              {tech}{" "}
            </p>
          </div>
          <div className="links">
            {url ? (
              <>
                <a
                  className="ui basic big button teal"
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  See Live Site
                </a>{" "}
              </>
            ) : (
              ""
            )}
            <a
              className="ui basic big button"
              href={github}
              target="_blank"
              rel="noopener noreferrer"
            >
              Code <i className="github icon"></i>
            </a>
          </div>
        </ModalWindow>
      </Overlay>
    </>,
    document.querySelector("#portal")
  );
};

export default Modal;
