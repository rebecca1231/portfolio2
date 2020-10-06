import movieFightCollage from "../../projectImages/movieFightCollage.jpg";

import mazeCollage from "../../projectImages/mazeCollage.jpg";

import opineCollage from "../../projectImages/opineCollage.jpg";

import fluffCollage from '../../projectImages/fluffCollage.jpg'


export const projectData = [
  {
    image1: opineCollage,
    live: "https://www.opine.app",
    exp:"opine",
    title: "Opine",
    description:
      "Users can send email polls and see the resulting data in charts",
    skill: "Fullstack site with custom backend API and database.",
    tech: "React, Node.js, D3.js, MongoDB, Express.js, Redux",
    github: "https://www.github.com/rebecca1231/opine",
    details:
      "Opine is my journey to discover how to build full stack React applications. I had to learn how to get the backend API and the React frontend to communicate, and how to deploy the whole application.",
  },
  {
    image1: fluffCollage,
    url: "https://eager-jang-815ed7.netlify.app/",
    title: "Emma's Boutique",
    description: "Users can shop pet clothing.",
    skill:
      "I built a JamStack frontend and a custom Strapi CMS on the backend.",
    tech: "React, Gatsby.js, Node.js, GraphQl, Strapi, Cloudinary",
    github: "https://www.github.com/rebecca1231/ecomm-strapi",
    details: `Creating Emma's Boutique taught me how to use Gatsby and GraphQl to build pages based on data at deploy.
      I learned how to set up a continuous deployment integration, so as data is updated, so is the application.  
      This is still a work in progress!  I'm currently restyling the UI.
      `,
  },
  {
    image1: movieFightCollage,
    title: "Movie Fight",
    description: "Summons and compares movie stats.",
    skill: "I learned to make API calls and debounce submit functions.",
    tech: "HTML, CSS, JavaScript",
    github: "https://www.github.com/rebecca1231/movieFight",
    details:
      "Movie Fight taught me a lot about how to handle API calls, how to access and utilize information from a third party.  I also learned about debouncing user interaction to prevent excessive data fetching.",
  },
  
  {
    image1: mazeCollage,
    title: "Maze Game",
    description: "You can use the asdw keys to move the ball.",
    skill: "I learned DOM manipulation with Javascript and Matterjs.",
    tech: "HTML, CSS, JavaScript",
    url: "https://rebecca1231.github.io/maze/",
    github: "https://www.github.com/rebecca1231/maze",
    details:
      "Making this maze game required knowledge of DOM manipulation using JavaScript.",
  },
  /*{
    image1: ecomm1,
    image2: ecomm2,
    title: "Online Shop Site",
    description: "Users can add and delete items from a cart.",
    skill: "I learned to track user interaction.",
    tech: "HTML, CSS, JavaScript, Node JS",
    github: "https://www.github.com/rebecca1231/ecommv1",
    details:
      "This online shop uses cookies to track a user's cart data, including the content and how long it has been kept. This helps to determine whether to maintain or remove the information from the repository.",
  },
  {
    image1: tindog1,
    image2: tindog2,
    title: "Dog Tinder",
    description: "This is all about website design.",
    skill: "I learned about UX/UI principles.",
    tech: "HTML, CSS",
    github: "https://www.github.com/rebecca1231/tindog",
    details:
      "TinDog shows the importance of design principles.  I particularly paid attention proper spacing and padding, font sizing for attention, and the use of color to create areas of interest.",
  },*/
];
