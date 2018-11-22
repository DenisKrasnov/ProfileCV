import React, { Component } from "react";
import { hot } from "react-hot-loader";
import { ApolloProvider } from "react-apollo";
import ApolloClient from "apollo-boost";

import Home from "./Home";

const client = new ApolloClient();

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Home />
      </ApolloProvider>
    );
  }
}

export default hot(module)(App);
