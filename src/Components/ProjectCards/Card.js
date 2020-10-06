import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

const CarDiv = styled.div`
  max-width: 400px;
  padding: 10px;
  margin: 0 auto 1rem;
  overflow: hidden;
  border-radius: 5px;
  transition: all 0.2s ease-in-out;
  color: #585858;

  img {
    width: 100%;
    border-radius: 5px;
  }

  :hover {
    transform: scale(1.05);
    a {
      text-decoration: underline;
      font-size: 0.8rem;
    }
  }
`;
/*
 @media (max-width: 500px) {
    width: 300px;
    height: 175px;
    overflow: hidden;
  }
  @media (min-width: 900px) {
    width: 800px;
    height: 450px;
  }
 */

const Card = ({ title, image1, slug, description }) => {
  const history = useHistory();
console.log(slug, title)
  return (
    <CarDiv key={title} id={title}>
      <div className="image-box">
        <img src={image1} alt="project" />
      </div>
      <div>
        <h3>{title}</h3>
        <p> {description} </p>
        <a
          style={{ color: "#585858" }}
          onClick={() => history.push(`/projects/${slug}`)}
        >
          Learn More
        </a>
      </div>
    </CarDiv>
  );
};

export default Card;
