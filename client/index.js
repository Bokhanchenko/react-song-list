import './style/style.css'
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ApolloClient, { createNetworkInterface } from 'apollo-client';
import { ApolloProvider } from "react-apollo";
import { Router, hashHistory, Route, IndexRoute } from "react-router";

import App from './components/App';
import requireAuth from './components/requireAuth';
import LoginForm from "./components/Auth/LoginForm";
import SignupForm from "./components/Auth/SignupForm";
import Dashboard from "./components/Dashboard";
import SongList from './components/songs/SongList'
import SongCreate from "./components/songs/SongCreate";
import SongDetail from "./components/songs/SongDetail";
import ReduxTest from "./components/redux-components/ReduxTest";

const networkInterface = createNetworkInterface({
  uri: '/graphql',
  opts: {
    credentials: 'same-origin'
  }
});

const client = new ApolloClient({
  networkInterface,
  dataIdFromObject: o => o.id
});

class Root extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Router history={hashHistory}>
          <Route path="/" component={App}>
            <Route path="login" component={LoginForm}/>
            <Route path="signup" component={SignupForm}/>
            <Route path="songs" component={requireAuth(Dashboard)}>
              <IndexRoute component={SongList}/>
              <Route path="/songs/new" component={SongCreate}/>
              <Route path="/songs/:id" component={SongDetail}/>
            </Route>
            <Route path="redux" component={ReduxTest} />
          </Route>
        </Router>
      </ApolloProvider>
    );
  }
}

ReactDOM.render(<Root />, document.querySelector('#root'));