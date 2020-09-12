import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from './Components/Header'
import Footer from './Components/Footer';
import Landing from './Components/Landing';
import Contact from './Components/Contact';
import About from './Components/About'
import Projects from './Components/Projects'


function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/contact">
          <Contact />
        </Route>
        <Route exact path="/">
          <Landing />
        </Route>
        <Route exact path="/projects">
          <Projects />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
