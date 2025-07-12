import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import { gsap } from 'gsap'
import wasabi from '../assets/wasabi.webp'

const Container = styled.div`
  margin: 0 auto;
  max-width: 1000px;
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

export function About() {
  const topRef = useRef(null)
  const wasabiRef = useRef(null)
  useEffect(() => {
    gsap.set([topRef.current, topRef.current, wasabiRef.current], {
      autoAlpha: 0,
      y: 0,
      x: 0,
    })
  }, [])
  useEffect(() => {
    if (topRef.current && wasabiRef.current) {
      gsap.to(topRef.current, {
        duration: 1,
        autoAlpha: 1,
        y: 20,
        x: 20,
      })
      gsap.to(wasabiRef.current, {
        duration: 1,
        autoAlpha: 1,
      })
    }
  }, [topRef.current, wasabiRef.current])

  return (
    <Container>
      <Me>
        <div className='intro' ref={topRef}>
          <h2> Hi,</h2>
          <h2>I'm Rebecca.</h2>
          <p>
            I enjoy <span style={{ color: 'teal' }}> wasabi</span> ice cream and <br />
            and I love building stuff with code.
          </p>
        </div>
        <div ref={wasabiRef}>
          <img style={{ visibility: 'visible', opacity: 1 }} src={wasabi} alt='face' />
        </div>
      </Me>
      <div>
        <p>
          I got into development by making my own web page and having a lot of fun creating styles. I would look at the
          source code of other sites and dissect how they worked. I used that knowledge to make a hover effect with a
          racing rainbow background and bold white text that I was very proud of at the time. Years later, I decided to
          try learning JavaScript and got hooked.
        </p>

        <p>
          <b className={'pr-2'}>What started as curiosity has become my career.</b>My experience spans modern frameworks
          and technologies: React, React Native, Vue, TypeScript, Node.js, GraphQL, and C#/.NET. I've worked on
          everything from interactive educational platforms to mobile apps, always focusing on creating solutions that
          truly serve users.
        </p>
        <p>
          <b className={'pr-2'}>I love the problem-solving aspect of engineering </b>- whether it's refactoring legacy
          code to improve performance, designing database schemas, or implementing dynamic data visualizations with D3.
          There's something satisfying about taking complex requirements and turning them into clean, maintainable code.
        </p>
        <p>
          <b className={'pr-2'}>I'm always learning and growing. </b>Recently, I've been diving deeper into system
          design and architectural patterns, while also exploring how AI tools can enhance developer productivity. I
          believe the best engineers are those who stay curious and adapt to new technologies while maintaining a strong
          foundation in fundamentals.
        </p>
        <p>
          I'm always interested in working with positive people on interesting projects. Let's connect and see what we
          can build together.
        </p>
      </div>
    </Container>
  )
}
