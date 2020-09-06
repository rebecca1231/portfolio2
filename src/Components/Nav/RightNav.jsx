import React from "react";
import styled from "styled-components";
import {Link} from 'react-router-dom'

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  font-family: Poppins;
  font-size:1.25rem;

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #f6f6f6;
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: -20px;
    right: 0;
    height: 100vh;
    width: 250px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;

  }
`;

const RightNav = ({ open }) => {
  return (
    <Ul open={open} >
      <Link to="/" style={{padding:"10px", fontFamily:"Roboto", color:"#26a19b"}}>Home</Link>
      <Link to="/about" style={{padding:"10px", color:"#26a19b"}} >About</Link>
      <Link to="/contact" style={{padding:"10px", color:"#26a19b"}} >Contact</Link>
      <a style={{padding:"10px", color:"#26a19b"}} href="https://sleepy-ridge-95118.herokuapp.com/">Opine</a>

    </Ul>
  );
};

export default RightNav;
