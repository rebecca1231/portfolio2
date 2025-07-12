import React from 'react'
import styled from 'styled-components'

const CardBox = styled.div`
  width: 500px;
  margin: 0 auto 1rem;
  overflow: hidden;
  border: 2px teal solid;
  border-radius: 5px;

  .image-box {
    width: 100%;
    max-height: 500px;
    overflow: hidden;
    border-bottom: 1px teal solid;
  }

  .links {
    display: flex;
    padding: 10px;
  }

  img {
    width: 100%;
  }

  .text {
    padding-top: 5px;
  }

  @media (max-width: 500px) {
    width: 300px;
    overflow: hidden;
    margin: 0 auto 1rem;
  }
  @media (min-width: 900px) {
    width: 800px;
  }
`

interface SimpleCardProps {
  title: string
  image1: string
  url: string
  description: string
  tech: string
  github: string
  details: string
  skill: string
}

export function SimpleCard({ title, image1, url, description, tech, github, details, skill }: SimpleCardProps) {
  return (
    <CardBox key={title} id={title}>
      <div className='image-box'>
        <img src={image1} alt='project' />
      </div>
      <div className='ui container text'>
        <h3 className='ui large header'>{title}</h3>

        <p>
          <strong>About: </strong>
          {details}
        </p>
        <p>
          <strong>Skill: </strong>
          {skill}
        </p>
        <p>
          <strong>Main Tools: </strong>
          {tech}
        </p>
        <div className='links'>
          {url ? (
            <>
              <a className='ui basic big button teal' href={url} target='_blank' rel='noopener noreferrer'>
                See Live Site
              </a>{' '}
            </>
          ) : (
            ''
          )}
          <a className='ui basic big button' href={github} rel='noopener noreferrer' target='_blank'>
            Code <i className='github icon'></i>
          </a>
        </div>
      </div>
    </CardBox>
  )
}
