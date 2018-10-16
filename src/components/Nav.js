import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class NavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-dark bg-dark px-3">
        <NavLink className="navbar-brand" to="/">SABD</NavLink>
        <form className="form-inline">
          <input className="form-control bg-dark text-light" 
            type="search" placeholder="Explorer - Discover - Share" />
        </form>
        <SideNav />
      </nav>
    );
  }
}

class SideNav extends Component {
  handleClose() {
    document.getElementById("sidenav").style.width = "0";
  }

  handleOpen() {
    document.getElementById("sidenav").style.width = "300px";
  }

  render() {
    return (
      <>
        <span className="text-white" onClick={this.handleOpen}>&#9776;</span>
        <nav class="sidenav" id="sidenav">
          <a href onClick={this.handleClose}>&times;</a>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/servers">Services</NavLink>
          <NavLink to="/clients">Clients</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>
      </>
    );
  }
}

class Footer extends Component {
  render() {
    return (
      <footer className="fluid-container bg-secondary text-light py-4 px-3 px-sm-5">
        <div className="row">
          <div className="col-12 col-sm-8">
            <p className="lead">We believe in making activity planning easy, with our huge catalog of activities you can find the right one for any event, even when the weather turns bad.</p>
          </div>
          <div className="col-12 col-sm-4 order-sm-first">
            <h3>SADB</h3>
            Built by <NavLink to="/about-us" className="text-white align-bottom">Max Bell</NavLink>
          </div>
        </div>
        <div className="row text-center m-4">
          <div className="col-12 col-sm-4 col-md-3 col-lg-2 ml-auto my-2">
            <NavLink to="/about-us" className="text-white">About us</NavLink>
          </div>
          <div className="col-12 col-sm-4 col-md-3 col-lg-2 my-2">
           <NavLink to="/me" className="text-white">My account</NavLink>
          </div>
          <div className="col-12 col-sm-4 col-md-3 col-lg-2 mr-auto my-2">
           <NavLink to="/legal" className="text-white">Legal</NavLink>
          </div>
        </div>
        <div className="row text-center text-white-50">
          <div className="col">&copy; Scout Activity Database</div>
        </div>
      </footer>
    );
  }
}

export { NavBar, SideNav, Footer };