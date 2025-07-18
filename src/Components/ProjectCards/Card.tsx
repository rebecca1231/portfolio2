import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const CarDiv = styled.div`
  max-width: 500px;
  padding: 10px;
  margin: 0 auto 1rem;
  overflow: hidden;
  border-radius: 5px;
  transition: all 0.2s ease-in-out;
  color: #585858;

  img {
    width: 100%;
    border-radius: 5px;
  }

  :hover {
    transform: scale(1.05);
    .a-link {
      text-decoration: underline;
    }
  }
  .image-box {
    min-height: 300px;
    margin: 0 auto;
  }
`

interface CardProps {
  title: string
  image1: string
  slug: string
  description: string
}
export function Card({ title, image1, slug, description }: CardProps) {
  return (
    <CarDiv key={title} id={title}>
      <div className='image-box'>{image1 ? <img src={image1} alt='project' /> : <h2> WIP </h2>}</div>
      <div>
        <h3>{title}</h3>
        <p> {description} </p>
        <Link className='a-link' style={{ color: '#585858' }} to={`/projects/${slug}`}>
          Learn More
        </Link>
      </div>
    </CarDiv>
  )
}
