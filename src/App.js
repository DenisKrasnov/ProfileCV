import React, { Component } from "react";
import { hot } from "react-hot-loader";
import { ApolloProvider } from "react-apollo";
import ApolloClient from "apollo-boost";
import { BrowserRouter as Router, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import SkillsPage from "./pages/SkillsPage";
import CVpage from "./pages/CVpage";
import Portfolio from "./pages/Portfolio";

const client = new ApolloClient();

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Router>
          <>
            <Route path="/" exact component={HomePage} />
            <Route path="/skills" component={SkillsPage} />
            <Route path="/cv" component={CVpage} />
            <Route path="/portfolio" component={Portfolio} />
          </>
        </Router>
      </ApolloProvider>
    );
  }
}

export default hot(module)(App);
