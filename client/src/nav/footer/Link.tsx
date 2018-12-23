import React, { Component, FunctionComponent } from 'react';
import { NavLink as RRNavLink } from 'react-router-dom';
import {
  Col,
  Container,
  NavLink,
  Row
  } from 'reactstrap';

export interface ILink {
  text: string;
  url: string;
}

export interface IProps {
  link: ILink;
  first: boolean;
  last: boolean;
}

export const Link: FunctionComponent<IProps> = ({ link, first, last }) => {
  return (
    <Col sm={4} md={3} lg={2} className={
      'my-2' +
      first ? ' ml-auto' : '' +
      last ? ' mr-auto' : '' }>
        <NavLink tag={RRNavLink} to={link.url} className="text-dark">
          {link.text}
        </NavLink>
    </Col>
  );
};
