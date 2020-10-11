import React from "react";
import styled from "styled-components";
import dataPoster from "../../projectImages/movieQuiz-data-poster.png";
import data from "../../projectImages/movieQuiz-data.png";
import movieQuiz from "../../projectImages/movieQuiz.png";
import pie from "../../projectImages/movieQuiz-pie.png";

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
    max-width: 28rem;
    box-shadow: 0px 2px 5px #c0c0c0;
    margin: 20px;
  }
  .mobile-image {
    max-width: 15rem;
  }
  .distance {
    margin-top: 1rem;
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
`;
const Opine = () => {
  return (
    <Container>
      <h1>Movie Quiz</h1>
      <div className="flex">
        <div>
          <h3>Overview</h3>
          <p>
            Movie Quiz utilizes information from Open IMDb to fetch movie
            information and injects it into a quiz.
          </p>
          <h3>Goals</h3>
          <p>
            The main purpose of this project was to develop a deeper
            understanding of how and when to use state and context to create a
            dynamic application.
          </p>
        </div>
        <img src={movieQuiz} alt="quiz" />
      </div>
      <div className="flex">
        <img src={dataPoster} alt="quiz" />
        <div className="distance">
          <h3>Bumps Along the Way</h3>
          <p>
            I created context for the movie and score data, because several
            components need access to them. In contrast, I also used several
            component level pieces of state to track local details. In
            particular, the quiz page consists of two components: one to show
            the quiz, another to show each answer tile. The tiles need to
            rerender when selected to give feedback to the user, but the other
            tiles and the quiz page must remain unchanged.
          </p>
          <h3>Lessons Learned</h3>
          <p>
            I initially created this application with only a frontend. However,
            everytime I made an api call to fetch movie data, my api key was put
            right into the url. I knew to put my api key in a .env file, but I
            wasn’t sure how to handle the data fetching. I tweeted about it, and
            the dev community led me in the right direction. I created a simple
            backend to handle the data requests. This experience helped me
            better understand security.
          </p>
        </div>
      </div>
      <h3>Possibilities</h3>
      <p>
        I think it might be interesting to expand this project to track quiz
        results over time. I could also add a leaderboard and social media
        links, so users could share and compare their quiz results.
      </p>

      <h3>At a glance</h3>
      <div className="flex">
        <div>
          <h4>Stack</h4>
          <ul>
            <li>React</li>
            <li>D3</li>
            <li>Node</li>
            <li>Express</li>
          </ul>
        </div>
        <div>
          <h4>Links</h4>
          <ul>
            <li>
              <a
                href="https://movie-quiz-app.netlify.app/"
                rel="noopener noreferrer"
                target="_blank"
              >
                Live Site
              </a>
            </li>
            <li>
              <a
                href="https://www.github.com/rebecca1231/quiz"
                rel="noopener noreferrer"
                target="_blank"
              >
                Code{" "}
              </a>
            </li>
          </ul>
        </div>
        <img
          src={data}
          alt="form"
          className="mobile-image"
          style={{ margin: 0 }}
        />
      </div>
      <img src={pie} alt="" />
    </Container>
  );
};

export default Opine;
