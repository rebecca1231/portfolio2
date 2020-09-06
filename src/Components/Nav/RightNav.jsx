import React from "react";
import styled from "styled-components";
import {Link} from 'react-router-dom'

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;



  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: 0d2538#;
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;

  }
`;

const RightNav = ({ open }) => {
    const linkStyles = 'padding:"2px", color:"#26a19b"'
  return (
    <Ul open={open}>
      <Link to="/" style={{padding:"10px", color:"#26a19b"}}>Home</Link>
      <Link to="/about" style={{padding:"10px", color:"#26a19b"}} >About</Link>
      <Link to="/contact" style={{padding:"10px", color:"#26a19b"}} >Contact</Link>
      <a style={{padding:"10px", color:"#26a19b"}} href="https://sleepy-ridge-95118.herokuapp.com/">Opine</a>

    </Ul>
  );
};

export default RightNav;
