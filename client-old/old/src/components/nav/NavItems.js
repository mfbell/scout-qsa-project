import React from 'react';
import { NavLink as RRNavLink } from 'react-router-dom';
import { NavItem, NavLink } from 'reactstrap';

function GenNavLink(props) {
  return (
    <NavItem>
      <NavLink tag={RRNavLink} to={props.to} className={props.className} activeClassName="active">{props.children}</NavLink>
    </NavItem>
  )
}

function GenNavButton(props) {
  return (
    <NavItem>
      <NavLink href="#" onClick={props.onClick} className={props.className}>{props.children}</NavLink>
    </NavItem>
  )
}

export { GenNavLink, GenNavButton }