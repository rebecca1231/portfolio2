import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  font-size: 1.25rem;
  justify-content: flex-end;
  border-bottom: 2px solid #f1f1f1;
  border-left: 2px solid #f1f1f1;
  position: fixed;
  right: 0;
  top:0;
  margin:0;
  z-index:20;
  background-color: #fff;



  .links {
    padding: 10px;
    text-decoration: none;
    font-family: Roboto;
    color: teal;
    cursor:pointer;

  }

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #f9f9f9;
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: -20px;
    right: 0;
    height: 100vh;
    width: 85vw;
    padding-top: 3.5rem;
    padding-bottom: 0;
    transition: transform 0.3s ease-in-out;
    justify-content: flex-start;
    border-bottom: none;
    box-shadow: ${({ open }) => (open ? "-5px 0 5px #c0c0c0" : "none")};
    z-index: 19;

    .links {
      padding: 10px;
      text-decoration: none;
      font-family: Roboto;
      color: teal;
    }
  }
`;

const RightNav = ({ open, set }) => {
  const history = useHistory();

  return (
    <Ul open={open}>
      <div className="links"
        onClick={() => {
          history.push("/");
          set(!open);
        }}
      >
        Home
      </div>
      <div className="links"
        onClick={() => {
          history.push("/about");
          set(!open);
        }}
        style={{ padding: "10px", color: "teal" }}
      >
        About
      </div>
      <div className="links"
        onClick={() => {
          set(!open);
          history.push("/contact");
        }}
        style={{ padding: "10px", color: "teal" }}
      >
        Contact
      </div>
      <div className="links"
        style={{ padding: "10px", color: "teal" }}
        onClick={() => {
          set(!open);
          history.push("/projects");
        }}
      >
        Projects
      </div>

      <a
      className="links"
        style={{ padding: "10px", color: "teal" }}
        href="https://www.opine.app"
        rel="noopener norefferer"
      >
        Opine
      </a>
    </Ul>
  );
};

export default RightNav;
