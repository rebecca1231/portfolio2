import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import { gsap } from 'gsap'
import { useHistory } from 'react-router-dom'

import wasabi from '../wasabi.webp'

const Container = styled.div`
  margin: 0 auto;
  max-width: 800px;
  padding: 1rem;
  line-height: 1.5;
  font-size: 1rem;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  color: #707070;

  span {
    color: hsla(0, 0%, 0%, 0.8);
    text-decoration: underline;
  }

  span:hover {
    cursor: pointer;
    text-decoration: underline;
    color: #008891;
  }
`

const Me = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 2rem;
  height: auto;

  .img-container {
    width: 200px;
    border-radius: 10%;
    overflow: hidden;
  }
  img {
    width: 200px;
    border-radius: 10%;
  }

  h2 {
    color: teal;
  }

  p {
    font-size: 1.5rem;
    line-height: 1.5;
  }

  @media (max-width: 750px) {
    margin-bottom: 0.5rem;

    p {
      font-size: 1.2rem;
      line-height: 1.2;
    }
  }

  @media (max-width: 380px) {
    height: auto;
  }
`

const About = () => {
  const history = useHistory()

  const topRef = useRef(null)
  const wasabiRef = useRef(null)
  useEffect(() => {
    gsap.from(topRef.current, {
      duration: 1,
      autoAlpha: 0,
      y: 20,
      x: 20
    })
    gsap.from(wasabiRef.current, {
      duration: 1,
      autoAlpha: 0
    })
  }, [])

  return (
    <Container>
      <Me>
        <div className="intro" ref={topRef}>
          <h2> Hi,</h2>
          <h2>I'm Rebecca.</h2>
          <p>
            I enjoy <span style={{ color: 'teal' }}> wasabi</span> ice cream and{' '}
            <br />
            and I love building stuff with code.
          </p>
        </div>
        <div className="image-container" ref={wasabiRef}>
          <img className="face" src={wasabi} alt="face" />
        </div>
      </Me>
      <div>
        <p>
          My first experience with development was when I was 13. I made my own
          web page and had a lot of fun creating styles. I would look at the
          source code of other sites and dissect how they worked. I used that
          knowledge to make a hover effect with a racing rainbow background and
          bold white text that I was very proud of at the time.
        </p>
        <p>
          Years later, I decided to try learning JavaScript and got hooked. I
          was looking for something new to learn, and stumbled across
          freecodecamp. I started at the beginning with responsive web design,
          HTML and CSS. Enjoying learning, I continued to Data Structures and
          Algorithms with JavaScript, and fell in love with coding.{' '}
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
          I love to learn and grow. My latest project is a full stack quiz
          application. It consumes outside API data to dynamically create fun
          quizzes. I built it with GraphQL, Node, and React. Please check it out{' '}
          <span
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => history.push('/projects/movie-quiz')}
          >
            here
          </span>
          .
        </p>
        <p>
          I'm always interested in working with positive people on interesting
          projects. I'm currently writing front end code with Vue for an awesome
          ed tech startup.
        </p>
      </div>
    </Container>
  )
}

export default About
