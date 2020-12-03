import React from "react";

import Card from "./Card";
import { projectData } from "./projectData";

const Cards = () => {
  return projectData.map((obj, index) => {
    return (
      <div>
        <Card
          image1={obj.image1}
          title={obj.title}
          description={obj.description}
          tech={obj.tech}
          slug={obj.slug}
          key={index}
          index={index}
       />
      </div>
    );
  });
};

export default Cards;
