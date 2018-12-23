import React, { Component, PureComponent } from 'react';
import { NavLink as RRNavLink } from 'react-router-dom';
import {
  Collapse,
  Container,
  Form,
  Input,
  Nav,
  Navbar as RSNavBar,
  NavbarBrand,
  NavbarToggler
  } from 'reactstrap';
import { Links } from './Links';

export interface IProps {
  noSearch: boolean;
}

interface IState {
  isOpen: boolean;
}

export class Navbar extends PureComponent<IProps, IState> {
  public readonly state: Readonly<IState> = {
    isOpen: false
  };

  public toggle = () => {
    this.setState(state => ({isOpen: !state.isOpen}));
  }

  public render() {
    return (
      <RSNavBar expand="sm" light>
        <Container>
          <NavbarBrand to="/" tag={RRNavLink} exact>Name</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            {this.props.noSearch ?
              undefined :
              <Form>
                <Input type="search" placeholder="Explorer - Discover - Share" />
              </Form>
            }
            <Nav className="ml-auto" navbar>
              <Links />
            </Nav>
          </Collapse>
        </Container>
      </RSNavBar>
    );
  }
}
