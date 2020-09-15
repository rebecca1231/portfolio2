import React from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import SimpleCards from "./ProjectCards/SimpleCards";

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  return (
    <div
      className="ui container"
    >
        <div className="ui large header" style={{ fontSize: "1.5rem" }}>
          Dream it.
        </div>
        <div
          className="ui big header"
          style={{ marginLeft: "2rem", fontSize: "2rem" }}
        >
          Believe it.
        </div>
        <div
          className="ui huge header"
          style={{ marginLeft: "4rem", fontSize: "2.5rem" }}
        >
          Build it.
          </div>
<div style={{marginTop:"2rem"}} >
      <SimpleCards />
      </div>
    </div>
  );
};

export default Projects;