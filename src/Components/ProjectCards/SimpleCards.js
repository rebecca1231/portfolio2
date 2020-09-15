import React from "react";

import SimpleCard from "./SimpleCard";
import { projectData } from "./projectData";

const SimpleCards = () => {
  
  return projectData.map((obj) => {
    return (
      <div >
        <SimpleCard
          image1={obj.image1}
          image2={obj.image2}
          title={obj.title}
          description={obj.description}
          tech={obj.tech}
          skill={obj.skill}
          url={obj.url}
          github={obj.github}

        />
      </div>
    );
  });
};

export default SimpleCards;
