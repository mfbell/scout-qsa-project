import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import { Security, ImplicitCallback } from '@okta/okta-react';

import Navbar from './nav/Navbar';
import Footer from './nav/Footer';
import Home from './Home';
import AboutUs from './AboutUs';
import { SignIn, SignUp } from './Auth';
import { Me } from './User.js'
import { Activity, Create } from './Activity';
import Blog from './Blog'
import { NoMatch } from './Errors';
import Test from './Test'


const config = {
  issuer: 'https://dev-430401.oktapreview.com/oauth2/default',
  redirect_uri: window.location.origin + '/implicit/callback',
  client_id: '0oagxbu0rvFjK13qd0h7'
}

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
        <Security 
          issuer={config.issuer}
          client_id={config.client_id}
          redirect_uri={config.redirect_uri}
          className="full-height"
        >
          <Switch>
            {/* Special pages */}
            <Route exact path="/" component={Home} />
            <Route path="/test" component={Test} />
            <Route path='/implicit/callback' component={ImplicitCallback}/>
            {/* Content pages */}
            <Route component={contentRoutes} />
          </Switch>
        </Security>
      </Router>
    );
  }
}

export default App;
