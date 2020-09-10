import React from "react";
import styled from "styled-components";

import Card from "./Card";
import { projectData } from "./projectData";

import "./card.css"

const CardContainer = styled.div`

`;


const Cards = () => {
  
  return projectData.map((obj) => {
    return (
      <div className="cards">
        <Card
          image={obj.image}
          title={obj.title}
          description={obj.description}
          tech={obj.tech}
          skill={obj.skill}
        />
      </div>
    );
  });
};

export default Cards;
