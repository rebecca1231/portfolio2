import movieFight1 from "../../projectImages/movieFight1.png";
import movieFight2 from "../../projectImages/movieFight2.png";
import ecomm1 from "../../projectImages/ecomm1.png";
import ecomm2 from "../../projectImages/ecomm2.png";
import maze1 from "../../projectImages/maze1.png";
import maze2 from "../../projectImages/maze2.png";
import tindog1 from "../../projectImages/tindog1.png";
import tindog2 from "../../projectImages/tindog2.png";
import opine1 from "../../projectImages/opine1.png";
import opine2 from "../../projectImages/opine2.png";
import opine3 from "../../projectImages/opine3.png";
import fluff1 from '../../projectImages/fluff1.png'
import fluff2 from '../../projectImages/fluff2.png'
import fluff3 from '../../projectImages/fluff3.png'

export const projectData = [
  {
    image1: opine1,
    image2: opine2,
    image3: opine3,
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
    image1: fluff1,
    image2: fluff2,
    image3: fluff3,
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
    image1: movieFight1,
    image2: movieFight2,
    title: "Movie Fight",
    description: "Summons and compares movie stats.",
    skill: "I learned to make API calls and debounce submit functions.",
    tech: "HTML, CSS, JavaScript",
    github: "https://www.github.com/rebecca1231/movieFight",
    details:
      "Movie Fight taught me a lot about how to handle API calls, how to access and utilize information from a third party.  I also learned about debouncing user interaction to prevent excessive data fetching.",
  },
  {
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
    image1: maze1,
    image2: maze2,
    title: "Maze Game",
    description: "You can use the asdw keys to move the ball.",
    skill: "I learned DOM manipulation with Javascript and Matterjs.",
    tech: "HTML, CSS, JavaScript",
    url: "https://rebecca1231.github.io/maze/",
    github: "https://www.github.com/rebecca1231/maze",
    details:
      "Making this maze game required knowledge of DOM manipulation using JavaScript.",
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
  },
];
