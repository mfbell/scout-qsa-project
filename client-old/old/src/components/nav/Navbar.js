import React, { Component } from 'react';
import { NavLink as RRNavLink } from 'react-router-dom';
import {
  Collapse,
  Navbar as RSNavBar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  Form,
  Input,
  Container
} from 'reactstrap';

import NavbarItems from './NavbarItems';


class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    let search = this.props.noSearch ? undefined: (
      <Form>
        <Input type="search" placeholder="Explorer - Discover - Share" />
      </Form>
    );
    return (
      <RSNavBar expand="sm" {...this.props} light>
        <Container>
          <NavbarBrand to="/" tag={RRNavLink} exact>SABD</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            {search}
            <Nav className="ml-auto" navbar>
              <NavbarItems />
            </Nav>
          </Collapse>
        </Container>
      </RSNavBar>
    );
  }
}

export default Navbar;