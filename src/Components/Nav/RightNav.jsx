import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  font-family: Poppins;
  font-size: 1.25rem;
  justify-content: flex-end;
  border-bottom: 2px solid #f1f1f1;

  a {
    padding: 10px;
    text-decoration: none;
    font-family: Roboto;
    color: teal;
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

    a {
      padding: 10px;
      text-decoration: none;
      font-family: Roboto;
      color: teal;
    }
  }
`;

const RightNav = ({ open, set }) => {
  return (
    <Ul open={open}>
      <Link onClick={() => set(!open)} to="/">
        Home
      </Link>
      <Link
        to="/about"
        onClick={() => set(!open)}
        style={{ padding: "10px", color: "teal" }}
      >
        About
      </Link>
      <a
        onClick={() => set(!open)}
        href="#contact"
        style={{ padding: "10px", color: "teal" }}
      >
        Contact
      </a>
      <a
        href="#top-project"
        style={{ padding: "10px", color: "teal" }}
        onClick={() => set(!open)}
      >
        Top Projects
      </a>
      <Link
        onClick={() => set(!open)}
        to="/projects"
        style={{ padding: "10px", color: "teal" }}
      >
        All Projects
      </Link>

      <a
        style={{ padding: "10px", color: "teal" }}
        href="https://sleepy-ridge-95118.herokuapp.com/"
      >
        Opine
      </a>
    </Ul>
  );
};

export default RightNav;
