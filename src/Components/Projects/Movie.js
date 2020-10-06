import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components"

const Container = styled.div`
  max-width: 800px;
  margin: auto;
  color:#585858;

  .textBox{
    padding:10px;
    max-width:400px;
    margin: 0 auto;
  }
 
`;
const Movie = () => {
  const history = useHistory();
  return (
    <Container>
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
    </Container>
  );
};

export default Movie;
