import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";

import { Navbar, Footer } from './Nav.js';
import Home from './Home.js';
import AboutUs from './AboutUs.js';
import { SignIn, SignUp } from './Auth.js';
import { Me } from './User.js'
import { Activity, Create } from './Activity.js';
import Blog from './Blog.js'
import { NoMatch } from './Errors.js';
import Test from './Test.js'

class App extends Component {
  render() {
    function contentRoutes(props) {
      return (
        <>
          <Navbar />
          <Switch>
            <Route path="/about-us" component={AboutUs} />
            <Route path="/sign-in" component={SignIn} />
            <Route path="/sign-up" component={SignUp} />
            <Route path="/me" component={Me} />
            <Redirect exact from="/a" to="/create" />
            <Route path="/a/:slug" component={Activity} />
            <Route path="/create" component={Create} />
            <Route path="/blog" component={Blog} />
            <Route component={NoMatch} />
          </Switch>
          <Footer />
        </>
      );
    }
    return (
      <Router>
        <Switch>
          {/* Special pages */}
          <Route exact path="/" component={Home} />
          <Route path="/test" component={Test} />
          {/* Content pages */}
          <Route component={contentRoutes} />
        </Switch>
      </Router>
    );
  }
}

export default App;
