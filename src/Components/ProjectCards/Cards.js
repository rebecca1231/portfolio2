import React from "react";
import styled from "styled-components";

import Card from "./Card";
import { projectData } from "./projectData";

import "./card.css"


const Cards = () => {
  
  return projectData.map((obj) => {
    return (
      <div >
        <Card
          image1={obj.image1}
          image2={obj.image2}
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
