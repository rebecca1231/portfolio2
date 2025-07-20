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
  max-width: 1020px;
  margin: auto;
  color: #585858;

  .textBox {
    max-width: 500px;
    margin: 0 auto;
    font-size: 2rem;
    p {
      font-size: 1.1rem;
    }
  }
`

const FlexContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 20px;
  p {
    font-size: 1rem;
    line-height: 1.5;
    color: #707070;
    margin: 10px;

    @media (max-width: 1000px) {
      display: block;
      margin: 1rem auto;
    }
  }
`

const LandingImageWithText = styled.div`
  border-radius: 5px;
  max-width: 1000px;
  margin: auto;
  background-image: url(${fluffybg});
  background-repeat: no-repeat;
  background-size: 1000px auto;
  background-position: top;
  height: 450px;
  img {
    max-width: 10rem;
    border-radius: 10px;
  }
  p {
    font-size: 1.5rem;
    line-height: 1.5;
    padding: 10px;
  }
`

gsap.registerPlugin(ScrollTrigger)

export function Landing() {
  const cardsRef = useRef(null) as RefObject<HTMLDivElement | null>
  const topRef: RefObject<HTMLDivElement | null> = useRef(null)
  const headRef: RefObject<HTMLDivElement | null> = useRef(null)

  const project1 = projectData[0]
  const project2 = projectData[1]
  const project3 = projectData[2]

  useEffect(() => {
    // console.log('%cWelcome!', 'font-weight:bold;color: teal')
  }, [])

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
      <div style={{ marginTop: '5rem' }}>
        <div
          style={{
            maxWidth: '750px',
            padding: '10px',
          }}
        >
          <h2> Hi there! I'm Rebecca.</h2>
        </div>
        {/*<LandingImageWithText ref={topRef}>*/}
        {/*  <div*/}
        {/*    style={{*/}
        {/*      backgroundColor: 'rgba(255,255,255, 0.75)',*/}
        {/*    }}*/}
        {/*  >*/}
        {/*    <div ref={headRef} style={{ maxWidth: '750px' }}>*/}
        {/*      <p>*/}
        {/*        <br />*/}
        {/*      </p>*/}
        {/*    </div>*/}
        {/*  </div>*/}
        {/*</LandingImageWithText>*/}
        <FlexContainer>
          <div className='textBox'>
            <p>
              I'm a Software Engineer with expertise in mobile development, UI/UX design, and backend architecture. I
              love learning and building scalable solutions that drive user success. As I've grown as an engineer, I've
              been mentored by senior engineers who have raised my standards - and now I get to mentor others too.
            </p>
          </div>
          <div className='textBox'>
            <p>
              I have experience building applications from the ground up - from full stack platforms to React Native
              mobile apps. I keep learning to write better code faster, while helping my team do the same.
            </p>
          </div>
        </FlexContainer>
        <div style={{ textAlign: 'center', marginTop: '2rem' }}>
          <Link className='ui teal small basic button' to='/about'>
            My story
          </Link>
        </div>
      </div>
      <div style={{ marginTop: '2rem' }} ref={cardsRef}>
        <h2 className={'ui header'} style={{ paddingLeft: '10px' }}>
          What I've been working on{' '}
        </h2>

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
      <div style={{ margin: '1rem auto', textAlign: 'center' }}>
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
