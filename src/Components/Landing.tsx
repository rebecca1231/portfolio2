import { useRef, useEffect, RefObject } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import styled from 'styled-components'
import fluffybg from '../assets/fluffybg.jpeg'

import { projectData } from './ProjectCards/projectData'
import { Card } from './ProjectCards/Card'
import { Contact } from './Contact'
import { Link } from 'react-router-dom'

const Container = styled.div`
  max-width: 1000px;
  margin: auto;
  color: #585858;

  .textBox {
    max-width: 500px;
    margin: 0 auto;
  }
  .px-2 {
    padding: 0 10px;
  }
`

const FlexContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  p {
    font-size: 1rem;
    line-height: 1.5;
    color: #707070;

    @media (max-width: 750px) {
      display: block;
    }
  }
`

const Me = styled.div`
  border-radius: 5px;
  max-width: 1000px;
  margin: auto;
  background-image: url(${fluffybg});
  background-repeat: no-repeat;
  background-size: 1000px auto;
  background-position: top;
  height: 500px;
  img {
    max-width: 10rem;
    border-radius: 10px;
  }

  p {
    font-size: 1.5rem;
    line-height: 1.5;
    padding: 10px 0;
  }

  @media (max-width: 750px) {
    margin-bottom: 0.5rem;
    background-size: 700px auto;
    background-position: top;

    p {
      font-size: 1.2rem;
    }
  }
`

gsap.registerPlugin(ScrollTrigger)

export function Landing() {
  console.log('%cWelcome! %cHappy to see you!', 'font-weight:bold', 'color: teal')

  const cardsRef = useRef(null) as RefObject<HTMLDivElement | null>
  const topRef: RefObject<HTMLDivElement | null> = useRef(null)
  const headRef: RefObject<HTMLDivElement | null> = useRef(null)

  const project1 = projectData[0]
  const project2 = projectData[1]
  const project3 = projectData[2]

  const animation = (ref: RefObject<HTMLDivElement | null>) => {
    return {
      duration: 0.75,
      autoAlpha: 0,
      y: 10,
      ease: 'power4.in',
      scrollTrigger: {
        trigger: ref.current,
        start: 'top center+=200',
      },
    }
  }
  useEffect(() => {
    gsap.set([cardsRef.current, topRef.current, headRef.current], {
      autoAlpha: 1,
      y: 0,
      x: 0,
    })
  }, [])
  useEffect(() => {
    if (cardsRef.current && topRef.current && headRef.current) {
      gsap.from(cardsRef.current, animation(cardsRef))
      gsap.from(topRef.current, animation(topRef))
      gsap.from(headRef.current, {
        duration: 1,
        x: 200,
        scrollTrigger: {
          trigger: headRef.current,
          start: 'top center+=200',
        },
      })
    }
  }, [cardsRef.current, topRef.current, headRef.current])

  return (
    <Container>
      <div style={{ marginTop: '50px' }}>
        <div
          className='ui container'
          style={{
            marginTop: '7rem',
            maxWidth: '750px',
            padding: '2px',
            marginBottom: '1rem',
          }}
        >
          <h2> Hi there! I'm Rebecca.</h2>
        </div>
        <Me ref={topRef}>
          <div
            style={{
              backgroundColor: 'rgba(255,255,255, 0.75)',
            }}
          >
            <div ref={headRef} className='ui container px-2' style={{ maxWidth: '750px', padding: '2px' }}>
              <p className={'px-2'}>
                I love building stuff with code.
                <br />
                This is Emma. She helps.
              </p>
            </div>
          </div>
        </Me>
        <FlexContainer>
          <div className='textBox'>
            <p>
              I’m a Software Engineer. I love learning and building.
              <br />
              <br />
              As I’ve grown as a engineer, I've been mentored by senior engineers who have raised my standards and
              expectations.
            </p>
          </div>
          <div className='textBox'>
            <p>
              I have experience building applications from the ground up, and have learned to build reusable components,
              like the modals in my project Opine. I keep learning to write better, cleaner code.{' '}
            </p>
          </div>
        </FlexContainer>
        <div style={{ textAlign: 'center' }}>
          <Link className='ui teal small basic button' to='/about'>
            My story
          </Link>
        </div>
      </div>
      <div style={{ marginTop: '2rem' }} ref={cardsRef}>
        <h2>What I've been working on </h2>
        <FlexContainer>
          <Card
            title={project1.title}
            image1={project1.image1}
            description={project1.description}
            slug={project1.slug}
          />
          <Card
            title={project2.title}
            image1={project2.image1}
            description={project2.description}
            slug={project2.slug}
          />
          <Card
            title={project3.title}
            image1={project3.image1}
            description={project3.description}
            slug={project3.slug}
          />
        </FlexContainer>
      </div>
      <div>
        <Contact />
      </div>
      <div style={{ margin: '0 auto', textAlign: 'center' }}>
        <a
          href='https://www.linkedin.com/in/rebeccapage-swe'
          target='_blank'
          rel='noopener noreferrer'
          className='ui basic teal basic icon button'
        >
          Let's connect on <i className='large linkedin icon'></i>
        </a>
      </div>
    </Container>
  )
}
