import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";

const CardBox = styled.div`
  width: 500px;
  height: 300px;
  margin: 0 auto 1rem;
  overflow: hidden;
  border: 2px teal solid;
  border-radius: 5px;

  .image-box {
    width: 100%;
    height: 35%;
    overflow: hidden;
    border-bottom: 1px teal solid;
  }

.links {
  display:flex;
}

  img {
    width: 100%;
  }

.text {
  padding-top:5px;
}

  @media (max-width: 500px) {
    width: 300px;
    height: 400px; 
    overflow: hidden;
    margin: 0 auto 1rem;
  }
  @media (min-width: 900px) {
    width: 800px;
    height: 450px;
  }
`;

const SimpleCard = ({ title, image1, url, description, tech, github }) => {
  return (
    <CardBox key={title} id={title}>
      <div className="image-box">
        <img src={image1} alt="project" />
      </div>
      <div className="ui container text">
        <h3 className="ui large header">{title}</h3>

        <p>
          <strong>About: </strong>
          {description}
        </p>
        <p>
          <strong>Main Tools: </strong>
          {tech}
        </p>
        <div className="links">
          {url ? (
            <>
              <a
                className="ui basic big button teal"
                href={url}
                target="_blank"
              >
                See Live Site
              </a>{" "}
            </>
          ) : (
            ""
          )}
          <a className="ui basic big button" href={github} target="_blank">
            Code <i className="github icon"></i>
          </a>
        </div>
      </div>
    </CardBox>
  );
};

export default SimpleCard;
