import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import styled from "styled-components";


const CardBox = styled.div`
    width: 500px;
    height: 300px;
    margin: 0 auto 1rem;
    overflow: hidden;
    border: 2px teal solid;
  
.image-box {
    width:100%;
    height:35%;
    overflow:hidden;
    border-bottom: 1px teal solid;
}
  img {
    width: 100%;
  }
  @media (max-width: 500px) {
    width: 300px;
    height: 400px;
    overflow: hidden;
    margin: 0 auto 1rem;
  }
  @media (min-width: 900px ){
    width:800px;
    height:450px;

  }
`;

const SimpleCard = ({ title, image1, image2, url, description, tech }) => {
 
  return (
    <CardBox
      key={title}
      id={title}>
          <div className="image-box">
                  <img src={image1} alt="project" />
                  </div>

          <h3>{title}</h3>
         
     
              <p><strong>About: </strong>{description}</p>
              <p><strong>Main Tools: </strong>{tech}</p>

            
              <a style={{marginLeft:"1rem"}}
            className="ui large basic teal button" href={url}
          >
            Check it out
          </a>
    
    </CardBox>
  );
};

export default SimpleCard;
