import React, { Component } from "react";
import { hot } from "react-hot-loader";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Nav from "./components/Nav";

import HomePage from "./pages/HomePage";
import SkillsPage from "./pages/SkillsPage";
import CVpage from "./pages/CVpage";

class App extends Component {
  render() {
    return (
      <Router>
        <>
          <Nav />
          <Route path="/" exact component={HomePage} />
          <Route path="/skills" component={SkillsPage} />
          <Route path="/cv-viewer" component={CVpage} />
        </>
      </Router>
    );
  }
}

export default hot(module)(App);
