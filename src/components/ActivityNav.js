import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class ActivityNav extends Component {
  render() {
    return (
      <ul className="nav nav-tabs mb-3">
        <li className="nav-item">
          <NavLink className="nav-link" to="" activeClassName="activie">View</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="edit" activeClassName="activie">Edit</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="history" activeClassName="activie">History</NavLink>
        </li>
      </ul>
    );
  }
}

export default ActivityNav;