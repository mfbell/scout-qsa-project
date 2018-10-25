import React, { Component } from 'react';
import { withAuth } from '@okta/okta-react';

import { GenNavLink, GenNavButton } from './NavItems';


const NavbarItems = withAuth(class NavbarItems extends Component {
  constructor(props) {
    super(props);
    this.state = { authenticated: null };
    this.checkAuthentication = this.checkAuthentication.bind(this);
    this.checkAuthentication();
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
  }

  async checkAuthentication() {
    const authenticated = await this.props.auth.isAuthenticated();
    if (authenticated !== this.state.authenticated) {
      this.setState({ authenticated });
    }
  }

  componentDidUpdate() {
    this.checkAuthentication();
  }

  async login() {
    // Redirect to '/' after login
    this.props.login('/');
  }

  async logout() {
    // Redirect to '/' after logout
    this.props.logout('/bye');
  }

  renderAuthed() {
    return (<>
      <GenNavLink to="/saved">Saved</GenNavLink>
      <GenNavButton onClick={this.logout}>Temp logout</GenNavButton>
      <GenNavLink to="/me" className="btn btn-outline-primary">My Account</GenNavLink>
      </>);
  }

  renderUnauthed() {
    return (<>
      <GenNavButton onClick={this.signUp}>Sign in</GenNavButton>
      <GenNavButton onClick={this.login} className="btn btn-outline-primary">Sign up</GenNavButton>
    </>);
  }

  render() {
    if (this.state.authenticated === null) return null
    else if (this.state.authenticated) return this.renderAuthed()
    else return this.renderUnauthed()
  }
});

export default NavbarItems;