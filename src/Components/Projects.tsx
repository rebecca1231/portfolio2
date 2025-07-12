import styled from 'styled-components'
import { Cards } from './ProjectCards/Cards'

const Container = styled.div`
  max-width: 800px;
  margin: auto;
  color: #585858;

  .textBox {
    padding: 10px;
    max-width: 400px;
    margin: 0 auto;
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
    padding: 10px 0;
    color: #707070;

    @media (max-width: 750px) {
      display: block;
    }
  }
`

export function Projects() {
  return (
    <Container>
      <h5 style={{ fontSize: '1.5rem', marginTop: '50px', marginLeft: '0.85rem' }}>Dream it.</h5>
      <h4 style={{ marginLeft: '2rem', fontSize: '2rem' }}>Believe it.</h4>
      <h3 style={{ marginLeft: '4rem', fontSize: '2.5rem' }}>Build it.</h3>
      <div style={{ marginTop: '2rem' }}> </div>

      <FlexContainer>
        <Cards />
      </FlexContainer>
    </Container>
  )
}
