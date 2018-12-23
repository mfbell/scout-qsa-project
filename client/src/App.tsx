import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch
  } from 'react-router-dom';
import * as Activities from './activities';
import { NoMatch } from './errors';
import { GraphQLClient } from './graphql';
import { Home } from './us/Home';
import AboutUs from './us/info/AboutUs';
import * as Users from './users';

export default class App extends Component {
  public render() {
    return (
      <GraphQLClient>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about-us" component={AboutUs} />

            <Route path="/sign-in" component={Users.SignIn} />
            <Route path="/sign-up" component={Users.SignUp} />
            <Route path="/my-account" component={Users.MyAccount} />

            <Route path="/a/:slug" component={Activities.Activity} />
            <Route path="/create" component={Activities.Create} />
            <Redirect exact from="/a" to="/create" />

            <Route component={NoMatch} />
          </Switch>
        </Router>
      </GraphQLClient>
    );
  }
}
