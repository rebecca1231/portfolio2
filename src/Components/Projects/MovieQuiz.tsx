import React from 'react'
import styled from 'styled-components'
import dataPoster from '../../projectImages/movieQuiz-data-poster.png'
import movieQuiz from '../../projectImages/movieQuiz.png'
import pie from '../../projectImages/movieQuiz-pie.png'
import quizzes from '../../projectImages/movieQuiz-quizzes.png'
import finished from '../../projectImages/movieQuiz-finished-quiz.png'

const Container = styled.div`
  max-width: 1000px;
  margin: 5rem auto;
  color: #585858;
  line-height: 1.5;
  ul {
    list-style-type: none;
    font-size: 1rem;
  }
  a {
    color: #585858;
  }
  a:hover {
    text-decoration: underline;
  }
  p {
    padding: 10px;
    max-width: 500px;
    font-size: 0.9rem;
  }
  .flex {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }

  img {
    max-width: 25rem;
    align-self: center;
    box-shadow: 0px 2px 5px #c0c0c0;
    margin: 20px;
  }
  .mobile-image {
    max-width: 15rem;
  }
  .distance {
    margin-top: 1rem;
  }

  .more-distance {
    margin-top: 1.5rem;
  }

  @media (max-width: 750px) {
    padding: 10px;
    margin: 1rem auto;

    .flex {
      flex-direction: column;
    }

    img {
      max-width: 15rem;
    }
  }
`
export function MovieQuiz() {
  return (
    <Container>
      <h1>Movie Quiz</h1>
      <div className='flex'>
        <div>
          <h3>Overview</h3>
          <p>
            Movie Quiz utilizes information from Open IMDb to fetch information and inject it into a quiz. Users can
            login to save their quizzes, as well as like and comment on others’.
          </p>
          <h3>Goals</h3>
          <p>
            I had two goals for this application. First, I wanted to create a fun, dynamic quiz into which any data
            could easily be injected. Additionally, I really wanted to learn more about GraphQL, especially on the
            backend.
          </p>
        </div>
        <img src={movieQuiz} alt='quiz' />
      </div>
      <div className='flex'>
        <div className='distance'>
          <h3>Process</h3>
          <p>
            I first created the fun frontend quiz components. I gave them component level state to update with new quiz
            questions, and to give the user feedback on their answer. In order to keep track of question count and
            scoring, I created context. It isn’t tied to components and can be accessed not only in the fun quiz, but
            also by the pie chart to visualize the score. Next, I needed to begin building the backend to retrieve the
            data for the quiz, and allow users to login, save data, and interact in a lasting way with the application.
            I didn’t want to repeat the same Express with OAuth that I used in my project Opine. In building Emma’s
            (Gatsby e-commerce site), I really enjoyed using GraphQl on the frontend. So, I took myself on a journey to
            learn how to implement GraphQl on the backend with Apollo Server.
          </p>
          <h3>Bumps Along the Way</h3>
          <p>
            I was expecting something like Mongoose, but it was more like Redux for the full stack. I didn’t realize how
            many parts were involved in developing a GraphQl backend until I dived in. It reminds me a little of Redux,
            with resolvers and type definitions instead of reducers and action creators. GraphQl is strongly-typed and
            it was my first time to wrap my head around that. Time spent reading error messages and discovering how to
            operate in the GraphQl type system rewarded me with a reliable server. The front end can retrieve data in
            exactly the shape it needs and promptly utilize it, rather than retrieving a chunk that has to be
            reformatted.
          </p>
        </div>
        <img src={dataPoster} alt='quiz' />
      </div>
      <div className='flex distance'>
        <img src={quizzes} alt='quiz' />
        <div className='distance'>
          <h3>Lessons Learned</h3>
          <p>
            I built Movie Quiz front to back or in a product-centric manner. It began with the product: what views,
            interactions, information does it require to be compelling. Then, I took those ideas to the backend, and
            built out solutions to make them function. For instance, when choosing movie data to load into the quiz, I
            added a button to show details, like the poster and actor information. It’s not necessary to the
            functionality of a quiz application, but it allows the user to have a more meaningful interaction with the
            data. Originally, at the end of the quiz, I simply had the page change to show scores. It felt very abrupt,
            and I realized, there needed to be a moment of celebration. So, I built some confetti. Engineering Movie
            Quiz in a product-centric way has created a better user experience.
          </p>
        </div>
      </div>
      <h3 className='distance'>At a glance</h3>
      <div className='flex'>
        <div>
          <h4>Stack</h4>
          <ul>
            <li>GraphQL</li>
            <li>React</li>
            <li>D3</li>
            <li>Node</li>
            <li>Apollo Server</li>
            <li>MongoDB</li>
            <li>Mongoose</li>
            <li>Styled Components</li>
          </ul>
        </div>
        <div>
          <h4>Links</h4>
          <ul>
            <li>
              <a href='https://movie-quiz.app/' rel='noopener noreferrer' target='_blank'>
                Live Site
              </a>
            </li>
            <li>
              <a href='https://www.github.com/rebecca1231/movie-quiz' rel='noopener noreferrer' target='_blank'>
                Code{' '}
              </a>
            </li>
          </ul>
        </div>
        <img className='mobile-image' src={finished} alt='form' style={{ margin: 0 }} />
      </div>
      <div className='flex more-distance'>
        <img className='mobile-image' src={pie} alt='form' style={{ margin: 0 }} />
        <div className='distance'>
          <h3 className='distance'>Reusable Components</h3>
          <p>
            If you've looked at Opine, you may think this pie chart looks familiar. This is an example of a reusable
            component. I strive to write code that performs a specific purpose and can be customized. In this way, I can
            create complex applications much more quickly and efficiently.
          </p>
        </div>
      </div>
    </Container>
  )
}
