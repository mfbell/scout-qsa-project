import React, { FunctionComponent } from 'react';
import { NavLink as RRNavLink } from 'react-router-dom';
import { Nav, NavItem, NavLink } from 'reactstrap';

const ActivityNav: FunctionComponent = () => {
  return (
    <Nav tabs className="mt-4">
      <NavItem>
        <NavLink tag={RRNavLink} to="" activeClassName="active">
          View
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink tag={RRNavLink} to="edit" activeClassName="active">
          Edit
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink tag={RRNavLink} to="history" activeClassName="active">
          History
        </NavLink>
      </NavItem>
    </Nav>
  );
};

export default ActivityNav;
