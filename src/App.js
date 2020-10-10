import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Landing from "./Components/Landing";
import Contact from "./Components/Contact";
import About from "./Components/About";
import Projects from "./Components/Projects";
import Opine from './Components/Projects/Opine'
import "./styles/index.scss";
import Boutique from "./Components/Projects/Boutique";
import Maze from "./Components/Projects/Maze";
import MovieQuiz from "./Components/Projects/MovieQuiz";
import NewNav from './Components/NewNav/nav'



function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} /> 
        <Route exact path="/" component={Landing} />
        <Route exact path="/projects" component={Projects} />
        <Route path="/projects/opine" component={Opine} />
        <Route path="/projects/movie-quiz" component={MovieQuiz} />
        <Route path="/projects/maze" component={Maze} />
        <Route path="/projects/boutique" component={Boutique} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
