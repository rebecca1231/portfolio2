import React from "react";
import Cards from "./Cards";

const Landing = () => {
  return (
    <div
      className="ui container"
      style={{ fontFamily: "Poppins", marginTop: "2rem" }}
    >
      <div>
        <div
          className="ui huge header"
          style={{ fontSize: "5rem"}}
        >
          Dream it.
        </div>
        <div
          className="ui large header"
          style={{ fontSize: "3rem", marginLeft: "1rem" }}
        >
          Believe it. Build it.
        </div>
      </div>
      <div style={{marginTop:"2rem"}}>
      <Cards />
      </div>
    </div>
  );
};

export default Landing;
