import React, {useRef, useEffect} from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import SimpleCards from "./ProjectCards/SimpleCards";

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  return (
    <div
      className="ui container"
    >
      <div>
        <div
          className="ui huge header"
        >
          Dream it.
        </div>
        <div
                  className="ui medium header"
                  style={{marginLeft:"2rem"}}

        >
          Believe it. Build it.
        </div>
      </div>
      <div style={{marginTop:"2rem"}} >
      <SimpleCards />
      </div>
    </div>
  );
};

export default Projects;
