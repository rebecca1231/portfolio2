import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from './Components/Header'
import Footer from './Components/Footer';
import Landing from './Components/Landing';
import Contact from './Components/Contact';
import About from './Components/About'


function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/">
          <Landing />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
