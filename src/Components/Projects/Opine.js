import React from "react";
import styled from "styled-components";
import opine4 from "../../projectImages/opine4.jpg";
import opine3 from "../../projectImages/opine3.png";
import opineModal from "../../projectImages/opine-modal.png";
import opineMobile from "../../projectImages/opine-mobile.png";

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
      <h1>Opine</h1>
      <div className="flex">
        <div>
          <h3>Overview</h3>
          <p>
            Opine utilizes webhooks to gather information from emails, and send
            that data through the backend to MongoDB. That data is harnessed on
            the front-end to show charts of response information.
          </p>
          <h3>Goals</h3>
          <p>
            The main purpose of this project was to learn how to create a full
            stack React application, and grow more comfortable with shifting
            data.
          </p>
          <h3>Bumps along the way</h3>
          <p>
            There are so many pieces to this project. I had to maintain good
            organization or risk getting lost in the clutter. This was true
            within components as well. It was a good lesson in splitting up
            large components to single purpose entities, and in naming things
            clearly.
          </p>
        </div>
        <img
          className="mobile-image"
          src={opineMobile}
          alt="mobile-landing-page"
        />
      </div>

      <div className="flex">
        <img src={opine4} alt="charts" />
        <div className="distance">
          <h3>Lessons learned</h3>
          <p>
            Redux is a major aspect of this application’s structure. I had more
            than a few missteps with action creators not creating any action,
            and no update to my state. Specifically, the charting pages were a
            challenge because I initially wired them up to fetch only one piece
            of data. Later it occurred to me that it would be nice to be able to
            shuffle between different polls and compare charts. When I rewrote
            the data loading aspect, I was getting no errors, but also no data.
            Some quality time with Redux Dev Tools and a lot of trial and error
            finally got my charts up and running. This gave me a much deeper
            understanding of state.
          </p>
        </div>
      </div>
      <h3>At a glance</h3>
      <div className="flex">
        <div>
          <h4>Stack</h4>
          <ul>
            <li>Node</li>
            <li>React</li>
            <li>Express</li>
            <li>MongoDB</li>
            <li>Redux</li>
            <li>D3</li>
          </ul>
        </div>
        <div>
          <h4>Links</h4>
          <ul>
            <li>
              <a
                href="https://opine.app"
                rel="noopener noreferrer"
                target="_blank"
              >
                Live Site
              </a>
            </li>
            <li>
              <a
                href="https://www.github.com/rebecca1231/opine"
                rel="noopener noreferrer"
                target="_blank"
              >
                Code{" "}
              </a>
            </li>
          </ul>
        </div>
        <img
          src={opine3}
          alt="form"
          className="mobile-image"
          style={{ margin: 0 }}
        />
      </div>
      <div className="flex">
        <img src={opineModal} alt="modal" />
        <div className="distance">
          <h3>Reusable Components</h3>
          <p>
            This modal is an example of how I create reusable components. This
            particular component was created by using React portal. It is fully
            customizable. Details, such as title and handler functions, are
            customized by injecting props, which can be added or removed as
            needed. Creating reusable components like this helps me to write
            cleaner code.
          </p>
        </div>
      </div>
    </Container>
  );
};

export default Opine;
