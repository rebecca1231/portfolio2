import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  font-size: 1rem;
  justify-content: flex-end;
  position: fixed;
  right: 10px;
  top: 0;
  margin: 0;
  z-index: 20;
  background-color: #fff;
  width: 100vw;

  .links {
    padding: 10px;
    color: hsla(0, 0%, 0%, 0.8);
    text-decoration: none;
    cursor: pointer;
  }
  .links:hover{
    color:#008891;
  }

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: -20px;
    right: 0;
    height: 100vh;
    width: 90vw;
    padding-top: 3.5rem;
    padding-bottom: 0;
    transition: transform 0.3s ease-in-out;
    justify-content: flex-start;
    border-bottom: none;
    box-shadow: ${({ open }) => (open ? "-3px 0 3px #d3d3d3" : "none")};
    z-index: 19;

    .links {
      padding: 10px;
      text-decoration: none;
    }
  }
`;

const RightNav = ({ open, set }) => {
  const history = useHistory();

  return (
    <Ul open={open}>
      <div
        className="links"
        onClick={() => {
          history.push("/");
          set(!open);
        }}
      >
        Home
      </div>
      <div
        className="links"
        onClick={() => {
          history.push("/about");
          set(!open);
        }}
      >
        About
      </div>
      <div
        className="links"
        onClick={() => {
          set(!open);
          history.push("/contact");
        }}
      >
        Contact
      </div>
      <div
        className="links"
        onClick={() => {
          set(!open);
          history.push("/projects");
        }}
      >
        Projects
      </div>
      <a
        className="links"
        href="https://blog.rebeccapage.org"
      >
        Blog
      </a>
    </Ul>
  );
};

export default RightNav;
