import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

interface RightNavProps {
  open: boolean
  set: (open: boolean) => void
}
const Ul = styled.ul<{ open: boolean }>`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  font-size: 1rem;
  justify-content: flex-end;
  position: fixed;
  right: 25px;
  top: 15px;
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
  .links:hover {
    color: #008891;
  }

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    position: fixed;
    transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
    top: -20px;
    right: 0;
    height: 100vh;
    width: 90vw;
    padding-top: 3.5rem;
    padding-bottom: 0;
    transition: transform 0.3s ease-in-out;
    justify-content: flex-start;
    border-bottom: none;
    box-shadow: ${({ open }) => (open ? '-3px 0 3px #d3d3d3' : 'none')};
    z-index: 19;

    .links {
      padding: 10px;
      text-decoration: none;
    }
  }
`

export function RightNav({ open, set }: RightNavProps) {
  return (
    <Ul open={open}>
      <Link className='links' to='/' onClick={() => set(!open)}>
        Home
      </Link>
      <Link className='links' to='/about' onClick={() => set(!open)}>
        About
      </Link>
      <Link className='links' to='/contact' onClick={() => set(!open)}>
        Contact
      </Link>
      <Link className='links' to='/projects' onClick={() => set(!open)}>
        Projects
      </Link>

      <a className='links' href='https://blog.rebeccapage.org'>
        Blog
      </a>
    </Ul>
  )
}
