import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";

import { NavBar, Footer } from './Nav.js';
import Home from './Home.js';
import AboutUs from './AboutUs.js';
import { SignIn, SignUp } from './Auth.js';
import { Me } from './User.js'
import { Activity, Create } from './Activity.js';
import { NoMatch } from './Errors.js';

class App extends Component {
  render() {
    return (
      <Router>
        <>
          <NavBar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about-us" component={AboutUs} />
            <Route path="/sign-in" component={SignIn} />
            <Route path="/sign-up" component={SignUp} />
            <Route path="/me" component={Me} />
            <Redirect exact from="/a" to="/create" />
            <Route path="/a/:slug" component={Activity} />
            <Route path="/create" component={Create} />
            <Route component={NoMatch} />
          </Switch>
          <Footer />
        </>
      </Router>
    );
  }
}

export default App;
