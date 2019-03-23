import React, { Component } from 'react';
import { ApolloProvider } from "react-apollo";
import { HashRouter as Router, Route } from "react-router-dom"
import client from "./apolloClient";
import Home from "./Home";
import Detail from "./Detail";

class App extends Component {
  render() {

    return <ApolloProvider client={client}>
      <Router>
        <React.Fragment>
          <Route exact={true} path={"/"} component={Home} />
          <Route path={"/details/:moviesId"} component={Detail} />
        </React.Fragment>
      </Router>
    </ApolloProvider>;
  }
}

export default App;
