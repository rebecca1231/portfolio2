import React from "react";
import "./Cards.css";
import Card from './Card'

//make an array of objects 
//name, description, link, pictures
//  div picture / link (a)
//on hover: picture goes white-ish, white overlay?  and new div with title, dexcription show up


const Cards = () => {
  return (
    <div>
      <div className="flex-grid">
        <div className="col"><Card/> </div>
        <div className="col"> <Card/> </div>
        <div className="col"> <Card/> </div>
      </div>
    </div>
  );
};

export default Cards;
