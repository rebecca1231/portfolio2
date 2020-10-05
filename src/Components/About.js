import React from "react"
import myFace from "../myFace copy.jpeg"
import styled from "styled-components"

const Container = styled.div`
margin: 0 auto;
max-width: 750px;
padding: 1rem;
line-height:1.5;
font-size:1.25rem;



display: flex;
flex-direction: column;
min-height: 100vh;

`

const Me = styled.div`
  display: flex;
  flex-direction: row;
  align-items: space-between;
  justify-content: center;
  margin-top: 5rem;
  img {
    max-width: 10rem;
    border-radius: 50%;
    border: 2px solid #008080;
  }

  p {
    font-size: 1.5rem;
    line-height: 1.25;
  }

  @media (max-width:750px){
    margin-bottom:0.5rem;

    p {
      font-size:1.2rem;
    }
  }
`

const About = () => {
  return (
    <Container classname="">
      <Me>
        <div>
          <h2> Hi,</h2>
          <h2>I'm Rebecca.</h2>
          <p>
            I enjoy nature walks with my fluffy dog and <br />
            and I love building stuff with code.
          </p>
        </div>
        <div style={{ marginLeft: "20px" }}>
          <img className="face" src={myFace} alt="face" />
        </div>
      </Me>
      <div style={{ lineHeight: "1.5" }}>
        <p>
          My first experience with development was when I was 13. I made my own
          web page (with all the bad poetry) and had a lot of fun creating
          styles. I would look at the source code of other sites and dissect how
          they worked. I used that knowledge to make a hover effect with a
          racing rainbow background and bold white text that I was very proud of
          at the time.
        </p>
        <p>
          Years later, I decided to try learning JavaScript and got hooked. I
          was looking for something new to learn, and stumbled across
          freecodecamp. I started at the beginning with responsive web design,
          HTML and CSS. Enjoying learning, I continued to Data Structures and
          Algorithms with JavaScript, and fell in love with coding.{" "}
        </p>
        <p>
          The thing that’s really exciting about learning JavaScript is DOM
          manipulation and all the behind the scenes action that make
          applications jump and dance. There’s a lot to do with data: getting
          it, and then charting, listing, or sending it somewhere. It’s about
          wanting something to work a certain way and learning how to make it
          happen. JavaScript is like a superpower.
        </p>
        <p>
          I love to learn and grow. My latest project is a JamStack application,
          using Gatsby. It utilizes the leading open source headless CMS:
          Strapi. It is still a work in progress, but you can check out the code
          to date on{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/rebecca1231/ecomm-strapi"
          >
            Github
          </a>
          .
        </p>
        <p style={{ lineHeight: 1.5 }}>
          I'm always interested in working with positive people on interesting
          projects. I'm currently seeking a full time role where I can be an
          asset to an awesome team.
        </p>
      </div>
      </Container>
  )
}

export default About
