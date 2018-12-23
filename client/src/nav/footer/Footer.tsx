import React, { Component, FunctionComponent } from 'react';
import { NavLink as RRNavLink } from 'react-router-dom';
import {
  Col,
  Container,
  NavLink,
  Row
  } from 'reactstrap';
import { DefinedLinks } from './Links';

export const Footer: FunctionComponent = () => {
  return (
    <Container tag="footer" className="bg-light text-dark py-4 px-3 px-sm-5">
      <Row>
        <Col sm={8}>
          <p className="lead">
            We believe in making activity planning easy,
            with our huge catalog of activities you can find the right one for any event,
            even when the weather turns bad.
          </p>
        </Col>
        <Col sm={4} className="order-sm-first">
          <h3>Name</h3>
          Built by
          <NavLink
            tag={RRNavLink}
            to="/about-us"
            className="text-dark align-bottom">
              Max Bell
          </NavLink>
        </Col>
      </Row>
      <DefinedLinks />
      <Row className="text-center text-dark-50">
        <Col>&copy; Scout Activity Database</Col>
      </Row>
    </Container>
  );
};
