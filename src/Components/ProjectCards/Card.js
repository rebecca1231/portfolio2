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
    .a-link {
      text-decoration: underline;
    }
  }
`;


const Card = ({ title, image1, slug, description }) => {
  const history = useHistory();
  return (
    <CarDiv key={title} id={title}>
      <div className="image-box">
        <img src={image1} alt="project" />
      </div>
      <div>
        <h3>{title}</h3>
        <p> {description} </p>
        <p 
        className="a-link"
          style={{ color: "#585858", cursor:"pointer" }}
          onClick={() => history.push(`/projects/${slug}`)}
        >
          Learn More
        </p>
      </div>
    </CarDiv>
  );
};

export default Card;
