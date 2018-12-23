import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch
  } from "react-router-dom";
import Activities from "./activities";
import Errors from "./errors";
import { GraphQLClient } from "./graphql";
import Us from "./us";
import Users from "./users";

export default class App extends Component {
  public render() {
    return (
      <GraphQLClient>
        <Router>
          <Switch>
            <Route exact path="/" component={Us.Home} />
            <Route path="/about-us" component={Us.AboutUs} />

            <Route path="/sign-in" component={Users.SignIn} />
            <Route path="/sign-up" component={Users.SignUp} />
            <Route path="/my-account" component={Users.MyAccount} />

            <Route path="/a/:slug" component={Activities.Activity} />
            <Route path="/create" component={Activities.Create} />
            <Redirect exact from="/a" to="/create" />

            <Route path="/test" component={Test} />
            <Route component={Errors.NoMatch} />
          </Switch>
        </Router>
      </GraphQLClient>
    );
  }
}
