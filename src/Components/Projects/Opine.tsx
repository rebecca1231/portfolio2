import React from 'react'
import opine4 from '../../projectImages/opine4.jpg'
import opine3 from '../../projectImages/opine3.png'
import opineModal from '../../projectImages/opine-modal.png'
import opineMobile from '../../projectImages/opine-mobile.png'
import { Container } from './MovieQuiz'

export function Opine() {
  return (
    <Container>
      <h1>Opine</h1>
      <div className='flex'>
        <div>
          <h3>Overview</h3>
          <p>
            Opine utilizes webhooks to gather information from emails, and send that data through the backend to
            MongoDB. That data is harnessed on the front-end to show charts of response information.
          </p>
          <h3>Goals</h3>
          <p>
            The main purpose of this project was to learn how to create a full stack React application, and grow more
            comfortable with shifting data.
          </p>
          <h3>Bumps along the way</h3>
          <p>
            There are many pieces to this project. I had to maintain good organization or risk getting lost in the
            clutter. It was a good lesson in splitting up large files and naming things clearly. In particular, the
            backend requires several routes for authentication and others for database interaction. I had to learn how
            to separate these while maintaining the same instance of the Express app across all routes. Keeping the user
            in mind, I made sure to create paths for the creation, editing, retrieval and deletion of data with
            mongoose.
          </p>
        </div>
        <img className='mobile-image' src={opineMobile} alt='mobile-landing-page' />
      </div>
      <div className='flex'>
        <div style={{ margin: '1rem' }}>
          {' '}
          <h3>Full Stack Implications</h3>
          <p>
            A major challenge in building Opine was linking my Node/Express backend to the user facing frontend. I
            researched two options, either to completely separate, or build together. For this project, I chose to house
            the whole thing altogether.
            <br />
            <br />
            One advantage of housing the whole application in one folder, meant I could start both servers to run
            concurrently with one script. This makes development more efficient. I was also able to deploy the whole
            application on heroku (as opposed to Movie Quiz or Emma’s which are currently deployed separately). It did
            require some extra script writing to properly implement, but thankfully heroku has excellent documentation.
          </p>
        </div>
        <div style={{ width: '20rem' }}></div>
      </div>
      <div className='flex'>
        <img src={opine4} alt='charts' />
        <div className='distance'>
          <h3>Lessons learned</h3>
          <p>
            Redux is a major aspect of this application’s structure. I had more than a few missteps with action creators
            not creating any action, and no update to my state. Specifically, the charting pages were a challenge
            because I initially wired them up to fetch only one piece of data. Later it occurred to me that it would be
            nice to be able to shuffle between different polls and compare charts. The rewrite yielded no errors, but
            also no data. Trial and error finally got my charts up and running. This gave me a much deeper understanding
            of state.
          </p>
          <p></p>
        </div>
      </div>
      <h3>At a glance</h3>
      <div className='flex'>
        <div>
          <h4>Stack</h4>
          <ul>
            <li>Node</li>
            <li>React</li>
            <li>Express</li>
            <li>MongoDB</li>
            <li>Redux</li>
            <li>D3</li>
            <li>Jest</li>
          </ul>
        </div>
        <div>
          <h4>Links</h4>
          <ul>
            <li>
              <a href='https://opine.app' rel='noopener noreferrer' target='_blank'>
                Live Site
              </a>
            </li>
            <li>
              <a href='https://www.github.com/rebecca1231/opine' rel='noopener noreferrer' target='_blank'>
                Code{' '}
              </a>
            </li>
          </ul>
        </div>
        <img src={opine3} alt='form' className='mobile-image' style={{ margin: 0 }} />
      </div>
      <div className='flex'>
        <img src={opineModal} alt='modal' />
        <div className='distance'>
          <h3>Reusable Components</h3>
          <p>
            This modal is an example of how I create reusable components. This particular component was created by using
            React portal. It is fully customizable. Details, such as title and handler functions, are customized by
            injecting props, which can be added or removed as needed. Creating reusable components like this helps me to
            write clean, maintainable code.
          </p>
        </div>
      </div>
    </Container>
  )
}
