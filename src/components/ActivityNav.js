import React, { Component } from 'react'

class ActivityNav extends Component {
  render() {
    return (
      <ul className="nav nav-tabs mb-3">
        <li className="nav-item">
          <a className="nav-link active" href>View</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="edit">Edit</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="history">History</a>
        </li>
      </ul>
    );
  }
}

export default ActivityNav;