import React from "react";
import "./Cards.css";

//make an array of objects 
//name, description, link, pictures
//  div picture / link (a)
//on hover: picture goes white-ish, white overlay?  and new div with title, dexcription show up


const Cards = () => {
  return (
    <div>
      <div className="flex-grid">
        <div className="col">1</div>
        <div className="col">2</div>
        <div className="col">3</div>
      </div>
    </div>
  );
};

export default Cards;
