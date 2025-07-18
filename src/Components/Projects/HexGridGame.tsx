import opine4 from '../../projectImages/opine4.jpg'
import opineMobile from '../../projectImages/opine-mobile.png'
import { Container } from './MovieQuiz'

export function HexGridGame() {
  return (
    <Container>
      <h1>Working Title: Hexagonal Grid Game</h1>
      <div className='flex'>
        <div>
          <h3>Overview</h3>
          <p>
            Building a strategy game with hexagons. Currently jumping off from the React Hex Grid library to build a
            small game application - using hexagons as tile pieces to place the game.
          </p>
          <h3>Goals</h3>
          <p>Fun with css and drag and drop. </p>
          <h3>Bumps along the way</h3>
          <p>Hexagons are not boxes, so we have to do some weird css.</p>
        </div>
        <img className='mobile-image' src={opineMobile} alt='mobile-landing-page' />
      </div>
      <div className='flex'>
        <div style={{ margin: '1rem' }}>
          <h3>More to come!</h3>
          <p>
            A major challenge to be discovered!
            <br />
            <br />
            One advantage or positive outcome to be recorded and detailed here!
          </p>
        </div>
        <div style={{ width: '20rem' }}></div>
      </div>
      <div className='flex'>
        <img src={opine4} alt='charts' />
        <div className='distance'>
          <h3>Lessons learned</h3>
          <p>Modernizing the Hex Grid library to suit my goals...</p>
          <p>styles and more!</p>
        </div>
      </div>
      <h3>At a glance</h3>
      <div className='flex'>
        <div>
          <h4>Stack</h4>
          <ul>
            <li>React</li>
            <li>Typescript</li>
            <li>React Hex Grid</li>
            <li>React DnD</li>
            <li>React Router</li>
            <li>React Context</li>
          </ul>
        </div>
        <div>
          <h4>Links</h4>
          <ul>
            <li>
              {/*<a href='https://www.github.com/rebecca1231/opine' rel='noopener noreferrer' target='_blank'>*/}
              {/*  Code*/}
              {/*</a>*/}
            </li>
          </ul>
        </div>
        {/*<img src={opine3} alt='form' className='mobile-image' style={{ margin: 0 }} />*/}
      </div>
      <div className='flex'>
        {/*<img src={opineModal} alt='modal' />*/}
        <div className='distance'>
          <h3>Positive Take Aways!</h3>
          <p>
            This is a project to build on. First I want to create some rules for movement around the grid, and some path
            finding to help new players learn the game.
          </p>
        </div>
      </div>
    </Container>
  )
}
