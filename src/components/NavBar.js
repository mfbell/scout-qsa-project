import React, { Component } from 'react';
import Sidebar from './Sidebar.js';

class NavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-dark bg-dark px-3">
        <a className="navbar-brand" href="/">SABD</a>
        <form className="form-inline">
          <input className="form-control bg-dark text-light" 
            type="search" placeholder="Explorer - Discover - Share" />
        </form>
        <Sidebar />
      </nav>
    );
  }
}

export default NavBar;