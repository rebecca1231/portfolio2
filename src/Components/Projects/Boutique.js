import React from "react";
import { useHistory } from "react-router-dom";

const Boutique = () => {
  const history = useHistory();
  return (
    <div>
      <h1>Under Construction</h1>
      <p>Hi! Sorry about this!</p>
      <p>
        {" "}
        I decided to redesign my site. I haven't completed this particular part
        yet.
      </p>
      <p>In a few days, this should be lovely. </p>
      <div
        className="ui teal small basic button"
        onClick={() => {
          history.push("/");
        }}
      >
        Head Home{" "}
      </div>
    </div>
  );
};

export default Boutique
