import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

const CarDiv = styled.div`
  width: 500px;
  height: 300px;
  margin: 0 auto 1rem;
  overflow: hidden;
  border-radius: 5px;
  transition: all 0.2s ease-in-out;

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
  :hover {
    transform: scale(1.05);
  }
`;

const Card = ({ title, image1, exp }) => {

  const history = useHistory();

  return (
    <CarDiv key={title} id={title}>
      <img src={image1} alt="project" />

        <h3 >
          {title}
        </h3>
        <button className="ui basic tiny teal button" onClick={() => history.push(`/projects/${exp}`)}>
          Learn More
        </button>
    </CarDiv>
  );
};

export default Card;
