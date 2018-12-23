import React, { FunctionComponent } from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch
  } from 'react-router-dom';
import { Container } from 'reactstrap';
import * as Activities from './activities';
import { NoMatch } from './errors';
import { GraphQLClient } from './graphql';
import { Footer, Navbar } from './nav';
import { Home } from './us/Home';
import AboutUs from './us/info/AboutUs';
import * as Users from './users';

const App: FunctionComponent = () => {
  return (
    <GraphQLClient>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />

          <Route component={() =>
            <>
              <Navbar />
              <Container>
                <Switch>
                  <Route path="/about-us" component={AboutUs} />

                  <Route path="/sign-in" component={Users.SignIn} />
                  <Route path="/sign-up" component={Users.SignUp} />
                  <Route path="/my-account" component={Users.MyAccount} />

                  <Route path="/a/:slug" component={Activities.View} />
                  <Route path="/create" component={Activities.Create} />
                  <Redirect exact from="/a" to="/create" />

                  <Route component={NoMatch} />
                </Switch>
              </Container>
              <Footer />
            </>
          } />
        </Switch>
      </Router>
    </GraphQLClient>
  );
};

export default App;
