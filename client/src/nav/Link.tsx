import React, { FunctionComponent, MouseEventHandler } from 'react';
import { NavLink as RRNavLink } from 'react-router-dom';
import { NavItem, NavLink } from 'reactstrap';

export interface IClassName {
  className?: string;
}

export interface ILink extends IClassName {
  to: string;
}

export const Link: FunctionComponent<ILink> = ({ to, className, children }) => {
  return (
    <NavItem>
      <NavLink
        tag={RRNavLink}
        to={to}
        className={className}
        activeClassName="active">
          {children}
      </NavLink>
    </NavItem>
  );
};

export interface IButtonLink extends IClassName {
  onClick: MouseEventHandler;
}

export const ButtonLink: FunctionComponent<IButtonLink> = ({ onClick, className, children }) => {
  return (
    <NavItem>
      <NavLink
        href="#"
        onClick={onClick}
        className={className}>
          {children}
      </NavLink>
    </NavItem>
  );
};
