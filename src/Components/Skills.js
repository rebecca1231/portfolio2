import React, { useState, useEffect } from "react";

import styled from "styled-components";

const SkillBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  text-align: center;
  flex-wrap: wrap;
  .skill {
    padding: 5px;
  }
`;

const Skills = () => {
  const [isBigScreen, setIsBigScreen] = useState(window.innerWidth > 700);
  const updateMedia = () => {
    setIsBigScreen(window.innerWidth > 700);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });

  const size = isBigScreen ? "huge" : "big";
  return (
    <div className="ui container" style={{ margin: "4rem auto" }}>
      <div className="ui large header"> My Toolkit</div>
      <div className="ui small header"></div>
      <SkillBox>
        <div className="skill">
          <i className={`${size} css3 alternate icon`}></i>
          <br />
          CSS
        </div>
        <div className="skill">
          <i className={`${size} html5 icon`}></i>
          <br />
          HTML
        </div>

        <div className="skill">
          <i className={`${size} git square icon`}></i>
          <br />
          Git
        </div>
        <div className="skill">
          <i className={`${size} node icon`}></i>
          <br />
          Node JS
        </div>
        <div className="skill">
          <i className={`${size} react icon`}></i>
          <br />
          React JS
        </div>
        <div className="skill">
          <i className={`${size} js square icon`}></i>
          <br />
          JavaScript, ES6
        </div>
        <div className="skill">
          <i className={`${size} mobile alternate icon`}></i>
          <br />
          Responsive Design
        </div>
      </SkillBox>
    </div>
  );
};

export default Skills;
