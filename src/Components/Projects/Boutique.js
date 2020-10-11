import React from "react";
import styled from "styled-components";
import fluff2 from "../../projectImages/fluff2.png";
import fluff3 from "../../projectImages/fluff3.png";
import fluff1 from "../../projectImages/fluff1.png";

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
    margin: 2rem auto;

    .flex {
      flex-direction: column;
    }

    img {
      max-width: 15rem;
    }
  }
`;
const Boutique = () => {
  return (
    <Container>
      <h1>Emma's Boutique</h1>
      <div className="flex">
        <div>
          <h3>Overview</h3>
          <p>
            Emma's is a JamStack ecommerce application. I utilized Gatsby to
            build the frontend and created a custom CMS on the backend with
            Strapi.
          </p>
          <h3>Goals</h3>
          <p>
            The main purpose of this project was to learn how to create a
            JamStack application, and grow more comfortable with GraphQl. I also
            wanted to learn how to build a content managament system on the
            backend.
          </p>
          <h3>Bumps along the way</h3>
          <p>
            This is still a work in progress, so more bumps may be coming. At
            the moment, I'm working on creating a better UI, including a fresh
            landing page and checkout component.
          </p>
        </div>
        <img src={fluff2} alt="mobile-landing-page" />
      </div>

      <div className="flex">
        <img src={fluff3} alt="charts" />
        <div className="distance">
          <h3>Lessons learned</h3>
          <p>
            More to come!
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
            <li>Gatsby</li>
            <li>GraphQl</li>
            <li>Strapi</li>
            <li>Cloudinary</li>
          </ul>
        </div>
        <div>
          <h4>Links</h4>
          <ul>
            <li>
              <a
                href="https://emmas-boutique.netlify.app/"
                rel="noopener noreferrer"
                target="_blank"
              >
                Live Site
              </a>
            </li>
            <li>
              <a
                href="https://www.github.com/rebecca1231/ecomm-strapi"
                rel="noopener noreferrer"
                target="_blank"
              >
                Code{" "}
              </a>
            </li>
          </ul>
        </div>
        <img
          src={fluff1}
          alt="form"
          className="mobile-image"
          style={{ margin: 0 }}
        />
      </div>
    </Container>
  );
};

export default Boutique;
